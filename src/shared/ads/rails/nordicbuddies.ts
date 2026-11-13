import { Sparkles } from 'lucide-react'
import type { RailPartner } from '../ProductRail'

// Nordicbuddies — Daisycon, 7 % / 30 pv. Helsinki brand selling character goods:
// Moomin, Pippi Longstocking and Mauri Kunnas.
//
// 🔴 The headline names the characters the rail actually shows (23.10.2026). It said
// "Virallisia Peppi- ja Kunnas-tuotteita" while the snapshot was 7 Moomin products of 8,
// a promise the products broke. Moomin is allowed in rails by Vesa's decision of
// 23.10.2026 (_affiliate/creatives.json moomin_decision_2026_10_23). "Virallisia" /
// "officially licensed" was dropped with it: the Kunnas licence is read from the shop's
// own site (24.8.), a Moomin licence is not on record, and the headline may not claim
// for three what is shown for one.
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
      headline: "Muumi-, Peppi- ja Kunnas-tuotteita",
      sub: "Julisteita, kasseja, lippiksiä ja paitoja pohjoismaisten tarinoiden hahmoilla.",
      from: 'alk.',
      ctaAll: "Katso koko valikoima",
      note: "Hinnat tarkistettu {date}. Ajantasainen hinta ja koot näkyvät Nordicbuddiesin sivulla.",
    },
    en: {
      eyebrow: "Nordicbuddies",
      headline: "Moomin, Pippi and Kunnas goods",
      sub: "Posters, tote bags, caps and T-shirts with characters from Nordic stories.",
      from: 'from',
      ctaAll: "See the full range",
      note: "Prices checked {date}. Current price and sizes are shown on Nordicbuddies’ own page.",
    },
    ja: {
      eyebrow: "Nordicbuddies",
      headline: "ムーミン、ピッピ、マウリ・クンナスのグッズ",
      sub: "北欧の物語でおなじみのキャラクターのポスター、トートバッグ、帽子、Tシャツ。",
      from: '〜',
      fromAfter: true,
      ctaAll: "品揃えをすべて見る",
      note: "価格は{date}時点のものです。最新の価格とサイズは Nordicbuddies のページでご確認ください。",
    },
  },
}

export default nordicbuddies
