/**
 * Etusivun standardit mainospaikat (LV Media -inventaari) — laplandstore.fi
 *
 * JAETTU MALLI:
 *   sponsors[0] = pääkumppani     → <MainPartnerBanner> heti heron alla
 *   sponsors[1] = kakkospääkumppani → <HomeAdSlots>-osion kortti
 *   spots       = 6 kohdekohtaista premium-paikkaa (oletusjako)
 *
 * Tyhjä paikka (null) renderöi house-adin → LV Media -portaali
 * (https://laplandvibes.com/media/site/laplandstore) + GA4 advertise_here_click.
 *
 * Myyntiprosessi: kumppani ostaa paikan → täytä Partner-objekti tähän →
 * npm run build → deploy --branch=main.
 */

import type { HomeAdSlotsConfig } from '../shared/HomeAdSlots';
import { DEFAULT_PREMIUM_SPOTS } from '../shared/PremiumSpotGrid';

export const AD_SLOTS: HomeAdSlotsConfig = {
  siteSlug: 'laplandstore',
  sponsors: [null, null],
  spots: DEFAULT_PREMIUM_SPOTS,
};
