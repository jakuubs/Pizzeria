import React from "react";
import "../styles/ShoppingCart.css";

const ShoppingCart = ({ hideCart, pizzas, sauces, changeQuantity }) => {
  return (
    <div className="shoppingCart">
      <button className="closeButton" onClick={hideCart}>
        XXXXX
      </button>
      <h3>Cart items</h3>
      {pizzas.map((pizza) => (
        <div className="cartItem">
          <p>{pizza.name} </p>
          <button
            className="addition"
            onClick={() => changeQuantity(pizza.id, "pizza", "addition")}
          >
            +
          </button>
          <span>{pizza.quantity}</span>
          <button
            className="subtraction"
            onClick={() => changeQuantity(pizza.id, "pizza", "subtraction")}
          >
            -
          </button>
        </div>
      ))}
      {sauces.map((sauce) => (
        <div className="cartItem">
          <p>{sauce.name}</p>
          <button
            className="addition"
            onClick={() => changeQuantity(sauce.id, "sauce", "addition")}
          >
            +
          </button>
          <span>{sauce.quantity}</span>
          <button
            className="subtraction"
            onClick={() => changeQuantity(sauce.id, "sauce", "subtraction")}
          >
            -
          </button>
        </div>
      ))}
    </div>
  );
};

export default ShoppingCart;
