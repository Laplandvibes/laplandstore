// Auto-split per-locale copy chunk.
import type { CopyShape } from './LocalShops.copy.en';

const copy: CopyShape = {
  eyebrow: 'Lokala företagare',
  heading: 'Butiker i Lappland',
  sub: (n: number) =>
    `${n} handplockade butiker och boutiquer i Lappland. Du köper direkt av tillverkaren, och varje länk går till företagets egen webbplats.`,
  onlineHeading: 'Webbutiker, levererat hem till dörren',
  physicalHeading: 'Besök på plats',
  physicalSub: 'Varje butik har en fysisk butik i Lappland.',
  onlineBadge: 'ONLINE',
  physicalBadge: 'I BUTIK',
  ctaHeading: 'Driver du en butik eller webbutik i Lappland?',
  ctaBody: 'Att listas på LaplandStore.fi är gratis för alla företagare i Lappland.',
  ctaButton: 'Ta kontakt →',
  ctaSubject: 'LaplandStore.fi-samarbete',
};

export default copy;
