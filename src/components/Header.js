import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import "../styles/Header.css";
import pizza from "../images/pizza_planet.png";
import ShoppingCart from "./ShoppingCart";
import { useSelector } from "react-redux";

const Header = () => {
  const [isCartVisible, setIsCartVisible] = useState(false);
  const cartItemsQuantity = useSelector(state => {
    let quantity = state.cart.pizzas.length;
    if (state.cart.sauces.length > 0) {
      state.cart.sauces.forEach(sauce => quantity += sauce.quantity);
    }
    return quantity;
  });

  let history = useHistory();

  const redirect = () => {
    history.push("/");
  };

  const showShoppingCart = () => {
    setIsCartVisible(true);
  };

  const hideShoppingCart = () => {
    setIsCartVisible(false);
  }

  return (
    <div className="header">
      <img alt="Pizza Planet" src={pizza} onClick={redirect} />
      <button onClick={showShoppingCart}>Shopping Cart {cartItemsQuantity > 0 && cartItemsQuantity}</button>
      {isCartVisible && <ShoppingCart hideCart={hideShoppingCart} />}
    </div>
  );
};

export default Header;
