import { Leaf } from 'lucide-react'
import type { RailPartner } from '../ProductRail'

// IVALO.COM — Adtraction, 10 % / 45 pv. The best terms of any shop partner in
// the network (Kulta-Center is 8,5 % / 21 pv).
//
// 🔴🔴 THE CLAIM THAT IS NOT HERE. The brand card this replaced said "yli 100
// suomalaista ja pohjoismaista muoti- ja designmerkkiä". Measured 2026-09-04:
// the affiliate feed carries 36 brands and not one is identifiably Finnish —
// Organication, Off With Nature, Monala, AmourLinen, Laume Linen, KOMODO,
// Studio Heijne, TwoThirds. Ivalo's own site does run a "Suomalainen muoti"
// section, so the claim may be true of their whole catalogue, but nothing we
// can verify supports it and the products we actually render contradict it.
// Do not put it back. The copy below sells what is in the rail: responsibly
// made linen, knitwear and dresses.
//
// 🔴 No delivery promise either. The old card claimed "Toimitus EU-maihin ja
// muualle maailmaan" and "Ilmainen toimitus yli 200 euron tilauksiin"; neither
// was re-verified, so neither is repeated. A shipping term we have not read
// today is a shipping term we do not state.
const ivalo: RailPartner = {
  key: 'ivalo',
  categoryUrl: {
    fi: 'https://ivalo.com/fi/collections/all',
    en: 'https://ivalo.com/collections/all',
  },
  accent: '#3F6B4F',
  accentDark: '#93BFA1',
  icon: Leaf,
  copy: {
    fi: {
      eyebrow: 'IVALO.COM',
      headline: 'Vastuullisesti tehtyä muotia',
      sub: 'Pellavaa, neuleita ja mekkoja pohjoismaisesti kuratoidusta valikoimasta.',
      from: 'alk.',
      ctaAll: 'Katso koko valikoima',
      note: 'Hinnat tarkistettu {date}. Ajantasainen hinta ja koot näkyvät IVALO.COMin sivulla.',
    },
    en: {
      eyebrow: 'IVALO.COM',
      headline: 'Fashion made responsibly',
      sub: 'Linen, knitwear and dresses from a Nordic-curated selection.',
      from: 'from',
      ctaAll: 'See the full range',
      note: 'Prices checked {date}. Current price and sizes are shown on IVALO.COM’s own page.',
    },
    sv: {
      eyebrow: 'IVALO.COM',
      headline: 'Mode tillverkat ansvarsfullt',
      sub: 'Linne, stickat och klänningar ur ett nordiskt kurerat urval.',
      from: 'fr.',
      ctaAll: 'Se hela sortimentet',
      note: 'Priserna kontrollerade {date}. Aktuellt pris och storlekar visas på IVALO.COM.',
    },
    de: {
      eyebrow: 'IVALO.COM',
      headline: 'Verantwortungsvoll gefertigte Mode',
      sub: 'Leinen, Strick und Kleider aus einer nordisch kuratierten Auswahl.',
      from: 'ab',
      ctaAll: 'Ganzes Sortiment ansehen',
      note: 'Preise geprüft am {date}. Aktuellen Preis und Größen zeigt die Seite von IVALO.COM.',
    },
    fr: {
      eyebrow: 'IVALO.COM',
      headline: 'Une mode fabriquée responsable',
      sub: 'Lin, mailles et robes issus d’une sélection nordique.',
      from: 'dès',
      ctaAll: 'Voir tout le catalogue',
      note: 'Prix vérifiés le {date}. Le prix actuel et les tailles figurent sur IVALO.COM.',
    },
    it: {
      eyebrow: 'IVALO.COM',
      headline: 'Moda prodotta in modo responsabile',
      sub: 'Lino, maglieria e abiti da una selezione nordica.',
      from: 'da',
      ctaAll: 'Vedi tutto il catalogo',
      note: 'Prezzi verificati il {date}. Prezzo aggiornato e taglie sono su IVALO.COM.',
    },
    es: {
      eyebrow: 'IVALO.COM',
      headline: 'Moda hecha de forma responsable',
      sub: 'Lino, punto y vestidos de una selección nórdica.',
      from: 'desde',
      ctaAll: 'Ver todo el catálogo',
      note: 'Precios comprobados el {date}. El precio actual y las tallas están en IVALO.COM.',
    },
    'pt-BR': {
      eyebrow: 'IVALO.COM',
      headline: 'Moda feita de forma responsável',
      sub: 'Linho, tricô e vestidos de uma seleção nórdica.',
      from: 'a partir de',
      ctaAll: 'Ver o catálogo completo',
      note: 'Preços verificados em {date}. O preço atual e os tamanhos estão na IVALO.COM.',
    },
    nl: {
      eyebrow: 'IVALO.COM',
      headline: 'Verantwoord gemaakte mode',
      sub: 'Linnen, breigoed en jurken uit een Noords samengestelde selectie.',
      from: 'vanaf',
      ctaAll: 'Bekijk het hele assortiment',
      note: 'Prijzen gecontroleerd op {date}. Actuele prijs en maten staan op IVALO.COM.',
    },
    ja: {
      eyebrow: 'IVALO.COM',
      headline: '責任ある作り方のファッション',
      sub: '北欧のキュレーションによるリネン、ニット、ワンピース。',
      from: '〜',
      fromAfter: true,
      ctaAll: '品揃えをすべて見る',
      note: '価格は{date}時点のものです。最新の価格とサイズは IVALO.COM でご確認ください。',
    },
    'zh-CN': {
      eyebrow: 'IVALO.COM',
      headline: '以负责任方式制作的时装',
      sub: '来自北欧甄选的亚麻、针织与连衣裙。',
      from: '起',
      fromAfter: true,
      ctaAll: '查看全部商品',
      note: '价格核对于 {date}。最新价格与尺码以 IVALO.COM 页面为准。',
    },
    ko: {
      eyebrow: 'IVALO.COM',
      headline: '책임 있게 만든 패션',
      sub: '북유럽에서 선별한 리넨과 니트, 원피스.',
      from: '부터',
      fromAfter: true,
      ctaAll: '전체 상품 보기',
      note: '가격은 {date} 기준입니다. 최신 가격과 사이즈는 IVALO.COM에서 확인하세요.',
    },
  },
}

export default ivalo
