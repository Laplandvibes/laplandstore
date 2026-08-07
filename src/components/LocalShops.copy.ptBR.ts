// Auto-split per-locale copy chunk.
import type { CopyShape } from './LocalShops.copy.en';

const copy: CopyShape = {
  eyebrow: 'Empresas locais',
  heading: 'Boutiques da Lapônia',
  sub: (n: number) =>
    `${n} lojas e boutiques da Lapônia escolhidas a dedo. O diretório completo, com descrições, está no LaplandGifts.`,
  onlineHeading: 'Enviam para você',
  physicalHeading: 'Visitar pessoalmente',
  physicalSub: 'Estas você visita pessoalmente. Elas não enviam.',
  directoryCta: 'Ver o diretório completo de boutiques',
  onlineBadge: 'ONLINE',
  physicalBadge: 'NA LOJA',
  ctaHeading: 'Você administra uma loja ou loja online na Lapônia?',
  ctaBody: 'O cadastro no LaplandStore.fi é gratuito para todos os empreendedores da Lapônia.',
  ctaButton: 'Entrar em contato →',
  ctaSubject: 'Parceria LaplandStore.fi',
};

export default copy;
