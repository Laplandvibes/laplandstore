// Auto-split per-locale copy chunk.
import type { CopyShape } from './LocalShops.copy.en';

const copy: CopyShape = {
  eyebrow: 'Paikalliset yrittäjät',
  heading: 'Lapin putiikit',
  sub: (n: number) =>
    `${n} käsin valittua lappilaista kauppaa ja putiikkia. Koko hakemisto kuvauksineen on LaplandGiftsissä.`,
  onlineHeading: 'Toimittavat kotiin',
  physicalHeading: 'Käy paikan päällä',
  physicalSub: 'Näihin mennään paikan päälle. Ne eivät toimita kotiin.',
  directoryCta: 'Katso koko putiikkihakemisto',
  onlineBadge: 'VERKKOKAUPPA',
  physicalBadge: 'KIVIJALKA',
  ctaHeading: 'Omistatko lappilaisen kaupan tai verkkokaupan?',
  ctaBody: 'Listaus LaplandStore.fi-sivustolla on ilmainen kaikille lappilaisille yrittäjille.',
  ctaButton: 'Ota yhteyttä →',
  ctaSubject: 'LaplandStore.fi yhteistyö',
};

export default copy;
