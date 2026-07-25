// Auto-split per-locale copy chunk.
import type { CopyShape } from './LocalShops.copy.en';

const copy: CopyShape = {
  eyebrow: 'Imprese locali',
  heading: 'Boutique della Lapponia',
  sub: (n: number) =>
    `${n} negozi e boutique lapponi selezionati a mano. Acquisti direttamente dagli artigiani locali. Ogni link porta al sito proprio dell'attività.`,
  onlineHeading: 'Negozi online: spedizione diretta a casa',
  physicalHeading: 'Visita di persona',
  physicalSub: 'Ogni boutique ha un negozio fisico in Lapponia.',
  onlineBadge: 'ONLINE',
  physicalBadge: 'IN NEGOZIO',
  ctaHeading: 'Gestisce un negozio o un negozio online in Lapponia?',
  ctaBody: 'L\'inserimento su LaplandStore.fi è gratuito per tutti gli imprenditori della Lapponia.',
  ctaButton: 'Contattaci →',
  ctaSubject: 'Collaborazione LaplandStore.fi',
};

export default copy;
