// Auto-split per-locale copy chunk.
import type { CopyShape } from './LocalShops.copy.en';

const copy: CopyShape = {
  eyebrow: 'Empresas locales',
  heading: 'Boutiques de Laponia',
  sub: (n: number) =>
    `${n} tiendas y boutiques de Laponia seleccionadas a mano. El directorio completo, con descripciones, está en LaplandGifts.`,
  onlineHeading: 'Envían a su casa',
  physicalHeading: 'Visitar en persona',
  physicalSub: 'A estas se va en persona. No hacen envíos.',
  directoryCta: 'Ver el directorio completo de boutiques',
  onlineBadge: 'EN LÍNEA',
  physicalBadge: 'EN TIENDA',
  ctaHeading: '¿Tiene una tienda física o en línea en Laponia?',
  ctaBody: 'El alta en LaplandStore.fi es gratuita para todos los emprendedores de Laponia.',
  ctaButton: 'Ponerse en contacto →',
  ctaSubject: 'Colaboración con LaplandStore.fi',
};

export default copy;
