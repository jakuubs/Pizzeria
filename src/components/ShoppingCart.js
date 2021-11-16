import React from "react";
import { useHistory } from "react-router-dom";
import { useSelector } from "react-redux";
import { countTotal } from "../utils";
import PizzaCartInfo from "./PizzaCartInfo";
import SauceCartInfo from "./SauceCartInfo";
import "../styles/ShoppingCart.css";

const ShoppingCart = ({ hideCart }) => {
  const pizzas = useSelector((state) => state.cart.pizzas);
  const sauces = useSelector((state) => state.cart.sauces);

  const ingredients = useSelector((state) => state.ingredients.products);

  let history = useHistory();

  const checkout = () => {
    hideCart();
    history.push("/checkout");
  };

  return (
    <div className="shoppingCart">
      <div>
        <button className="closeButton" onClick={hideCart}>
          XXXXX
        </button>
        <h3>Cart items</h3>
      </div>
      <div className="cartContent">
        {pizzas.map((pizza, index) => (
          <PizzaCartInfo pizza={pizza} index={index} pizzaClassName="cartItem" />
        ))}
        {sauces.map((sauce) => (
          <SauceCartInfo sauce={sauce} sauceClassName="cartItem"/>
        ))}
      </div>
      <div className="order">
        <h4>Total</h4>
        <p>{countTotal(pizzas, sauces, ingredients)} PLN</p>
        <button className="orderPlacement" onClick={checkout}>
          Checkout
        </button>
      </div>
    </div>
  );
};

export default ShoppingCart;
