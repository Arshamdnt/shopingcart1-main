import React from "react";
import "./Modal.css";

export default function Modal({ onClose, cartItems, onRemoveFromCart }) {
  const totalPrice = cartItems.reduce((total, item) => total + item.price, 0);

  return (
    <div id="Modal">
      <div id="modal-content">
        <img src={`${process.env.PUBLIC_URL}/images/removeicon.png`} alt="Close" id="RemoveIcon" onClick={onClose} />
        <div id="Modal-container">
          {cartItems.length === 0 ? (
            <h3>Your cart is empty</h3>
          ) : (
            cartItems.map((item) => (
              <div key={item.id} className="cart-item">
                <img src={`${process.env.PUBLIC_URL}${item.imgUrl}`} alt={item.Name} />
                <div>
                  <h3>{item.Name}</h3>
                  <p>{item.price}$</p>
                  <button onClick={() => onRemoveFromCart(item.id)}>Remove</button>
                </div>
              </div>
            ))
          )}
          <div id="total-price">
            <h3>Total Price: {totalPrice}$</h3>
          </div>
        </div>
      </div>
    </div>
  );
}
