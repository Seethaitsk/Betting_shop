import React from 'react';

export default function RegistrationSuccessModal({ machine, code, onContinue }) {
  if (!machine) return null;

  return (
    <div className="reg-success-backdrop" role="dialog" aria-modal="true" aria-labelledby="regSuccessTitle">
      <style>{`
        .reg-success-backdrop {
          position: fixed;
          inset: 0;
          background: rgba(4, 7, 18, 0.85);
          backdrop-filter: blur(8px);
          z-index: 99999;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 20px;
          animation: regFadeIn 0.3s ease-out forwards;
        }

        @keyframes regFadeIn {
          from { opacity: 0; transform: scale(0.96); }
          to { opacity: 1; transform: scale(1); }
        }

        .reg-success-card {
          position: relative;
          background: linear-gradient(180deg, #0d182e 0%, #080f1e 100%);
          border: 1.5px solid rgba(242, 193, 78, 0.4);
          border-radius: 20px;
          max-width: 460px;
          width: 100%;
          padding: 32px 28px 26px;
          text-align: center;
          box-shadow: 
            0 24px 60px rgba(0, 0, 0, 0.9),
            inset 0 1px 0 rgba(255, 255, 255, 0.12);
          color: #ffffff;
          overflow: hidden;
        }

        .reg-success-icon-wrap {
          position: relative;
          width: 76px;
          height: 76px;
          margin: 0 auto 18px;
          border-radius: 50%;
          background: radial-gradient(circle at 35% 30%, #fbbf24, #d97706);
          border: 2.5px solid #fde68a;
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: 0 4px 14px rgba(0, 0, 0, 0.4);
        }

        .reg-success-icon-wrap svg {
          width: 42px;
          height: 42px;
          color: #0b1120;
          filter: drop-shadow(0 2px 4px rgba(0, 0, 0, 0.25));
        }

        .reg-success-badge {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          background: rgba(245, 158, 11, 0.12);
          border: 1px solid rgba(245, 158, 11, 0.4);
          border-radius: 999px;
          padding: 4px 14px;
          font-family: 'Outfit', sans-serif;
          font-size: 11.5px;
          font-weight: 800;
          color: #ffea79;
          letter-spacing: 1px;
          text-transform: uppercase;
          margin-bottom: 12px;
        }

        .reg-success-title {
          font-family: 'Outfit', sans-serif;
          font-size: 26px;
          font-weight: 800;
          color: #ffffff;
          margin: 0 0 8px;
          letter-spacing: -0.3px;
        }

        .reg-success-desc {
          font-family: 'Manrope', sans-serif;
          font-size: 13.5px;
          color: #94a3b8;
          line-height: 1.45;
          margin: 0 0 22px;
        }

        .reg-success-details {
          background: rgba(15, 23, 42, 0.75);
          border: 1px solid rgba(51, 65, 85, 0.8);
          border-radius: 12px;
          padding: 14px 18px;
          margin-bottom: 24px;
          text-align: left;
          display: flex;
          flex-direction: column;
          gap: 10px;
        }

        .reg-detail-row {
          display: flex;
          justify-content: space-between;
          align-items: center;
          font-size: 13px;
        }

        .reg-detail-label {
          color: #64748b;
          font-weight: 600;
        }

        .reg-detail-val {
          color: #f8fafc;
          font-weight: 700;
          display: flex;
          align-items: center;
          gap: 6px;
        }

        .reg-status-pill {
          background: rgba(245, 158, 11, 0.12);
          color: #ffea79;
          border: 1px solid rgba(245, 158, 11, 0.4);
          border-radius: 999px;
          padding: 2px 10px;
          font-size: 11px;
          font-weight: 800;
          display: inline-flex;
          align-items: center;
          gap: 4px;
        }

        .reg-success-btn {
          width: 100%;
          background: linear-gradient(135deg, #f59e0b 0%, #d97706 50%, #b45309 100%);
          border: 1px solid rgba(255, 234, 121, 0.6);
          border-radius: 12px;
          padding: 14px 20px;
          font-family: 'Outfit', sans-serif;
          font-size: 15px;
          font-weight: 800;
          color: #0b1120;
          letter-spacing: 0.5px;
          cursor: pointer;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.35);
          transition: all 0.2s ease;
        }

        .reg-success-btn:hover {
          background: linear-gradient(135deg, #fbbf24 0%, #f59e0b 50%, #d97706 100%);
          box-shadow: 0 6px 16px rgba(0, 0, 0, 0.45);
          color: #000000;
          transform: translateY(-1px);
        }

        .reg-success-btn:active {
          transform: translateY(1px);
        }
      `}</style>

      <div className="reg-success-card" onClick={(e) => e.stopPropagation()}>
        <div className="reg-success-icon-wrap" aria-hidden="true">
          <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M20 6L9 17L4 12"
              stroke="currentColor"
              strokeWidth="3.2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>

        <span className="reg-success-badge">
          Device Activated
        </span>

        <h2 className="reg-success-title" id="regSuccessTitle">
          Successfully Registered!
        </h2>

        <p className="reg-success-desc">
          Your machine has been verified and registered with the retail betting terminal system.
        </p>

        <div className="reg-success-details">
          <div className="reg-detail-row">
            <span className="reg-detail-label">Shop Name</span>
            <span className="reg-detail-val">🏪 {machine.shop || 'Windhoek Central'}</span>
          </div>
          <div className="reg-detail-row">
            <span className="reg-detail-label">Device Type</span>
            <span className="reg-detail-val">
              {machine.type === 'smartpc' ? '🖥️ Smart PC' : '🎟️ Terminal'} ({machine.name || 'Terminal-01'})
            </span>
          </div>
          <div className="reg-detail-row">
            <span className="reg-detail-label">Setup Code</span>
            <span className="reg-detail-val" style={{ color: '#ffd15c', fontFamily: 'monospace', fontSize: '13.5px' }}>
              🔑 {code || 'WB-SHOP-4821'}
            </span>
          </div>
          <div className="reg-detail-row">
            <span className="reg-detail-label">Status</span>
            <span className="reg-status-pill">
              Ready &amp; Online
            </span>
          </div>
        </div>

        <button
          type="button"
          className="reg-success-btn"
          id="btnContinueToLobby"
          onClick={onContinue}
        >
          <span>Enter Casino Lobby</span>
          <span>→</span>
        </button>
      </div>
    </div>
  );
}
