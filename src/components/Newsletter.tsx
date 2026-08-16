import { useState, type FormEvent } from 'react';
import { Mail, Loader2, CheckCircle, AlertCircle } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useLang, LANG_PREFIX, type Lang } from '../lang';

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
    lead: 'Cómo tratamos tus datos:',
    link: 'Política de Privacidad',
    consent:
      'Acepto recibir en mi correo el boletín de LaplandVibes (consejos de viaje, información de temporada y ofertas) y confirmo que tengo al menos 18 años.',
    privacy: 'Política de privacidad',
  },
  'pt-BR': {
    lead: 'Como tratamos seus dados:',
    link: 'Política de Privacidade',
    consent:
      'Aceito receber a newsletter da LaplandVibes no e-mail informado, com dicas de viagem, informações de temporada e ofertas. Tenho 18 anos ou mais.',
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
    lead: 'Come trattiamo i tuoi dati:',
    link: 'Informativa sulla privacy',
    consent:
      "Sì, desidero ricevere la newsletter di LaplandVibes (consigli di viaggio, novità stagionali e offerte) all'indirizzo indicato. Ho almeno 18 anni.",
    privacy: 'Informativa sulla privacy',
  },
  nl: {
    lead: 'Hoe wij met je gegevens omgaan:',
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
import FounderByline from '../../../shared/FounderByline';


const SUPABASE_URL = import.meta.env.VITE_SUPABASE_URL as string | undefined;
const SUPABASE_KEY = import.meta.env.VITE_SUPABASE_PUBLISHABLE_KEY as string | undefined;
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

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (!email || !consented || !SUPABASE_URL || !SUPABASE_KEY) {
      setErrorMsg(t.errorGeneric);
      setStatus('error');
      return;
    }
    setStatus('loading');
    setErrorMsg('');
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
      } else {
        setStatus('success');
      }
      setEmail('');
    } catch (err: any) {
      setErrorMsg(err?.message || t.errorGeneric);
      setStatus('error');
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
    <section className="py-20 px-4 bg-cream">
      <div className="max-w-2xl mx-auto text-center">
        <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-amber/10 mb-6">
          <Mail className="w-8 h-8 text-amber" />
        </div>

        <h2 className="font-heading text-3xl sm:text-4xl text-night [text-wrap:balance]">
          {t.heading}
        </h2>

        <p className="text-warm-gray mt-4 leading-relaxed [text-wrap:pretty]">{t.intro}</p>

        <><FounderByline tone="light" />
        <form
          onSubmit={handleSubmit}
          className="mt-8 flex flex-col sm:flex-row sm:flex-wrap gap-3 max-w-md mx-auto"
        >
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder={t.placeholder}
            aria-label={t.placeholder}
            required
            disabled={status === 'loading'}
            autoComplete="email"
            className="flex-1 px-5 py-3 rounded-full border border-gray-300 bg-white text-night placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-amber/50 text-base disabled:opacity-50"
          />
          <button
            type="submit"
            disabled={status === 'loading'}
            className="px-8 py-3 bg-amber text-white font-bold rounded-full hover:bg-amber-light transition-colors shadow-md inline-flex items-center justify-center gap-2 disabled:opacity-70"
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
          {/* GDPR: suostumus on annettava aktiivisesti — ruutu ei ole esivalittu. */}
          <label className="w-full flex items-start gap-2.5 text-left text-xs text-warm-gray leading-relaxed">
            <input
              type="checkbox"
              checked={consented}
              onChange={(e) => setConsented(e.target.checked)}
              required
              disabled={status === 'loading'}
              className="mt-0.5 w-4 h-4 shrink-0 rounded border-gray-300 accent-amber focus:outline-none focus:ring-2 focus:ring-amber/50 disabled:opacity-50"
            />
            <span>
              {NEWSLETTER_PRIVACY[lang].consent}{' '}
              <a
                href={`${LANG_PREFIX[lang] ? `/${LANG_PREFIX[lang]}` : ''}/privacy`}
                target="_blank"
                rel="noopener"
                className="underline hover:text-amber"
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

        {/* Tietosuoja-asetuksen 13 art.: käsittelystä on kerrottava
            keruuhetkellä, ei vasta alatunnisteen linkin takana.
            Auditti 13.8.2026: lomake keräsi sähköpostit linkittämättä
            selosteeseen lainkaan. */}
        <p className="text-xs text-warm-gray mt-4">
          {t.fineprint}{' '}
          {NEWSLETTER_PRIVACY[lang].lead}{' '}
          <Link
            to={`${LANG_PREFIX[lang] ? `/${LANG_PREFIX[lang]}` : ''}/privacy`}
            className="underline hover:text-amber"
          >
            {NEWSLETTER_PRIVACY[lang].link}
          </Link>
        </p>
      </div>
    </section>
  );
}
