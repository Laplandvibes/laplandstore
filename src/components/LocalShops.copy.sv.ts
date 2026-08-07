// Auto-split per-locale copy chunk.
import type { CopyShape } from './LocalShops.copy.en';

const copy: CopyShape = {
  eyebrow: 'Lokala företagare',
  heading: 'Butiker i Lappland',
  sub: (n: number) =>
    `${n} handplockade butiker i Lappland. Hela katalogen med beskrivningar finns hos LaplandGifts.`,
  onlineHeading: 'Skickar hem till dig',
  physicalHeading: 'Besök på plats',
  physicalSub: 'Dessa besöker du på plats. De skickar inte hem.',
  directoryCta: 'Se hela butikskatalogen',
  onlineBadge: 'ONLINE',
  physicalBadge: 'I BUTIK',
  ctaHeading: 'Driver du en butik eller webbutik i Lappland?',
  ctaBody: 'Att listas på LaplandStore.fi är gratis för alla företagare i Lappland.',
  ctaButton: 'Ta kontakt →',
  ctaSubject: 'LaplandStore.fi-samarbete',
};

export default copy;
