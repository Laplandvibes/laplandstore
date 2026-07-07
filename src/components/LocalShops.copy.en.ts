// Auto-split per-locale copy chunk. EN is the source of truth for the shape.
const copy = {
  eyebrow: 'Local entrepreneurs',
  heading: 'Lapland boutiques',
  sub: (n: number) =>
    `${n} hand-picked Lapland shops and boutiques. You buy directly from the maker, and every link goes to the business's own site.`,
  onlineHeading: 'Online stores, delivered straight home',
  physicalHeading: 'Visit in person',
  physicalSub: 'Every boutique has a physical brick-and-mortar shop in Lapland.',
  onlineBadge: 'ONLINE',
  physicalBadge: 'IN-STORE',
  ctaHeading: 'Do you run a Lapland-based shop or online store?',
  ctaBody: 'A listing on LaplandStore.fi is free for all Lapland entrepreneurs.',
  ctaButton: 'Get in touch →',
  ctaSubject: 'LaplandStore.fi partnership',
};

export type CopyShape = typeof copy;
export default copy;
