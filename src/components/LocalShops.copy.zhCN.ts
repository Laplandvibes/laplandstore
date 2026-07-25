// Auto-split per-locale copy chunk.
import type { CopyShape } from './LocalShops.copy.en';

const copy: CopyShape = {
  eyebrow: '当地商家',
  heading: '拉普兰精品店',
  sub: (n: number) =>
    `精选 ${n} 家拉普兰本地商店与精品店。直接向当地工匠购买。所有链接都通往商家自己的网站。`,
  onlineHeading: '线上商店：国际配送直达您家',
  physicalHeading: '亲临实体店',
  physicalSub: '每家精品店在拉普兰都有实体门店。',
  onlineBadge: '线上',
  physicalBadge: '门店',
  ctaHeading: '您在拉普兰经营商店或线上商店吗?',
  ctaBody: 'LaplandStore.fi 的列入对所有拉普兰商家免费。',
  ctaButton: '联系我们 →',
  ctaSubject: 'LaplandStore.fi 合作',
};

export default copy;
