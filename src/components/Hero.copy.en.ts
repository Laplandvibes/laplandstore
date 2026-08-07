// Auto-split per-locale copy chunk. EN is the source of truth for the shape.
const copy = {
  badge1: (n: number) => `${n} verified boutiques`,
  badge2: 'Authentic Lapland products',
  badge3: 'Online + brick-and-mortar',
  titleA: 'Bring a piece of',
  titleHi: 'Lapland',
  titleB: ' home',
  sub1: 'Hand-forged puukko knives. Sámi silver. Cloudberry jam in a jar.',
  sub2: 'Every piece comes from a real Lapland maker, and we name where each one is from.',
  cta1: 'Browse boutiques',
  cta2: 'Lapland delicacies',
};

export type CopyShape = typeof copy;
export default copy;
