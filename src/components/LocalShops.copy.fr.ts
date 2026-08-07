// Auto-split per-locale copy chunk.
import type { CopyShape } from './LocalShops.copy.en';

const copy: CopyShape = {
  eyebrow: 'Entrepreneurs locaux',
  heading: 'Boutiques de Laponie',
  sub: (n: number) =>
    `${n} boutiques de Laponie sélectionnées à la main. L’annuaire complet, avec les descriptions, se trouve sur LaplandGifts.`,
  onlineHeading: 'Elles livrent chez vous',
  physicalHeading: 'À visiter sur place',
  physicalSub: 'Celles-ci se visitent sur place. Elles n’expédient pas.',
  directoryCta: 'Voir l’annuaire complet des boutiques',
  onlineBadge: 'EN LIGNE',
  physicalBadge: 'EN MAGASIN',
  ctaHeading: 'Vous gérez un commerce ou une boutique en ligne en Laponie ?',
  ctaBody: "L'inscription sur LaplandStore.fi est gratuite pour tous les entrepreneurs lapons.",
  ctaButton: 'Nous contacter →',
  ctaSubject: 'Partenariat LaplandStore.fi',
};

export default copy;
