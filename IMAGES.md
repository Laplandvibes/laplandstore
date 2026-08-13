# LaplandStore.fi — Image Generation

> ## 🔴 Päivitys 2026-08-13 — lue tämä ennen alla olevaa
>
> Alla oleva teksti kuvaa **28 kuvan** suunnitelmaa jota ei koskaan toteutettu.
> Todellisuus nyt:
>
> - **Käytössä on 2 kuvaa** — `hero-market.jpg` (Hero.tsx) ja
>   `artisan-hands.jpg` (ArtisanStory.tsx) — plus `og-image.jpg`. Molemmat
>   renderöityvät `GradientPlaceholder`in kautta ja niissä on EU:n
>   tekoälyasetuksen art. 50 mukainen merkintä (`AiDisclosure.tsx`).
> - **25 muuta kuvaa on POISTETTU** (commit `efba68d`, deploy `9a892438`) ja
>   niiden promptit poistettiin `scripts/generate-images.py`:stä. Ne maalasivat
>   oikeiden yritysten tunnuksia (`shop-marttiini.jpg`: "Marttiini"
>   näyteikkunassa) ja tekivät havainnollistavia versioita oikeista paikoista
>   (Siida, Sajos). Perustelut skriptin IMAGES-listan kommentissa. **Älä palauta.**
> - **`Categories.tsx` ja `FeaturedProducts.tsx` eivät ole olemassa.** Alla oleva
>   "Code wiring" -taulukko viittaa niihin — se on suunnitelma, ei koodikartta.
>   `LocalShops.tsx` on puhdas tekstilistaus ilman kuvia.
> - Putiikkihakemisto siirtyi 7.8. laplandgiftsiin; store on ohut FI-portti.
>   Uusia putiikkikuvia ei siis tarvita — ja jos joskus tarvitaan, ne otetaan
>   kumppanilta, ei generoida.


> **Pipeline:** OpenAI `gpt-image-1` via `scripts/generate-images.py`. Same pattern
> as `laplandfood-new`, `stayinlapland-new`, blog heroes. **Do not** use HeyGen,
> Make scenarios, Canva, fal.ai, Imagen, or Drive search-and-reuse on first
> generation. The OpenAI route is the canonical LV image pipeline — see
> `memory/_projects/laplandvibes/_procedural/image_generation_rule.md`.

## Quick start

```powershell
cd laplandstore-new

# 1. Verify env (you should see "SET")
if ($env:OPENAI_API_KEY) { "SET" } else { "MISSING" }

# 2. Dry-run — prints all 28 prompts without spending credits
python scripts/generate-images.py --dry-run

# 3. Generate one image to validate brand fit (~$0.10–0.25)
python scripts/generate-images.py --only hero-market.jpg

# 4. Generate everything (~3–5 min, 4 parallel workers, ~$2–4 total at quality=high)
python scripts/generate-images.py
```

Outputs land in `public/img/<slug>.jpg` (and `public/og-image.jpg` for the
1200×630 social card, cropped from a 1536×1024 source).

## Pipeline summary

```
OpenAI gpt-image-1 (only sizes: 1024×1024, 1024×1536, 1536×1024)
        ↓ request quality="high" — required for editorial brand work
Pillow:
  - convert RGB
  - re-encode JPEG q=85, optimize, progressive
  - OG image cropped to 1200×630 from 1536×1024
        ↓
laplandstore-new/public/img/{slug}.jpg
```

Each `gpt-image-1` call takes 20–40 s. Quality=high is non-negotiable —
medium produces visible AI artefacts on snow textures.

## Brand prompt structure (this site's variant)

LaplandStore is **cream-Playfair light variant** (like laplandstays /
stayinlapland). Every prompt in `scripts/generate-images.py` therefore enforces:

- **Subject** — one craft, one ingredient, one storefront. Not "everything everywhere".
- **Light** — soft Arctic daylight or warm afternoon golden-hour. **NOT** dark-aurora-night.
- **Style block** — editorial documentary product photography, low-saturation Nordic palette, warm wood + linen + birch textures, shallow DoF.
- **Negatives block** — no text, no logos, no people, no human faces, no aurora, no night sky, no Christmas decorations, no Santa, no neon, no oversaturation, no AI artefacts, no stock-photo plastic look.

