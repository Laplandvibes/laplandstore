// Auto-split per-locale copy chunk. EN is the source of truth for the shape.
const copy = {
  eyebrow: 'Local entrepreneurs',
  heading: 'Lapland boutiques',
  sub: (n: number) =>
    `${n} hand-picked Lapland shops and boutiques. The full directory, with descriptions and opening details, lives on LaplandGifts.`,
  onlineHeading: 'They ship to you',
  physicalHeading: 'Visit in person',
  physicalSub: 'These you walk into. They do not ship.',
  directoryCta: 'See the full boutique directory',
  onlineBadge: 'ONLINE',
  physicalBadge: 'IN-STORE',
  ctaHeading: 'Do you run a Lapland-based shop or online store?',
  ctaBody: 'A listing on LaplandStore.fi is free for all Lapland entrepreneurs.',
  ctaButton: 'Get in touch →',
  ctaSubject: 'LaplandStore.fi partnership',
};

export type CopyShape = typeof copy;
export default copy;
