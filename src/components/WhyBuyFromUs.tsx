import { ShieldCheck, Truck, Heart, Gift } from 'lucide-react';
import { useLang } from '../lang';

const COPY = {
  fi: [
    {
      title: 'Aitoja tuotteita',
      body: 'Käymme jokaisen putiikin läpi käsin. Mukaan pääsee vain lappilaisia yrityksiä, ja lähteet ovat näkyvillä.',
    },
    {
      title: 'Tilaa kotiin',
      body: '9 putiikkia pitää verkkokauppaa. Tilaat suoraan kotiovellesi, monet myös ulkomaille.',
    },
    {
      title: 'Tue paikallisia',
      body: 'Ostoksesi menee suoraan lappilaiselle käsityöläiselle tai yrittäjälle. Ei välikäsiä.',
    },
    {
      title: 'Täydellinen lahja',
      body: 'Lapista tuotu lahja tai matkamuisto on aina erityinen. Moni putiikki tarjoaa lahjapakkauksen.',
    },
  ],
  en: [
    {
      title: 'Authentic products',
      body: 'We check every boutique by hand. Only Lapland-based businesses make the list, and we keep the sources on file.',
    },
    {
      title: 'Order to your door',
      body: 'Nine boutiques run their own online store. You order direct, and several of them ship outside Finland too.',
    },
    {
      title: 'Support locals',
      body: 'Your purchase goes directly to a Lapland artisan or entrepreneur. No middlemen.',
    },
    {
      title: 'A souvenir that lasts',
      body: 'A gift or souvenir from Lapland keeps telling its story. Most boutiques offer gift wrapping.',
    },
  ],
  de: [
    {
      title: 'Authentische Produkte',
      body: 'Jede Boutique wird redaktionell geprüft: ausschließlich Betriebe aus Lappland, mit dokumentierten Quellen.',
    },
    {
      title: 'Lieferung nach Hause',
      body: 'Neun Boutiquen betreiben einen Online-Shop: direkter Versand innerhalb Finnlands.',
    },
    {
      title: 'Regional einkaufen',
      body: 'Ihr Einkauf geht direkt an die Handwerkerin oder den Handwerker in Lappland. Ohne Zwischenhändler.',
    },
    {
      title: 'Geschenk und Souvenir',
      body: 'Ein Geschenk oder Souvenir aus Lappland erzählt weiter seine Geschichte. Geschenkverpackung ist meist möglich.',
    },
  ],

  ja: [
    {
      title: '本物の商品',
      body: '各ブティックは独立して検証済み。ラップランドに拠点を置く事業者のみを掲載し、出典も記録に残しています。',
    },
    {
      title: 'ご自宅まで配送',
      body: '9軒のブティックがオンラインショップを運営：フィンランド国内であればご自宅まで直接お届けします。',
    },
    {
      title: '地元を応援',
      body: 'お買い物の代金はラップランドの職人や事業者に直接届きます。仲介業者は介在しません。',
    },
    {
      title: '記憶に残る贈り物',
      body: 'ラップランド土産や贈り物は、その後も物語を語り続けます。ほとんどのブティックでギフトラッピングをご用意しています。',
    },
  ],
  es: [
    { title: 'Productos auténticos', body: 'Cada boutique se verifica de forma independiente. Solo empresas de Laponia, con las fuentes documentadas.' },
    { title: 'Envío internacional a su domicilio', body: 'Nueve boutiques ofrecen tienda en línea: envío directo a su puerta.' },
    { title: 'Apoye lo local', body: 'Su compra va directamente al artesano o emprendedor de Laponia. Sin intermediarios.' },
    { title: 'Un regalo que dura', body: 'Un regalo o recuerdo de Laponia sigue contando su historia. La mayoría de boutiques ofrece empaquetado de regalo.' },
  ],
  'pt-BR': [
    { title: 'Produtos autênticos', body: 'Cada boutique é verificada de forma independente. Somente empresas da Lapônia, com as fontes documentadas.' },
    { title: 'Envio internacional para sua casa', body: 'Nove boutiques têm loja online: entrega direto na sua porta.' },
    { title: 'Apoie quem é local', body: 'Sua compra vai direto ao artesão ou empreendedor da Lapônia. Sem intermediários.' },
    { title: 'Uma lembrancinha que dura', body: 'Um presente ou lembrancinha da Lapônia continua contando sua história. A maioria das boutiques oferece embrulho para presente.' },
  ],
  'zh-CN': [
    { title: '正宗商品', body: '每家精品店都经过独立核实。只收录拉普兰本地企业,资料来源均有记录。' },
    { title: '国际配送送货到家', body: '九家精品店开设线上商店，直接送货到您家门口。' },
    { title: '支持本地', body: '您的购物款项直接送达拉普兰的工匠或商家。没有中间商。' },
    { title: '历久弥新的礼物', body: '来自拉普兰的礼物或纪念品会继续讲述它的故事。大多数精品店提供礼品包装。' },
  ],
  ko: [
    { title: '정품 보장', body: '모든 부티크는 독립적으로 검증됩니다. 라플란드 사업자만 등재하며, 출처가 모두 기록되어 있습니다.' },
    { title: '국제 배송으로 자택까지', body: '9개 부티크가 온라인 상점을 운영합니다. 자택 문 앞까지 직접 배송됩니다.' },
    { title: '현지인을 응원하세요', body: '구매 금액은 라플란드 장인이나 사업자에게 직접 전달됩니다. 중간 상인이 없습니다.' },
    { title: '오래 남는 기념품', body: '라플란드에서 온 선물이나 기념품은 그 이야기를 계속 전해줍니다. 대부분의 부티크에서 선물 포장을 제공합니다.' },
  ],
  fr: [
    { title: 'Produits authentiques', body: 'Chaque boutique est vérifiée de façon indépendante. Uniquement des entreprises de Laponie, sources documentées.' },
    { title: "Livraison à domicile à l'international", body: 'Neuf boutiques disposent d\'une boutique en ligne: livraison directe chez vous.' },
    { title: "Soutenir le local", body: 'Votre achat va directement à un artisan ou entrepreneur de Laponie. Sans intermédiaires.' },
    { title: 'Un souvenir qui dure', body: 'Un cadeau ou un souvenir de Laponie continue de raconter son histoire. La plupart des boutiques proposent un emballage cadeau.' },
  ],
  it: [
    { title: 'Prodotti autentici', body: 'Ogni boutique è verificata in modo indipendente. Solo attività della Lapponia, con fonti documentate.' },
    { title: 'Spedizione internazionale a domicilio', body: 'Nove boutique hanno un negozio online: consegna direttamente a casa Sua.' },
    { title: 'Sostenga il locale', body: 'Il Suo acquisto va direttamente a un artigiano o imprenditore della Lapponia. Senza intermediari.' },
    { title: 'Un ricordo che dura', body: 'Un regalo o souvenir dalla Lapponia continua a raccontare la sua storia. La maggior parte delle boutique offre confezione regalo.' },
  ],
  nl: [
    { title: 'Authentieke producten', body: 'Elke boutique wordt onafhankelijk geverifieerd. Alleen Laplandse ondernemingen, met bronnen gedocumenteerd.' },
    { title: 'Internationale levering aan huis', body: 'Negen boutiques hebben een online winkel: direct bij u thuis bezorgd.' },
    { title: 'Steun lokale makers', body: 'Uw aankoop gaat rechtstreeks naar een Laplandse ambachtsman of ondernemer. Geen tussenhandel.' },
    { title: 'Een souvenir dat blijft', body: 'Een geschenk of souvenir uit Lapland blijft zijn verhaal vertellen. De meeste boutiques bieden cadeauverpakking.' },
  ],
  sv: [
    { title: 'Äkta produkter', body: 'Vi går igenom varje butik för hand. Bara företag i Lappland kommer med, och vi sparar källorna.' },
    { title: 'Beställ hem till dörren', body: 'Nio butiker driver egen webbutik. Du beställer direkt, och flera av dem skickar även utanför Finland.' },
    { title: 'Stöd lokala', body: 'Ditt köp går direkt till en hantverkare eller företagare i Lappland. Inga mellanhänder.' },
    { title: 'En souvenir som håller', body: 'En present eller souvenir från Lappland fortsätter berätta sin historia. De flesta butiker erbjuder presentinslagning.' },
  ],
} as const;

const ICONS = [ShieldCheck, Truck, Heart, Gift] as const;
const COLORS = [
  'bg-amber/10 text-amber',
  'bg-forest/10 text-forest',
  'bg-rose-100 text-rose-600',
  'bg-violet-100 text-violet-600',
] as const;

export default function WhyBuyFromUs() {
  const { lang } = useLang();
  const reasons = COPY[lang];

  return (
    <section className="py-16 px-4 bg-cream">
      <div className="max-w-5xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 items-stretch">
          {reasons.map((r, i) => {
            const Icon = ICONS[i];
            return (
              <div
                key={r.title}
                className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-lg transition-shadow duration-300 text-center flex flex-col h-full"
              >
                <div className={`w-14 h-14 ${COLORS[i]} rounded-xl flex items-center justify-center mx-auto mb-4`}>
                  <Icon className="w-7 h-7" />
                </div>
                <h3 className="font-heading text-xl text-night mb-2 [text-wrap:balance]">{r.title}</h3>
                <p className="text-warm-gray text-sm leading-relaxed [text-wrap:pretty]">{r.body}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