(The negatives are stricter than `laplandfood`'s because store imagery is
products-on-surfaces — a stray AI face or aurora glow breaks the editorial trust
instantly.)

## Code wiring (after images land)

The site currently renders brand-aligned `<GradientPlaceholder theme="…">` from
`src/components/GradientPlaceholder.tsx`. Once images are generated, replace
each placeholder with `<img>` referencing the slug below:

| Component | Slot → Slug |
|---|---|
| [Hero.tsx](src/components/Hero.tsx) | background → `/img/hero-market.jpg` |
| [ArtisanStory.tsx](src/components/ArtisanStory.tsx) | background → `/img/artisan-hands.jpg` |
| [Categories.tsx](src/components/Categories.tsx) (6) | knives → `/img/cat-knives.jpg`<br>silver → `/img/cat-silver.jpg`<br>berries → `/img/cat-berries.jpg`<br>wool → `/img/cat-wool.jpg`<br>design → `/img/cat-design.jpg`<br>souvenirs → `/img/cat-souvenirs.jpg` |
| [FeaturedProducts.tsx](src/components/FeaturedProducts.tsx) (4) | Marttiini → `/img/prod-marttiini.jpg`<br>Samekki → `/img/prod-samekki.jpg`<br>Pentik → `/img/prod-pentik.jpg`<br>Berries → `/img/prod-berries.jpg` |
| [LocalShops.tsx](src/components/LocalShops.tsx) (16) | one `/img/shop-<slug>.jpg` per shop — see `IMAGES` array in `scripts/generate-images.py` for the full mapping |
| [index.html](index.html) | OG / Twitter → `/og-image.jpg` |

Suggested `<img>` swap pattern (preserves the dark gradient overlay so text
remains legible):

```tsx
<img
  src="/img/hero-market.jpg"
  alt="…"
  loading="eager"
  className="absolute inset-0 w-full h-full object-cover"
/>
<div className="absolute inset-0 bg-gradient-to-b from-night/50 via-night/30 to-night/80" />
```

For non-hero slots use `loading="lazy"`.

After all 28 images are wired in, **delete `GradientPlaceholder.tsx` and the
`theme` field on every shop** — they will be unused.

## Failure modes (from `image_generation_rule.md`)

- ❌ **Aurora / night sky** despite negatives → re-run with explicit `daylight 13:00` or `golden hour 15:30 winter` and stronger negatives. Cream-Playfair sites should never ship dark-aurora imagery.
- ❌ **Uncanny human face** in a product shot → already in negatives. If it still happens, re-run.
- ❌ **Christmas decorations** in non-Christmas slots → already in negatives. Re-run.
- ❌ **AI artefacts in snow** (impossible patterns, doubled moons) → 1-in-5 hit-rate. Re-run, generate 2–3 candidates per critical slot, keep the cleanest.
- ❌ **Lego-airbus aerial scale** — n/a here, no aerials.
- ❌ **Dark-night unwanted** → bias prompts toward "warm afternoon" or "soft north-window light".

## Sister-site uniqueness

Every LV image must be unique across the network. Before publishing, check
sibling sites:
- `../laplandgifts-new/public/`
- `../laplandchristmas/public/`
- `../laplandstays-new/public/images/`
- `../laplandfood-new/public/images/`

If gpt-image-1 produced something visually too close to a sister site, re-run
with a different subject angle.

## Memory updates after a run

When the batch lands and is wired up:

1. Add a short entry to `command-center-sites/laplandstore.html` "Recent changes" — *"AI imagery batch shipped — N images replaced placeholders, prompts in `scripts/generate-images.py`."*
2. If a new prompt rule emerged for the **store** brand (e.g. "always include a wooden cutting board"), add it to `image_generation_rule.md` under per-site visual palette.
3. Note any reused images explicitly in `project_lv_laplandstore.md` so the next agent knows they're not bespoke.
