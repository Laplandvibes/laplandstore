// Auto-split per-locale copy chunk.
import type { CopyShape } from './LocalShops.copy.en';

const copy: CopyShape = {
  eyebrow: 'Lokale Betriebe',
  heading: 'Boutiquen in Lappland',
  sub: (n: number) =>
    `${n} sorgfältig ausgewählte Geschäfte und Boutiquen aus Lappland. Sie kaufen direkt bei den Betrieben. Jeder Link führt zur eigenen Seite der Boutique.`,
  onlineHeading: 'Online-Shops: direkter Versand',
  physicalHeading: 'Vor Ort besuchen',
  physicalSub: 'Jede Boutique hat ein Ladengeschäft in Lappland.',
  onlineBadge: 'ONLINE',
  physicalBadge: 'LADEN',
  ctaHeading: 'Betreiben Sie ein Geschäft oder einen Online-Shop in Lappland?',
  ctaBody: 'Ein Eintrag auf LaplandStore.fi ist für Betriebe aus Lappland kostenfrei.',
  ctaButton: 'Kontakt aufnehmen →',
  ctaSubject: 'LaplandStore.fi Kooperation',
};

export default copy;
