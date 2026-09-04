import { Shirt } from 'lucide-react'
import type { RailPartner } from '../ProductRail'

// Nanso — Adtraction. Copy follows the COPY RULES in ProductRail.tsx:
// one-clause headline, one-sentence sub, and nothing claimed that the feed
// or the advertiser's own page does not support. Finnish and English only —
// the rail renders nothing in a locale it has no copy for, which is the
// honest outcome for a Finland-market shop.
const nanso: RailPartner = {
  key: 'nanso',
  categoryUrl: "https://nanso.com/",
  accent: '#6B4E7A',
  accentDark: '#C4A8D4',
  icon: Shirt,
  copy: {
    fi: {
      eyebrow: "Nanso",
      headline: "Kotimaista neulosta vuodesta 1921",
      sub: "Yöpaitoja, tunikoita ja trikoopuseroita.",
      from: 'alk.',
      ctaAll: "Katso koko valikoima",
      note: "Hinnat tarkistettu {date}. Ajantasainen hinta ja koot näkyvät Nansoin sivulla.",
    },
    en: {
      eyebrow: "Nanso",
      headline: "Finnish jersey since 1921",
      sub: "Nightdresses, tunics and jersey tops.",
      from: 'from',
      ctaAll: "See the full range",
      note: "Prices checked {date}. Current price and sizes are shown on Nanso’s own page.",
    },
  },
}

export default nanso
