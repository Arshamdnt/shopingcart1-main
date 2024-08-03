import React from "react";
import "./Header.css";

export default function Header({ onCartClick }) {
  return (
    <div>
      <header>
        <nav>
          <ul>
            <li>Home</li>
            <li>About</li>
            <li>Store</li>
          </ul>
          <img src={`${process.env.PUBLIC_URL}/images/shoppingcart.png`} alt="Shopping Cart" id="shoppingcarticon" onClick={onCartClick} />
        </nav>
      </header>
    </div>
  );
}
