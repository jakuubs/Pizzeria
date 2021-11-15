import React from "react";
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { deletePizzaFromCart, changeSauceQuantity } from "../actions/cart";
import { getAdditionalIngredients, countTotal } from "../utils";
import "../styles/ShoppingCart.css";

const ShoppingCart = ({ hideCart }) => {
  const dispatch = useDispatch();
  const pizzas = useSelector((state) => state.cart.pizzas);
  const sauces = useSelector((state) => state.cart.sauces);

  const ingredients = useSelector((state) => state.ingredients.products);

  let history = useHistory();

  const deletePizza = (index) => {
    dispatch(deletePizzaFromCart(index));
  };

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
          <div key={pizza.cartId} className="cartItem">
            <p>{pizza.name} </p>
            {pizza.additionalIngredients.length > 0 ? (
              <p>Additional ingredients:</p>
            ) : (
              false
            )}
            <ul>
              {getAdditionalIngredients(
                ingredients,
                pizza.additionalIngredients
              ).map((ingredient) => (
                <li key={ingredient}>{ingredient}</li>
              ))}
            </ul>
            <button onClick={() => deletePizza(index)}>Delete</button>
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
      </div>
      <div className="order">
        <h4>Total</h4>
        <p>{countTotal(pizzas, sauces, ingredients)} PLN</p>
        <button
          className="orderPlacement"
          onClick={checkout}
        >
          Checkout
        </button>
      </div>
    </div>
  );
};

export default ShoppingCart;
