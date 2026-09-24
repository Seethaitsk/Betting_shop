import React from 'react';
import { isCodeShaped } from '../data/casinoData';
import ShopFooter from './ShopFooter';

export default function RegisterView({
  code,
  setCode,
  type,
  setType,
  tick,
  setTick,
  err,
  setErr,
  onRegister,
  machine
}) {
  const terminal = type === 'terminal';
  const ready = isCodeShaped(code) && type && (!terminal || tick);

  const handleCodeChange = (e) => {
    let raw = e.target.value.toUpperCase().replace(/[^A-Z0-9]/g, '');
    if (raw.startsWith('WBSHOP')) raw = 'WB-SHOP-' + raw.slice(6, 10);
    else if (raw.startsWith('WB')) raw = 'WB-' + raw.slice(2);
    setCode(raw);
    setErr('');
  };

  const handleSelectType = (selectedType) => {
    setType(selectedType);
    setTick(false);
    setErr('');
  };

  return (
    <div className="stage">
      <div className="reg-wrap">
        <div className="reg-brand">
          <div className="logo-wrapper" style={{ margin: '0 auto 10px' }}>
            <i className="fa-solid fa-crown crown-icon" style={{ fontSize: '1.5rem', marginBottom: '2px' }}></i>
            <div className="logo-text" style={{ fontSize: '2.5rem', justifyContent: 'center' }}>
              <span className="logo-betting">BETTING</span>
              <span className="logo-shop">SHOP</span>
            </div>
          </div>
          <div className="lock-pill">
            <span>BETTING SHOP TERMINAL SYSTEM</span>
          </div>
        </div>

        <div className="card reg-card">
          <div className="reg-card-header">
            <span className="reg-badge">DEVICE ACTIVATION</span>
            <h1>Register this machine</h1>
            <p className="reg-sub">Enter the setup authorization code linked to your retail betting shop.</p>
          </div>

          <div className="field">
            <label htmlFor="code">
              <span>Setup Code</span>
              <span className="code-format-hint">Format: WB-SHOP-####</span>
            </label>
            <div className="input-with-icon">
              <span className="input-icon">🔑</span>
              <input
                id="code"
                value={code}
                onChange={handleCodeChange}
                placeholder="WB-SHOP-0000"
                inputMode="text"
                autoComplete="off"
                spellCheck="false"
                aria-invalid={err ? 'true' : 'false'}
                aria-describedby="codehint"
                maxLength={12}
              />
            </div>
            {err && (
              <div className="hint err" id="codehint">
                <span>⚠️ {err}</span>
              </div>
            )}
          </div>

          <div className="field">
            <label id="typelabel">Machine type</label>
            <div className="types" role="radiogroup" aria-labelledby="typelabel">
              <button
                type="button"
                className={`type ${type === 'smartpc' ? 'selected' : ''}`}
                role="radio"
                data-type="smartpc"
                aria-checked={type === 'smartpc'}
                onClick={() => handleSelectType('smartpc')}
              >
                <div className="type-icon-box">
                  <i className="fa-solid fa-desktop"></i>
                </div>
                <div className="type-text">
                  <span className="type-title">Smart PC</span>
                  <span className="type-subtitle">Desktop Cashier</span>
                </div>
                <span className="type-radio"></span>
              </button>

              <button
                type="button"
                className={`type ${type === 'terminal' ? 'selected' : ''}`}
                role="radio"
                data-type="terminal"
                aria-checked={type === 'terminal'}
                onClick={() => handleSelectType('terminal')}
              >
                <div className="type-icon-box">
                  <i className="fa-solid fa-ticket-simple"></i>
                </div>
                <div className="type-text">
                  <span className="type-title">Terminal</span>
                  <span className="type-subtitle">Self-Service</span>
                </div>
                <span className="type-radio"></span>
              </button>
            </div>
          </div>

          {terminal && (
            <div
              className={`tick ${tick ? 'checked' : ''}`}
              data-on={tick}
              id="tick"
              role="checkbox"
              tabIndex={0}
              aria-checked={tick}
              onClick={() => setTick(!tick)}
              onKeyDown={(e) => {
                if (e.key === ' ' || e.key === 'Enter') {
                  e.preventDefault();
                  setTick(!tick);
                }
              }}
            >
              <div className="box">✓</div>
              <p>
                Confirm Terminal registration for this shop
                <small>Terminals accept cash notes. Tick to confirm before registering.</small>
              </p>
            </div>
          )}

          <button
            type="button"
            className={`btn btn-block ${ready ? 'btn-gold' : 'btn-disabled'}`}
            id="doReg"
            disabled={!ready}
            onClick={onRegister}
          >
            <span>🔒</span>
            <span>Register &amp; Activate</span>
          </button>
        </div>
      </div>
    </div>
  );
}
