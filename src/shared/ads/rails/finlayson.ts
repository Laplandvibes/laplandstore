import { Home } from 'lucide-react'
import type { RailPartner } from '../ProductRail'

// Finlayson — Adtraction. Copy follows the COPY RULES in ProductRail.tsx:
// one-clause headline, one-sentence sub, and nothing claimed that the feed
// or the advertiser's own page does not support. Finnish and English only —
// the rail renders nothing in a locale it has no copy for, which is the
// honest outcome for a Finland-market shop.
const finlayson: RailPartner = {
  key: 'finlayson',
  categoryUrl: "https://www.finlayson.fi/",
  accent: '#1E4C8A',
  accentDark: '#8FB6E6',
  icon: Home,
  copy: {
    fi: {
      eyebrow: "Finlayson",
      headline: "Suomalaista tekstiiliä vuodesta 1820",
      sub: "Palttina-liinavaatteita, kylpypyyhkeitä ja Reino-tossuja.",
      from: 'alk.',
      ctaAll: "Katso koko valikoima",
      note: "Hinnat tarkistettu {date}. Ajantasainen hinta ja koot näkyvät Finlaysonin sivulla.",
    },
    en: {
      eyebrow: "Finlayson",
      headline: "Finnish textiles since 1820",
      sub: "Bed linen, bath towels and the Reino felt slippers.",
      from: 'from',
      ctaAll: "See the full range",
      note: "Prices checked {date}. Current price and sizes are shown on Finlayson’s own page.",
    },
  },
}

export default finlayson
