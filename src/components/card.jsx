import React from 'react';

export const CARD_THEMES = {
  green: {
    frame: '#34e6a8',
    frameBright: '#9dffdf',
    bgGradient: 'radial-gradient(ellipse 120% 80% at 50% 20%, rgba(52,230,168,0.15), transparent 60%), linear-gradient(180deg, #0c2018 0%, #06120d 55%, #030906 100%)',
    artBg: 'radial-gradient(ellipse 70% 50% at 50% 30%, rgba(52,230,168,0.22), transparent 65%), repeating-linear-gradient(115deg, rgba(255,255,255,0.02) 0px, rgba(255,255,255,0.02) 2px, transparent 2px, transparent 40px), linear-gradient(180deg, #10241b 0%, #0a1712 45%, #050d0a 100%)',
    titleGradient: 'linear-gradient(180deg, #d6fff0 0%, #62e6ae 35%, #1f9d6d 70%, #bff3da 100%)',
    badgeBg: 'linear-gradient(180deg, #0d211a, #071310)',
    badgeText: '#a8f5d4',
    gold: '#d4af37',
    goldLight: '#f4e2a1',
    textStroke: '#06231a'
  },
  red: {
    frame: '#f43f5e',
    frameBright: '#fda4af',
    bgGradient: 'radial-gradient(ellipse 120% 80% at 50% 20%, rgba(244,63,94,0.15), transparent 60%), linear-gradient(180deg, #240a12 0%, #14050a 55%, #080204 100%)',
    artBg: 'radial-gradient(ellipse 70% 50% at 50% 30%, rgba(244,63,94,0.22), transparent 65%), repeating-linear-gradient(115deg, rgba(255,255,255,0.02) 0px, rgba(255,255,255,0.02) 2px, transparent 2px, transparent 40px), linear-gradient(180deg, #2a0b14 0%, #17060a 45%, #0c0305 100%)',
    titleGradient: 'linear-gradient(180deg, #ffe4e8 0%, #fb7185 35%, #e11d48 70%, #fda4af 100%)',
    badgeBg: 'linear-gradient(180deg, #240a12, #14050a)',
    badgeText: '#fecdd3',
    gold: '#fbbf24',
    goldLight: '#fef08a',
    textStroke: '#25040b'
  },
  gold: {
    frame: '#f59e0b',
    frameBright: '#fde68a',
    bgGradient: 'radial-gradient(ellipse 120% 80% at 50% 20%, rgba(245,158,11,0.15), transparent 60%), linear-gradient(180deg, #241805 0%, #140d02 55%, #080501 100%)',
    artBg: 'radial-gradient(ellipse 70% 50% at 50% 30%, rgba(245,158,11,0.22), transparent 65%), repeating-linear-gradient(115deg, rgba(255,255,255,0.02) 0px, rgba(255,255,255,0.02) 2px, transparent 2px, transparent 40px), linear-gradient(180deg, #2b1d06 0%, #180f03 45%, #0d0801 100%)',
    titleGradient: 'linear-gradient(180deg, #fffbeb 0%, #fcd34d 35%, #d97706 70%, #fde68a 100%)',
    badgeBg: 'linear-gradient(180deg, #241805, #140d02)',
    badgeText: '#fef3c7',
    gold: '#f59e0b',
    goldLight: '#fde68a',
    textStroke: '#251502'
  },
  blue: {
    frame: '#06b6d4',
    frameBright: '#a5f3fc',
    bgGradient: 'radial-gradient(ellipse 120% 80% at 50% 20%, rgba(6,182,212,0.15), transparent 60%), linear-gradient(180deg, #071f2b 0%, #031017 55%, #010609 100%)',
    artBg: 'radial-gradient(ellipse 70% 50% at 50% 30%, rgba(6,182,212,0.22), transparent 65%), repeating-linear-gradient(115deg, rgba(255,255,255,0.02) 0px, rgba(255,255,255,0.02) 2px, transparent 2px, transparent 40px), linear-gradient(180deg, #092636 0%, #04141c 45%, #02090d 100%)',
    titleGradient: 'linear-gradient(180deg, #ecfeff 0%, #38bdf8 35%, #0284c7 70%, #a5f3fc 100%)',
    badgeBg: 'linear-gradient(180deg, #071f2b, #031017)',
    badgeText: '#cffafe',
    gold: '#fbbf24',
    goldLight: '#fde68a',
    textStroke: '#041620'
  },
  magenta: {
    frame: '#d946ef',
    frameBright: '#f5d0fe',
    bgGradient: 'radial-gradient(ellipse 120% 80% at 50% 20%, rgba(217,70,239,0.15), transparent 60%), linear-gradient(180deg, #240a28 0%, #140517 55%, #08020a 100%)',
    artBg: 'radial-gradient(ellipse 70% 50% at 50% 30%, rgba(217,70,239,0.22), transparent 65%), repeating-linear-gradient(115deg, rgba(255,255,255,0.02) 0px, rgba(255,255,255,0.02) 2px, transparent 2px, transparent 40px), linear-gradient(180deg, #2b0b30 0%, #17061a 45%, #0c030d 100%)',
    titleGradient: 'linear-gradient(180deg, #fdf4ff 0%, #e879f9 35%, #c026d3 70%, #f5d0fe 100%)',
    badgeBg: 'linear-gradient(180deg, #240a28, #140517)',
    badgeText: '#fae8ff',
    gold: '#fbbf24',
    goldLight: '#fde68a',
    textStroke: '#25042a'
  },
  purple: {
    frame: '#8b5cf6',
    frameBright: '#ddd6fe',
    bgGradient: 'radial-gradient(ellipse 120% 80% at 50% 20%, rgba(139,92,246,0.15), transparent 60%), linear-gradient(180deg, #180e2b 0%, #0d0717 55%, #05030a 100%)',
    artBg: 'radial-gradient(ellipse 70% 50% at 50% 30%, rgba(139,92,246,0.22), transparent 65%), repeating-linear-gradient(115deg, rgba(255,255,255,0.02) 0px, rgba(255,255,255,0.02) 2px, transparent 2px, transparent 40px), linear-gradient(180deg, #1f1236 0%, #10091c 45%, #07040d 100%)',
    titleGradient: 'linear-gradient(180deg, #f5f3ff 0%, #a78bfa 35%, #7c3aed 70%, #ddd6fe 100%)',
    badgeBg: 'linear-gradient(180deg, #180e2b, #0d0717)',
    badgeText: '#ede9fe',
    gold: '#fbbf24',
    goldLight: '#fde68a',
    textStroke: '#15082b'
  },
  orange: {
    frame: '#f97316',
    frameBright: '#fed7aa',
    bgGradient: 'radial-gradient(ellipse 120% 80% at 50% 20%, rgba(249,115,22,0.15), transparent 60%), linear-gradient(180deg, #261105 0%, #140802 55%, #080301 100%)',
    artBg: 'radial-gradient(ellipse 70% 50% at 50% 30%, rgba(249,115,22,0.22), transparent 65%), repeating-linear-gradient(115deg, rgba(255,255,255,0.02) 0px, rgba(255,255,255,0.02) 2px, transparent 2px, transparent 40px), linear-gradient(180deg, #2d1406 0%, #190a03 45%, #0d0501 100%)',
    titleGradient: 'linear-gradient(180deg, #fff7ed 0%, #fb923c 35%, #ea580c 70%, #fed7aa 100%)',
    badgeBg: 'linear-gradient(180deg, #261105, #140802)',
    badgeText: '#ffedd5',
    gold: '#fbbf24',
    goldLight: '#fde68a',
    textStroke: '#280c02'
  },
  cyan: {
    frame: '#0ea5e9',
    frameBright: '#bae6fd',
    bgGradient: 'radial-gradient(ellipse 120% 80% at 50% 20%, rgba(14,165,233,0.15), transparent 60%), linear-gradient(180deg, #051d29 0%, #020e14 55%, #010608 100%)',
    artBg: 'radial-gradient(ellipse 70% 50% at 50% 30%, rgba(14,165,233,0.22), transparent 65%), repeating-linear-gradient(115deg, rgba(255,255,255,0.02) 0px, rgba(255,255,255,0.02) 2px, transparent 2px, transparent 40px), linear-gradient(180deg, #072333 0%, #03121a 45%, #01080d 100%)',
    titleGradient: 'linear-gradient(180deg, #f0f9ff 0%, #38bdf8 35%, #0284c7 70%, #bae6fd 100%)',
    badgeBg: 'linear-gradient(180deg, #051d29, #020e14)',
    badgeText: '#e0f2fe',
    gold: '#fbbf24',
    goldLight: '#fde68a',
    textStroke: '#021520'
  }
};

