// Auto-split per-locale copy chunk.
import type { CopyShape } from './LocalShops.copy.en';

const copy: CopyShape = {
  eyebrow: '当地商家',
  heading: '拉普兰精品店',
  sub: (n: number) =>
    `${n}家精选的拉普兰商店与精品店。含介绍的完整名录在 LaplandGifts 上。`,
  onlineHeading: '可寄到您家',
  physicalHeading: '到店选购',
  physicalSub: '这些需要到店选购，不提供配送。',
  directoryCta: '查看完整精品店名录',
  onlineBadge: '线上',
  physicalBadge: '门店',
  ctaHeading: '您在拉普兰经营商店或线上商店吗?',
  ctaBody: 'LaplandStore.fi 的列入对所有拉普兰商家免费。',
  ctaButton: '联系我们 →',
  ctaSubject: 'LaplandStore.fi 合作',
};

export default copy;
