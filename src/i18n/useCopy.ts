/**
 * Generic lazy per-component copy loader.
 *
 * Each component supplies the EN block synchronously (bundled) as the fallback,
 * plus a `loaders` map from Lang -> dynamic-import-of-the-locale-chunk.
 *
 * On first render of a non-EN locale, the EN copy is returned. The hook kicks
 * off the dynamic import; when it resolves, the component re-renders with the
 * locale-specific copy. EN renders synchronously.
 */
import { useEffect, useState } from 'react';
import type { Lang } from '../lang';

type Loader<T> = () => Promise<{ default: T }>;

export function useCopy<T>(
  enSync: T,
  lang: Lang,
  loaders: Partial<Record<Lang, Loader<T>>>,
  cache: Partial<Record<Lang, T>>,
): T {
  // Seed EN cache once.
  if (!cache.en) cache.en = enSync;

  const [copy, setCopy] = useState<T>(() => cache[lang] ?? enSync);

  useEffect(() => {
    const cached = cache[lang];
    if (cached) {
      setCopy(cached);
      return;
    }
    const loader = loaders[lang];
    if (!loader) {
      setCopy(enSync);
      return;
    }
    let cancelled = false;
    loader().then((mod) => {
      cache[lang] = mod.default;
      if (!cancelled) setCopy(mod.default);
    });
    return () => {
      cancelled = true;
    };
  }, [lang, enSync, loaders, cache]);

  return copy;
}
