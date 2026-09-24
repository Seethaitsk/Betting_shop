import React, { useState } from 'react';
import { money } from '../data/casinoData';

export default function GamePlayModal({ gameName, balance, onSpinWin, onClose }) {
  const [reels, setReels] = useState(['⚡', '👑', '💎']);
  const [spinning, setSpinning] = useState(false);
  const [resultText, setResultText] = useState('Press SPIN to test your luck! (Bet: N$ 10.00)');

  const symbols = ['⚡', '👑', '💎', '🦬', '7️⃣', '🔔', '🍒'];

  const handleSpin = () => {
    if (spinning) return;
    if (balance < 10) {
      alert('Insufficient balance! Deposit funds or simulate a note.');
      return;
    }

    setSpinning(true);
    setResultText('Spinning the reels...');

    setTimeout(() => {
      setSpinning(false);
      const isWin = Math.random() > 0.45;
      let s1, s2, s3;

      if (isWin) {
        const winSym = symbols[Math.floor(Math.random() * 4)];
        s1 = s2 = s3 = winSym;
        const payout = 50;
        onSpinWin(-10 + payout);
        setResultText(`🎉 BIG WIN! +${money(payout)} 🎉`);
      } else {
        s1 = symbols[Math.floor(Math.random() * symbols.length)];
        s2 = symbols[Math.floor(Math.random() * symbols.length)];
        s3 = symbols[Math.floor(Math.random() * symbols.length)];
        onSpinWin(-10);
        setResultText('Try again! Spin for the Jackpot!');
      }

      setReels([s1, s2, s3]);
    }, 700);
  };

  const handleMaxWin = () => {
    setReels(['⚡', '⚡', '⚡']);
    setResultText('⚡ OLYMPUS BLESSING! +N$ 70.00 ⚡');
    onSpinWin(70);
  };

  return (
    <div className="scrim" id="scrim">
      <div className="game-play-modal">
        <div className="game-play-header">
          <h2 style={{ margin: 0, color: '#fff', fontSize: '22px' }}>
            🎰 {gameName || 'Casino Game'}
          </h2>
          <button
            type="button"
            className="btn-quiet"
            id="modalClose"
            style={{ padding: '6px 14px', borderRadius: '999px' }}
            onClick={onClose}
          >
            ✕ Close
          </button>
        </div>

        <div className="game-play-stage">
          <div className="reels-row" id="reelsRow">
            <div className={`reel ${spinning ? 'spin-anim' : ''}`} id="reel1">
              {reels[0]}
            </div>
            <div className={`reel ${spinning ? 'spin-anim' : ''}`} id="reel2">
              {reels[1]}
            </div>
            <div className={`reel ${spinning ? 'spin-anim' : ''}`} id="reel3">
              {reels[2]}
            </div>
          </div>
          <div
            id="spinResult"
            style={{
              marginTop: '16px',
              fontSize: '16px',
              fontWeight: 700,
              color: 'var(--gold-bright)',
              minHeight: '24px'
            }}
          >
            {resultText}
          </div>
        </div>

        <div style={{ display: 'flex', gap: '12px', justifyContent: 'center' }}>
          <button
            type="button"
            className="btn btn-gold"
            id="btnSpin"
            style={{ minWidth: '160px' }}
            onClick={handleSpin}
            disabled={spinning}
          >
            🎲 SPIN (N$ 10)
          </button>
          <button
            type="button"
            className="btn btn-purple"
            id="btnMaxWin"
            onClick={handleMaxWin}
          >
            ⚡ SIMULATE WIN (+N$ 70)
          </button>
        </div>
      </div>
    </div>
  );
}
