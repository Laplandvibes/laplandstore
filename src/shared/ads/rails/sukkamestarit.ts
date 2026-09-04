import { Footprints } from 'lucide-react'
import type { RailPartner } from '../ProductRail'

// Sukkamestarit — Adtraction. Copy follows the COPY RULES in ProductRail.tsx:
// one-clause headline, one-sentence sub, and nothing claimed that the feed
// or the advertiser's own page does not support. Finnish and English only —
// the rail renders nothing in a locale it has no copy for, which is the
// honest outcome for a Finland-market shop.
const sukkamestarit: RailPartner = {
  key: 'sukkamestarit',
  categoryUrl: "https://sukkamestarit.com/",
  accent: '#8A5A1E',
  accentDark: '#D9B478',
  icon: Footprints,
  copy: {
    fi: {
      eyebrow: "Sukkamestarit",
      headline: "Suomalaisia sukkia vuodesta 1996",
      sub: "Merinovillaa ja bambuviskoosia, 15–17 euroa pari.",
      from: 'alk.',
      ctaAll: "Katso koko valikoima",
      note: "Hinnat tarkistettu {date}. Ajantasainen hinta ja koot näkyvät Sukkamestaritin sivulla.",
    },
    en: {
      eyebrow: "Sukkamestarit",
      headline: "Finnish socks since 1996",
      sub: "Merino wool and bamboo viscose, 15–17 euros a pair.",
      from: 'from',
      ctaAll: "See the full range",
      note: "Prices checked {date}. Current price and sizes are shown on Sukkamestarit’s own page.",
    },
  },
}

export default sukkamestarit
