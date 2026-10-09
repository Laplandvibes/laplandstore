import { PHOTO_CREDITS, CREDIT_WORDS } from '../data/photoCredits'
import { useLang } from '../lang'

/**
 * One credit line per page for every open-licence / stock photograph shown on it. The marks on the pictures are text
 * only, so the links CC BY / BY-SA require live here: each title links to the file page at the source, each licence
 * to its deed. Titles are the source's own, so the line needs no translation beyond the prefix. Grouped by author +
 * licence + cropped. A cropped file says so (CC BY §3(a)(1)(B)). Receipts: data/photoCredits.ts.
 */
export default function PageCredits({ images, className = '' }: { images: string[]; className?: string }) {
  const { lang } = useLang()
  const w = CREDIT_WORDS[lang] ?? CREDIT_WORDS.en
  const seen = new Set<string>()
  const groups: { author: string; license: string; licenseUrl: string; cropped: boolean; rows: { key: string; title: string; url: string }[] }[] = []
  for (const key of images) {
    const c = PHOTO_CREDITS[key]
    if (!c || seen.has(key)) continue
    seen.add(key)
    const g = groups.find((x) => x.author === c.author && x.license === c.license && x.cropped === !!c.cropped)
    const row = { key, title: c.title, url: c.sourceUrl }
    if (g) g.rows.push(row)
    else groups.push({ author: c.author, license: c.license, licenseUrl: c.licenseUrl, cropped: !!c.cropped, rows: [row] })
  }
  if (!groups.length) return null
  const link = 'underline decoration-night/30 underline-offset-2 hover:text-night'
  return (
    <div className={`mx-auto max-w-6xl px-4 py-6 text-sm leading-relaxed text-night/75 ${className}`} data-photo-credits>
      <p>
        {w.photos}:{' '}
        {groups.map((g, i) => (
          <span key={g.author + g.license + g.cropped}>
            {i > 0 && '; '}
            {g.rows.map((r, k) => (
              <span key={r.key}>
                {k > 0 && ', '}
                <a href={r.url} target="_blank" rel="noopener" className={link}>
                  {r.title}
                </a>
              </span>
            ))}
            : {g.author},{' '}
            <a href={g.licenseUrl} target="_blank" rel="license noopener" className={`${link} whitespace-nowrap`}>
              {g.license}
            </a>
            {g.cropped && ` (${w.cropped})`}
          </span>
        ))}
      </p>
    </div>
  )
}
