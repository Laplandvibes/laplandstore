import { useState, type FormEvent } from 'react';
import { Mail, Loader2, CheckCircle, AlertCircle, Copy, Check } from 'lucide-react';
import { useLang } from '../lang';

import enCopy, { type CopyShape } from './Newsletter.copy.en';
import { useCopy } from '../i18n/useCopy';


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
} as const;

const cache: Partial<Record<import('../lang').Lang, CopyShape>> = { en: enCopy };

type Status = 'idle' | 'loading' | 'success' | 'already' | 'error';

export default function Newsletter() {
  const { lang } = useLang();
  const t = useCopy<CopyShape>(enCopy, lang, loaders, cache);

  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<Status>('idle');
  const [code, setCode] = useState<string | null>(null);
  const [errorMsg, setErrorMsg] = useState('');
  const [copied, setCopied] = useState(false);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (!email || !SUPABASE_URL || !SUPABASE_KEY) {
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
          body: JSON.stringify({ email, source: SOURCE }),
        }
      );
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || t.errorGeneric);

      if (data.alreadySubscribed) {
        setStatus('already');
      } else {
        setStatus('success');
        if (typeof data.discountCode === 'string') {
          setCode(data.discountCode);
        }
      }
      setEmail('');
    } catch (err: any) {
      setErrorMsg(err?.message || t.errorGeneric);
      setStatus('error');
    }
  };

  const copyCode = async () => {
    if (!code) return;
    try {
      await navigator.clipboard.writeText(code);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 1800);
    } catch {
      // ignore — user can still read the code visually
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

          {status === 'success' && code && (
            <div className="mt-8 max-w-md mx-auto rounded-2xl bg-white shadow-md px-6 py-5 border border-amber/30">
              <p className="text-[10px] font-bold uppercase tracking-[0.22em] text-amber mb-2">
                {t.codeLabel}
              </p>
              <button
                type="button"
                onClick={copyCode}
                className="font-heading text-2xl sm:text-[28px] tracking-[0.10em] text-night leading-none inline-flex items-center gap-3 hover:opacity-80 transition-opacity"
                aria-label={`${t.copy} ${code}`}
              >
                {code}
                {copied ? (
                  <Check className="w-5 h-5 text-forest" />
                ) : (
                  <Copy className="w-5 h-5 text-warm-gray/60" />
                )}
              </button>
              <p className="text-xs text-warm-gray mt-3 leading-relaxed">
                {copied ? t.copied : t.codeFootnote}
              </p>
            </div>
          )}
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

        <form
          onSubmit={handleSubmit}
          className="mt-8 flex flex-col sm:flex-row gap-3 max-w-md mx-auto"
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
        </form>

        {status === 'error' && (
          <p className="mt-3 text-sm text-rose-600 inline-flex items-center justify-center gap-1.5">
            <AlertCircle className="w-4 h-4" />
            {errorMsg}
          </p>
        )}

        <p className="text-xs text-warm-gray mt-4">{t.fineprint}</p>
      </div>
    </section>
  );
}
