"""
Batch-generate the LaplandStore brand images via OpenAI gpt-image-1.

Kuvia on 2 + OG (oli 27 + OG): 25 keksittyä liike-, kategoria- ja tuotekuvaa
poistettiin 2026-08-13, koska ne maalasivat oikeiden yritysten tunnuksia ja
tekivät havainnollistavia versioita oikeista paikoista. Perustelut ja säännöt
ovat IMAGES-listan sisällä olevassa kommentissa — lue se ennen kuin lisäät
uusia promptteja.

Saves PNG → JPG (Pillow recompress, q=85, progressive) into public/img/.
OG image is also generated landscape and cropped to 1200×630 social spec.

Usage:  python scripts/generate-images.py [--dry-run] [--only NAME]

Env:    OPENAI_API_KEY required.

Brand: cream-Playfair light variant. Editorial daylight + warm-wood +
craftsman aesthetic. NO dark-aurora-night (that's the deep-night variant).
NO people unless an artisan portrait is explicitly requested.
"""

from __future__ import annotations
import argparse, base64, concurrent.futures as cf, json, os, sys, time, urllib.request
from io import BytesIO
from pathlib import Path

try:
    from PIL import Image
except ImportError:
    print("ERROR: Pillow not installed. pip install Pillow", file=sys.stderr)
    sys.exit(2)

# Windowsin konsoli on cp1252: ilman tätä --dry-run kaatuu UnicodeEncodeErroriin
# OG-rivin nuoleen (→). Vanha vika, ei liity prompteihin.
try:
    sys.stdout.reconfigure(encoding="utf-8")
except Exception:
    pass

API_URL = "https://api.openai.com/v1/images/generations"
MODEL = "gpt-image-1"

# Brand-correct visual rule for every image (matches LV image_generation_rule.md):
# 🔴 HUOM: "no text, no logos" EI ESTÄ TEKSTIÄ. Mitattu 13.8.2026: tämä sama
# NEGATIVES oli voimassa kun malli maalasi "Marttiini"-valokirjaimet liikkeen
# näyteikkunaan. Vain sommittelu estää — älä pyydä kylttiä, näyteikkunaa,
# julkisivua tai pakkausta jos et halua kuvaan tekstiä.
NEGATIVES = (
    "no text, no logos, no watermarks, no UI elements, no overlay graphics, "
    "no people, no human faces, no obvious AI artefacts, no oversaturation, "
    "no neon, no Christmas decorations, no Santa, no aurora, no night sky, "
    "no fairytale glow, no stock-photo plastic look"
)
STYLE = (
    "Editorial documentary product photography, soft Arctic daylight or warm "
    "afternoon golden-hour light, low-saturation Nordic palette, warm wood "
    "and linen and birch textures, shallow depth of field, natural shadows. "
    "Composition leaves a small dark area at the bottom for legibility. "
    f"{NEGATIVES}."
)

