// Auto-split per-locale copy chunk.
import type { CopyShape } from './LocalShops.copy.en';

const copy: CopyShape = {
  eyebrow: 'Entrepreneurs locaux',
  heading: 'Boutiques de Laponie',
  sub: (n: number) =>
    `${n} boutiques et commerces lapons sélectionnés à la main. Achetez directement auprès des artisans locaux — chaque lien renvoie au site propre du commerce.`,
  onlineHeading: 'Boutiques en ligne — livraison directe chez vous',
  physicalHeading: 'Visiter sur place',
  physicalSub: 'Chaque boutique dispose d\'un magasin physique en Laponie.',
  onlineBadge: 'EN LIGNE',
  physicalBadge: 'EN MAGASIN',
  ctaHeading: 'Vous gérez un commerce ou une boutique en ligne en Laponie ?',
  ctaBody: "L'inscription sur LaplandStore.fi est gratuite pour tous les entrepreneurs lapons.",
  ctaButton: 'Nous contacter →',
  ctaSubject: 'Partenariat LaplandStore.fi',
};

export default copy;
