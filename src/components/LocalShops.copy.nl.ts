// Auto-split per-locale copy chunk.
import type { CopyShape } from './LocalShops.copy.en';

const copy: CopyShape = {
  eyebrow: 'Lokale ondernemers',
  heading: 'Lapland-boutiques',
  sub: (n: number) =>
    `${n} met de hand geselecteerde Laplandse winkels en boutiques. Koop rechtstreeks bij lokale makers — elke link gaat naar de eigen site van de onderneming.`,
  onlineHeading: 'Online winkels — direct thuisbezorgd',
  physicalHeading: 'In persoon bezoeken',
  physicalSub: 'Elke boutique heeft een fysieke winkel in Lapland.',
  onlineBadge: 'ONLINE',
  physicalBadge: 'IN DE WINKEL',
  ctaHeading: 'Heeft u een winkel of online winkel in Lapland?',
  ctaBody: 'Vermelding op LaplandStore.fi is gratis voor alle Lapland-ondernemers.',
  ctaButton: 'Neem contact op →',
  ctaSubject: 'LaplandStore.fi-samenwerking',
};

export default copy;
