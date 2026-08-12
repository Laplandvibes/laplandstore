/**
 * Evästesuostumuksen portti.
 *
 * 🔴 Miksi tämä on olemassa (auditti 12.–13.8.2026, mitattu selaimesta):
 *
 * 1. GetYourGuiden seurantaskripti oli `index.html`:n headissa ehdottomana
 *    `<script async defer>` -tagina. Suostumuksen ollessa **hylätty** sivu
 *    lähetti silti kutsun `widget.getyourguide.com/gnikcart?q=…`, joka purkaa
 *    muotoon `{"partner_id":"VRMKD7N","url":"…"}`, ja `partner_id` kirjoittui
 *    localStorageen. Evästekäytäntö kuitenkin lupaa, että kumppanievästeet
 *    syntyvät vasta kun lukija klikkaa kumppanilinkkiä.
 *
 * 2. Suostumusta ei voinut perua. Evästekäytännön ohje ("tyhjennä evästeet")
 *    ei toiminut, koska valinta on localStoragessa eikä evästeessä.
 *
 * 🔴 CookieBanner on verkoston jaettu komponentti, jonka on oltava
 * byte-for-byte identtinen joka sivustolla (CLAUDE.md). Sitä EI muuteta täältä
 * — tämä moduuli lukee samaa avainta ja hoitaa vain sen, mitä suostumuksesta
 * seuraa tällä sivustolla.
 */

const KEY = 'laplandstore_cookie_consent'

/** GYG:n kumppanianalytiikka. Vaatimus tulee kumppaniohjelmasta, mutta se on
 *  silti seurantaa: se ladataan vasta hyväksynnän jälkeen. */
const GYG_SRC = 'https://widget.getyourguide.com/dist/pa.umd.production.min.js'
const GYG_PARTNER = 'VRMKD7N'

export type Consent = 'accepted' | 'declined' | null

export function readConsent(): Consent {
  try {
    const v = localStorage.getItem(KEY)
    return v === 'accepted' || v === 'declined' ? v : null
  } catch {
    // Privaattiselain tai estetty tallennus: kohdellaan kuin ei suostumusta,
    // eli mitään ei ladata. Hiljainen salliminen olisi väärä oletus.
    return null
  }
}

let gygLoaded = false

/** Lataa kumppaniskriptin kerran, vain hyväksytyllä suostumuksella. */
export function loadPartnerScripts(): void {
  if (gygLoaded || readConsent() !== 'accepted') return
  if (document.querySelector(`script[src="${GYG_SRC}"]`)) {
    gygLoaded = true
    return
  }
  const s = document.createElement('script')
  s.src = GYG_SRC
  s.async = true
  s.defer = true
  s.setAttribute('data-gyg-partner-id', GYG_PARTNER)
  document.head.appendChild(s)
  gygLoaded = true
}

/**
 * Peruu suostumuksen ja poistaa sen jäljet.
 *
 * 🔴 Sivu ladataan uudelleen tarkoituksella. Kerran ladattua kolmannen
 * osapuolen skriptiä ei voi poistaa DOMista niin, että se lakkaisi toimimasta
 * — se on jo rekisteröinyt kuuntelijansa. Ainoa rehellinen tapa palauttaa
 * lukija seurattomaan tilaan on ladata sivu ilman skriptiä.
 */
export function withdrawConsent(): void {
  try {
    localStorage.removeItem(KEY)
    // GYG:n oma tunniste, joka syntyi ennen porttia. Jätettynä se säilyisi
    // vaikka suostumus perutaan.
    localStorage.removeItem('partner_id')
  } catch {
    /* privaattiselain: ei mitään poistettavaa */
  }
  try {
    ;(window as { gtag?: (...a: unknown[]) => void }).gtag?.('consent', 'update', {
      analytics_storage: 'denied',
      ad_storage: 'denied',
      ad_user_data: 'denied',
      ad_personalization: 'denied',
    })
  } catch {
    /* gtag ei ladattu */
  }
  window.location.reload()
}

/**
 * Kutsutaan kerran sovelluksen käynnistyessä ja aina kun banneri sulkeutuu.
 * Banneri ei kerro tapahtumaa, joten suostumusta kuunnellaan localStoragen
 * kautta lyhyellä pollauksella niin kauan kuin valintaa ei ole tehty.
 */
export function initConsent(): () => void {
  loadPartnerScripts()
  if (readConsent() !== null) return () => {}
  const t = setInterval(() => {
    if (readConsent() !== null) {
      clearInterval(t)
      loadPartnerScripts()
    }
  }, 500)
  return () => clearInterval(t)
}
