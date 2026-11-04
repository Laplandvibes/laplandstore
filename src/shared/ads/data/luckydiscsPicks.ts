// KÄSIN KOOTTU TILANNEKUVA — Lucky Discsillä ei ole affiliate-syötettä.
// Lähde: luckydiscs.fi:n tuotetaulu (Supabase `products`, active=true) 2026-11-04.
// Kuvat: Lucky Discsin omat tuotekuvat (luckydiscs/public/images/products), pienennetty 640 px webp:ksi.
// Päivitä hinnat lukemalla tuotetaulu uudelleen ja vaihtamalla fetchedAt; rivi näyttää päivän lukijalle.

import type { PartnerSnapshot } from './partnerTypes'

const picks: PartnerSnapshot = {
  "_comment": "KÄSIN — lähde luckydiscs.fi products-taulu 2026-11-04; reitti go.laplandvibes.com/go/luckydiscs (direct)",
  "advertiser": "Lucky Discs",
  "programme": {
    "network": "direct",
    "programId": 0,
    "commission": "ei provisiota",
    "cookieDays": 0
  },
  "route": "/go/luckydiscs",
  "fetchedAt": "2026-11-04",
  "products": [
    {
      "sku": "super-starter-pack",
      "name": "Super Starter Pack, 7 discs",
      "localName": "Super Starter Pack, 7 kiekkoa",
      "shelf": "aloituspakkaus",
      "category": "Aloituspakkaus",
      "brand": "Lucky Discs",
      "price": 85,
      "currency": "EUR",
      "url": "https://www.luckydiscs.fi/shop/super-starter-pack",
      "image": "/images/partners/luckydiscs/super-starter-pack.webp"
    },
    {
      "sku": "basic-money-shot",
      "name": "Money Shot, Basic",
      "shelf": "midrange",
      "category": "Lähestymiskiekko",
      "brand": "Lucky Discs",
      "price": 12.9,
      "currency": "EUR",
      "url": "https://www.luckydiscs.fi/shop/basic-money-shot",
      "image": "/images/partners/luckydiscs/basic-money-shot.webp"
    },
    {
      "sku": "jailbreak",
      "name": "Jailbreak, Ultrium",
      "shelf": "midrange",
      "category": "Midrange",
      "brand": "Lucky Discs",
      "price": 21.9,
      "currency": "EUR",
      "url": "https://www.luckydiscs.fi/shop/jailbreak",
      "image": "/images/partners/luckydiscs/jailbreak.webp"
    },
    {
      "sku": "premium-bank-robber",
      "name": "Bank Robber, Premium",
      "shelf": "fairway-driver",
      "category": "Fairway driver",
      "brand": "Lucky Discs",
      "price": 14.9,
      "currency": "EUR",
      "url": "https://www.luckydiscs.fi/shop/premium-bank-robber",
      "image": "/images/partners/luckydiscs/premium-bank-robber.webp"
    },
    {
      "sku": "premium-treasure-hunt",
      "name": "Treasure Hunt, Premium",
      "shelf": "distance-driver",
      "category": "Distance driver",
      "brand": "Lucky Discs",
      "price": 14.9,
      "currency": "EUR",
      "url": "https://www.luckydiscs.fi/shop/premium-treasure-hunt",
      "image": "/images/partners/luckydiscs/premium-treasure-hunt.webp"
    },
    {
      "sku": "premium-money-shot",
      "name": "Money Shot, Premium",
      "shelf": "midrange",
      "category": "Lähestymiskiekko",
      "brand": "Lucky Discs",
      "price": 14.9,
      "currency": "EUR",
      "url": "https://www.luckydiscs.fi/shop/premium-money-shot",
      "image": "/images/partners/luckydiscs/premium-money-shot.webp"
    }
  ]
}

export default picks
