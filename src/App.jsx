import React, { useState } from 'react';
import './App.css';
import BeerList from './components/BeerList.jsx';
import ControlBar from './components/ControlBar.jsx';
import AreaMesas from './components/AreaMesas.jsx';
import ModalPedidos from './components/ModalPedidos.jsx';

const initialBeers = [
  { name: 'Estrella Damm', price: 3.0 },
  { name: 'Mahou Cinco Estrellas', price: 3.2 },
  { name: 'Alhambra Reserva 1925', price: 3.5 },
  { name: 'Heineken', price: 3.0 },
  { name: 'Ambar Especial', price: 2.8 },
];

export default function App() {
  const [showLeft, setShowLeft] = useState(true);
  const [mesas, setMesas] = useState({
    1: [{ name: 'Ambar Especial', qty: 2, price: 2.8 }, { name: 'Estrella Damm', qty: 4, price: 3.0 }],
    2: [],
    3: [],
    4: [{ name: 'Mahou Cinco Estrellas', qty: 2, price: 3.2 }, { name: 'Heineken', qty: 2, price: 3.0 }, { name: 'Estrella Damm', qty: 2, price: 3.0 }],
    5: [],
  });
  const [modalMesa, setModalMesa] = useState(null);

  function handleMakeOrder({ beerName, qty, mesa }) {
    const beer = initialBeers.find(b => b.name === beerName) || { price: 0 };
    setMesas(prev => {
      const copy = { ...prev };
      copy[mesa] = [...(copy[mesa] || []), { name: beerName, qty: Number(qty), price: beer.price }];
      return copy;
    });
  }

  function handleOpenModal(mesaNumber) {
    setModalMesa(mesaNumber);
  }
  function handleCloseModal() {
    setModalMesa(null);
  }

  return (
    <div className="container">
      {showLeft && (
        <div className="columna-izquierda" id="columnaIzquierda">
          <button className="btn-toggle" id="btnToggle" onClick={() => setShowLeft(false)}>
            Ocultar Lista de Cervezas
          </button>
          <h2>Lista de Cervezas</h2>
          <BeerList beers={initialBeers} />
        </div>
      )}

      {!showLeft && (
        <button className="btn-toggle" id="btnToggleMostrar" onClick={() => setShowLeft(true)}>
          Mostrar Lista de Cervezas
        </button>
      )}

      <div className="columna-derecha">
        <ControlBar beers={initialBeers} onMakeOrder={handleMakeOrder} />
        <AreaMesas mesas={mesas} onOpenModal={handleOpenModal} />
      </div>

      <ModalPedidos mesa={modalMesa} pedidos={(modalMesa && mesas[modalMesa]) || []} onClose={handleCloseModal} />
    </div>
  );
}