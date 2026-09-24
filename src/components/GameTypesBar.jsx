import React, { useRef } from 'react';

export const GAME_TYPES_DATA = [
  { id: 'all', name: 'All Games', icon: '🎮', badge: '120+', badgeType: 'count' },
  { id: 'hot', name: 'Hot Games', icon: '🔥', badge: 'HOT', badgeType: 'fire' },
  { id: 'slots', name: 'Slots', icon: '🎰', badge: '85', badgeType: 'count' },
  { id: 'live', name: 'Live Casino', icon: '🎥', badge: 'LIVE', badgeType: 'live' },
  { id: 'crash', name: 'Crash / Aviator', icon: '🚀', badge: 'NEW', badgeType: 'new' },
  { id: 'table', name: 'Table Games', icon: '🃏', badge: '30', badgeType: 'count' },
  { id: 'roulette', name: 'Roulette', icon: '🪙', badge: '15', badgeType: 'count' },
  { id: 'jackpots', name: 'Jackpots', icon: '💰', badge: 'N$ 2.4M', badgeType: 'jackpot' },
  { id: 'dice', name: 'Dice & Duels', icon: '🎲', badge: 'POPULAR', badgeType: 'hot' },
  { id: 'tournaments', name: 'Tournaments', icon: '🏆', badge: 'ACTIVE', badgeType: 'tourney' },
  { id: 'sports', name: 'Virtual Sport', icon: '⚽', badge: '40+', badgeType: 'count' }
];

export default function GameTypesBar({ activeType = 'all', onSelectType, onPlayGame }) {
  const scrollContainerRef = useRef(null);

  const handleSelect = (type) => {
    if (onSelectType) {
      onSelectType(type.id);
    }
    if (onPlayGame && type.id !== 'all') {
      onPlayGame(type.name);
    }
  };

  const scroll = (direction) => {
    if (scrollContainerRef.current) {
      const offset = direction === 'left' ? -240 : 240;
      scrollContainerRef.current.scrollBy({ left: offset, behavior: 'smooth' });
    }
  };

  return (
    <div className="game-types-bar-wrapper" role="region" aria-label="Game Types and Categories">
      <div className="game-types-bar-inner">
        {/* Left Scroll Button */}
        <button
          type="button"
          className="game-types-scroll-btn scroll-left"
          onClick={() => scroll('left')}
          aria-label="Scroll left"
        >
          ‹
        </button>

        {/* Scrollable Container */}
        <div className="game-types-scroller" ref={scrollContainerRef}>
          {GAME_TYPES_DATA.map((item) => {
            const isActive = activeType === item.id;
            return (
              <button
                key={item.id}
                type="button"
                className={`game-type-pill-btn ${isActive ? 'active' : ''}`}
                onClick={() => handleSelect(item)}
                aria-pressed={isActive}
              >
                <span className="game-type-icon-wrapper" aria-hidden="true">
                  {item.icon}
                </span>
                <span className="game-type-label">{item.name}</span>
                {item.badge && (
                  <span className={`game-type-pill-badge badge-${item.badgeType}`}>
                    {item.badge}
                  </span>
                )}
              </button>
            );
          })}
        </div>

        {/* Right Scroll Button */}
        <button
          type="button"
          className="game-types-scroll-btn scroll-right"
          onClick={() => scroll('right')}
          aria-label="Scroll right"
        >
          ›
        </button>
      </div>
    </div>
  );
}
