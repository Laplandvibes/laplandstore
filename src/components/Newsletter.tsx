import { useEffect, useRef, useState, type FormEvent } from 'react';
import { Mail, Loader2, CheckCircle, AlertCircle } from 'lucide-react';
import { useLang, LANG_PREFIX, type Lang } from '../lang';

// Uutiskirjeen kieliohje sivun kielestä (ei <html lang>:sta, joka on esirenderöinnissä aina 'en').
// Kirjeitä lähtee vain suomeksi ja englanniksi, joten fi/en-sivulla ohje toistaisi itsestäänselvää
// eikä näy. Vesa 1.11.2026: "kuinka monta kertaa lukee sähköpostiosoite" (sama kuin skiresorts 92e9878).
const NL_LANG_NOTICE: Record<string, string> = {
  de: 'Die Newsletter werden auf Englisch versendet.', ja: 'ニュースレターは英語でお届けします。',
  es: 'Los boletines se envían en inglés.', pt: 'As newsletters são enviadas em inglês.', zh: '订阅邮件以英语发送。',
  ko: '뉴스레터는 영어로 발송됩니다.', fr: 'Les newsletters sont envoyées en anglais.', it: 'Le newsletter sono inviate in inglese.',
  nl: 'De nieuwsbrieven zijn in het Engels.', sv: 'Nyhetsbreven skickas på engelska.',
};
const NL_EMAIL_LABEL: Record<string, string> = {
  en: 'Email address', fi: 'Sähköpostiosoite', de: 'E-Mail-Adresse', ja: 'メールアドレス',
  es: 'Correo electrónico', pt: 'E-mail', zh: '电子邮箱', ko: '이메일 주소',
  fr: 'Adresse e-mail', it: 'Indirizzo e-mail', nl: 'E-mailadres', sv: 'E-postadress',
};
// Esimerkkiosoite kentän taustalle (4.11.2026): näyttää muodon, ei toista otsikkoa.
const NL_EMAIL_EXAMPLE: Record<string, string> = {
  en: 'name@example.com', fi: 'nimi@esimerkki.fi', de: 'name@beispiel.de', ja: 'name@example.com',
  es: 'nombre@ejemplo.es', pt: 'nome@exemplo.com.br', zh: 'name@example.com', ko: 'name@example.com',
  fr: 'nom@exemple.fr', it: 'nome@esempio.it', nl: 'naam@voorbeeld.nl', sv: 'namn@exempel.se',
};
const nlLang = (l?: string): string => {
  const x = (l || 'en').toLowerCase();
  return x === 'br' ? 'pt' : x === 'cn' ? 'zh' : x === 'kr' ? 'ko' : x === 'jp' ? 'ja' : x.split('-')[0];
};

/** Tietosuoja-asetuksen 13 art. -teksti uutiskirjelomakkeen alle.
 *  `consent` + `privacy` = suostumusvalintaruudun teksti ja sen tietosuojalinkki. */
const NEWSLETTER_PRIVACY: Record<
  Lang,
  { lead: string; link: string; consent: string; privacy: string }
