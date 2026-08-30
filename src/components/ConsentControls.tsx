import { useEffect, useState } from 'react'
import { readConsent, withdrawConsent, type Consent } from '../lib/consent'
import type { Lang } from '../lang'

/**
 * Suostumuksen tila ja peruutus evästekäytäntösivulla.
 *
 * 🔴 Miksi (auditti 12.8.2026): sivustolla ei ollut yhtään tapaa perua
 * annettua suostumusta, ja evästekäytännön ainoa ohje ("tyhjennä selaimesi
 * evästeet") ei toiminut, koska valinta tallennetaan localStorageen eikä
 * evästeeseen. Lukija ei siis voinut palata alkutilaan millään ohjeella jonka
 * annoimme.
 *
 * 🔴 Nykyinen tila NÄYTETÄÄN. Pelkkä "peru"-nappi jättäisi lukijan
 * arvaamaan, mitä hän on aikanaan valinnut.
 */

const COPY: Record<Lang, {
  h: string
  accepted: string
  declined: string
  none: string
  withdraw: string
  note: string
}> = {
  en: {
    h: 'Your choice',
    accepted: 'You have accepted analytics and partner cookies.',
    declined: 'You have declined analytics and partner cookies.',
    none: 'You have not made a choice yet. Nothing is loaded until you do.',
    withdraw: 'Withdraw consent',
    note: 'Withdrawing reloads the page so that scripts already loaded stop running.',
  },
  fi: {
    h: 'Valintasi',
    accepted: 'Olet hyväksynyt analytiikka- ja kumppanievästeet.',
    declined: 'Olet hylännyt analytiikka- ja kumppanievästeet.',
    none: 'Et ole vielä tehnyt valintaa. Mitään ei ladata ennen sitä.',
    withdraw: 'Peru suostumus',
    note: 'Peruminen lataa sivun uudelleen, jotta jo ladatut skriptit lakkaavat toimimasta.',
  },
  de: {
    h: 'Ihre Wahl',
    accepted: 'Sie haben Analyse- und Partner-Cookies akzeptiert.',
    declined: 'Sie haben Analyse- und Partner-Cookies abgelehnt.',
    none: 'Sie haben noch keine Wahl getroffen. Bis dahin wird nichts geladen.',
    withdraw: 'Einwilligung widerrufen',
    note: 'Der Widerruf lädt die Seite neu, damit bereits geladene Skripte nicht weiterlaufen.',
  },
  sv: {
    h: 'Ditt val',
    accepted: 'Du har accepterat analys- och partnercookies.',
    declined: 'Du har avvisat analys- och partnercookies.',
    none: 'Du har inte gjort något val ännu. Inget laddas innan dess.',
    withdraw: 'Återkalla samtycke',
    note: 'Återkallandet laddar om sidan så att redan laddade skript slutar köra.',
  },
  fr: {
    h: 'Votre choix',
    accepted: 'Vous avez accepté les cookies d’analyse et de partenaires.',
    declined: 'Vous avez refusé les cookies d’analyse et de partenaires.',
    none: 'Vous n’avez pas encore choisi. Rien n’est chargé avant.',
    withdraw: 'Retirer le consentement',
    note: 'Le retrait recharge la page afin que les scripts déjà chargés cessent de fonctionner.',
  },
  es: {
    h: 'Tu elección',
    accepted: 'Has aceptado las cookies de analítica y de socios.',
    declined: 'Has rechazado las cookies de analítica y de socios.',
    none: 'Aún no has elegido. No se carga nada hasta entonces.',
    withdraw: 'Retirar el consentimiento',
    note: 'Al retirarlo se recarga la página para que los scripts ya cargados dejen de ejecutarse.',
  },
  it: {
    h: 'La Sua scelta',
    accepted: 'Hai accettato i cookie di analisi e dei partner.',
    declined: 'Hai rifiutato i cookie di analisi e dei partner.',
    none: 'Non hai ancora scelto. Fino ad allora non viene caricato nulla.',
    withdraw: 'Revoca il consenso',
    note: 'La revoca ricarica la pagina, così gli script già caricati smettono di funzionare.',
  },
  nl: {
    h: 'Uw keuze',
    accepted: 'U hebt analyse- en partnercookies geaccepteerd.',
    declined: 'U hebt analyse- en partnercookies geweigerd.',
    none: 'U hebt nog geen keuze gemaakt. Tot dan wordt er niets geladen.',
    withdraw: 'Toestemming intrekken',
    note: 'Bij intrekken wordt de pagina herladen zodat reeds geladen scripts stoppen.',
  },
  'pt-BR': {
    h: 'Sua escolha',
    accepted: 'Você aceitou os cookies de análise e de parceiros.',
    declined: 'Você recusou os cookies de análise e de parceiros.',
    none: 'Você ainda não escolheu. Nada é carregado até lá.',
    withdraw: 'Retirar consentimento',
    note: 'Retirar recarrega a página para que os scripts já carregados parem de rodar.',
  },
  ja: {
    h: 'お客様の選択',
    accepted: '分析クッキーとパートナークッキーに同意しています。',
    declined: '分析クッキーとパートナークッキーを拒否しています。',
    none: 'まだ選択されていません。それまで何も読み込まれません。',
    withdraw: '同意を撤回する',
    note: '撤回するとページを再読み込みします。すでに読み込まれたスクリプトを停止させるためです。',
  },
  'zh-CN': {
    h: '你的选择',
    accepted: '你已接受分析与合作方 Cookie。',
    declined: '你已拒绝分析与合作方 Cookie。',
    none: '你尚未做出选择。在此之前不会加载任何内容。',
    withdraw: '撤回同意',
    note: '撤回会重新加载页面，让已加载的脚本停止运行。',
  },
  ko: {
    h: '선택 내용',
    accepted: '분석 및 제휴 쿠키에 동의하셨습니다.',
    declined: '분석 및 제휴 쿠키를 거부하셨습니다.',
    none: '아직 선택하지 않으셨습니다. 그전까지는 아무것도 불러오지 않습니다.',
    withdraw: '동의 철회',
    note: '철회하면 페이지를 새로 불러옵니다. 이미 불러온 스크립트를 멈추기 위해서입니다.',
  },
}

export default function ConsentControls({ lang }: { lang: Lang }) {
  const c = COPY[lang] ?? COPY.en
  // localStorage luetaan vasta selaimessa: prerenderissä sitä ei ole.
  const [state, setState] = useState<Consent>(null)
  const [ready, setReady] = useState(false)
  useEffect(() => {
    setState(readConsent())
    setReady(true)
  }, [])

  if (!ready) return null

  return (
    <section className="mt-10 rounded-2xl border border-stone-200 bg-stone-50 p-6">
      <h2 className="font-heading text-2xl tracking-wide text-stone-900">{c.h}</h2>
      <p className="mt-2 text-sm text-stone-700">
        {state === 'accepted' ? c.accepted : state === 'declined' ? c.declined : c.none}
      </p>
      {state !== null && (
        <>
          <button
            type="button"
            onClick={withdrawConsent}
            className="mt-4 inline-flex min-h-11 items-center rounded-full border border-stone-300 bg-white px-5 py-2.5 font-body text-sm text-stone-900 transition-colors hover:border-stone-900"
          >
            {c.withdraw}
          </button>
          <p className="mt-2 text-xs text-stone-500">{c.note}</p>
        </>
      )}
    </section>
  )
}
