import React from "react";
import "./Cart.css";

export default function Cart({ imageUrl, priceProduct, nameProduct, onAddToCart, onRemoveFromCart, isInCart }) {
  return (
    <div id="CartContainer">
      <h2 id="productName">{nameProduct}</h2>
      <img src={`${process.env.PUBLIC_URL}${imageUrl}`} alt={nameProduct} id="productimg" />
      <p id="productPrice">{priceProduct}$</p>
      {isInCart ? (
        <button id="productbtn" className="remove" onClick={onRemoveFromCart}>Remove</button>
      ) : (
        <button id="productbtn" className="add" onClick={onAddToCart}>Add to Cart</button>
      )}
    </div>
  );
}
