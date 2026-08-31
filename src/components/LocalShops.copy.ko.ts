// Auto-split per-locale copy chunk.
import type { CopyShape } from './LocalShops.copy.en';

const copy: CopyShape = {
  eyebrow: '현지 사업자',
  heading: '라플란드 부티크',
  sub: (n: number) =>
    `${n}곳의 엄선한 라플란드 상점과 부티크입니다. 설명이 포함된 전체 목록은 LaplandGifts에 있습니다.`,
  onlineHeading: '집으로 배송합니다',
  physicalHeading: '직접 방문',
  physicalSub: '아래 매장들은 직접 방문 전용이며 배송은 하지 않습니다.',
  directoryCta: '전체 부티크 목록 보기',
  onlineBadge: '온라인',
  physicalBadge: '오프라인',
  ctaHeading: '라플란드에서 상점이나 온라인 상점을 운영하시나요?',
  ctaBody: 'LaplandStore.fi 등재는 라플란드 사업자 모두에게 무료입니다.',
  ctaButton: '문의하기 →',
  ctaSubject: 'LaplandStore.fi 파트너십',
};

export default copy;
