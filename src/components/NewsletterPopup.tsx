import SharedNewsletterPopup from '../../../shared/NewsletterPopup';
import { useLang } from '../lang';

const SUPABASE_URL = import.meta.env.VITE_SUPABASE_URL as string | undefined;
const SUPABASE_KEY = import.meta.env.VITE_SUPABASE_PUBLISHABLE_KEY as string | undefined;

// Founder popup (2026-08-09): the per-locale dict/headline tables are gone —
// the shared founder default (Vesa + spiral avatar + social links) is the
// network standard. Do not re-add per-site copy overrides here.
export default function NewsletterPopup() {
  const { lang } = useLang();
  return (
    <SharedNewsletterPopup
      lang={lang as 'en' | 'fi' | 'de' | 'ja' | 'es' | 'pt-BR' | 'zh-CN' | 'ko' | 'fr' | 'it' | 'nl' | 'sv'}
      siteId="laplandstore"
      brandWord="STORE"
      supabaseUrl={SUPABASE_URL}
      supabaseAnonKey={SUPABASE_KEY}
    />
  );
}
