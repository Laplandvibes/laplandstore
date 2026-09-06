import { Store, ArrowRight } from 'lucide-react';
import { useLang } from '../lang';

/**
 * Cross-link to laplandgifts.com, the network's online shop.
 *
 * 🔴 REWRITTEN 2026-08-10 (Vesa: "miksi meillä edelleen on jokin coming soon").
 * Every one of the twelve languages announced a shop that was "in the works"
 * and promised that "until it opens, every link here goes straight to a local
 * boutique". laplandgifts.com OPENED ON 2026-07-31 and has been a full
 * multi-page shop since. So this block had been telling twelve languages
 * something untrue for ten days, and it was doing it on the page whose entire
 * job is to send people to that shop.
 *
 * The pattern to watch for: copy written in the future tense outlives the
 * launch it was written for. Anything that says "coming", "soon" or "in the
 * works" needs an owner and a date, or it becomes a lie on a schedule.
 *
 * 🔴 Colours corrected in the same pass. The gradient ended on #064e3b, a dark
 * emerald that is in no network palette, with an amber radial over it. Now:
 * deep-night → slate → finland-blue, with pink and arctic-cyan washes. Those
 * are the network's actual tokens.
 *
 * 🔴 `noreferrer` removed. laplandgifts.com is OUR OWN site and a registered
 * Daisycon media; stripping the Referer on a network link throws away the
 * attribution that tells us the traffic came from store. Same fix as the
 * footer network links (monorepo 9c7bca9).
 */

/**
 * 🔴 REWRITTEN AGAIN 2026-09-06 (Vesa: "eikö tämä ole aika tuhraa? kuka edes
 * tiesi että se oli kiinni?"). The 10.8. fix replaced "coming soon" with "our
 * shop is open" — but "open" is only news to someone who thought it was
 * closed, and nobody did. An announcement is not a benefit. The heading now
 * says what the reader gets (a gift delivered home) and the body draws the
 * line between the two sites in one breath: this page = where to buy in
 * Lapland, LaplandGifts = the rest. The eyebrow is the domain itself, so the
 * button's destination is never a surprise.
 */