# (filename, prompt, gpt-image-1 size)
# Sizes supported: 1024x1024, 1024x1536, 1536x1024.
IMAGES: list[tuple[str, str, str]] = [

    # === HERO BACKGROUND ===
    ("hero-market.jpg",
     "Wide editorial photograph of a quiet Lapland artisan market storefront at "
     "dusk: warm wooden cabin facade, golden lantern light spilling onto fresh "
     "snow, hand-carved wooden tools and small silver pieces resting on a worn "
     "timber counter, single birch tree softly out of focus on the right. "
     "Cinematic, muted greens and amber gold. " + STYLE,
     "1536x1024"),

    # === ARTISAN STORY (wide background) ===
    ("artisan-hands.jpg",
     "Close-up editorial photograph of weathered hands carving a curly-birch "
     "puukko knife handle in a workshop above the Arctic Circle. Sawdust catching "
     "warm window light, antique tools blurred behind, rich umber and deep "
     "forest tones. Documentary photography style, shallow depth of field, "
     "no face visible. " + STYLE,
     "1536x1024"),

    # === POISTETTU 2026-08-13: 25 keksittyä liike-/kategoria-/tuotekuvaa ===
    # Nämä 25 promptia (6 × cat-, 4 × prod-, 15 × shop-) on POISTETTU, ja niiden
    # tuottamat tiedostot poistettiin public/img/:stä (commit efba68d). Älä palauta.
    #
    # Syy: ne rikkoivat lv_permanent_rules §6.5:tä kahdella tavalla.
    #   1) OIKEAN BRÄNDIN TUNNUSTA EI MAALATA. "Marttiini-style factory shop
    #      facade ... illuminated brand window display" tuotti kuvan jossa
    #      näyteikkunassa luki valokirjaimin Marttiini — oikean yrityksen tunnus
    #      liikkeessä jota ei ole olemassa. Sama vika kuin laplandworkin
    #      tekaistussa R-Kioski-logossa. Huomaa: NEGATIVES sisälsi jo "no text,
    #      no logos" eikä se estänyt mitään — negatiiviprompti ei estä tekstiä,
    #      vain sommittelu estää. Älä jätä kuvaan painettavaa pintaa (kylttiä,
    #      näyteikkunaa, pakkausta) jos et halua siihen tekstiä.
    #   2) OIKEASTA PAIKASTA EI TEHDÄ HAVAINNOLLISTAVAA VERSIOTA. "Sámi Museum
    #      gift shop" (Siida, oikea museo Inarissa), "Sajos-style", "Historic
    #      Kauppayhtiö-style", "Pentik-style shop window" — tunnistettava oikea
    #      paikka tai liike joko kuvataan oikeasti tai jätetään tunnistamattomaksi.
    #
    # Kuvat eivät myöskään olleet käytössä: niille tarkoitettuja komponentteja
    # (Categories.tsx, FeaturedProducts.tsx) ei koskaan rakennettu, ja
    # LocalShops.tsx on puhdas tekstilistaus. Ne olivat silti julkisesti
    # haettavissa osoitteesta laplandstore.fi/img/*.jpg.
    #
    # Jos putiikeille joskus halutaan kuvat: kumppanin oma kuva (ks.
    # affiliate_tuotekuvat_kumppanilta) tai geneerinen, tunnistamaton
    # tunnelmakuva ilman kylttejä ja ilman nimettyä liikettä.
]

# OG image is generated landscape then cropped to the social-spec 1200×630.
OG_IMAGE = (
    "og-image.jpg",
    "Wide branded card layout for social sharing: Lapland artisan goods — a "
    "puukko knife, a Sámi silver brooch, a small jar of cloudberry preserve — "
    "arranged on weathered birch with deep blue twilight sky and faint birch "
    "trunks at the top. Centred open space at the bottom for a headline "
    "overlay. Editorial composition. " + STYLE,
    "1536x1024",
)


def request_image(api_key: str, prompt: str, size: str) -> bytes:
    body = json.dumps({
        "model": MODEL,
        "prompt": prompt,
        "n": 1,
        "size": size,
        "quality": "high",
    }).encode("utf-8")
    req = urllib.request.Request(
        API_URL,
        data=body,
        headers={
            "Authorization": f"Bearer {api_key}",
            "Content-Type": "application/json",
        },
        method="POST",
    )
    with urllib.request.urlopen(req, timeout=300) as resp:
        payload = json.loads(resp.read())
    b64 = payload["data"][0]["b64_json"]
    return base64.b64decode(b64)


def save_jpeg(png_bytes: bytes, out_path: Path, *, max_quality: int = 85) -> None:
    img = Image.open(BytesIO(png_bytes)).convert("RGB")
    out_path.parent.mkdir(parents=True, exist_ok=True)
    img.save(out_path, "JPEG", quality=max_quality, optimize=True, progressive=True)


