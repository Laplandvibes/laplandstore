// Auto-split per-locale copy chunk.
import type { CopyShape } from './LocalShops.copy.en';

const copy: CopyShape = {
  eyebrow: 'Empresas locais',
  heading: 'Boutiques da Lapônia',
  sub: (n: number) =>
    `${n} lojas e boutiques da Lapônia escolhidas a dedo. Compre direto dos produtores locais — todos os links levam à página própria da empresa.`,
  onlineHeading: 'Lojas online — envio internacional para sua casa',
  physicalHeading: 'Visitar pessoalmente',
  physicalSub: 'Toda boutique tem uma loja física na Lapônia.',
  onlineBadge: 'ONLINE',
  physicalBadge: 'NA LOJA',
  ctaHeading: 'Você administra uma loja ou loja online na Lapônia?',
  ctaBody: 'O cadastro no LaplandStore.fi é gratuito para todos os empreendedores da Lapônia.',
  ctaButton: 'Entrar em contato →',
  ctaSubject: 'Parceria LaplandStore.fi',
};

export default copy;