> = {
  en: {
    lead: 'How we handle your data:',
    link: 'Privacy Policy',
    consent:
      'Yes, send the LaplandVibes newsletter (travel tips, seasonal updates and offers) to this email address. I confirm I am 18 or over.',
    privacy: 'Privacy Policy',
  },
  fi: {
    lead: 'Näin käsittelemme tietojasi:',
    link: 'Tietosuojaseloste',
    consent:
      'LaplandVibes saa lähettää minulle uutiskirjettä (matkailuvinkkejä, sesonkitietoa ja tarjouksia) antamaani sähköpostiosoitteeseen. Olen täyttänyt 18 vuotta.',
    privacy: 'Tietosuojaseloste',
  },
  de: {
    lead: 'So gehen wir mit Ihren Daten um:',
    link: 'Datenschutzerklärung',
    consent:
      'Ja, LaplandVibes darf mir den Newsletter mit Reisetipps, Saisoninfos und Angeboten an diese E-Mail-Adresse senden. Ich bin mindestens 18 Jahre alt.',
    privacy: 'Datenschutzerklärung',
  },
  ja: {
    lead: '個人情報の取り扱いについて:',
    link: 'プライバシーポリシー',
    consent:
      '入力したメールアドレス宛に、LaplandVibesがニュースレター（旅のヒント、シーズン情報、キャンペーン情報）を送ることに同意します。私は18歳以上です。',
    privacy: 'プライバシーポリシー',
  },
  es: {
    lead: 'Cómo tratamos sus datos:',
    link: 'Política de privacidad',
    consent:
      'Acepto recibir en mi correo el boletín de LaplandVibes (consejos de viaje, información de temporada y ofertas) y confirmo que tengo al menos 18 años.',
    privacy: 'Política de privacidad',
  },
  'pt-BR': {
    lead: 'Como tratamos seus dados:',
    link: 'Política de Privacidade',
    consent:
      'Aceito receber a newsletter do LaplandVibes no e-mail informado, com dicas de viagem, informações de temporada e ofertas. Tenho 18 anos ou mais.',
    privacy: 'Política de Privacidade',
  },
  'zh-CN': {
    lead: '我们如何处理您的数据：',
    link: '隐私政策',
    consent:
      '我同意 LaplandVibes 向我填写的邮箱发送订阅邮件，内容包括拉普兰旅行建议、季节资讯和优惠信息，并确认本人已年满18周岁。',
    privacy: '隐私政策',
  },
  ko: {
    lead: '개인정보 처리 방법:',
    link: '개인정보 처리방침',
    consent:
      '입력한 이메일 주소로 LaplandVibes가 보내는 여행 팁·시즌 정보·프로모션 소식 뉴스레터 수신에 동의하며, 만 18세 이상임을 확인합니다.',
    privacy: '개인정보처리방침',
  },
  fr: {
    lead: 'Comment nous traitons vos données :',
    link: 'Politique de confidentialité',
    consent:
      "J'accepte de recevoir la newsletter LaplandVibes (conseils voyage, infos saisonnières, offres) à cette adresse e-mail et je confirme avoir 18 ans ou plus.",
    privacy: 'Politique de confidentialité',
  },
  it: {
    lead: 'Come trattiamo i Suoi dati:',
    link: 'Informativa sulla privacy',
    consent:
      "Sì, desidero ricevere la newsletter di LaplandVibes (consigli di viaggio, novità stagionali e offerte) all'indirizzo indicato. Ho almeno 18 anni.",
    privacy: 'Informativa sulla privacy',
  },
  nl: {
    lead: 'Hoe wij met uw gegevens omgaan:',
    link: 'Privacybeleid',
    consent:
      'Ja, LaplandVibes mag de nieuwsbrief met reistips, seizoensinfo en aanbiedingen naar dit e-mailadres sturen. Ik ben 18 jaar of ouder.',
    privacy: 'Privacyverklaring',
  },
  sv: {
    lead: 'Så hanterar vi dina uppgifter:',
    link: 'Integritetspolicy',
    consent:
      'Ja, jag vill ha nyhetsbrevet från LaplandVibes med restips, säsongsinfo och erbjudanden till min e-postadress. Jag är minst 18 år.',
    privacy: 'Integritetspolicy',
  },
};

import enCopy, { type CopyShape } from './Newsletter.copy.en';
import { useCopy } from '../i18n/useCopy';
import FounderByline from '../shared/FounderByline';
import { SUPABASE_URL, SUPABASE_ANON_KEY as SUPABASE_KEY } from '../lib/supabase';

/**
 * [LV-FUNNEL 2026-08-21] Lomakesuppilon eventit Umamiin — paikallinen apuri,
 * ei jaettua importtia (vendoroitu sync on refresh-only). Ei saa koskaan
 * rikkoa lomaketta. Standardi: memory _procedural/lv_form_funnel_events.md.
 */
function track(event: string, data?: Record<string, unknown>) {
  try {
    (window as unknown as { umami?: { track: (e: string, d?: unknown) => void } }).umami?.track(event, data);
  } catch { /* ignore */ }
}


const SOURCE = 'laplandstore-newsletter';

const loaders = {
  fi: () => import('./Newsletter.copy.fi'),
  de: () => import('./Newsletter.copy.de'),
  ja: () => import('./Newsletter.copy.ja'),
  es: () => import('./Newsletter.copy.es'),
  'pt-BR': () => import('./Newsletter.copy.ptBR'),
  'zh-CN': () => import('./Newsletter.copy.zhCN'),
  ko: () => import('./Newsletter.copy.ko'),
  fr: () => import('./Newsletter.copy.fr'),
  it: () => import('./Newsletter.copy.it'),
  nl: () => import('./Newsletter.copy.nl'),
  sv: () => import('./Newsletter.copy.sv'),
} as const;