def save_og(png_bytes: bytes, out_dir: Path, name: str) -> None:
    img = Image.open(BytesIO(png_bytes)).convert("RGB")
    target_w, target_h = 1200, 630
    iw, ih = img.size
    scale = max(target_w / iw, target_h / ih)
    new = img.resize((int(iw * scale), int(ih * scale)), Image.LANCZOS)
    nw, nh = new.size
    left = (nw - target_w) // 2
    top = (nh - target_h) // 2
    cropped = new.crop((left, top, left + target_w, top + target_h))
    out_dir.mkdir(parents=True, exist_ok=True)
    cropped.save(out_dir / name, "JPEG", quality=85, optimize=True, progressive=True)


def generate_one(api_key: str, name: str, prompt: str, size: str, out_dir: Path) -> tuple[str, bool, str]:
    out_path = out_dir / name
    started = time.time()
    try:
        png_bytes = request_image(api_key, prompt, size)
        save_jpeg(png_bytes, out_path)
        size_kb = out_path.stat().st_size // 1024
        return name, True, f"{size_kb} kB in {time.time()-started:.1f} s"
    except Exception as e:
        return name, False, f"{type(e).__name__}: {e}"


def main() -> int:
    ap = argparse.ArgumentParser()
    ap.add_argument("--dry-run", action="store_true", help="Print prompts without calling API")
    ap.add_argument("--only", help="Generate only this filename (e.g. hero-market.jpg)")
    ap.add_argument("--out", default=None, help="Output dir; defaults to ../public/img")
    ap.add_argument("--workers", type=int, default=4, help="Parallel workers (default 4)")
    args = ap.parse_args()

    repo_root = Path(__file__).resolve().parent.parent
    out_dir = Path(args.out) if args.out else repo_root / "public" / "img"
    public_root = repo_root / "public"

    api_key = os.environ.get("OPENAI_API_KEY")
    if not api_key and not args.dry_run:
        print("ERROR: OPENAI_API_KEY not set", file=sys.stderr)
        return 2

    plan = [(n, p, s) for n, p, s in IMAGES if not args.only or args.only == n]

    if args.dry_run:
        for name, prompt, size in plan:
            print(f"\n— {name} ({size}) —\n{prompt}")
        if not args.only or args.only == OG_IMAGE[0]:
            print(f"\n— {OG_IMAGE[0]} ({OG_IMAGE[2]}) [→ {OG_IMAGE[0]} 1200×630] —\n{OG_IMAGE[1]}")
        return 0

    out_dir.mkdir(parents=True, exist_ok=True)
    public_root.mkdir(parents=True, exist_ok=True)

    print(f"Generating {len(plan)} images via {MODEL} → {out_dir}\n")
    failed: list[str] = []
    with cf.ThreadPoolExecutor(max_workers=args.workers) as pool:
        futures = {pool.submit(generate_one, api_key, n, p, s, out_dir): n for n, p, s in plan}
        for fut in cf.as_completed(futures):
            name, ok, msg = fut.result()
            print(f"  {'✓' if ok else '✗'}  {name:30s}  {msg}")
            if not ok:
                failed.append(name)

    # OG image (cropped to 1200x630 into public/og-image.jpg)
    if not args.only or args.only == OG_IMAGE[0]:
        try:
            print(f"\nGenerating OG image (1200×630 social spec)…")
            png = request_image(api_key, OG_IMAGE[1], OG_IMAGE[2])
            save_og(png, public_root, OG_IMAGE[0])
            sz = (public_root / OG_IMAGE[0]).stat().st_size // 1024
            print(f"  ✓  {OG_IMAGE[0]:30s}  {sz} kB")
        except Exception as e:
            print(f"  ✗  {OG_IMAGE[0]:30s}  {type(e).__name__}: {e}")
            failed.append(OG_IMAGE[0])

    if failed:
        print(f"\nFAILED: {', '.join(failed)}")
        return 1
    print("\nAll generated.")
    return 0


if __name__ == "__main__":
    sys.exit(main())
