// GENEROITU TIEDOSTO — älä muokkaa käsin.
// Lähde: Adtraction-tuotesyöte, Kulta-Center FI (ohjelma 1498456311).
// Päivitä: node scripts/sync_kalevala_feed.mjs --refresh
// Hinnat ovat 2026-09-03 hintoja ja ne renderöidään tarkistuspäivän kanssa.

export interface KalevalaPick {
  sku: string
  name: string
  shelf: string
  category: string
  price: number
  currency: string
  urls: Record<string, string>
  image: string
}

export interface KalevalaSnapshot {
  _comment: string
  advertiser: string
  programme: { network: string; programId: number; commission: string; cookieDays: number }
  route: string
  fetchedAt: string
  products: KalevalaPick[]
}

const picks: KalevalaSnapshot = {
  "_comment": "GENEROITU — älä muokkaa käsin. Aja: node scripts/sync_kalevala_feed.mjs --refresh. Hinnat ovat fetchedAt-hetken hintoja ja ne renderöidään tarkistuspäivän kanssa.",
  "advertiser": "Kulta-Center",
  "programme": {
    "network": "adtraction",
    "programId": 1498456311,
    "commission": "8.5%",
    "cookieDays": 21
  },
  "route": "/go/kultacenter",
  "fetchedAt": "2026-09-03",
  "products": [
    {
      "sku": "3670310RT",
      "name": "Kalevala Amuletti korvarenkaat",
      "shelf": "earrings",
      "category": "Pronssikorvakorut",
      "price": 41,
      "currency": "EUR",
      "urls": {
        "fi": "https://www.kulta-center.com/fi/3670310rt",
        "sv": "https://www.kulta-center.com/se/kalevala-amulet-orhangen-3670310rt",
        "de": "https://www.kulta-center.com/de/kalevala-amuletti-ohrringe-3670310rt"
      },
      "image": "/images/partners/kalevala/3670310RT.webp"
    },
    {
      "sku": "28703162",
      "name": "Kalevala Amuletti-hela Neliapila hopea",
      "shelf": "pendant",
      "category": "Valmistujaislahjat ja ylioppilaslahjat",
      "price": 41,
      "currency": "EUR",
      "urls": {
        "fi": "https://www.kulta-center.com/fi/kalevala-amuletti-hela-neliapila-hopea-28703162",
        "sv": "https://www.kulta-center.com/se/kalevala-amuletti-neliapila-berlock-i-silver-28703162"
      },
      "image": "/images/partners/kalevala/28703162.webp"
    },
    {
      "sku": "361001102",
      "name": "Kalevala Männyt Ear Cuff",
      "shelf": "other",
      "category": "Earcuff korvakorut",
      "price": 48,
      "currency": "EUR",
      "urls": {
        "fi": "https://www.kulta-center.com/fi/kalevala-mannyt-ear-cuff-361001102",
        "sv": "https://www.kulta-center.com/se/kalevala-mannyt-ear-cuff-361001102",
        "en": "https://www.kulta-center.com/en/361001102"
      },
      "image": "/images/partners/kalevala/361001102.webp"
    },
    {
      "sku": "3210951",
      "name": "Kalevala Euran sydän -kaulakoru (pieni)",
      "shelf": "necklace",
      "category": "Kalevala kaulakorut",
      "price": 56,
      "currency": "EUR",
      "urls": {
        "fi": "https://www.kulta-center.com/fi/kalevala-euran-sydan-kaulakoru-pieni-3210951",
        "sv": "https://www.kulta-center.com/se/kalevala-eura-heart-halsband-liten-3210951",
        "en": "https://www.kulta-center.com/en/kalevala-euran-heart-necklace-small-3210951",
        "de": "https://www.kulta-center.com/de/kalevala-euran-herz-halskette-klein-3210951"
      },
      "image": "/images/partners/kalevala/3210951.webp"
    },
    {
      "sku": "3569112200",
      "name": "Kalevala Elämän roihu rannekoru 20 cm, pronssi",
      "shelf": "bracelet",
      "category": "Pronssirannekorut",
      "price": 67,
      "currency": "EUR",
      "urls": {
        "fi": "https://www.kulta-center.com/fi/kalevala-elaman-roihu-rannekoru-20-cm-pronssi-3569112200",
        "sv": "https://www.kulta-center.com/se/kalevala-live-hard-live-your-dream-brons-20-cm-3569112200",
        "en": "https://www.kulta-center.com/en/kalevala-live-hard-live-your-dream-bracelet-20-cm-bronze-3569112200",
        "de": "https://www.kulta-center.com/de/kalevala-live-hard-live-your-dream-armband-20-cm-bronze-3569112200"
      },
      "image": "/images/partners/kalevala/3569112200.webp"
    },
    {
      "sku": "2401200160",
      "name": "Kalevala Käärme sormus hopea",
      "shelf": "ring",
      "category": "Hopeasormukset",
      "price": 90,
      "currency": "EUR",
      "urls": {
        "fi": "https://www.kulta-center.com/fi/kalevala-kaarme-sormus-hopea-2401200",
        "sv": "https://www.kulta-center.com/se/kalevala-kaarme-ring-2401200",
        "en": "https://www.kulta-center.com/en/kalevala-kaarme-ring-2401200",
        "de": "https://www.kulta-center.com/de/kalevala-kaarme-sormus-hopea-2401200"
      },
      "image": "/images/partners/kalevala/2401200160.webp"
    },
    {
      "sku": "261001400T",
      "name": "Kalevala Itu korvakorut rengas hopea kullattu",
      "shelf": "other",
      "category": "Hopeakorvakorut",
      "price": 112,
      "currency": "EUR",
      "urls": {
        "fi": "https://www.kulta-center.com/fi/kalevala-itu-korvakorut-rengas-hopea-kullattu-261001400t",
        "sv": "https://www.kulta-center.com/se/kalevala-itu-orhangen-261001400t",
        "en": "https://www.kulta-center.com/en/kalevala-itu-earrings-261001400t"
      },
      "image": "/images/partners/kalevala/261001400T.webp"
    },
    {
      "sku": "2167670TO",
      "name": "Kalevala Naisen ääni -rintakoru TOPAASI",
      "shelf": "brooch",
      "category": "Hopearintaneulat",
      "price": 240,
      "currency": "EUR",
      "urls": {
        "fi": "https://www.kulta-center.com/fi/kalevala-naisen-aani-rintakoru-topaasi-2167670to",
        "sv": "https://www.kulta-center.com/se/kalevala-dream-broscher-topas-2167670to",
        "en": "https://www.kulta-center.com/en/kalevala-dream-brooch-topaz-2167670to",
        "de": "https://www.kulta-center.com/de/kalevala-naisen-aani-brosche-topas-2167670to"
      },
      "image": "/images/partners/kalevala/2167670TO.webp"
    }
  ]
}

export default picks
