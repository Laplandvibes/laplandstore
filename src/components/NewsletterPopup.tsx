import SharedNewsletterPopup from '../shared/NewsletterPopup';
import { POPUP_THEME, POPUP_COPY } from './newsletterPopupSite';
// 🔴 23.9.2026 (Vesa: "tekstit ja värimaailma sivustokohtaisiksi" → "kyllä, vie kaikille"):
// tämän sivuston oma teksti ja väri tulevat ./newsletterPopupSite.ts:stä. Alla oleva
// 9.8.2026 kielto koski katteettomia lupauksia (hälytykset, lähetystahti), ei
// sivustokohtaista tekstiä. Lupauskielto pätee yhä.
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
      theme={POPUP_THEME}
      copy={POPUP_COPY}
      lang={lang as 'en' | 'fi' | 'de' | 'ja' | 'es' | 'pt-BR' | 'zh-CN' | 'ko' | 'fr' | 'it' | 'nl' | 'sv'}
      siteId="laplandstore"
      brandWord="STORE"
      supabaseUrl={SUPABASE_URL}
      supabaseAnonKey={SUPABASE_KEY}
    />
  );
}
