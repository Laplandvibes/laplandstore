// Auto-split per-locale copy chunk. EN is the source of truth for the shape.
const copy = {
  heading: 'Stay in the loop',
  intro:
    "Subscribe to hear first about new Lapland finds, artisans' stories, and a heads-up the moment the LaplandVibes webshop opens.",
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
  codeLabel: 'Your subscriber code',
  codeFootnote:
    'Save this code. It is reserved for you across the #LaplandVibes network. It works on the LaplandVibes webshop the moment it opens, and on partner deals as they are negotiated.',
  copy: 'Copy',
  copied: 'Copied',
  errorGeneric: 'Subscription failed. Please try again.',
};

export type CopyShape = typeof copy;
export default copy;
