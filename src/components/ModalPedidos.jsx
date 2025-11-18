import React from 'react';

export default function ModalPedidos({ mesa, pedidos = [], onClose }) {
  // solo ocultar cuando mesa es null o undefined (si mesa === 0 se mostrará)
  if (mesa === null || mesa === undefined) return null;

  const items = Array.isArray(pedidos) ? pedidos : [];

  const total = items.reduce((s, p) => {
    const qty = Number(p?.qty) || 0;
    const price = Number(p?.price) || 0;
    return s + qty * price;
  }, 0);

  const handleClose = typeof onClose === 'function' ? onClose : () => {};

  return (
    <div
      className="modal mostrar"
      id="modalPedidos"
      role="dialog"
      aria-modal="true"
      onClick={handleClose}
    >
      <div className="modal-contenido" onClick={(e) => e.stopPropagation()}>
        <button
          className="modal-cerrar"
          id="btnCerrarModal"
          onClick={handleClose}
          aria-label="Cerrar"
        >
          &times;
        </button>
        <h2>Pedidos de la Mesa {mesa}</h2>

        <table className="tabla-pedidos">
          <thead>
            <tr>
              <th>Cerveza</th>
              <th>Cantidad</th>
              <th>Precio Unitario</th>
              <th>Total</th>
            </tr>
          </thead>
          <tbody>
            {items.length === 0 ? (
              <tr>
                <td colSpan="4" style={{ textAlign: 'center' }}>Sin pedidos</td>
              </tr>
            ) : (
              items.map((p, i) => {
                const qty = Number(p?.qty) || 0;
                const price = Number(p?.price) || 0;
                return (
                  <tr key={i}>
                    <td>{p?.name ?? '—'}</td>
                    <td>{qty}</td>
                    <td>{price.toFixed(2)}€</td>
                    <td>{(qty * price).toFixed(2)}€</td>
                  </tr>
                );
              })
            )}
          </tbody>
        </table>

        <div className="total-acumulado">Total Acumulado: {total.toFixed(2)} €</div>
      </div>
    </div>
  );
}