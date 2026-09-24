import React from 'react';
import { SERVER, isCodeShaped } from '../data/casinoData';

export default function ShopFooter({ machine, code }) {
  const known = isCodeShaped(code) && SERVER.codes[code];
  const resolved = machine || known || { shop: 'Windhoek Central', address: 'Independence Ave, Windhoek' };

  return (
    <footer className="footer">
      <span className="shopicon">🏪</span>
      <span>Shop</span> <b>{resolved.shop}</b> <span>· {resolved.address}</span>
      <span style={{ marginLeft: 'auto', color: 'var(--ink-dim)' }}>Betting Shop Retail v4.2.0</span>
    </footer>
  );
}