const COPY = {
  fi: {
    eyebrow: 'laplandgifts.com',
    heading: 'Lahja kotiin toimitettuna',
    body:
      'Kaiken ei tarvitse mahtua matkalaukkuun. LaplandGifts toimittaa suomalaiset lahjat, herkut ja käsityöt kotiovelle, myös ulkomaille. Tämä sivu kertoo, mistä ostat paikan päällä; loput hoitaa LaplandGifts.',
    cta: 'Selaa lahjoja',
  },
  en: {
    eyebrow: 'laplandgifts.com',
    heading: 'Gifts delivered to your door',
    body:
      'Not everything has to fit in the suitcase. LaplandGifts ships Finnish gifts, treats and crafts to your home, abroad included. This page tells you where to buy in Lapland itself; LaplandGifts handles the rest.',
    cta: 'Browse the gifts',
  },
  de: {
    eyebrow: 'laplandgifts.com',
    heading: 'Geschenke bis vor die Haustür',
    body:
      'Nicht alles muss in den Koffer passen. LaplandGifts liefert finnische Geschenke, Delikatessen und Handwerk nach Hause, auch ins Ausland. Diese Seite zeigt, wo Sie in Lappland selbst einkaufen; den Rest übernimmt LaplandGifts.',
    cta: 'Geschenke ansehen',
  },
  ja: {
    eyebrow: 'laplandgifts.com',
    heading: 'ギフトはご自宅までお届け',
    body:
      'すべてをスーツケースに詰める必要はありません。LaplandGifts はフィンランドのギフト、食品、工芸品を海外を含むご自宅までお届けします。このページは現地でどこで買うかをご案内し、残りは LaplandGifts が引き受けます。',
    cta: 'ギフトを見る',
  },
  es: {
    eyebrow: 'laplandgifts.com',
    heading: 'Regalos entregados en su casa',
    body:
      'No todo tiene que caber en la maleta. LaplandGifts envía regalos, delicias y artesanía de Finlandia a su domicilio, también al extranjero. Esta página le dice dónde comprar en la propia Laponia; del resto se ocupa LaplandGifts.',
    cta: 'Ver los regalos',
  },
  'pt-BR': {
    eyebrow: 'laplandgifts.com',
    heading: 'Presentes entregues na sua porta',
    body:
      'Nem tudo precisa caber na mala. A LaplandGifts envia presentes, guloseimas e artesanato finlandês para a sua casa, inclusive no exterior. Esta página mostra onde comprar na própria Lapônia; do resto cuida a LaplandGifts.',
    cta: 'Ver os presentes',
  },
  'zh-CN': {
    eyebrow: 'laplandgifts.com',
    heading: '礼物直接送到家',
    body:
      '不必什么都塞进行李箱。LaplandGifts 把芬兰的礼品、美味和手工艺品送到您家，也寄往国外。本页告诉您在拉普兰当地去哪里买，其余的交给 LaplandGifts。',
    cta: '挑选礼物',
  },
  ko: {
    eyebrow: 'laplandgifts.com',
    heading: '선물은 집으로 배송',
    body:
      '모든 것을 여행 가방에 넣을 필요는 없습니다. LaplandGifts가 핀란드의 선물, 먹거리, 수공예품을 해외까지 집으로 배송합니다. 이 페이지는 라플란드 현지에서 어디서 살지 알려 드리고, 나머지는 LaplandGifts가 맡습니다.',
    cta: '선물 보기',
  },
  fr: {
    eyebrow: 'laplandgifts.com',
    heading: 'Des cadeaux livrés chez vous',
    body:
      'Tout ne doit pas tenir dans la valise. LaplandGifts livre cadeaux, gourmandises et artisanat finlandais à domicile, y compris à l’étranger. Cette page vous dit où acheter en Laponie même ; LaplandGifts s’occupe du reste.',
    cta: 'Voir les cadeaux',
  },
  it: {
    eyebrow: 'laplandgifts.com',
    heading: 'Regali consegnati a casa',
    body:
      'Non tutto deve entrare in valigia. LaplandGifts consegna regali, specialità e artigianato finlandese a casa, estero compreso. Questa pagina dice dove comprare in Lapponia di persona; al resto pensa LaplandGifts.',
    cta: 'Vedi i regali',
  },
  nl: {
    eyebrow: 'laplandgifts.com',
    heading: 'Cadeaus thuisbezorgd',
    body:
      'Niet alles hoeft in de koffer te passen. LaplandGifts bezorgt Finse cadeaus, lekkernijen en ambacht aan huis, ook in het buitenland. Deze pagina vertelt waar u in Lapland zelf koopt; de rest regelt LaplandGifts.',
    cta: 'Bekijk de cadeaus',
  },
  sv: {
    eyebrow: 'laplandgifts.com',
    heading: 'Presenter levererade hem',
    body:
      'Allt behöver inte få plats i resväskan. LaplandGifts levererar finska presenter, delikatesser och hantverk hem till dig, även utomlands. Den här sidan berättar var du handlar i Lappland på plats; resten sköter LaplandGifts.',
    cta: 'Se presenterna',
  },
} as const;

export default function GiftsHubBanner() {
  const { lang } = useLang();
  const t = COPY[lang];

  return (
    <section className="px-4 py-12 sm:py-16 bg-cream">
      <div className="max-w-5xl mx-auto rounded-3xl overflow-hidden relative shadow-md">
        <div
          className="absolute inset-0"
          style={{
            background:
              'linear-gradient(135deg, #0F172A 0%, #1e293b 45%, #002F6C 100%)',
          }}
        />
        <div
          className="absolute inset-0 opacity-50"
          style={{
            background:
              'radial-gradient(circle at 20% 30%, rgba(236,72,153,0.32), transparent 55%), radial-gradient(circle at 80% 70%, rgba(6,182,212,0.28), transparent 55%)',
          }}
        />

        <div className="relative px-6 sm:px-10 py-10 sm:py-14 grid grid-cols-1 md:grid-cols-[1fr_auto] gap-6 md:gap-10 items-center">
          <div>
            <div className="inline-flex items-center gap-2 text-[#7DD3FC] text-xs font-bold tracking-[0.25em] uppercase">
              <Store className="w-3.5 h-3.5" />
              {t.eyebrow}
            </div>
            <h2 className="font-heading text-3xl sm:text-4xl text-white mt-3 leading-tight [text-wrap:balance]">
              {t.heading}
            </h2>
            <p className="text-white/75 text-base mt-4 leading-relaxed max-w-xl [text-wrap:pretty]">
              {t.body}
            </p>
          </div>

          <a
            href="https://laplandgifts.com"
            target="_blank"
            rel="noopener"
            className="group inline-flex items-center gap-2 px-7 py-3.5 bg-[#EC4899] text-white font-bold rounded-full hover:bg-[#DB2777] transition-colors shadow-lg whitespace-nowrap min-h-[44px]"
          >
            {t.cta}
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </a>
        </div>
      </div>
    </section>
  );
}
