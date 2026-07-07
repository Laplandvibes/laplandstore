/**
 * Minimal affiliate-click tracking. Pushes a GA4 event via the consent-gated
 * gtag already loaded in index.html (G-VCL88MVXK5). No-ops safely if gtag is
 * absent (SSR / pre-hydration / consent denied — gtag itself queues/*drops*).
 */
type Gtag = (...args: unknown[]) => void

export function trackAffiliateClick(partner: string, placement: string, url: string): void {
  if (typeof window === 'undefined') return
  const g = (window as unknown as { gtag?: Gtag }).gtag
  if (typeof g !== 'function') return
  try {
    g('event', 'affiliate_click', {
      affiliate_partner: partner,
      placement,
      link_url: url,
    })
  } catch {
    // analytics must never break a click
  }
}
