import {
  Axe,
  Gem,
  Cherry,
  Shirt,
  Lamp,
  Mountain,
  Snowflake,
  Sparkles,
  Coins,
  Palette,
  Trees,
  type LucideIcon,
} from 'lucide-react';
import { useState } from 'react';
import AiDisclosure from './AiDisclosure';

export type PlaceholderTheme =
  | 'knives'
  | 'silver'
  | 'berries'
  | 'wool'
  | 'design'
  | 'souvenirs'
  | 'ceramics'
  | 'aurora'
  | 'forest'
  | 'gold'
  | 'cabin'
  | 'antler'
  | 'museum'
  | 'arctic'
  | 'wood'
  | 'wool-stone';

interface ThemeStyle {
  bg: string;
  glow: string;
  Icon: LucideIcon;
  iconTint: string;
}

const THEMES: Record<PlaceholderTheme, ThemeStyle> = {
  knives: {
    bg: 'linear-gradient(140deg, #1c1917 0%, #44403c 45%, #78716c 100%)',
    glow: 'radial-gradient(circle at 30% 30%, rgba(217,119,6,0.30), transparent 55%)',
    Icon: Axe,
    iconTint: 'rgba(245,158,11,0.55)',
  },
  silver: {
    bg: 'linear-gradient(160deg, #0f172a 0%, #334155 55%, #94a3b8 100%)',
    glow: 'radial-gradient(circle at 70% 25%, rgba(226,232,240,0.45), transparent 60%)',
    Icon: Gem,
    iconTint: 'rgba(226,232,240,0.65)',
  },
  berries: {
    bg: 'linear-gradient(150deg, #4c0519 0%, #881337 50%, #be123c 100%)',
    glow: 'radial-gradient(circle at 25% 70%, rgba(245,158,11,0.40), transparent 55%)',
    Icon: Cherry,
    iconTint: 'rgba(254,215,170,0.70)',
  },
  wool: {
    bg: 'linear-gradient(140deg, #292524 0%, #57534e 50%, #a8a29e 100%)',
    glow: 'radial-gradient(circle at 60% 35%, rgba(254,243,199,0.35), transparent 60%)',
    Icon: Shirt,
    iconTint: 'rgba(254,243,199,0.55)',
  },
  design: {
    bg: 'linear-gradient(145deg, #064e3b 0%, #065f46 50%, #047857 100%)',
    glow: 'radial-gradient(circle at 35% 30%, rgba(217,119,6,0.30), transparent 55%)',
    Icon: Lamp,
    iconTint: 'rgba(245,158,11,0.55)',
  },
  souvenirs: {
    bg: 'linear-gradient(160deg, #312e81 0%, #4c1d95 55%, #7c3aed 100%)',
    glow: 'radial-gradient(circle at 70% 70%, rgba(244,114,182,0.40), transparent 60%)',
    Icon: Sparkles,
    iconTint: 'rgba(254,215,170,0.65)',
  },
  ceramics: {
    bg: 'linear-gradient(150deg, #44403c 0%, #78716c 50%, #d6d3d1 100%)',
    glow: 'radial-gradient(circle at 30% 70%, rgba(217,119,6,0.35), transparent 55%)',
    Icon: Palette,
    iconTint: 'rgba(254,243,199,0.65)',
  },
  aurora: {
    bg: 'linear-gradient(160deg, #0f172a 0%, #1e3a8a 35%, #047857 70%, #0f172a 100%)',
    glow: 'radial-gradient(circle at 50% 30%, rgba(16,185,129,0.40), transparent 60%)',
    Icon: Snowflake,
    iconTint: 'rgba(167,243,208,0.60)',
  },
  forest: {
    bg: 'linear-gradient(155deg, #022c22 0%, #064e3b 50%, #166534 100%)',
    glow: 'radial-gradient(circle at 25% 25%, rgba(254,243,199,0.30), transparent 55%)',
    Icon: Trees,
    iconTint: 'rgba(187,247,208,0.55)',
  },
  gold: {
    bg: 'linear-gradient(150deg, #422006 0%, #92400e 50%, #d97706 100%)',
    glow: 'radial-gradient(circle at 35% 35%, rgba(254,215,170,0.45), transparent 55%)',
    Icon: Coins,
    iconTint: 'rgba(254,243,199,0.70)',
  },
  cabin: {
    bg: 'linear-gradient(150deg, #1c1917 0%, #44403c 45%, #92400e 100%)',
    glow: 'radial-gradient(circle at 70% 30%, rgba(245,158,11,0.40), transparent 55%)',
    Icon: Mountain,
    iconTint: 'rgba(254,215,170,0.60)',
  },
  antler: {
    bg: 'linear-gradient(140deg, #1c1917 0%, #57534e 50%, #d6d3d1 100%)',
    glow: 'radial-gradient(circle at 65% 30%, rgba(217,119,6,0.35), transparent 55%)',
    Icon: Mountain,
    iconTint: 'rgba(254,243,199,0.55)',
  },
  museum: {
    bg: 'linear-gradient(155deg, #0c0a09 0%, #292524 55%, #57534e 100%)',
    glow: 'radial-gradient(circle at 45% 30%, rgba(217,119,6,0.35), transparent 55%)',
    Icon: Lamp,
    iconTint: 'rgba(245,158,11,0.55)',
  },
  arctic: {
    bg: 'linear-gradient(155deg, #0f172a 0%, #1e293b 50%, #334155 100%)',
    glow: 'radial-gradient(circle at 50% 25%, rgba(186,230,253,0.45), transparent 60%)',
    Icon: Snowflake,
    iconTint: 'rgba(186,230,253,0.55)',
  },
  wood: {
    bg: 'linear-gradient(150deg, #292524 0%, #78350f 55%, #92400e 100%)',
    glow: 'radial-gradient(circle at 35% 65%, rgba(245,158,11,0.40), transparent 55%)',
    Icon: Trees,
    iconTint: 'rgba(254,215,170,0.55)',
  },
  'wool-stone': {
    bg: 'linear-gradient(150deg, #1c1917 0%, #57534e 55%, #a8a29e 100%)',
    glow: 'radial-gradient(circle at 70% 35%, rgba(254,243,199,0.30), transparent 60%)',
    Icon: Shirt,
    iconTint: 'rgba(254,243,199,0.50)',
  },
};

