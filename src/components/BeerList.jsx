import React from 'react';

export default function BeerList({ beers = [] }) {
  return (
    <table className="tabla-cervezas">
      <thead>
        <tr>
          <th>Nombre</th>
          <th>Precio</th>
          <th>Graduación</th>
          <th>Foto</th>
        </tr>
      </thead>
      <tbody>
        {beers.map((b) => (
          <tr key={b.name}>
            <td>{b.name}</td>
            <td>{b.price.toFixed(2)}€</td>
            <td>—</td>
            <td>
              <div className="foto-cerveza">100x100</div>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}