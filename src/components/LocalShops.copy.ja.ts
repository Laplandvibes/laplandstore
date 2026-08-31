// Auto-split per-locale copy chunk.
import type { CopyShape } from './LocalShops.copy.en';

const copy: CopyShape = {
  eyebrow: '地元の事業者',
  heading: 'ラップランドのブティック',
  sub: (n: number) =>
    `${n}軒の厳選されたラップランドの店とブティック。説明つきの完全なディレクトリはLaplandGiftsにあります。`,
  onlineHeading: '自宅へ配送します',
  physicalHeading: '現地を訪問',
  physicalSub: 'こちらは現地を訪ねる店です。配送は行っていません。',
  directoryCta: 'ブティック一覧をすべて見る',
  onlineBadge: 'オンライン',
  physicalBadge: '実店舗',
  ctaHeading: 'ラップランドで店舗やオンラインショップを運営していますか？',
  ctaBody: 'LaplandStore.fiへの掲載は、ラップランドの事業者の方には無料です。',
  ctaButton: 'お問い合わせ →',
  ctaSubject: 'LaplandStore.fi 提携について',
};

export default copy;
