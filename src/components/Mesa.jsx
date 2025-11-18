import React from 'react';

export default function Mesa({ number, pedidos = [], onOpen }) {
  return (
    <div className="mesa" data-mesa={number} onClick={onOpen}>
      <div className="mesa-label">Mesa {number}</div>
      <div className="pedidos-mesa">
        {pedidos.length === 0 ? <div className="pedido-item">—</div> : pedidos.map((p, i) => <div key={i} className="pedido-item">{p.name} x{p.qty}</div>)}
      </div>
    </div>
  );
}