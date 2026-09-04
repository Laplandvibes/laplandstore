import { Sparkles } from 'lucide-react'
import type { RailPartner } from '../ProductRail'

// Nordicbuddies — Daisycon, 7 % / 30 pv. Helsinki brand selling officially
// licensed character goods (Pippi Longstocking, Mauri Kunnas). The licence is
// the whole proposition, so it is the headline — and it is theirs to claim, not
// a marketing adjective of ours.
//
// 🔴 Daisycon approves per media. The Worker routes by originating domain and
// falls back to an untracked UTM redirect for an unapproved site, so the link
// still works for the reader even where we would not earn — never hardcode a
// media id here.
const nordicbuddies: RailPartner = {
  key: 'nordicbuddies',
  categoryUrl: "https://nordicbuddies.com/",
  accent: '#6B4FA8',
  accentDark: '#B9A3E0',
  icon: Sparkles,
  copy: {
    fi: {
      eyebrow: "Nordicbuddies",
      headline: "Virallisia Peppi- ja Kunnas-tuotteita",
      sub: "Kangaskasseja, pipoja ja lastenvaatteita lisensoiduilla hahmoilla.",
      from: 'alk.',
      ctaAll: "Katso koko valikoima",
      note: "Hinnat tarkistettu {date}. Ajantasainen hinta ja koot näkyvät Nordicbuddiesin sivulla.",
    },
    en: {
      eyebrow: "Nordicbuddies",
      headline: "Officially licensed Pippi and Kunnas",
      sub: "Tote bags, beanies and kids’ clothes with licensed characters.",
      from: 'from',
      ctaAll: "See the full range",
      note: "Prices checked {date}. Current price and sizes are shown on Nordicbuddies’ own page.",
    },
  },
}

export default nordicbuddies
