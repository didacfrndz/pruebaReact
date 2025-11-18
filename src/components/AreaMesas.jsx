import React from 'react';
import Mesa from './Mesa.jsx';

export default function AreaMesas({ mesas = {}, onOpenModal }) {
  return (
    <div className="area-mesas">
      {Object.keys(mesas).map(key => (
        <Mesa key={key} number={Number(key)} pedidos={mesas[key]} onOpen={() => onOpenModal(Number(key))} />
      ))}
    </div>
  );
}