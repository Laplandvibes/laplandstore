import { ArrowUpRight, Clock, MapPin } from 'lucide-react';
import { HUB_PICKS, GYG_PRICE_AS_OF, gygHref } from '../shared/gyg/picks';
import { useLang, type Lang } from '../lang';

/**
 * Aktiviteetit hakemistosivulla.
 *
 * 🔴 Miksi (Vesa 5.9.2026): "sitten voisi olla juuri ne aktiviteetit siellä
 * laplandstoressa, että aidosti mietittäisiin mitä se asiakas etsii ja
 * koitetaan helpottaa kaikkea." Lukija, joka etsii Lapin putiikkeja, on
 * matkalla Lappiin; retki on sama päätös kuin lahja, vain toinen kauppa.
 *
 * Neljä verkoston verifioitua GetYourGuide-tuotetta (shared/gyg/picks.ts,
 * HUB_PICKS: revontulet, Sampo, husky, Korouoma). Linkki kulkee Workerin
 * kautta gygHref():llä omalla sid:llä, jotta klikit kirjautuvat tälle
 * sivustolle eivätkä hubille. Hinta on GetYourGuiden oma lukupäivänä, ja
 * päivä sanotaan aina hinnan vieressä. Ei kuvia: GYG:n kuvat kuuluvat retkien
 * järjestäjille, eikä hakemistosivulla ole omia retkikuvia.
 */

interface Copy {
  eyebrow: string;
  title: string;
  intro: (date: string) => string;
  from: (price: string) => string;
  cta: string;
}

const COPY: Record<Lang, Copy> = {
  fi: { eyebrow: 'Kun olet perillä', title: 'Mitä Lapissa tehdään', intro: (d) => `Neljä retkeä, jotka varataan GetYourGuidesta. Hinnat ovat GetYourGuiden omia, luettu ${d}.`, from: (p) => `alk. ${p}`, cta: 'Katso saatavuus' },
  en: { eyebrow: 'Once you are there', title: 'What to do in Lapland', intro: (d) => `Four tours booked through GetYourGuide. Prices are GetYourGuide's own, read on ${d}.`, from: (p) => `from ${p}`, cta: 'Check availability' },
  de: { eyebrow: 'Wenn Sie dort sind', title: 'Was man in Lappland unternimmt', intro: (d) => `Vier Touren, gebucht über GetYourGuide. Die Preise sind die von GetYourGuide, gelesen am ${d}.`, from: (p) => `ab ${p}`, cta: 'Verfügbarkeit prüfen' },
  sv: { eyebrow: 'När du är framme', title: 'Vad man gör i Lappland', intro: (d) => `Fyra turer som bokas via GetYourGuide. Priserna är GetYourGuides egna, lästa ${d}.`, from: (p) => `från ${p}`, cta: 'Se tillgänglighet' },
  fr: { eyebrow: 'Une fois sur place', title: 'Que faire en Laponie', intro: (d) => `Quatre excursions réservées via GetYourGuide. Les prix sont ceux de GetYourGuide, relevés le ${d}.`, from: (p) => `dès ${p}`, cta: 'Voir les disponibilités' },
  es: { eyebrow: 'Una vez allí', title: 'Qué hacer en Laponia', intro: (d) => `Cuatro excursiones que se reservan en GetYourGuide. Los precios son los de GetYourGuide, leídos el ${d}.`, from: (p) => `desde ${p}`, cta: 'Ver disponibilidad' },
  it: { eyebrow: 'Una volta arrivati', title: 'Cosa fare in Lapponia', intro: (d) => `Quattro escursioni prenotate su GetYourGuide. I prezzi sono quelli di GetYourGuide, letti il ${d}.`, from: (p) => `da ${p}`, cta: 'Vedi disponibilità' },
  nl: { eyebrow: 'Eenmaal daar', title: 'Wat te doen in Lapland', intro: (d) => `Vier tochten geboekt via GetYourGuide. Prijzen zijn die van GetYourGuide, gelezen op ${d}.`, from: (p) => `vanaf ${p}`, cta: 'Beschikbaarheid bekijken' },
  'pt-BR': { eyebrow: 'Quando chegar lá', title: 'O que fazer na Lapônia', intro: (d) => `Quatro passeios reservados pelo GetYourGuide. Os preços são do GetYourGuide, lidos em ${d}.`, from: (p) => `a partir de ${p}`, cta: 'Ver disponibilidade' },
  ja: { eyebrow: '現地に着いたら', title: 'ラップランドでできること', intro: (d) => `GetYourGuideで予約する4つのツアー。価格はGetYourGuideのもので、${d}に読み取りました。`, from: (p) => `${p}から`, cta: '空き状況を見る' },
  'zh-CN': { eyebrow: '到达之后', title: '在拉普兰做什么', intro: (d) => `四条通过GetYourGuide预订的行程。价格以GetYourGuide为准，读取于${d}。`, from: (p) => `${p}起`, cta: '查看可订日期' },
  ko: { eyebrow: '도착한 뒤에는', title: '라플란드에서 할 것', intro: (d) => `GetYourGuide로 예약하는 네 가지 투어. 가격은 GetYourGuide 기준이며 ${d}에 읽었습니다.`, from: (p) => `${p}부터`, cta: '예약 가능 여부 보기' },
};

const REL = 'sponsored nofollow noopener';

export default function ActivitiesRail() {
  const { lang } = useLang();
  const t = COPY[lang];
  return (
    <section className="bg-cream px-4 py-12 sm:py-16" aria-labelledby="activities-title">
      <div className="mx-auto max-w-5xl">
        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-vibe-pink">{t.eyebrow}</p>
        <h2 id="activities-title" className="mt-1 font-heading text-4xl text-night sm:text-5xl">{t.title}</h2>
        <p className="mt-3 max-w-2xl text-slate-600">{t.intro(GYG_PRICE_AS_OF)}</p>
        <ul className="mt-8 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {HUB_PICKS.map((p, i) => (
            <li key={p.path} className="flex flex-col rounded-[24px] border border-slate-200/70 bg-white p-5 shadow-[0_18px_40px_-26px_rgba(15,23,42,0.35)]">
              <span className="inline-flex items-center gap-1.5 text-[11px] font-semibold uppercase tracking-[0.18em] text-slate-500">
                <MapPin className="h-3.5 w-3.5" aria-hidden="true" />
                {p.place}
              </span>
              <h3 className="mt-2 text-base font-semibold leading-snug text-night">{p.title}</h3>
              {p.duration && (
                <span className="mt-2 inline-flex items-center gap-1.5 text-xs text-slate-500">
                  <Clock className="h-3.5 w-3.5" aria-hidden="true" />
                  {p.duration}
                </span>
              )}
              <div className="mt-auto pt-4">
                {p.price && <p className="text-sm font-semibold text-night">{t.from(p.price)}</p>}
                <a
                  href={gygHref(p, lang, `store_home_activity_${i + 1}`)}
                  target="_blank"
                  rel={REL}
                  className="mt-2 inline-flex items-center gap-1.5 text-sm font-semibold text-vibe-pink hover:underline"
                >
                  {t.cta}
                  <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
                </a>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
