// Auto-split per-locale copy chunk.
import type { CopyShape } from './LocalShops.copy.en';

const copy: CopyShape = {
  eyebrow: '地元の事業者',
  heading: 'ラップランドのブティック',
  sub: (n: number) =>
    `厳選した${n}軒のラップランドの店舗・ブティック。地元の作り手から直接お買い物。各リンクは事業者の自社サイトに直接つながります。`,
  onlineHeading: 'オンラインショップ：ご自宅へ直送',
  physicalHeading: '現地のお店を訪ねる',
  physicalSub: 'すべてのブティックがラップランドに実店舗を構えています。',
  onlineBadge: 'オンライン',
  physicalBadge: '実店舗',
  ctaHeading: 'ラップランドで店舗やオンラインショップを運営していますか?',
  ctaBody: 'LaplandStore.fiへの掲載は、ラップランドの事業者の方には無料です。',
  ctaButton: 'お問い合わせ →',
  ctaSubject: 'LaplandStore.fi 提携について',
};

export default copy;
