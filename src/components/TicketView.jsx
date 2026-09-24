import React from 'react';
import TopBar from './TopBar';
import ShopFooter from './ShopFooter';
import { money } from '../data/casinoData';

export default function TicketView({ machine, balance, ticket, onBackToGames, code }) {
  const t = ticket || {
    id: 'TK-849201',
    amount: balance,
    date: new Date().toLocaleString()
  };

  return (
    <>
      <TopBar machine={machine} balance={balance} onDeposit={() => {}} onCashout={() => {}} />
      <div className="stage">
        <div className="success">
          <div className="seal">✓</div>
          <h1>Ticket printed</h1>
          <div className="ticket">
            <div className="bars"></div>
            <div className="tname">BETTING SHOP</div>
            <div style={{ letterSpacing: '.14em', fontSize: '10px', color: '#666' }}>
              CASHOUT TICKET
            </div>
            <div style={{ fontSize: '11px', color: '#444', marginTop: '6px' }}>
              Ticket ID {t.id}
            </div>
            <div className="tamt">{money(t.amount)}</div>
            <div className="fine">
              <span>Valid for payout at cashier or scan on terminal</span>
              <span>{t.date}</span>
            </div>
          </div>
          <div className="next">
            <b>1</b> Take ticket <span>›</span> <b>2</b> Cashier pays cash <span>or</span> <b>3</b> Scan on a Terminal
          </div>
          <button className="btn btn-gold btn-block" id="backToGames" onClick={onBackToGames}>
            🎮 Back to games
          </button>
        </div>
      </div>
      <ShopFooter machine={machine} code={code} />
    </>
  );
}
