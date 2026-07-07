// Auto-split per-locale copy chunk.
import type { CopyShape } from './LocalShops.copy.en';

const copy: CopyShape = {
  eyebrow: 'Empresas locales',
  heading: 'Boutiques de Laponia',
  sub: (n: number) =>
    `${n} tiendas y boutiques laponas seleccionadas a mano. Compre directamente a los productores locales — todos los enlaces llevan a la página propia de la empresa.`,
  onlineHeading: 'Tiendas en línea — envío internacional a casa',
  physicalHeading: 'Visitar en persona',
  physicalSub: 'Cada boutique tiene una tienda física en Laponia.',
  onlineBadge: 'EN LÍNEA',
  physicalBadge: 'EN TIENDA',
  ctaHeading: '¿Tiene una tienda o tienda en línea en Laponia?',
  ctaBody: 'El alta en LaplandStore.fi es gratuita para todos los emprendedores laponios.',
  ctaButton: 'Ponerse en contacto →',
  ctaSubject: 'Colaboración con LaplandStore.fi',
};

export default copy;
