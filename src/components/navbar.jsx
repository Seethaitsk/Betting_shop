import React, { useState, useEffect } from 'react';

export default function Navbar({
  machine,
  balance,
  currency = 'N$',
  onDeposit,
  onCashout,
  onLocationClick,
  onLogoClick,
  showControls = false
}) {
  const defaultTerminal = machine?.name || 'Smart PC-03';
  const defaultShop = machine?.shop ? `(${machine.shop.replace(/[()]/g, '')})` : '(Windhoek Central)';
  const defaultBalance = balance !== undefined ? Number(balance).toFixed(2) : '550.00';

  const [terminalName, setTerminalName] = useState(defaultTerminal);
  const [shopRegion, setShopRegion] = useState(defaultShop);
  const [currencySymbol, setCurrencySymbol] = useState(currency);
  const [balanceAmount, setBalanceAmount] = useState(defaultBalance);
  const [toastMessage, setToastMessage] = useState('');
  const [showToast, setShowToast] = useState(false);
  const [controlsVisible, setControlsVisible] = useState(showControls);

  useEffect(() => {
    if (machine?.name) setTerminalName(machine.name);
    if (machine?.shop) setShopRegion(`(${machine.shop.replace(/[()]/g, '')})`);
  }, [machine]);

  useEffect(() => {
    if (balance !== undefined) {
      setBalanceAmount(Number(balance).toFixed(2));
    }
  }, [balance]);

  useEffect(() => {
    if (currency) {
      setCurrencySymbol(currency);
    }
  }, [currency]);

  const triggerToast = (msg) => {
    setToastMessage(msg);
    setShowToast(true);
    setTimeout(() => {
      setShowToast(false);
    }, 3000);
  };

  const handleDepositClick = () => {
    if (onDeposit) {
      onDeposit();
      triggerToast(`Deposited ${currencySymbol} 50.00 successfully!`);
    } else {
      const current = parseFloat(balanceAmount) || 0;
      const next = (current + 100).toFixed(2);
      setBalanceAmount(next);
      triggerToast(`Deposited ${currencySymbol} 100.00 successfully!`);
    }
  };

  const handleCashoutClick = () => {
    if (onCashout) {
      onCashout();
    } else {
      triggerToast('Cash Out Request Initiated');
    }
  };

  const handleLocationClick = () => {
    if (onLocationClick) {
      onLocationClick();
    } else {
      triggerToast('Terminal Location Switcher Clicked');
    }
  };

  const handleLogoClick = () => {
    if (onLogoClick) {
      onLogoClick();
    } else {
      triggerToast('Betting Shop Portal Home Clicked');
    }
  };

  return (
    <div className="navbar-wrapper-block">
      {/* MAIN NAVBAR COMPONENT */}
      <header className="navbar-container" id="navbarComponent">
        <div className="navbar-inner">
          {/* Diagonal Racing Stripes Cutout Accent */}
          <div className="racing-stripes" aria-hidden="true">
            <div className="stripe stripe-1"></div>
            <div className="stripe stripe-2"></div>
            <div className="stripe stripe-3"></div>
          </div>

          {/* FIRST SECTION: LOGO */}
          <div className="logo-section">
            <div
              className="logo-wrapper"
              onClick={handleLogoClick}
              role="button"
              tabIndex={0}
              title="Home"
            >
              <i className="fa-solid fa-crown crown-icon"></i>
              <div className="logo-text">
                <span className="logo-betting">BETTING</span>
                <span className="logo-shop">SHOP</span>
              </div>
            </div>
            <div className="diagonal-divider"></div>
          </div>

          {/* SECOND SECTION: LOCATION PILL */}
          <div
            className="location-pill"
            id="locationPillBtn"
            onClick={handleLocationClick}
            role="button"
            tabIndex={0}
            title="Terminal Switcher"
          >
            <div className="location-content-left">
              <i className="fa-solid fa-location-dot map-icon"></i>
              <div className="location-text">
                <span className="terminal-name" id="displayTerminalName">
                  {terminalName}
                </span>
                <span className="shop-region" id="displayShopRegion">
                  {shopRegion}
                </span>
              </div>
            </div>
            <i className="fa-solid fa-chevron-down chevron-icon"></i>
          </div>

          {/* RIGHT ACTION GROUP */}
          <div className="right-actions-group">
            {/* THIRD SECTION: BALANCE (Hexagon Cut Pill) */}
            <div className="balance-hex-pill">
              <i className="fa-solid fa-wallet wallet-icon-blue"></i>
              <span className="balance-label">BALANCE</span>
              <div className="vertical-divider"></div>
              <div className="balance-value-container">
                <span id="displayCurrency">{currencySymbol}</span>
                <span id="displayBalance">{balanceAmount}</span>
              </div>
            </div>

            {/* FIFTH SECTION: CASH OUT BUTTON */}
            <button
              type="button"
              className="btn-cashout-navbar"
              id="btnCashoutNavbar"
              onClick={handleCashoutClick}
              disabled={parseFloat(balanceAmount) <= 0}
            >
              <div className="cashout-icon-badge">
                <i className="fa-solid fa-coins"></i>
              </div>
              <span className="cashout-text">
                {machine?.type === 'terminal' ? 'Print Ticket' : 'Cash Out'}
              </span>
            </button>
          </div>
        </div>
      </header>

      {/* OPTIONAL LIVE PROPS CONFIGURATOR PANEL */}
      {controlsVisible && (
        <div className="control-panel">
          <h2>
            <i className="fa-solid fa-sliders"></i> Live Data Props &amp; Configurator
          </h2>
          <div className="form-grid">
            <div className="field-group">
              <label htmlFor="inputTerminal">Terminal / Machine Name</label>
              <input
                type="text"
                id="inputTerminal"
                value={terminalName}
                onChange={(e) => setTerminalName(e.target.value)}
              />
            </div>

            <div className="field-group">
              <label htmlFor="inputRegion">Shop / Region Name</label>
              <input
                type="text"
                id="inputRegion"
                value={shopRegion}
                onChange={(e) => setShopRegion(e.target.value)}
              />
            </div>

            <div className="field-group">
              <label htmlFor="inputCurrency">Currency Symbol</label>
              <input
                type="text"
                id="inputCurrency"
                value={currencySymbol}
                onChange={(e) => setCurrencySymbol(e.target.value)}
              />
            </div>

            <div className="field-group">
              <label htmlFor="inputBalance">Balance Amount</label>
              <input
                type="text"
                id="inputBalance"
                value={balanceAmount}
                onChange={(e) => setBalanceAmount(e.target.value)}
              />
            </div>
          </div>
        </div>
      )}

      {/* TOAST NOTIFICATION */}
      <div className={`toast-box ${showToast ? 'show' : ''}`} id="toastBox">
        <i className="fa-solid fa-circle-check" style={{ color: '#10b981', fontSize: '1.2rem' }}></i>
        <span id="toastMessage">{toastMessage}</span>
      </div>
    </div>
  );
}
