// Auto-split per-locale copy chunk.
import type { CopyShape } from './LocalShops.copy.en';

const copy: CopyShape = {
  eyebrow: 'Lokale ondernemers',
  heading: 'Lapland-boutiques',
  sub: (n: number) =>
    `${n} met de hand gekozen winkels en boetieks in Lapland. De volledige gids, met beschrijvingen, staat op LaplandGifts.`,
  onlineHeading: 'Verzenden naar u',
  physicalHeading: 'Ter plaatse bezoeken',
  physicalSub: 'Deze bezoekt u ter plaatse. Ze verzenden niet.',
  directoryCta: 'Bekijk de volledige boetiekgids',
  onlineBadge: 'ONLINE',
  physicalBadge: 'IN DE WINKEL',
  ctaHeading: 'Heeft u een winkel of online winkel in Lapland?',
  ctaBody: 'Vermelding op LaplandStore.fi is gratis voor alle Lapland-ondernemers.',
  ctaButton: 'Neem contact op →',
  ctaSubject: 'LaplandStore.fi-samenwerking',
};

export default copy;
