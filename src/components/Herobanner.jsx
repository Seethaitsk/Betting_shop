import React from 'react';

export default function Herobanner({
  onCasinoClick,
  onDiceClick,
  onPlayGame,
  className = ''
}) {
  const handleCasino = () => {
    if (onCasinoClick) onCasinoClick();
    else if (onPlayGame) onPlayGame('Live Casino');
  };

  const handleDice = () => {
    if (onDiceClick) onDiceClick();
    else if (onPlayGame) onPlayGame('Dice Duels');
  };

  return (
    <div className={`herobanner-container ${className}`}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700;800;900&display=swap');

        .herobanner-container {
          width: 100%;
          font-family: 'Poppins', sans-serif;
          margin-bottom: 24px;
        }

        .herobanner-row {
          display: flex;
          gap: 20px;
          width: 100%;
        }

        @media (max-width: 860px) {
          .herobanner-row {
            flex-direction: column;
            gap: 16px;
          }
        }

        /* Base Card Styling */
        .hero-card {
          position: relative;
          flex: 1;
          height: 240px;
          border-radius: 20px;
          overflow: hidden;
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 26px 32px;
          isolation: isolate;
          cursor: pointer;
          transition: transform 0.28s cubic-bezier(0.2, 0.8, 0.2, 1), box-shadow 0.28s ease, border-color 0.28s ease;
          user-select: none;
        }

        .hero-card:hover {
          transform: translateY(-5px);
        }

        /* ------------------ CASINO CARD ------------------ */
        .hero-card.casino {
          background:
            radial-gradient(circle at 75% 50%, rgba(245, 160, 30, 0.3) 0%, rgba(200, 100, 20, 0.12) 45%, transparent 70%),
            linear-gradient(135deg, #180f07 0%, #0c0703 50%, #150903 100%);
          border: 2px solid #eab308;
          box-shadow: 
            0 0 16px rgba(234, 179, 8, 0.35),
            0 16px 40px rgba(0, 0, 0, 0.75);
        }

        .hero-card.casino:hover {
          border-color: #fde047;
          box-shadow: 
            0 0 28px rgba(250, 204, 21, 0.55),
            0 22px 52px rgba(0, 0, 0, 0.85);
        }

        /* Left Tech Notch Accent for Casino */
        .hero-card.casino::before {
          content: "";
          position: absolute;
          left: 0;
          top: 14px;
          bottom: 14px;
          width: 5px;
          border-radius: 0 4px 4px 0;
          background: linear-gradient(180deg, #ffe58f 0%, #f59e0b 50%, #b45309 100%);
          box-shadow: 0 0 14px rgba(245, 160, 30, 0.7);
        }

        /* Corner Tech Highlight Accent */
        .hero-card.casino .tech-corner-accent {
          position: absolute;
          top: -2px;
          left: -2px;
          width: 26px;
          height: 26px;
          border-top: 3px solid #ffde6a;
          border-left: 3px solid #ffde6a;
          border-top-left-radius: 20px;
          pointer-events: none;
        }

        /* ------------------ DICE CARD ------------------ */
        .hero-card.dice {
          background:
            radial-gradient(circle at 75% 50%, rgba(0, 180, 255, 0.3) 0%, rgba(90, 40, 255, 0.2) 45%, transparent 70%),
            linear-gradient(135deg, #06091d 0%, #030412 50%, #080620 100%);
          border: 2px solid #00b4d8;
          box-shadow: 
            0 0 18px rgba(0, 180, 216, 0.4),
            0 16px 40px rgba(0, 0, 0, 0.75);
        }

        .hero-card.dice:hover {
          border-color: #48cae4;
          box-shadow: 
            0 0 28px rgba(72, 202, 228, 0.6),
            0 22px 52px rgba(0, 0, 0, 0.85);
        }

        /* Left Tech Notch Accent for Dice */
        .hero-card.dice::before {
          content: "";
          position: absolute;
          left: 0;
          top: 14px;
          bottom: 14px;
          width: 5px;
          border-radius: 0 4px 4px 0;
          background: linear-gradient(180deg, #38bdf8 0%, #0284c7 50%, #0369a1 100%);
          box-shadow: 0 0 14px rgba(56, 189, 248, 0.7);
        }

        /* Corner Tech Highlight Accent */
        .hero-card.dice .tech-corner-accent {
          position: absolute;
          top: -2px;
          left: -2px;
          width: 26px;
          height: 26px;
          border-top: 3px solid #7dd3fc;
          border-left: 3px solid #7dd3fc;
          border-top-left-radius: 20px;
          pointer-events: none;
        }

        /* Badges */
        .hero-badge {
          display: inline-flex;
          align-items: center;
          gap: 7px;
          font-size: 11.5px;
          font-weight: 700;
          letter-spacing: 0.04em;
          text-transform: uppercase;
          padding: 6px 14px 6px 11px;
          border-radius: 20px;
          margin-bottom: 12px;
          width: fit-content;
        }

        .hero-badge.badge-live {
          background: linear-gradient(90deg, #dc2626, #ef4444);
          color: #ffffff;
          box-shadow: 0 0 14px rgba(220, 38, 38, 0.6);
        }

        .hero-badge.badge-live .live-dot {
          width: 7.5px;
          height: 7.5px;
          border-radius: 50%;
          background: #ffffff;
          box-shadow: 0 0 6px #ffffff;
          animation: liveDotPulse 1.4s ease-in-out infinite alternate;
        }

        @keyframes liveDotPulse {
          0% { transform: scale(0.85); opacity: 0.7; }
          100% { transform: scale(1.2); opacity: 1; }
        }

        .hero-badge.badge-rtp {
          background: rgba(15, 23, 42, 0.75);
          border: 1px solid rgba(234, 179, 8, 0.65);
          color: #fde047;
          box-shadow: 0 0 12px rgba(234, 179, 8, 0.25);
        }

        .hero-badge.badge-rtp .rtp-icon {
          color: #fbbf24;
          font-size: 13px;
        }

        /* Content Text Area */
        .hero-content {
          position: relative;
          z-index: 2;
          display: flex;
          flex-direction: column;
          justify-content: center;
          max-width: 55%;
          height: 100%;
        }

        .hero-title {
          font-size: 36px;
          font-weight: 900;
          letter-spacing: 0.02em;
          line-height: 1.05;
          margin-bottom: 10px;
          color: #ffffff;
          text-shadow: 0 2px 14px rgba(0, 0, 0, 0.85);
        }

        .hero-desc {
          font-size: 13px;
          font-weight: 400;
          color: rgba(255, 255, 255, 0.8);
          line-height: 1.45;
          margin-bottom: 16px;
        }

        /* CTA Buttons */
        .hero-btn {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
          font-size: 12.5px;
          font-weight: 800;
          letter-spacing: 0.04em;
          text-transform: uppercase;
          padding: 10px 22px;
          border-radius: 9px;
          border: none;
          cursor: pointer;
          width: fit-content;
          transition: transform 0.2s ease, box-shadow 0.2s ease;
        }

        .hero-btn:hover {
          transform: translateY(-2px);
        }

        .hero-btn.btn-gold {
          background: linear-gradient(180deg, #ffd75e 0%, #f59e0b 100%);
          color: #1a0f00;
          box-shadow: 0 4px 16px rgba(245, 158, 11, 0.48);
        }

        .hero-btn.btn-cyan {
          background: linear-gradient(90deg, #00d2ff 0%, #0088ff 100%);
          color: #ffffff;
          box-shadow: 0 4px 18px rgba(0, 210, 255, 0.5);
        }

        .hero-btn .btn-arrow {
          font-size: 14px;
          transition: transform 0.2s ease;
        }

        .hero-card:hover .hero-btn .btn-arrow {
          transform: translateX(4px);
        }

        /* 3D Visual Images */
        .hero-visual-container {
          position: absolute;
          right: 0;
          top: 0;
          bottom: 0;
          width: 52%;
          display: flex;
          align-items: center;
          justify-content: center;
          pointer-events: none;
          z-index: 1;
        }

        .hero-visual-img {
          height: 130%;
          max-height: 290px;
          width: auto;
          object-fit: contain;
          transition: transform 0.35s cubic-bezier(0.2, 0.8, 0.2, 1), filter 0.35s ease;
        }

        .hero-visual-img.roulette-art {
          transform: scale(1) translateX(12px) translateY(4px);
          filter: drop-shadow(0 12px 30px rgba(0, 0, 0, 0.7));
        }

        .hero-card.casino:hover .hero-visual-img.roulette-art {
          transform: scale(1.05) translateX(10px) translateY(2px);
          filter: drop-shadow(0 16px 35px rgba(245, 160, 30, 0.38)) drop-shadow(0 12px 30px rgba(0, 0, 0, 0.75));
        }

        .hero-visual-img.dice-art {
          transform: scale(0.96) translateX(10px);
          filter: drop-shadow(0 10px 28px rgba(0, 0, 0, 0.7));
        }

        .hero-card.dice:hover .hero-visual-img.dice-art {
          transform: scale(1.03) translateX(8px);
          filter: drop-shadow(0 14px 35px rgba(120, 80, 255, 0.48)) drop-shadow(0 10px 28px rgba(0, 0, 0, 0.75));
        }
      `}</style>

      <div className="herobanner-row">
        {/* CASINO HERO PROMO */}
        <div
          className="hero-card casino"
          onClick={handleCasino}
          role="button"
          tabIndex={0}
        >
          <div className="tech-corner-accent"></div>
          <div className="hero-content">
            <div className="hero-badge badge-live">
              <span className="live-dot"></span>
              Live Dealers
            </div>
            <div className="hero-title casino-title">CASINO</div>
            <div className="hero-desc">Live tables, Roulette, Blackjack &amp; VIP dealer rooms</div>
            <button type="button" className="hero-btn btn-gold" onClick={handleCasino}>
              PLAY NOW <span className="btn-arrow">→</span>
            </button>
          </div>

          <div className="hero-visual-container">
            <img
              src="/assets/roulette.png"
              alt="Live Casino Roulette"
              className="hero-visual-img roulette-art"
              loading="eager"
            />
          </div>
        </div>

        {/* DICE HERO PROMO */}
        <div
          className="hero-card dice"
          onClick={handleDice}
          role="button"
          tabIndex={0}
        >
          <div className="tech-corner-accent"></div>
          <div className="hero-content">
            <div className="hero-badge badge-rtp">
              <span className="rtp-icon">⚡</span>
              99% RTP · Provably Fair
            </div>
            <div className="hero-title dice-title">DICE</div>
            <div className="hero-desc">Provably fair dice rolls &amp; lightning multiplier targets</div>
            <button type="button" className="hero-btn btn-cyan" onClick={handleDice}>
              ROLL NOW <span className="btn-arrow">→</span>
            </button>
          </div>

          <div className="hero-visual-container">
            <img
              src="/assets/dice.png"
              alt="Dice Duels"
              className="hero-visual-img dice-art"
              loading="eager"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
