// Auto-split per-locale copy chunk.
import type { CopyShape } from './LocalShops.copy.en';

const copy: CopyShape = {
  eyebrow: 'Paikalliset yrittäjät',
  heading: 'Lapin putiikit',
  sub: (n: number) =>
    `${n} käsin valittua lappilaista kauppaa ja putiikkia. Ostat suoraan tekijältä, ja jokainen linkki vie yrityksen omille sivuille.`,
  onlineHeading: 'Verkkokaupat, tilaa suoraan kotiin',
  physicalHeading: 'Vieraile paikan päällä',
  physicalSub: 'Kaikilla putiikeilla on kivijalkamyymälä Lapissa.',
  onlineBadge: 'VERKKOKAUPPA',
  physicalBadge: 'KIVIJALKA',
  ctaHeading: 'Omistatko lappilaisen kaupan tai verkkokaupan?',
  ctaBody: 'Listaus LaplandStore.fi-sivustolla on ilmainen kaikille lappilaisille yrittäjille.',
  ctaButton: 'Ota yhteyttä →',
  ctaSubject: 'LaplandStore.fi yhteistyö',
};

export default copy;
