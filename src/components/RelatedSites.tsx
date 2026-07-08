import { Gift, TreePine, MapPin, ArrowUpRight } from 'lucide-react';
import { useLang, type Lang } from '../lang';

/**
 * Contextual sibling links into the LaplandVibes network. External links use
 * rel="noopener" (NOT affiliate rel) — these are editorial, not monetised.
 * Each href is a DEEP page that delivers the card's promise, NOT the sibling
 * homepage (Vesa 2026-07-08). Verified live 200 + matching title:
 * christmas→/christmas-markets/, visit→/itineraries/. laplandgifts stays on its
 * homepage (that IS the gift-inspiration hub; site has no deeper category pages).
 */
type Card = { href: string; label: string; body: string };

const ICONS = [Gift, TreePine, MapPin] as const;

const COPY: Record<Lang, { eyebrow: string; h2: string; cards: Card[] }> = {
  en: {
    eyebrow: 'More from the network',
    h2: 'Keep exploring Lapland',
    cards: [
      { href: 'https://laplandgifts.com', label: 'Lapland gift ideas', body: 'Curated gift inspiration from across Finnish Lapland.' },
      { href: 'https://laplandchristmas.com/christmas-markets/', label: 'Christmas market shopping', body: 'Festive markets, makers and seasonal finds in the North.' },
      { href: 'https://laplandvisit.com/itineraries/', label: 'Plan a Lapland visit', body: 'Where to go, when to travel and how to get around.' },
    ],
  },
  fi: {
    eyebrow: 'Lisää verkostosta',
    h2: 'Jatka Lapin tutkimista',
    cards: [
      { href: 'https://laplandgifts.com', label: 'Lahjaideoita Lapista', body: 'Käsin koottuja lahjaideoita ympäri Suomen Lappia.' },
      { href: 'https://laplandchristmas.com/christmas-markets/', label: 'Joulumarkkinaostokset', body: 'Joulumarkkinat, tekijät ja kauden löydöt pohjoisessa.' },
      { href: 'https://laplandvisit.com/itineraries/', label: 'Suunnittele Lapin matka', body: 'Minne mennä, milloin matkustaa ja miten liikkua.' },
    ],
  },
  de: {
    eyebrow: 'Mehr aus dem Netzwerk',
    h2: 'Lappland weiter entdecken',
    cards: [
      { href: 'https://laplandgifts.com', label: 'Geschenkideen aus Lappland', body: 'Kuratierte Geschenkideen aus ganz Finnisch-Lappland.' },
      { href: 'https://laplandchristmas.com/christmas-markets/', label: 'Einkauf auf Weihnachtsmärkten', body: 'Weihnachtsmärkte, Hersteller und saisonale Funde im Norden.' },
      { href: 'https://laplandvisit.com/itineraries/', label: 'Lappland-Reise planen', body: 'Wohin, wann reisen und wie man sich fortbewegt.' },
    ],
  },
  ja: {
    eyebrow: 'ネットワークの他のサイト',
    h2: 'ラップランドをさらに知る',
    cards: [
      { href: 'https://laplandgifts.com', label: 'ラップランドの贈り物アイデア', body: 'フィンランド・ラップランド各地から厳選した贈り物のヒント。' },
      { href: 'https://laplandchristmas.com/christmas-markets/', label: 'クリスマスマーケットでの買い物', body: '北国の市、作り手、季節の品々。' },
      { href: 'https://laplandvisit.com/itineraries/', label: 'ラップランド旅行を計画する', body: 'どこへ行くか、いつ旅するか、どう移動するか。' },
    ],
  },
  es: {
    eyebrow: 'Más de la red',
    h2: 'Siga explorando Laponia',
    cards: [
      { href: 'https://laplandgifts.com', label: 'Ideas de regalos de Laponia', body: 'Inspiración de regalos seleccionada de toda la Laponia finlandesa.' },
      { href: 'https://laplandchristmas.com/christmas-markets/', label: 'Compras en mercados navideños', body: 'Mercados, artesanos y hallazgos de temporada en el norte.' },
      { href: 'https://laplandvisit.com/itineraries/', label: 'Planee un viaje a Laponia', body: 'Adónde ir, cuándo viajar y cómo moverse.' },
    ],
  },
  'pt-BR': {
    eyebrow: 'Mais da rede',
    h2: 'Continue explorando a Lapônia',
    cards: [
      { href: 'https://laplandgifts.com', label: 'Ideias de presentes da Lapônia', body: 'Inspiração de presentes selecionada de toda a Lapônia finlandesa.' },
      { href: 'https://laplandchristmas.com/christmas-markets/', label: 'Compras em mercados de Natal', body: 'Mercados, artesãos e achados de temporada no norte.' },
      { href: 'https://laplandvisit.com/itineraries/', label: 'Planeje uma visita à Lapônia', body: 'Aonde ir, quando viajar e como se locomover.' },
    ],
  },
  'zh-CN': {
    eyebrow: '网络中的更多内容',
    h2: '继续探索拉普兰',
    cards: [
      { href: 'https://laplandgifts.com', label: '拉普兰礼物灵感', body: '来自芬兰拉普兰各地的精选礼物灵感。' },
      { href: 'https://laplandchristmas.com/christmas-markets/', label: '圣诞市集购物', body: '北方的节庆市集、手作人与应季好物。' },
      { href: 'https://laplandvisit.com/itineraries/', label: '规划拉普兰之行', body: '去哪里、何时出行、如何出行。' },
    ],
  },
  ko: {
    eyebrow: '네트워크의 다른 사이트',
    h2: '라플란드를 계속 둘러보기',
    cards: [
      { href: 'https://laplandgifts.com', label: '라플란드 선물 아이디어', body: '핀란드 라플란드 곳곳에서 엄선한 선물 영감.' },
      { href: 'https://laplandchristmas.com/christmas-markets/', label: '크리스마스 마켓 쇼핑', body: '북녘의 축제 마켓과 만드는 이들, 그리고 계절의 발견.' },
      { href: 'https://laplandvisit.com/itineraries/', label: '라플란드 방문 계획하기', body: '어디로, 언제 떠나고, 어떻게 이동할지.' },
    ],
  },
  fr: {
    eyebrow: 'Plus du réseau',
    h2: 'Continuez à explorer la Laponie',
    cards: [
      { href: 'https://laplandgifts.com', label: 'Idées cadeaux de Laponie', body: 'Une sélection d’idées cadeaux de toute la Laponie finlandaise.' },
      { href: 'https://laplandchristmas.com/christmas-markets/', label: 'Achats aux marchés de Noël', body: 'Marchés, artisans et trouvailles de saison dans le Nord.' },
      { href: 'https://laplandvisit.com/itineraries/', label: 'Préparer un voyage en Laponie', body: 'Où aller, quand partir et comment se déplacer.' },
    ],
  },
  it: {
    eyebrow: 'Altro dal network',
    h2: 'Continua a esplorare la Lapponia',
    cards: [
      { href: 'https://laplandgifts.com', label: 'Idee regalo dalla Lapponia', body: 'Una selezione di idee regalo da tutta la Lapponia finlandese.' },
      { href: 'https://laplandchristmas.com/christmas-markets/', label: 'Acquisti ai mercatini di Natale', body: 'Mercatini, artigiani e trovate di stagione nel Nord.' },
      { href: 'https://laplandvisit.com/itineraries/', label: 'Pianifica una visita in Lapponia', body: 'Dove andare, quando viaggiare e come spostarsi.' },
    ],
  },
  nl: {
    eyebrow: 'Meer uit het netwerk',
    h2: 'Blijf Lapland ontdekken',
    cards: [
      { href: 'https://laplandgifts.com', label: 'Cadeau-ideeën uit Lapland', body: 'Samengestelde cadeau-inspiratie uit heel Fins Lapland.' },
      { href: 'https://laplandchristmas.com/christmas-markets/', label: 'Winkelen op kerstmarkten', body: 'Feestelijke markten, makers en seizoensvondsten in het noorden.' },
      { href: 'https://laplandvisit.com/itineraries/', label: 'Plan een bezoek aan Lapland', body: 'Waar naartoe, wanneer reizen en hoe je je verplaatst.' },
    ],
  },
};

export default function RelatedSites() {
  const { lang } = useLang();
  const t = COPY[lang];

  return (
    <section className="py-16 sm:py-20 px-4 bg-white">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-10">
          <span className="text-sm tracking-[0.3em] uppercase text-forest font-bold">
            {t.eyebrow}
          </span>
          <h2 className="font-heading text-3xl sm:text-4xl text-night mt-3 leading-tight [text-wrap:balance]">
            {t.h2}
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
          {t.cards.map((card, i) => {
            const Icon = ICONS[i];
            return (
              <a
                key={card.href}
                href={card.href}
                target="_blank"
                rel="noopener"
                className="group bg-cream rounded-2xl p-6 border border-amber/10 hover:border-amber/40 hover:shadow-md transition-all duration-300 flex flex-col min-h-[44px]"
              >
                <div className="w-12 h-12 bg-amber/10 text-amber rounded-xl flex items-center justify-center mb-4">
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className="font-heading text-xl text-night leading-snug flex items-center gap-1.5">
                  {card.label}
                  <ArrowUpRight className="w-4 h-4 text-amber transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </h3>
                <p className="text-warm-gray text-sm mt-2 leading-relaxed">{card.body}</p>
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
}
