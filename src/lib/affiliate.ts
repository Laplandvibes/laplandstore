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
  /**
   * Logon muoto. Oletus on `wordmark` eli leveä nimilogo.
   *
   * 🔴 Miksi tämä on olemassa (Vesa 12.8.: "katso tätä suomikaupan logoa, ei
   * näy ollenkaan mainoksessa, desktop ainakaan"): kortti asetti logon
   * korkeuden `h-6 w-auto`:lla, mikä on oikein leveälle wordmarkille — IVALO
   * ja Halti saavat siitä noin sadan pikselin levyisen logon. Suomikaupan
   * merkki on 400 × 400 eli neliö, joten samasta säännöstä tuli 24 × 24
   * pikselin sininen piste, josta ei erota mitään.
   *
   * Korkeus ei siis ole logon koko vaan sen leveys on: neliömerkki tarvitsee
   * enemmän korkeutta kantaakseen saman visuaalisen painon.
   */
  logoShape?: 'wordmark' | 'square'
}

export const KULTA_CENTER: StorePartner = {
  slug: 'kulta-center',
  name: 'Kulta-Center',
  // Ships free across the EEA (Europe); est. 1933; Kalevala Finnish jewellery.
  // 🔴 dest=korut-kategoria: ilman destiä Adtraction-wrap pudottaa
  //    kulta-center.comin ETUSIVULLE (sama vika jonka SUOMIKAUPPA-kommentti alla
  //    kirjaa). Kauppa on suomenkielinen → yksi fi-dest kaikille kielille.
  //    Polku verifioitu 2026-08-14: HTTP 200, <title>Korut netistä 1-2
  //    arkipäivässä | Ilmainen toimitus | Kulta-Center.com</title>, body listaa
  //    kaula-/hopea-/kultakorut. Oma sid per kumppani, jotta klikit erottuvat
  //    raportissa (kaikilla kolmella oli sama store_partner).
  link:
    'https://go.laplandvibes.com/go/kultacenter?sid=store_partner_kulta' +
    '&dest=' + encodeURIComponent('https://www.kulta-center.com/fi/korut'),
  logo: '/img/partners/kulta-center.png',
}

export const IVALO: StorePartner = {
  slug: 'ivalo',
  name: 'IVALO.COM',
  // Marketplace of 100+ Finnish/Nordic sustainable brands; ships EU-wide (named
  // list) + calculates worldwide at checkout. Free shipping over 200 €.
  // 🔴 dest=Finnish Fashion -kokoelma: ilman destiä klikki putosi ivalo.comin
  //    etusivulle. Kauppa on englanninkielinen (yksi kieliversio) → yksi dest.
  //    Polku verifioitu 2026-08-14: HTTP 200, <title>Finnish Fashion |
  //    IVALO.COM</title>, body täynnä suomalaisia merkkejä.
  link:
    'https://go.laplandvibes.com/go/ivalo?sid=store_partner_ivalo' +
    '&dest=' + encodeURIComponent('https://ivalo.com/collections/finnish-fashion'),
  logo: '/img/partners/ivalo.png',
}

export const SCANDINAVIAN_OUTDOOR: StorePartner = {
  slug: 'scandinavian-outdoor',
  name: 'Scandinavian Outdoor',
  // Ships worldwide (EU, Norway, Switzerland, UK, US, Canada, rest of world).
  // 🔴 dest=vaatteet-kategoria: ilman destiä klikki putosi etusivulle.
  //    Adtraction-ohjelman tracking on to.scandinavianoutdoor.fi eli FI-kauppa —
  //    dest pysyy .fi-domainilla (nordicnest/halti-oppi: ohjelman markkina
  //    määrää kaupan, .com-syvälinkki hylättäisiin). Polku verifioitu
  //    2026-08-14: HTTP 200, <title>Vaatteet - Scandinavian Outdoor</title>,
  //    body listaa takit/ulkoiluvaatteet.
  link:
    'https://go.laplandvibes.com/go/scandinavianoutdoor?sid=store_partner_scanout' +
    '&dest=' + encodeURIComponent('https://scandinavianoutdoor.fi/vaatteet/'),
  logo: '/img/partners/scandinavian-outdoor.png',
}

