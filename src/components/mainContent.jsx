import React, { Component } from "react";
import storeitem from "../data/storeitems.json";
import Cart from "./Cart";
import "./mainContent.css";

export default class MainContent extends Component {
  render() {
    return (
      <div id="content-container">
        {storeitem.map((item) => (
          <Cart
            key={item.id}
            imageUrl={item.imgUrl}
            priceProduct={item.price}
            nameProduct={item.Name}
            onAddToCart={() => this.props.onAddToCart(item)}
            onRemoveFromCart={() => this.props.onRemoveFromCart(item.id)}
            isInCart={this.props.cartItems.some(cartItem => cartItem.id === item.id)}
          />
        ))}
      </div>
    );
  }
}
