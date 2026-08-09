// Auto-split per-locale copy chunk. EN is the source of truth for the shape.
const copy = {
  heading: 'Stay in the loop',
  intro:
    "Subscribe to hear about new Lapland finds, the artisans' stories behind them, and new boutiques as they join the directory.",
  placeholder: 'you@example.com',
  cta: 'Subscribe',
  loading: 'Subscribing…',
  fineprint:
    "Your details are not shared with third parties. Unsubscribe anytime.",
  successHeadline: "You're in.",
  successBody:
    'Check your inbox. The welcome email is on its way, and future letters will land there too.',
  alreadyHeadline: 'Already subscribed',
  alreadyBody:
    "You're already on the list. Thanks for sticking with the project.",
  errorGeneric: 'Subscription failed. Please try again.',
};

export type CopyShape = typeof copy;
export default copy;
