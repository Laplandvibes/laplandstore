// Types for pageMeta.mjs (titles and meta descriptions shared by scripts/generate-prerender-meta.mjs and the pages).
export type PageMetaLang = 'en' | 'fi' | 'de' | 'ja' | 'es' | 'pt-BR' | 'zh-CN' | 'ko' | 'fr' | 'it' | 'nl' | 'sv';
export type PageMetaPath = '/' | '/privacy' | '/terms' | '/cookie-policy';
export const PAGE_META: Record<PageMetaPath, Record<PageMetaLang, { title: string; description: string }>>;
