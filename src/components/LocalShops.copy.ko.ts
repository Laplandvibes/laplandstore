// Auto-split per-locale copy chunk.
import type { CopyShape } from './LocalShops.copy.en';

const copy: CopyShape = {
  eyebrow: '현지 사업자',
  heading: '라플란드 부티크',
  sub: (n: number) =>
    `엄선된 ${n}개의 라플란드 상점과 부티크. 현지 장인에게서 직접 구매하세요 — 모든 링크는 사업자의 자체 사이트로 연결됩니다.`,
  onlineHeading: '온라인 상점 — 국제 배송으로 자택까지',
  physicalHeading: '직접 방문하기',
  physicalSub: '모든 부티크는 라플란드에 오프라인 매장을 두고 있습니다.',
  onlineBadge: '온라인',
  physicalBadge: '오프라인',
  ctaHeading: '라플란드에서 상점이나 온라인 상점을 운영하시나요?',
  ctaBody: 'LaplandStore.fi 등재는 라플란드 사업자 모두에게 무료입니다.',
  ctaButton: '문의하기 →',
  ctaSubject: 'LaplandStore.fi 파트너십',
};

export default copy;
