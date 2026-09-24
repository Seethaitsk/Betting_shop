import React from 'react';
import TopBar from './TopBar';
import ShopFooter from './ShopFooter';
import Card from './card';
import Herobanner from './Herobanner';
import DepositPromoBanner from './bonus';
import {
  money,
  REF1_HOT_GAMES,
  REF1_TOP_GAMES
} from '../data/casinoData';

export default function LobbyView({
  machine,
  balance,
  onDeposit,
  onCashout,
  onPlayGame,
  code
}) {
  const [activeSubcategory, setActiveSubcategory] = React.useState('Slots');
  const m = machine || { name: 'Terminal-01', shop: 'Windhoek Central', type: 'terminal' };

  return (
    <>
      <TopBar
        machine={machine}
        balance={balance}
        onDeposit={onDeposit}
        onCashout={onCashout}
      />

      <div className="lobby-content">
        {/* 1. HOT GAMES SECTION (2 full rows of 5 cards = 10 games) */}
        <section className="hot-games-section">
          <div className="section-header-ref1">
            <div className="section-title-ref1">
              <span className="star-icon">⭐</span> HOT GAMES
            </div>
            <button
              type="button"
              className="badge-all-yellow"
              onClick={() => onPlayGame('Hot Games')}
            >
              ALL &gt;
            </button>
          </div>

          <div className="hot-games-grid-ref1">
            {REF1_HOT_GAMES.map((g) => (
              <Card
                key={g.id}
                titleTop={g.titleTop}
                titleBottom={g.titleBottom}
                subtitle={g.subtitle}
                tag={g.badge}
                provider={g.provider}
                theme={g.theme}
                image={g.image}
                artLabel={g.artLabel}
                onClick={() => onPlayGame(g.name)}
              />
            ))}
          </div>
        </section>

        {/* 3. LIVE GAMES SECTION */}
        <div className="section-header-ref1">
          <div className="section-title-ref1">
            <span className="star-icon">⭐</span> Live Games
          </div>
          <button
            type="button"
            className="badge-all-yellow"
            onClick={() => onPlayGame('Live Games')}
          >
            ALL &gt;
          </button>
        </div>

        {/* 4. QUICK PLAY CATEGORY HUB: Casino + Dice Herobanner */}
        <div className="quick-hub-ref1">
          <Herobanner
            onCasinoClick={() => onPlayGame && onPlayGame('Live Casino')}
            onDiceClick={() => onPlayGame && onPlayGame('Dice Duels')}
            onPlayGame={onPlayGame}
          />

          <div className="hub-five-badges-row">
            {[
              { name: 'Roulette', img: '/assets/icon_roulette_3d.jpg' },
              { name: 'Slots', img: '/assets/icon_slots_3d.jpg' },
              { name: 'Cards', img: '/assets/icon_cards_3d.jpg' },
              { name: 'Fishing', img: '/assets/icon_fishing_3d.jpg' },
              { name: 'Lottery', img: '/assets/icon_lottery_3d.jpg' }
            ].map((cat) => (
              <div
                key={cat.name}
                className={`hub-badge-pill ${activeSubcategory === cat.name ? 'active' : ''}`}
                onClick={() => {
                  setActiveSubcategory(cat.name);
                  onPlayGame(cat.name);
                }}
                role="button"
                tabIndex={0}
              >
                <img
                  src={cat.img}
                  alt={cat.name}
                  className="hub-pill-img-art"
                />
                <span className="hub-pill-label">{cat.name}</span>
                <span className="hub-pill-arrow">→</span>
              </div>
            ))}
          </div>
        </div>

        {/* 6. TOP GAMES SECTION (From 1st Image & User Request) */}
        <section className="top-games-section">
          <div className="section-header-ref1">
            <div className="section-title-ref1">
              <span className="star-icon">⭐</span> Top Games
            </div>
            <button
              type="button"
              className="badge-all-yellow"
              onClick={() => onPlayGame('Top Games')}
            >
              ALL &gt;
            </button>
          </div>

          <div className="hot-games-grid-ref1">
            {REF1_TOP_GAMES.map((g) => (
              <Card
                key={g.id}
                titleTop={g.titleTop}
                titleBottom={g.titleBottom}
                subtitle={g.subtitle}
                tag={g.badge}
                provider={g.provider}
                theme={g.theme}
                image={g.image}
                artLabel={g.artLabel}
                onClick={() => onPlayGame(g.name)}
              />
            ))}
          </div>
        </section>



        {/* 9. SPECIAL OFFERS (From 1st Image: 3 Cards Side-by-Side) */}
        {/* 9. SPECIAL OFFERS (Horizontal Cards with Glow, Chamfer Accents & Arrow Actions) */}
        <section className="special-offers-ref1-section">
          <div className="section-header-ref1">
            <div className="section-title-ref1">
              <span className="star-icon">⭐</span> Special Offers
            </div>
          </div>

          <div className="special-offers-ref1-grid">
            {/* Offer 1: Loyalty Chests */}
            <div
              className="offer-card-ref1 offer-card-loyalty"
              onClick={() => onPlayGame('Loyalty Chests')}
            >
              <div className="offer-card-glow" />
              <div className="offer-card-corner top-left" />
              <div className="offer-card-corner top-right" />
              <div className="offer-card-corner bottom-left" />
              <div className="offer-card-corner bottom-right" />

              <div className="offer-art-wrapper">
                <img
                  src="/assets/promo1.png"
                  alt="Loyalty Chests"
                  className="offer-icon-ref1"
                />
              </div>

              <div className="offer-content-ref1">
                <h4 className="offer-title-ref1">Loyalty Chests</h4>
                <p className="offer-desc-ref1">Unlock daily gift boxes &amp; loyalty prizes with every ticket</p>
              </div>

              <div className="offer-arrow-btn" aria-hidden="true">
                <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M9 5l7 7-7 7" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
            </div>

            {/* Offer 2: Cashdrop Cashback */}
            <div
              className="offer-card-ref1 offer-card-cashdrop"
              onClick={() => onPlayGame('Cashdrop Cashback')}
            >
              <div className="offer-card-glow" />
              <div className="offer-card-corner top-left" />
              <div className="offer-card-corner top-right" />
              <div className="offer-card-corner bottom-left" />
              <div className="offer-card-corner bottom-right" />

              <div className="offer-art-wrapper">
                <img
                  src="/assets/promo2.png"
                  alt="Cashdrop Cashback"
                  className="offer-icon-ref1"
                />
              </div>

              <div className="offer-content-ref1">
                <h4 className="offer-title-ref1">Cashdrop Cashback</h4>
                <p className="offer-desc-ref1">Get up to 20% weekly cashback on slot and table losses</p>
              </div>

              <div className="offer-arrow-btn" aria-hidden="true">
                <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M9 5l7 7-7 7" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
            </div>

            {/* Offer 3: Daily Zero Loss */}
            <div
              className="offer-card-ref1 offer-card-zeroloss"
              onClick={() => onPlayGame('Daily Zero Loss')}
            >
              <div className="offer-card-glow" />
              <div className="offer-card-corner top-left" />
              <div className="offer-card-corner top-right" />
              <div className="offer-card-corner bottom-left" />
              <div className="offer-card-corner bottom-right" />

              <div className="offer-art-wrapper">
                <img
                  src="/assets/promo3.png"
                  alt="Daily Zero Loss"
                  className="offer-icon-ref1"
                />
              </div>

              <div className="offer-content-ref1">
                <h4 className="offer-title-ref1">Daily Zero Loss</h4>
                <p className="offer-desc-ref1">Your first bet every day is 100% risk-free protected</p>
              </div>

              <div className="offer-arrow-btn" aria-hidden="true">
                <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M9 5l7 7-7 7" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
            </div>
          </div>
        </section>

        {/* 10. EXCLUSIVE PROMO SECTION ("DEPOSIT PROMO BANNER") */}
        <DepositPromoBanner onDeposit={onDeposit} onPlayGame={onPlayGame} />
      </div>

      <ShopFooter machine={m} code={code} />
    </>
  );
}
