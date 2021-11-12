import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  changePizzaQuantity,
  changeSauceQuantity,
  clearCart,
} from "../actions/cart";
import "../styles/ShoppingCart.css";

const ShoppingCart = ({ hideCart }) => {
  const dispatch = useDispatch();
  const pizzas = useSelector((state) => state.cart.pizzas);
  const sauces = useSelector((state) => state.cart.sauces);

  const countTotal = () => {
    let total = 0;
    pizzas.forEach((pizza) => {
      total += pizza.quantity * pizza.price;
    });
    sauces.forEach((sauce) => {
      total += sauce.quantity * sauce.price;
    });
    return total;
  };

  const placeOrder = () => {
    if (pizzas.length > 0) {
      console.log("Order placed!");
      dispatch(clearCart());
    } else if (pizzas.length === 0 && sauces.length > 0) {
      alert("You can't order only sauce!");
    } else {
      alert("Your order is empty!");
    }
  };

  return (
    <div className="shoppingCart">
      <button className="closeButton" onClick={hideCart}>
        XXXXX
      </button>
      <h3>Cart items</h3>
      {pizzas.map((pizza) => (
        <div key={pizza.id} className="cartItem">
          <p>{pizza.name} </p>
          <button
            className="addition"
            onClick={() => dispatch(changePizzaQuantity(pizza.id, "+"))}
          >
            +
          </button>
          <span>{pizza.quantity}</span>
          <button
            className="subtraction"
            onClick={() => dispatch(changePizzaQuantity(pizza.id, "-"))}
          >
            -
          </button>
        </div>
      ))}
      {sauces.map((sauce) => (
        <div key={sauce.id} className="cartItem">
          <p>{sauce.name}</p>
          <button
            className="addition"
            onClick={() => dispatch(changeSauceQuantity(sauce.id, "+"))}
          >
            +
          </button>
          <span>{sauce.quantity}</span>
          <button
            className="subtraction"
            onClick={() => dispatch(changeSauceQuantity(sauce.id, "-"))}
          >
            -
          </button>
        </div>
      ))}
      <div>
        <h4>Total</h4>
        <p>{countTotal()} PLN</p>
      </div>
      <div className="orderPlacement">
        <button onClick={placeOrder}>Place an order</button>
      </div>
    </div>
  );
};

export default ShoppingCart;