const cache: Partial<Record<import('../lang').Lang, CopyShape>> = { en: enCopy };

type Status = 'idle' | 'loading' | 'success' | 'already' | 'error';

export default function Newsletter() {
  const { lang } = useLang();
  const t = useCopy<CopyShape>(enCopy, lang, loaders, cache);

  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<Status>('idle');
  const [errorMsg, setErrorMsg] = useState('');
  const [consented, setConsented] = useState(false);

  // [LV-FUNNEL] view = osio vieritetty näkyviin (kerran), start = 1. fokus,
  // blocked kerran per submit-yritys (natiivi invalid laukeaa per kenttä).
  const funnelData = { surface: 'inline', lang };
  const sectionRef = useRef<HTMLElement | null>(null);
  const startTracked = useRef(false);
  const blockedTracked = useRef(false);
  useEffect(() => {
    const el = sectionRef.current;
    if (!el || typeof IntersectionObserver === 'undefined') return;
    const io = new IntersectionObserver((entries) => {
      if (entries.some((en) => en.isIntersecting)) {
        track('nl_view', funnelData);
        io.disconnect();
      }
    }, { threshold: 0.4 });
    io.observe(el);
    return () => io.disconnect();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  const trackStart = () => {
    if (startTracked.current) return;
    startTracked.current = true;
    track('nl_start', funnelData);
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (!email || !consented || !SUPABASE_URL || !SUPABASE_KEY) {
      track('nl_blocked', { ...funnelData, reason: !email ? 'email' : !consented ? 'consent' : 'config' });
      setErrorMsg(t.errorGeneric);
      setStatus('error');
      return;
    }
    setStatus('loading');
    setErrorMsg('');
    track('nl_submit', funnelData);
    try {
      const res = await fetch(
        `${SUPABASE_URL}/functions/v1/send-welcome-email`,
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${SUPABASE_KEY}`,
          },
          body: JSON.stringify({
            email,
            source: SOURCE,
            consent: true,
            ageConfirmed: true,
            consentText: NEWSLETTER_PRIVACY[lang].consent,
          }),
        }
      );
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || t.errorGeneric);

      if (data.alreadySubscribed) {
        setStatus('already');
        track('nl_success', { ...funnelData, already: true });
      } else {
        setStatus('success');
        track('nl_success', funnelData);
      }
      setEmail('');
    } catch (err: any) {
      setErrorMsg(err?.message || t.errorGeneric);
      setStatus('error');
      track('nl_error', funnelData);
    }
  };

  if (status === 'success' || status === 'already') {
    return (
      <section className="py-20 px-4 bg-cream">
        <div className="max-w-2xl mx-auto text-center">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-aurora-green/15 mb-6">
            <CheckCircle className="w-8 h-8 text-forest" />
          </div>
          <h2 className="font-heading text-3xl sm:text-4xl text-night">
            {status === 'success' ? t.successHeadline : t.alreadyHeadline}
          </h2>
          <p className="text-warm-gray mt-4 leading-relaxed">
            {status === 'success' ? t.successBody : t.alreadyBody}
          </p>
        </div>
      </section>
    );
  }

  return (
    <section ref={sectionRef} className="py-20 px-4 bg-cream">
      <div className="max-w-2xl mx-auto text-center">
        <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-amber/10 mb-6">
          <Mail className="w-8 h-8 text-amber" />
        </div>

        <h2 className="font-heading text-3xl sm:text-4xl text-night [text-wrap:balance]">
          {t.heading}
        </h2>

        <p className="text-warm-gray mt-4 leading-relaxed [text-wrap:pretty]">{t.intro}</p>

        <><FounderByline tone="light" />
        {/* 4.11.2026 (Vesa: kenttä "leijuu" eikä "anna esimerkkiä taustalle"): Codexin 28.10. tumma laatikko pois, otsikko kentän yllä, kenttä ja nappi samalla rivillä, esimerkkiosoite kentässä. */}
        {/* 🔴 Tämän osion pohja on VAALEA kerma (bg-cream #FFFBF5), ei pinkki liukuväri: otsikko ja suostumus
            ovat siksi sivuston tummaa mustetta (text-night #0f172a), ei valkoista. Kentän reuna slate-400,
            koska valkoinen reuna katoaisi kermaan. */}
        <form onSubmit={handleSubmit}
          onInvalidCapture={(e) => {
            if (blockedTracked.current) return;
            blockedTracked.current = true;
            window.setTimeout(() => { blockedTracked.current = false; }, 400);
            const t = e.target as HTMLInputElement;
            track('nl_blocked', { ...funnelData, reason: t.type === 'checkbox' ? 'consent' : 'email' });
          }}
          className="mt-8 max-w-md mx-auto text-left"
        >
          <label htmlFor="nl-inline-email" className="block text-night font-semibold text-sm mb-2">
            {NL_EMAIL_LABEL[nlLang(lang)] ?? NL_EMAIL_LABEL.en}
          </label>
          {NL_LANG_NOTICE[nlLang(lang)] && (
            <p id="nl-inline-email-lang" className="text-night text-[13px] leading-relaxed -mt-1 mb-2">
              {NL_LANG_NOTICE[nlLang(lang)]}
            </p>
          )}
          <div className="flex flex-col sm:flex-row gap-3">
            <div className="relative flex-1 min-w-0">
              <Mail aria-hidden className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500 pointer-events-none" />
              <input
                id="nl-inline-email"
                aria-describedby={NL_LANG_NOTICE[nlLang(lang)] ? 'nl-inline-email-lang' : undefined}
                type="email"
                value={email}
                placeholder={NL_EMAIL_EXAMPLE[nlLang(lang)] ?? NL_EMAIL_EXAMPLE.en}
                onFocus={trackStart}
                onChange={(e) => setEmail(e.target.value)}
                required
                disabled={status === 'loading'}
                autoComplete="email"
                className="w-full h-14 bg-white text-slate-900 border border-slate-400 rounded-full pl-11 pr-4 text-base placeholder:text-slate-500 focus:outline-none focus:ring-4 focus:ring-amber/40 transition-shadow disabled:opacity-50"
              />
            </div>
            <button
              type="submit"
              disabled={status === 'loading'}
              className="h-14 shrink-0 bg-deep-night hover:bg-[#1E293B] text-white font-bold px-7 rounded-full shadow-md transition-colors text-base whitespace-nowrap inline-flex items-center justify-center gap-2 disabled:opacity-70"
            >
              {status === 'loading' ? (
                <>
                  <Loader2 className="w-4 h-4 animate-spin" />
                  {t.loading}
                </>
              ) : (
                t.cta
              )}
            </button>
          </div>
          {/* GDPR: suostumus on annettava aktiivisesti — ruutu ei ole esivalittu. */}
          <label className="mt-4 flex items-start gap-2.5 text-left text-xs text-night leading-relaxed cursor-pointer">
            <input
              type="checkbox"
              checked={consented}
              onFocus={trackStart}
              onChange={(e) => setConsented(e.target.checked)}
              required
              disabled={status === 'loading'}
              className="mt-0.5 w-4 h-4 shrink-0 rounded border-gray-300 accent-amber focus:outline-none focus:ring-2 focus:ring-amber/50 disabled:opacity-50"
            />
            <span>
              {NEWSLETTER_PRIVACY[lang].consent}{' '}
              <a
                href={`${LANG_PREFIX[lang] ? `/${LANG_PREFIX[lang]}` : ''}/privacy/`}
                target="_blank"
                rel="noopener"
                className="font-semibold text-night underline underline-offset-2"
              >
                {NEWSLETTER_PRIVACY[lang].privacy}
              </a>
            </span>
          </label>
        </form></>

        {status === 'error' && (
          <p className="mt-3 text-sm text-rose-600 inline-flex items-center justify-center gap-1.5">
            <AlertCircle className="w-4 h-4" />
            {errorMsg}
          </p>
        )}

        {/* Tietosuoja-asetuksen 13 art.: käsittelystä kerrotaan keruuhetkellä suostumusrivin linkillä
            (auditti 13.8.2026). Tässä toistettu "Näin käsittelemme tietojasi" -linkki poistettu 1.11.2026. */}
        <p className="text-xs text-warm-gray mt-4">
          {t.fineprint}
        </p>
      </div>
    </section>
  );
}
