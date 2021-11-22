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
      <div className="cart-header">
        <button onClick={hideCart}>&#10006;</button>
        <h3>Your order:</h3>
      </div>
      <div className="cart-content">
        {pizzas.map((pizza, index) => (
          <PizzaCartInfo
            key={pizza.cartId}
            pizza={pizza}
            index={index}
            pizzaClassName="cart-pizza-item"
          />
        ))}
        {sauces.map((sauce) => (
          <SauceCartInfo
            key={sauce.id}
            sauce={sauce}
            sauceClassName="cart-sauce-item"
          />
        ))}
      </div>
      <div className="order">
        <h4>Total</h4>
        <p><i>{countTotal(pizzas, sauces, ingredients)} PLN</i></p>
        <div>
          <button onClick={checkout}>
            Checkout
          </button>
        </div>
      </div>
    </div>
  );
};

export default ShoppingCart;
