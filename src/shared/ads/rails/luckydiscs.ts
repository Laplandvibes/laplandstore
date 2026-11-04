import { Disc3 } from 'lucide-react'
import type { RailPartner } from '../ProductRail'

// Lucky Discs, Nokia — suora kumppani (go.laplandvibes.com/go/luckydiscs, ei
// verkostoa eikä provisiota; klikki kirjautuu D1:een kuten Keloalla). Vesa
// 4.11.2026: "laplandstore.fi voisiko sinne laittaa luckydiscin mainoksen
// kiekoista? kuitenkin suomessa valmistettu".
//
// Otsikko lähtee laplandstoren lukijan tilanteesta (suomalaista tehtyä,
// lahjaksi), ei tuotteesta. "Valmistettu Nokialla" on Lucky Discsin oma väite
// (etusivu + Vesa 4.11.); jos se muuttuu, muuta tämä samalla.
// Vain fi + en: Lucky Discsin kauppa on olemassa vain näillä kielillä, ja rivi
// ei renderöidy kielellä, jolle sillä ei ole tekstiä.
const luckydiscs: RailPartner = {
  key: 'luckydiscs',
  categoryUrl: { fi: 'https://www.luckydiscs.fi/shop', en: 'https://www.luckydiscs.fi/shop' },
  localNameLang: 'fi',
  accent: '#1E8549',
  accentDark: '#3AF500',
  icon: Disc3,
  copy: {
    fi: {
      eyebrow: 'Lucky Discs',
      headline: 'Lahja frisbeegolfaajalle, tehty Nokialla',
      sub: 'Villin lännen kuvitetut kiekot ja seitsemän kiekon aloituspakkaus.',
      from: '',
      ctaAll: 'Katso kaikki kiekot',
      note: 'Hinnat tarkistettu {date}. Ajantasainen hinta ja värit näkyvät Lucky Discsin sivulla.',
    },
    en: {
      eyebrow: 'Lucky Discs',
      headline: 'A gift for a disc golfer, made in Finland',
      sub: 'Discs with Wild West artwork, plus a seven-disc starter pack.',
      from: '',
      ctaAll: 'See all discs',
      note: 'Prices checked {date}. Current prices and colours are shown on the Lucky Discs site.',
    },
  },
}

export default luckydiscs
