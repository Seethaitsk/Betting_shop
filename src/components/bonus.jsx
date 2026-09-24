import React, { useState } from 'react';

export default function DepositPromoBanner({
  onDeposit,
  onPlayGame,
  className = ''
}) {
  const [showModal, setShowModal] = useState(false);
  const [isProcessing, setIsProcessing] = useState(false);

  const handleDeposit = () => {
    setIsProcessing(true);
    if (onDeposit) {
      onDeposit();
    }
    setTimeout(() => {
      setIsProcessing(false);
    }, 600);
  };

  const handleAllPromos = () => {
    setShowModal(true);
  };

  return (
    <div className={`deposit-promo-stage ${className}`}>
      <style>{`
        .deposit-promo-stage {
          --gold: #f2c14e;
          --gold-deep: #c98f1f;
          --parchment: #efdfb4;
          --parchment-shadow: #7a5b28;
          --navy-deep: #0a1120;
          --panel: rgba(8, 14, 28, 0.72);
          --ring: rgba(242, 193, 78, 0.35);

          width: 100%;
          display: block;
          margin: 12px 0 20px 0;
          box-sizing: border-box;
          font-family: 'Manrope', sans-serif;
        }

        .deposit-promo-banner {
          position: relative;
          width: 100%;
          aspect-ratio: 2172 / 390;
          border-radius: 14px;
          overflow: hidden;
          background-image: url('/assets/deposit_promo_bg.jpg');
          background-size: cover;
          background-position: center;
          border: 1.5px solid rgba(242, 193, 78, 0.3);
          box-shadow: 
            0 16px 45px rgba(0, 0, 0, 0.65), 
            0 0 20px rgba(0, 0, 0, 0.5),
            0 0 0 1px rgba(242, 193, 78, 0.15);
          display: grid;
          grid-template-columns: 32% 33% 35%;
          align-items: stretch;
          isolation: isolate;
        }

        /* Subtle dark gradient overlay on the far right to enhance contrast for perks & buttons */
        .deposit-promo-banner::before {
          content: "";
          position: absolute;
          inset: 0;
          background: linear-gradient(90deg, transparent 0%, transparent 63%, rgba(5, 8, 16, 0.45) 74%, rgba(5, 8, 16, 0.8) 100%);
          pointer-events: none;
          z-index: 1;
        }

        /* ---- Column 1: Left 3D Chest & Coin Artwork Area ---- */
        .deposit-promo-art-space {
          position: relative;
          z-index: 2;
          pointer-events: none;
        }

        /* ---- Column 2: Message centered directly inside the Parchment Scroll ---- */
        .deposit-promo-message {
          position: relative;
          z-index: 2;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          text-align: center;
          gap: clamp(2px, 0.5vw, 6px);
          padding: 2% clamp(6px, 1.2vw, 18px);
          width: 100%;
          box-sizing: border-box;
        }

        .deposit-promo-eyebrow {
          font-family: 'Outfit', 'Manrope', sans-serif;
          font-weight: 800;
          letter-spacing: 0.16em;
          font-size: clamp(9px, 0.95vw, 13px);
          color: #7c4e12;
          text-transform: uppercase;
          text-shadow: 0 1px 0 rgba(255, 255, 255, 0.45);
        }

        .deposit-promo-headline {
          font-family: 'Cinzel', serif;
          font-weight: 900;
          line-height: 1.05;
          font-size: clamp(14px, 2.3vw, 32px);
          color: #1b1004;
          text-shadow: 0 1px 0 rgba(255, 255, 255, 0.4);
          margin: 0;
          letter-spacing: -0.2px;
          width: 100%;
        }

        .deposit-promo-headline .accent {
          display: block;
          color: #9c600c;
          -webkit-text-stroke: 0.2px rgba(122, 91, 40, 0.3);
          letter-spacing: 0.2px;
        }

        .deposit-promo-subtext {
          font-family: 'Manrope', sans-serif;
          font-weight: 700;
          font-size: clamp(8px, 0.92vw, 12.5px);
          line-height: 1.32;
          color: #3d2c12;
          max-width: 95%;
          margin: 0 auto;
        }

        /* ---- Column 3: Right Perks + Site-Themed CTAs ---- */
        .deposit-promo-side {
          position: relative;
          z-index: 2;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          gap: clamp(8px, 1.2vw, 16px);
          padding: 2% clamp(10px, 1.8vw, 22px);
          width: 100%;
          box-sizing: border-box;
        }

        .deposit-promo-perks {
          width: 100%;
          max-width: 360px;
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          justify-items: center;
          align-items: flex-start;
          gap: clamp(4px, 0.8vw, 10px);
          margin: 0 auto;
        }

        .deposit-promo-perk {
          width: 100%;
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
          gap: clamp(3px, 0.5vw, 6px);
          cursor: pointer;
          transition: transform 0.2s ease;
        }

        .deposit-promo-perk:hover {
          transform: translateY(-2px);
        }

        .deposit-promo-perk-icon {
          width: clamp(26px, 3.2vw, 44px);
          height: clamp(26px, 3.2vw, 44px);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          background: radial-gradient(circle at 32% 28%, #1f2a48, #0a1124 72%);
          border: 1.5px solid var(--ring);
          box-shadow: 0 0 0 1px rgba(0, 0, 0, 0.4), 0 4px 10px rgba(0, 0, 0, 0.4);
        }

        .deposit-promo-perk-icon svg {
          width: 52%;
          height: 52%;
        }

        .deposit-promo-perk-label {
          color: #f4e6bf;
          font-weight: 700;
          font-size: clamp(7.5px, 0.85vw, 11.5px);
          letter-spacing: 0.01em;
          line-height: 1.2;
          text-shadow: 0 1px 3px rgba(0, 0, 0, 0.8);
          white-space: nowrap;
        }

        .deposit-promo-ctas {
          width: 100%;
          display: flex;
          justify-content: center;
          align-items: center;
        }

        /* Secondary Button: Matches Site-wide Gold/Navy Pill Style */
        .deposit-promo-btn-secondary {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 6px;
          background: rgba(10, 16, 38, 0.88);
          border: 1.5px solid rgba(245, 158, 11, 0.8);
          border-radius: 999px;
          padding: clamp(7px, 1vw, 11px) clamp(18px, 2.4vw, 32px);
          min-width: clamp(140px, 16vw, 220px);
          font-family: 'Outfit', 'Manrope', sans-serif;
          font-weight: 800;
          font-size: clamp(8px, 0.95vw, 13px);
          color: #ffea79;
          letter-spacing: 0.6px;
          text-transform: uppercase;
          cursor: pointer;
          box-shadow: 0 4px 14px rgba(0, 0, 0, 0.5);
          transition: all 0.2s ease;
          outline: none;
          white-space: nowrap;
          backdrop-filter: blur(6px);
          text-align: center;
        }

        .deposit-promo-btn-secondary:hover {
          background: rgba(20, 28, 55, 0.98);
          border-color: #ffd700;
          box-shadow: 0 6px 18px rgba(0, 0, 0, 0.6);
          color: #ffffff;
          transform: translateY(-1.5px);
        }

        /* Modal styling */
        .deposit-promo-modal-backdrop {
          position: fixed;
          inset: 0;
          background: rgba(0, 0, 0, 0.8);
          backdrop-filter: blur(5px);
          z-index: 10000;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 20px;
        }

        .deposit-promo-modal {
          background: #091020;
          border: 1.5px solid var(--gold);
          border-radius: 14px;
          max-width: 480px;
          width: 100%;
          padding: 24px;
          box-shadow: 0 16px 40px rgba(0, 0, 0, 0.9), 0 0 25px rgba(242, 193, 78, 0.25);
          color: #f4e6bf;
        }

        .deposit-promo-modal h3 {
          margin: 0 0 16px 0;
          font-family: 'Cinzel', serif;
          color: var(--gold);
          font-size: 18px;
          display: flex;
          justify-content: space-between;
          align-items: center;
          border-bottom: 1px solid rgba(242, 193, 78, 0.2);
          padding-bottom: 10px;
        }

        .deposit-promo-modal-close {
          background: transparent;
          border: none;
          color: #cbd5e1;
          font-size: 20px;
          cursor: pointer;
        }

        .deposit-promo-modal-close:hover {
          color: #ffffff;
        }

        .deposit-promo-modal ul {
          padding-left: 20px;
          font-size: 13.5px;
          line-height: 1.6;
          color: #cbd5e1;
          margin: 0 0 20px 0;
        }

        .deposit-promo-modal ul li {
          margin-bottom: 10px;
        }

        .deposit-promo-modal ul strong {
          color: #fff;
        }

        /* Mobile/Tablet Responsiveness */
        @media (max-width: 768px) {
          .deposit-promo-banner {
            aspect-ratio: auto;
            grid-template-columns: 1fr;
          }
          .deposit-promo-banner::before {
            background: linear-gradient(180deg, rgba(5, 8, 16, 0.2) 0%, rgba(5, 8, 16, 0.5) 45%, rgba(5, 8, 16, 0.88) 100%);
          }
          .deposit-promo-art-space {
            display: none;
          }
          .deposit-promo-message {
            padding: 20px 20px 10px 20px;
            text-align: center;
            align-items: center;
          }
          .deposit-promo-subtext {
            max-width: 44ch;
          }
          .deposit-promo-side {
            padding: 10px 20px 20px 20px;
          }
          .deposit-promo-ctas {
            justify-content: center;
            flex-wrap: wrap;
          }
        }
      `}</style>

      <div
        className="deposit-promo-banner"
        role="img"
        aria-label="Exclusive deposit promo: 100% bonus up to, win more gifts"
      >
        {/* Column 1: Left visual area for the 3D treasure chest and gold coins (33% width) */}
        <div className="deposit-promo-art-space" aria-hidden="true" />

        {/* Column 2: Message centered directly inside the parchment scroll (32% width) */}
        <div className="deposit-promo-message">
          <span className="deposit-promo-eyebrow">Exclusive Promo</span>
          <h2 className="deposit-promo-headline">
            100% BONUS UP TO
            <span className="accent">WIN MORE GIFTS</span>
          </h2>
          <p className="deposit-promo-subtext">
            First 3 deposits unlock mystery rewards, free spins and cash match boosts.
          </p>
        </div>

        {/* Column 3: Perks and CTAs centered over the right night scene (35% width) */}
        <div className="deposit-promo-side">
          <div className="deposit-promo-perks">
            <div
              className="deposit-promo-perk"
              onClick={() => onPlayGame && onPlayGame('Loyalty Chests')}
              title="Unlock Mystery Rewards"
            >
              <span className="deposit-promo-perk-icon" aria-hidden="true">
                <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M20 8H4a1 1 0 00-1 1v3a1 1 0 001 1h16a1 1 0 001-1V9a1 1 0 00-1-1z" stroke="#f2c14e" strokeWidth="1.6" strokeLinejoin="round" />
                  <path d="M12 8v13M4 13v6a1 1 0 001 1h14a1 1 0 001-1v-6" stroke="#f2c14e" strokeWidth="1.6" strokeLinejoin="round" />
                  <path d="M12 8c-1.8 0-4-1-4-3a2.2 2.2 0 014-1.3A2.2 2.2 0 0116 5c0 2-2.2 3-4 3z" stroke="#f2c14e" strokeWidth="1.6" strokeLinejoin="round" />
                </svg>
              </span>
              <span className="deposit-promo-perk-label">
                Mystery<br />Rewards
              </span>
            </div>

            <div
              className="deposit-promo-perk"
              onClick={() => onPlayGame && onPlayGame('Free Spins')}
              title="Unlock Free Spins"
            >
              <span className="deposit-promo-perk-icon" aria-hidden="true">
                <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M13 2L4 14h6l-1 8 9-12h-6l1-8z" stroke="#f2c14e" strokeWidth="1.6" strokeLinejoin="round" fill="none" />
                </svg>
              </span>
              <span className="deposit-promo-perk-label">
                Free<br />Spins
              </span>
            </div>

            <div
              className="deposit-promo-perk"
              onClick={() => onPlayGame && onPlayGame('Cash Match')}
              title="Cash Match Boosts"
            >
              <span className="deposit-promo-perk-icon" aria-hidden="true">
                <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="9" cy="9" r="6" stroke="#f2c14e" strokeWidth="1.6" />
                  <circle cx="15" cy="15" r="6" stroke="#f2c14e" strokeWidth="1.6" />
                </svg>
              </span>
              <span className="deposit-promo-perk-label">
                Cash Match<br />Boosts
              </span>
            </div>
          </div>

          <div className="deposit-promo-ctas">
            <button
              className="deposit-promo-btn-secondary"
              type="button"
              id="btnAllPromosBanner"
              onClick={handleAllPromos}
            >
              All Active Promos
            </button>
          </div>
        </div>
      </div>

      {showModal && (
        <div className="deposit-promo-modal-backdrop" onClick={() => setShowModal(false)}>
          <div className="deposit-promo-modal" onClick={(e) => e.stopPropagation()}>
            <h3>
              <span>Active Promotions</span>
              <button
                type="button"
                className="deposit-promo-modal-close"
                onClick={() => setShowModal(false)}
              >
                ✕
              </button>
            </h3>
            <ul>
              <li>🎁 <strong>100% Match Welcome Bonus:</strong> Up to N$ 5,000 on your first 3 deposits.</li>
              <li>✨ <strong>Mystery Loot Rewards:</strong> Daily gift boxes and loyalty drops.</li>
              <li>🎰 <strong>50 Free Spins:</strong> Available on Sweet Bonanza &amp; Gates of Olympus.</li>
              <li>⚡ <strong>Cash Match Boosts:</strong> Weekend deposit multipliers and loss back insurance.</li>
            </ul>
            <button
              type="button"
              className="deposit-promo-btn-primary"
              style={{ width: '100%', justifyContent: 'center' }}
              onClick={() => {
                setShowModal(false);
                handleDeposit();
              }}
            >
              Claim &amp; Deposit Now
            </button>
          </div>
        </div>
      )}
    </div>
  );
}