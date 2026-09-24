import React, { useState } from 'react';
import RegisterView from './components/RegisterView';
import LobbyView from './components/LobbyView';
import TicketView from './components/TicketView';
import CashoutModal from './components/CashoutModal';
import GamePlayModal from './components/GamePlayModal';
import RegistrationSuccessModal from './components/RegistrationSuccessModal';
import { SERVER, isCodeShaped } from './data/casinoData';

export default function App() {
  const [screen, setScreen] = useState(() => (new URLSearchParams(window.location.search).get('screen') || 'register'));
  const [modal, setModal] = useState(null);         // null | 'cashout' | 'gamePlay' | 'regSuccess'
  const [code, setCode] = useState('WB-SHOP-4821');
  const [type, setType] = useState(null);
  const [tick, setTick] = useState(false);
  const [err, setErr] = useState('');
  const [machine, setMachine] = useState(null);
  const [balance, setBalance] = useState(550.00);
  const [ticket, setTicket] = useState(null);
  const [activeGame, setActiveGame] = useState(null);

  const handleRegister = () => {
    const selectedType = type || 'terminal';
    const effectiveCode = isCodeShaped(code) ? code : 'WB-SHOP-4821';
    const res = SERVER.register(effectiveCode, selectedType);

    if (!res.ok) {
      setErr(res.error);
      return;
    }

    setMachine(res.machine);
    setModal('regSuccess');
  };

  const handleContinueFromReg = () => {
    setModal(null);
    setScreen('lobby');
  };

  const handleDeposit = () => {
    setBalance((prev) => prev + 50);
  };

  const handleCashoutClick = () => {
    if (balance <= 0) return;
    setModal('cashout');
  };

  const handleConfirmCashout = () => {
    const isSmartPC = machine && machine.type === 'smartpc';
    const amt = balance;
    setBalance(0);
    setModal(null);

    if (isSmartPC) {
      setScreen('lobby');
    } else {
      setTicket({
        id: 'TK-' + Math.floor(100000 + Math.random() * 900000),
        amount: amt,
        date: new Date().toLocaleString()
      });
      setScreen('ticket');
    }
  };

  const handlePlayGame = (gameName) => {
    setActiveGame(gameName);
    setModal('gamePlay');
  };

  const handleSpinWin = (amountDelta) => {
    setBalance((prev) => Math.max(0, prev + amountDelta));
  };

  return (
    <div className="machine" id="app">
      {screen === 'register' && (
        <RegisterView
          code={code}
          setCode={setCode}
          type={type}
          setType={setType}
          tick={tick}
          setTick={setTick}
          err={err}
          setErr={setErr}
          onRegister={handleRegister}
          machine={machine}
        />
      )}

      {screen === 'lobby' && (
        <LobbyView
          machine={machine || { name: 'Terminal-01', shop: 'Windhoek Central', type: 'terminal' }}
          balance={balance}
          onDeposit={handleDeposit}
          onCashout={handleCashoutClick}
          onPlayGame={handlePlayGame}
          code={code}
        />
      )}

      {screen === 'ticket' && (
        <TicketView
          machine={machine || { name: 'Terminal-01', shop: 'Windhoek Central', type: 'terminal' }}
          balance={balance}
          ticket={ticket}
          onBackToGames={() => setScreen('lobby')}
          code={code}
        />
      )}

      {modal === 'cashout' && (
        <CashoutModal
          machine={machine}
          balance={balance}
          onConfirm={handleConfirmCashout}
          onCancel={() => setModal(null)}
        />
      )}

      {modal === 'gamePlay' && (
        <GamePlayModal
          gameName={activeGame}
          balance={balance}
          onSpinWin={handleSpinWin}
          onClose={() => setModal(null)}
        />
      )}

      {modal === 'regSuccess' && (
        <RegistrationSuccessModal
          machine={machine}
          code={code}
          onContinue={handleContinueFromReg}
        />
      )}
    </div>
  );
}
