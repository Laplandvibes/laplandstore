/**
 * LaplandStore affiliate config — Adtraction PRODUCT advertisers mapped to this
 * gift/craft shop. Tracking URLs are PUBLIC and already carry the
 * laplandvibes.com channel (as=2086870803). No secret keys here.
 *
 * Every advertiser below was confirmed (2026-06-26) to ship BEYOND Finland —
 * the audience is global (11 languages), so a Finland-only shop would be useless
 * to a German / Japanese / Spanish visitor. Notes inline per advertiser.
 *
 * Required affiliate <a> attributes (LV spec):
 *   target="_blank" rel="sponsored nofollow noopener"   (NO noreferrer — the
 *   Worker reads Referer for per-site attribution; Adtraction reads the channel.)
 *
 * Offer hooks are EVERGREEN only (free shipping thresholds / brand facts). No
 * time-limited "−X %" is ever hardcoded — that would go stale = fake data, and
 * Adtraction coupon-marketing is not enabled for our Content segment.
 */

export interface StorePartner {
  /** snake_case slug used in analytics + the (already-channel-tagged) link. */
  slug: string
  /** Display name. */
  name: string
  /** Adtraction tracking URL (public, channel-tagged). */
  link: string
  /** Logo in /public/img/partners. */
  logo: string
}

export const KULTA_CENTER: StorePartner = {
  slug: 'kulta-center',
  name: 'Kulta-Center',
  // Ships free across the EEA (Europe); est. 1933; Kalevala Finnish jewellery.
  link: 'https://at.kulta-center.com/t/t?a=1498456315&as=2086870803&t=2&tk=1',
  logo: '/img/partners/kulta-center.png',
}

export const IVALO: StorePartner = {
  slug: 'ivalo',
  name: 'IVALO.COM',
  // Marketplace of 100+ Finnish/Nordic sustainable brands; ships EU-wide (named
  // list) + calculates worldwide at checkout. Free shipping over 200 €.
  link: 'https://at.ivalo.com/t/t?a=2052140535&as=2086870803&t=2&tk=1',
  logo: '/img/partners/ivalo.png',
}

export const SCANDINAVIAN_OUTDOOR: StorePartner = {
  slug: 'scandinavian-outdoor',
  name: 'Scandinavian Outdoor',
  // Ships worldwide (EU, Norway, Switzerland, UK, US, Canada, rest of world).
  link: 'https://to.scandinavianoutdoor.fi/t/t?a=1119705543&as=2086870803&t=2&tk=1',
  logo: '/img/partners/scandinavian-outdoor.png',
}

/** Build the advertiser link. Adtraction injects the SID server-side, so the SID
 *  is only used for our own click analytics, not appended to the URL. */
export function partnerLink(p: StorePartner): string {
  return p.link
}