interface Props {
  theme: PlaceholderTheme;
  className?: string;
  /** Render as <img>-replacement absolute fill (default true). */
  fill?: boolean;
  /** Show the centered icon (default true). */
  showIcon?: boolean;
  ariaLabel?: string;
  /**
   * Optional generated image src (e.g. "/img/hero-market.jpg"). If the image
   * loads, it overlays the gradient; if it 404s, the gradient remains visible.
   * Once IMAGES.md batch is generated and wired, this becomes the primary art.
   */
  imgSrc?: string;
  /** Loading hint for the overlaid image. Use 'eager' for above-the-fold heroes. */
  imgLoading?: 'lazy' | 'eager';
  /**
   * Mark `imgSrc` as AI-generated (EU AI Act art. 50). Set it only for
   * photorealistic images that a reader could take for a real place, person
   * or event — that is the deep-fake test in art. 3(60). A gradient or a
   * genuine partner photo must NOT be marked.
   */
  aiGenerated?: boolean;
}

export default function GradientPlaceholder({
  theme,
  className = '',
  fill = true,
  showIcon = true,
  ariaLabel,
  imgSrc,
  imgLoading = 'lazy',
  aiGenerated = false,
}: Props) {
  const t = THEMES[theme];
  const positionClasses = fill ? 'absolute inset-0 w-full h-full' : 'w-full h-full';
  // If the image 404s we fall back to the bare gradient — and a gradient is
  // not AI-generated content, so the badge has to disappear with it.
  const [imgFailed, setImgFailed] = useState(false);

  return (
    <div
      role={ariaLabel ? 'img' : undefined}
      aria-label={ariaLabel}
      className={`${positionClasses} overflow-hidden ${className}`}
      style={{ background: t.bg }}
    >
      <div className="absolute inset-0" style={{ background: t.glow }} />
      {showIcon && !imgSrc && (
        <div className="absolute inset-0 flex items-center justify-center">
          <t.Icon
            className="w-1/3 h-1/3 max-w-[120px] max-h-[120px]"
            style={{ color: t.iconTint, strokeWidth: 1 }}
          />
        </div>
      )}
      {imgSrc && (
        <img
          src={imgSrc}
          alt={ariaLabel || ''}
          loading={imgLoading}
          className="absolute inset-0 w-full h-full object-cover"
          onError={(e) => {
            // 404 → hide and let the gradient remain as a graceful fallback.
            (e.currentTarget as HTMLImageElement).style.display = 'none';
            setImgFailed(true);
          }}
        />
      )}
      {imgSrc && aiGenerated && !imgFailed && <AiDisclosure />}
    </div>
  );
}
