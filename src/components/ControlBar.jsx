import React, { useState } from 'react';

export default function ControlBar({ beers = [], onMakeOrder }) {
  const [beerName, setBeerName] = useState(beers[0]?.name || '');
  const [qty, setQty] = useState(1);
  const [mesa, setMesa] = useState(1);

  function handleClick() {
    if (!beerName) return;
    onMakeOrder({ beerName, qty, mesa });
  }

  return (
    <div className="barra-control">
      <select value={beerName} onChange={e => setBeerName(e.target.value)}>
        {beers.map(b => <option key={b.name} value={b.name}>{b.name}</option>)}
      </select>

      <select value={qty} onChange={e => setQty(e.target.value)}>
        {[1,2,3,4,5].map(n => <option key={n} value={n}>{n}</option>)}
      </select>

      <select value={mesa} onChange={e => setMesa(Number(e.target.value))}>
        {[1,2,3,4,5].map(n => <option key={n} value={n}>Mesa {n}</option>)}
      </select>

      <button className="btn-pedido" id="btnHacerPedido" onClick={handleClick}>Hacer Pedido</button>
    </div>
  );
}