/**
 * Suomikauppa.fi — Daisycon campaign 17977, 7 % per sale, 30-day attribution.
 *
 * This is the first advertiser on this site that actually sells the thing the
 * page is about: Finnish goods, delivered. The 2026-08-07 rebuild stripped the
 * old product grid because it duplicated laplandgifts with ZERO commission
 * (13 of 15 boutiques are in no affiliate network and never will be). This is
 * the opposite case — a real programme with a real rate — so the products come
 * back as ONE advertiser card rather than as a second catalogue.
 *
 * 🔴 `dest` points at the Marimekko collection, never the shop's front page: an
 *    affiliate CTA must land on exactly what the card promised, and this card
 *    leads with Unikko. `/collections/marimekko-1` verified 200 + title
 *    "Marimekko – Suomikauppa.fi" 2026-08-10.
 *
 * Media laplandstore.fi (Daisycon media 424061) subscribed 2026-08-10 and
 * APPROVED 2026-08-24 on both campaigns. Measured rather than assumed: the
 * Daisycon datafeed endpoint serves a media_id only when that media's
 * subscription is accepted, and 424061 answers 200 on 17977 and 20538 alike
 * (a media id we do not own answers 204). Clicks from this site now earn.
 */
export const SUOMIKAUPPA: StorePartner = {
  slug: 'suomikauppa',
  name: 'Suomikauppa.fi',
  // [LV-2026-08-23] dest vaihdettu marimekko-1 -> collections/all ja sid
  // store_marimekko -> store_suomikauppa. Kortti ei enää näytä Marimekkoa vaan
  // Iittalan, Fiskarsin ja Lumenen tuotteet (kuvat Daisycon-feedistä), ja CTA
  // lupaa "selaa suomalaista hyllyä" — Marimekko-kokoelma olisi ollut lupauksen
  // vastainen kohde. Polku verifioitu 2026-08-23: HTTP 200,
  // <title>Tuotteet | Suomikauppa.fi</title>, body listaa tuotteita hintoineen.
  link:
    'https://go.laplandvibes.com/go/suomikauppa?sid=store_suomikauppa' +
    '&dest=' + encodeURIComponent('https://suomikauppa.fi/collections/all'),
  // The shop's own brand mark (white Finland outline + wordmark on their blue),
  // taken from their published og:image. 🔴 Their cookie-banner asset is a
  // generic cookie icon, not a logo — do not "find" a logo without looking at it.
  logo: '/img/partners/suomikauppa.png',
  logoShape: 'square',
}

/**
 * Nordicbuddies — Daisycon campaign 20538, 7 % per sale, 30-day attribution.
 * A Finnish company that holds the official licences for Moomin, Pippi
 * Longstocking and Mauri Kunnas and makes its own wear and accessories.
 *
 * WHY THIS CARD IS NOT A SECOND SUOMIKAUPPA. Suomikauppa's card answers
 * "the boutiques above do not all post abroad" with Finnish design and
 * groceries. This one answers a different question the directory leaves open:
 * where the licensed character things come from. Different shelf, different
 * shop, no overlap in the products shown.
 *
 * 🔴 THE THREE PRODUCTS ARE PIPPI AND MAURI KUNNAS, NOT MOOMIN, AND THAT IS
 * DELIBERATE. The shop's catalogue is 2 225 Moomin products against 267 Pippi
 * and 36 Kunnas, so Moomin would have been the easy pick — but Moomin
 * Characters Oy treats use in "an advertisement or other sales promotion" as
 * a licensable act, and the network's standing rule (moomin_note in
 * _affiliate/creatives.json) is: no Moomin in an LV ad unit until they answer
 * in writing. The same reasoning already kept Moomin off the Suomikauppa card
 * above. Pippi and Kunnas carry no such open question for us.
 *
 * 🔴 No logo file: the advertiser supplies none, and drawing an imitation of
 * someone's wordmark is a fabrication (laplandwork shipped a made-up R-Kioski
 * logo once). The card sets the name in type instead — ProductBrandAd falls
 * back to a wordmark when `logo` is empty.
 *
 * Deep link verified 2026-08-24: /collections/pippi-collection HTTP 200.
 * Media laplandstore.fi (424061) approved on 20538 the same day (see above).
 */
export const NORDICBUDDIES: StorePartner = {
  slug: 'nordicbuddies',
  name: 'Nordicbuddies',
  link:
    'https://go.laplandvibes.com/go/nordicbuddies?sid=home_character_design' +
    '&dest=' + encodeURIComponent('https://nordicbuddies.com/collections/pippi-collection'),
  logo: '',
}

/** Build the advertiser link. Adtraction injects the SID server-side, so the SID
 *  is only used for our own click analytics, not appended to the URL. */
export function partnerLink(p: StorePartner): string {
  return p.link
}
