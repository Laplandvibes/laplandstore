// Auto-split per-locale copy chunk.
import type { CopyShape } from './LocalShops.copy.en';

const copy: CopyShape = {
  eyebrow: 'Lokale Betriebe',
  heading: 'Boutiquen in Lappland',
  sub: (n: number) =>
    `${n} handverlesene Läden und Boutiquen in Lappland. Das vollständige Verzeichnis mit Beschreibungen finden Sie bei LaplandGifts.`,
  onlineHeading: 'Nach Hause liefern lassen',
  physicalHeading: 'Vor Ort besuchen',
  physicalSub: 'Diese Läden besuchen Sie vor Ort; sie versenden nicht.',
  directoryCta: 'Zum vollständigen Boutiquen-Verzeichnis',
  onlineBadge: 'ONLINE',
  physicalBadge: 'LADEN',
  ctaHeading: 'Betreiben Sie ein Geschäft oder einen Online-Shop in Lappland?',
  ctaBody: 'Ein Eintrag auf LaplandStore.fi ist für Betriebe aus Lappland kostenfrei.',
  ctaButton: 'Kontakt aufnehmen →',
  ctaSubject: 'LaplandStore.fi Kooperation',
};

export default copy;
