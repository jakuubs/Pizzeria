import React, { useState } from "react";
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import pizza from "../images/pizza_planet.png";
import images from "../images";
import ShoppingCart from "./ShoppingCart";
import "../styles/Header.css";

const Header = () => {
  const [isCartVisible, setIsCartVisible] = useState(false);
  const cartItemsQuantity = useSelector((state) => {
    let quantity = state.cart.pizzas.length;
    if (state.cart.sauces.length > 0) {
      state.cart.sauces.forEach((sauce) => (quantity += sauce.quantity));
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
  };

  return (
    <div className="header">
      <img
        className="logo-img"
        alt="Pizza Planet"
        src={pizza}
        onClick={redirect}
      />
      <div className="cart-button-quantity">
        <button onClick={showShoppingCart}>
          <img alt="Shopping Cart" src={images.cart} />
        </button>
        {cartItemsQuantity > 0 && <span>{cartItemsQuantity}</span>}
      </div>
      {isCartVisible && <ShoppingCart hideCart={hideShoppingCart} />}
    </div>
  );
};

export default Header;
