import React, { useState } from 'react';
import Header from './components/Header';
import Modal from './components/Modal';
import MainContent from './components/mainContent';
import './site.css';
function App() {
  const [showModal, setShowModal] = useState(false);
  const [cartItems, setCartItems] = useState([]);

  const toggleModal = () => {
    setShowModal(!showModal);
  };

  const handleAddToCart = (item) => {
    setCartItems([...cartItems, item]);
  };

  const handleRemoveFromCart = (id) => {
    setCartItems(cartItems.filter(item => item.id !== id));
  };

  return (
    <div>
      <Header onCartClick={toggleModal} />
      {showModal && <Modal onClose={toggleModal} cartItems={cartItems} onRemoveFromCart={handleRemoveFromCart} />}
      <MainContent onAddToCart={handleAddToCart} onRemoveFromCart={handleRemoveFromCart} cartItems={cartItems} />
  
    </div>
  );
}

export default App;