export default function Card({
  titleTop = 'TROLL',
  titleBottom = 'KING',
  subtitle = 'Gorgath the Earthshaker',
  image,
  artLabel,
  tag,
  provider,
  theme = 'green',
  onClick,
  className = '',
  style = {},
  width,
  height
}) {
  const currentTheme = CARD_THEMES[theme] || CARD_THEMES.green;

  return (
    <div
      className={`troll-king-card-root ${className}`}
      style={{
        '--frame-green': currentTheme.frame,
        '--frame-green-bright': currentTheme.frameBright,
        '--gold': currentTheme.gold,
        '--gold-light': currentTheme.goldLight,
        '--text-mint': currentTheme.badgeText,
        '--custom-bg-gradient': currentTheme.bgGradient,
        '--custom-art-bg': currentTheme.artBg,
        '--custom-title-gradient': currentTheme.titleGradient,
        '--custom-badge-bg': currentTheme.badgeBg,
        '--custom-text-stroke': currentTheme.textStroke,
        ...(width ? { width: typeof width === 'number' ? `${width}px` : width } : {}),
        ...(height ? { height: typeof height === 'number' ? `${height}px` : height } : {}),
        ...style
      }}
      onClick={onClick}
      role={onClick ? 'button' : undefined}
      tabIndex={onClick ? 0 : undefined}
    >
      <div className="tk-card">
        <div className="tk-art" style={{ background: currentTheme.artBg }}>
          {image ? (
            <img
              src={image}
              alt={`${titleTop || ''} ${titleBottom || ''}`}
              className="tk-art-img"
              onError={(e) => {
                e.currentTarget.style.display = 'none';
              }}
            />
          ) : (
            <div className="tk-art-label">{artLabel || 'character illustration area'}</div>
          )}
        </div>

        {/* Frame border with notched corners */}
        <div className="tk-frame">
          <svg viewBox="0 0 468 724" preserveAspectRatio="none">
            {/* outer line, corners cut at 28px */}
            <polygon
              className="tk-frame-line"
              points="28,0 440,0 468,28 468,696 440,724 28,724 0,696 0,28"
            />
            {/* inner line, offset ~10px */}
            <polygon
              className="tk-frame-line-inner"
              points="34,10 434,10 458,34 458,690 434,714 34,714 10,690 10,34"
            />
          </svg>
        </div>



        <div className="tk-title-block">
          {titleTop && <div className="tk-title-line silver">{titleTop}</div>}
          {titleBottom && (
            <div
              className="tk-title-line mint"
              style={{
                background: currentTheme.titleGradient,
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                WebkitTextStroke: `0.4cqw ${currentTheme.textStroke}`
              }}
            >
              {titleBottom}
            </div>
          )}
          <div className="tk-rule">
            <span className="tk-line"></span>
            <span className="tk-diamond-sm"></span>
            <span className="tk-line"></span>
          </div>
        </div>

        {subtitle && (
          <div className="tk-badge-wrap">
            <div className="tk-badge-diamond"></div>
            <div className="tk-badge" style={{ background: currentTheme.badgeBg }}>
              <span>{subtitle}</span>
            </div>
            <div className="tk-badge-diamond"></div>
          </div>
        )}
      </div>
    </div>
  );
}
