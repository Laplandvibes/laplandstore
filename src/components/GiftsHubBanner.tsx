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

const COPY = {
  fi: {
    eyebrow: 'Verkkokauppa',
    heading: 'Verkkokauppamme on auki',
    body:
      'LaplandGifts on LaplandVibes-verkoston verkkokauppa: suomalaiset lahjat, herkut ja käsityöt kotiin toimitettuna, myös ulkomaille. Tämä sivu kertoo, mistä ostat Lapissa paikan päällä.',
    cta: 'Siirry osoitteeseen laplandgifts.com',
  },
  en: {
    eyebrow: 'The online shop',
    heading: 'Our online shop is open',
    body:
      'LaplandGifts is the network’s online shop: Finnish gifts, treats and crafts delivered to your door, abroad included. This page answers the other half of the question: where to buy in Lapland itself.',
    cta: 'Go to laplandgifts.com',
  },
  de: {
    eyebrow: 'Der Onlineshop',
    heading: 'Unser Onlineshop ist geöffnet',
    body:
      'LaplandGifts ist der Onlineshop des Netzwerks: finnische Geschenke, Delikatessen und Handwerk, nach Hause geliefert, auch ins Ausland. Diese Seite beantwortet die andere Hälfte der Frage, wo man in Lappland selbst einkauft.',
    cta: 'Zu laplandgifts.com',
  },
  ja: {
    eyebrow: 'オンラインショップ',
    heading: 'オンラインショップは開いています',
    body:
      'LaplandGifts はネットワークのオンラインショップです。フィンランドのギフト、食品、工芸品を海外にもお届けします。このページはもう半分の問い、ラップランドの現地でどこで買うかにお答えします。',
    cta: 'laplandgifts.com へ',
  },
  es: {
    eyebrow: 'La tienda en línea',
    heading: 'Nuestra tienda en línea está abierta',
    body:
      'LaplandGifts es la tienda en línea de la red: regalos, delicias y artesanía de Finlandia enviados a su casa, también al extranjero. Esta página responde a la otra mitad de la pregunta, dónde comprar en la propia Laponia.',
    cta: 'Ir a laplandgifts.com',
  },
  'pt-BR': {
    eyebrow: 'A loja online',
    heading: 'Nossa loja online está aberta',
    body:
      'A LaplandGifts é a loja online da rede: presentes, guloseimas e artesanato finlandês entregues na sua porta, inclusive no exterior. Esta página responde à outra metade da pergunta, onde comprar na própria Lapônia.',
    cta: 'Ir para laplandgifts.com',
  },
  'zh-CN': {
    eyebrow: '线上商店',
    heading: '我们的线上商店已经开张',
    body:
      'LaplandGifts 是本网络的线上商店：芬兰的礼品、美味与手工艺品送货到家，也寄往国外。本页回答的是另一半问题，在拉普兰当地该去哪里买。',
    cta: '前往 laplandgifts.com',
  },
  ko: {
    eyebrow: '온라인 상점',
    heading: '온라인 상점이 열려 있습니다',
    body:
      'LaplandGifts는 네트워크의 온라인 상점입니다. 핀란드의 선물, 먹거리, 수공예품을 해외까지 배송합니다. 이 페이지는 나머지 절반의 질문, 라플란드 현지에서 어디서 살 수 있는지에 답합니다.',
    cta: 'laplandgifts.com으로 이동',
  },
  fr: {
    eyebrow: 'La boutique en ligne',
    heading: 'Notre boutique en ligne est ouverte',
    body:
      'LaplandGifts est la boutique en ligne du réseau : cadeaux, gourmandises et artisanat finlandais livrés chez vous, y compris à l’étranger. Cette page répond à l’autre moitié de la question, où acheter en Laponie même.',
    cta: 'Aller sur laplandgifts.com',
  },
  it: {
    eyebrow: 'Il negozio online',
    heading: 'Il nostro negozio online è aperto',
    body:
      'LaplandGifts è il negozio online della rete: regali, specialità e artigianato finlandese consegnati a casa, estero compreso. Questa pagina risponde all’altra metà della domanda, dove comprare in Lapponia di persona.',
    cta: 'Vai su laplandgifts.com',
  },
  nl: {
    eyebrow: 'De webshop',
    heading: 'Onze webshop is open',
    body:
      'LaplandGifts is de webshop van het netwerk: Finse cadeaus, lekkernijen en ambacht thuisbezorgd, ook in het buitenland. Deze pagina beantwoordt de andere helft van de vraag, waar u in Lapland zelf koopt.',
    cta: 'Naar laplandgifts.com',
  },
  sv: {
    eyebrow: 'Webbutiken',
    heading: 'Vår webbutik är öppen',
    body:
      'LaplandGifts är nätverkets webbutik: finska presenter, delikatesser och hantverk hemlevererat, även utomlands. Den här sidan svarar på den andra halvan av frågan, var man handlar i Lappland på plats.',
    cta: 'Gå till laplandgifts.com',
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
