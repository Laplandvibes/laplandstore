import { ArrowRight, MapPin, ShoppingBag } from 'lucide-react';
import { useLang } from '../lang';
import type { Lang } from '../lang';
import {
  BOUTIQUES, TOWN_NAMES, giftsBoutiqueUrl, giftsDirectoryUrl,
  type StoreBoutique,
} from '../data/boutiques.generated';

import enCopy, { type CopyShape } from './LocalShops.copy.en';
import { useCopy } from '../i18n/useCopy';

/**
 * Putiikkilista. Data on GENEROITU laplandgiftsista (boutiques.generated.ts):
 * kaksi käsin ylläpidettyä listaa ajautuisi erilleen, ja niin kävikin. Tämä
 * sivu lupasi "16 verifioitua putiikkia" kun niitä oli 15, ja kolme listausta
 * oli kuollut kuukausia (yksi domain oli myynnissä GoDaddyssa).
 *
 * 🔴 Kortti näyttää VAIN nimen, paikkakunnan ja myyntikanavan. Kuvaukset
 * asuvat giftsissä, jottei sama teksti ole kahdella domainilla: se olisi
 * duplikaattisisältöä ja söisi storen oman sijoituksen. Storen tehtävä on
 * ohjata hakemistoon, ei toistaa sitä.
 *
 * 🔴 Uloslinkitys yrityksen omille sivuille tapahtuu giftsin putiikkisivulla,
 * jolloin se on mitattavissa yhdessä paikassa eikä UTM-parametreja tarvitse
 * toistaa täällä.
 */

function BoutiqueCard({
  boutique,
  lang,
  onlineBadge,
  physicalBadge,
}: {
  boutique: StoreBoutique;
  lang: Lang;
  onlineBadge: string;
  physicalBadge: string;
}) {
  const place = TOWN_NAMES[lang][boutique.town];
  return (
    <a
      href={giftsBoutiqueUrl(boutique.slug, lang)}
      className="group flex flex-col justify-between gap-2 rounded-2xl bg-white p-4 shadow-sm transition-shadow hover:shadow-md min-h-[7rem]"
    >
      <div className="flex flex-wrap gap-1">
        {boutique.hasOnlineStore && (
          <span className="rounded-full bg-forest/10 px-2 py-0.5 text-[9px] font-semibold tracking-wide text-forest">
            {onlineBadge}
          </span>
        )}
        {boutique.hasPhysicalStore && (
          <span className="rounded-full bg-night/10 px-2 py-0.5 text-[9px] font-semibold tracking-wide text-night">
            {physicalBadge}
          </span>
        )}
      </div>

      <div>
        {/* 🔴 Nimi on font-bodylla eikä font-headingilla: otsikkofontti on
            Bebas Neue eli versaali, ja "SAMEKKI" tai "MARIELLEN VAATEHUONE"
            olisi lukukelvoton. Sama päätös kuin giftsin tuotenimissä. */}
        <h4 className="font-body font-semibold text-base leading-tight text-night transition-colors group-hover:text-amber">
          {boutique.name}
        </h4>
        <p className="mt-0.5 text-xs text-warm-gray">
          {place}
          {boutique.district ? `, ${boutique.district}` : ''}
        </p>
      </div>
    </a>
  );
}

const loaders = {
  fi: () => import('./LocalShops.copy.fi'),
  de: () => import('./LocalShops.copy.de'),
  ja: () => import('./LocalShops.copy.ja'),
  es: () => import('./LocalShops.copy.es'),
  'pt-BR': () => import('./LocalShops.copy.ptBR'),
  'zh-CN': () => import('./LocalShops.copy.zhCN'),
  ko: () => import('./LocalShops.copy.ko'),
  fr: () => import('./LocalShops.copy.fr'),
  it: () => import('./LocalShops.copy.it'),
  nl: () => import('./LocalShops.copy.nl'),
  sv: () => import('./LocalShops.copy.sv'),
} as const;

