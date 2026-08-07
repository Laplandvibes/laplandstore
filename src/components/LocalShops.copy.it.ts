// Auto-split per-locale copy chunk.
import type { CopyShape } from './LocalShops.copy.en';

const copy: CopyShape = {
  eyebrow: 'Imprese locali',
  heading: 'Boutique della Lapponia',
  sub: (n: number) =>
    `${n} negozi e boutique della Lapponia scelti a mano. La directory completa, con le descrizioni, si trova su LaplandGifts.`,
  onlineHeading: 'Spediscono a casa',
  physicalHeading: 'Da visitare di persona',
  physicalSub: 'Questi si visitano di persona. Non spediscono.',
  directoryCta: 'Vedi la directory completa delle boutique',
  onlineBadge: 'ONLINE',
  physicalBadge: 'IN NEGOZIO',
  ctaHeading: 'Gestisce un negozio o un negozio online in Lapponia?',
  ctaBody: 'L\'inserimento su LaplandStore.fi è gratuito per tutti gli imprenditori della Lapponia.',
  ctaButton: 'Contattaci →',
  ctaSubject: 'Collaborazione LaplandStore.fi',
};

export default copy;
