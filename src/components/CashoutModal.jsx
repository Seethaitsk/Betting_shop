import React from 'react';
import { money } from '../data/casinoData';

export default function CashoutModal({ machine, balance, onConfirm, onCancel }) {
  const terminal = machine && machine.type === 'terminal';

  return (
    <div className="scrim" id="scrim">
      <div className="modal" role="dialog" aria-modal="true">
        <h2>{terminal ? 'Print Cashout Ticket' : 'Cash Out'}</h2>
        <div className="amount-label">AMOUNT</div>
        <div className="amount">{money(balance)}</div>
        <p>
          {terminal
            ? 'Prints a ticket with barcode. Collect cash at the cashier, or scan it on another Terminal in this shop.'
            : 'The cashier pays this balance in cash at the counter.'}
        </p>
        <button type="button" className="btn btn-gold btn-block" id="modalGo" onClick={onConfirm}>
          {terminal ? '🎟 Print Ticket' : 'Confirm Cashout'}
        </button>
        <button type="button" className="btn btn-quiet btn-block" id="modalCancel" onClick={onCancel}>
          Cancel
        </button>
      </div>
    </div>
  );
}
