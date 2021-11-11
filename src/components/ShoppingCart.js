import React from "react";
import "../styles/ShoppingCart.css";

const ShoppingCart = ({ hideCart, pizzas, sauces }) => {
  const cartItems = {
    pizzas: [...pizzas],
    sauces: [...sauces],
  };

  return (
    <div className="shoppingCart">
      <button onClick={hideCart}>XXXXX</button>
      <h3>Cart items</h3>
      {cartItems.pizzas.map(pizza => <p>{pizza.name}</p>)}
      {cartItems.sauces.map(sauce => <p>{sauce.name}</p>)}
    </div>
  );
};

export default ShoppingCart;