const cache: Partial<Record<Lang, CopyShape>> = { en: enCopy };

export default function LocalShops() {
  const { lang } = useLang();
  const t = useCopy<CopyShape>(enCopy, lang, loaders, cache);

  // 🔴 Ryhmät ovat toisensa poissulkevat. Aiempi versio suodatti
  // `hasOnlineStore` ja `hasPhysicalStore` erikseen, jolloin useimmat
  // putiikit näkyivät sivulla kahdesti; koodin oma kommentti myönsi sen
  // ("Some appear in both lists"). Jako menee sen mukaan mitä lukijan pitää
  // tietää: saanko tämän kotiin, vai onko mentävä paikalle.
  const online = BOUTIQUES.filter((b) => b.hasOnlineStore);
  const physicalOnly = BOUTIQUES.filter((b) => b.hasPhysicalStore && !b.hasOnlineStore);

  return (
    <section id="putiikit" className="bg-cream px-4 py-20">
      <div className="mx-auto max-w-6xl">
        <div className="mb-14 text-center">
          <span className="font-body text-sm uppercase tracking-[0.2em] text-forest">
            {t.eyebrow}
          </span>
          <h2 className="mt-2 font-heading text-4xl text-night [text-wrap:balance] sm:text-5xl">
            {t.heading}
          </h2>
          {/* Luku luetaan datasta. Copyyn kirjoitettu luku ajautui erilleen
              todellisuudesta: badge lupasi 16 kun putiikkeja oli 15. */}
          <p className="mx-auto mt-4 max-w-xl text-warm-gray [text-wrap:pretty]">
            {t.sub(BOUTIQUES.length)}
          </p>
        </div>

        {online.length > 0 && (
          <>
            <h3 className="mb-4 flex items-center gap-2 font-heading text-2xl text-night">
              <ShoppingBag className="h-5 w-5 text-amber" />
              {t.onlineHeading}
            </h3>
            <div className="mb-12 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {online.map((b) => (
                <BoutiqueCard
                  key={b.slug}
                  boutique={b}
                  lang={lang}
                  onlineBadge={t.onlineBadge}
                  physicalBadge={t.physicalBadge}
                />
              ))}
            </div>
          </>
        )}

        {physicalOnly.length > 0 && (
          <>
            <h3 className="mb-2 flex items-center gap-2 font-heading text-2xl text-night">
              <MapPin className="h-5 w-5 text-forest" />
              {t.physicalHeading}
            </h3>
            <p className="mb-6 max-w-xl text-sm text-warm-gray">{t.physicalSub}</p>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {physicalOnly.map((b) => (
                <BoutiqueCard
                  key={b.slug}
                  boutique={b}
                  lang={lang}
                  onlineBadge={t.onlineBadge}
                  physicalBadge={t.physicalBadge}
                />
              ))}
            </div>
          </>
        )}

        <div className="mt-10 text-center">
          <a
            href={giftsDirectoryUrl(lang)}
            className="inline-flex min-h-11 items-center gap-2 font-body font-semibold text-amber hover:underline"
          >
            {t.directoryCta}
            <ArrowRight className="h-4 w-4 shrink-0" aria-hidden="true" />
          </a>
        </div>

        <div className="mt-8 rounded-2xl bg-white p-6 text-center shadow-sm">
          <p className="mb-2 font-heading text-xl text-night">{t.ctaHeading}</p>
          <p className="mb-4 text-sm text-warm-gray">{t.ctaBody}</p>
          <a
            href={`mailto:info@laplandvibes.com?subject=${encodeURIComponent(t.ctaSubject)}`}
            className="inline-flex min-h-11 items-center gap-2 rounded-full bg-amber px-6 font-bold text-white transition-colors hover:bg-amber-light"
          >
            {t.ctaButton}
          </a>
        </div>
      </div>
    </section>
  );
}
