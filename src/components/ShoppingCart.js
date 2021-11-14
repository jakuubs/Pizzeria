import React from "react";
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { changeSauceQuantity } from "../actions/cart";
import { getAdditionalIngredients } from "../utils";
import "../styles/ShoppingCart.css";

const ShoppingCart = ({ hideCart }) => {
  const dispatch = useDispatch();
  const pizzas = useSelector((state) => state.cart.pizzas);
  const sauces = useSelector((state) => state.cart.sauces);

  const ingredients = useSelector((state) => state.ingredients.products);

  let history = useHistory();

  const editPizza = (id, additionalIngredients) => {
    history.push({
      pathname: `/pizza/${id}`,
      state: additionalIngredients,
    });
  };

  const countTotal = () => {
    let total = 0;
    pizzas.forEach((pizza) => {
      let ingredientsTotal = 0;
      pizza.additionalIngredients.forEach((id) => {
        ingredientsTotal += ingredients.find(
          (ingredient) => ingredient.id === id
        ).price;
      });
      total += pizza.price + ingredientsTotal;
    });
    sauces.forEach((sauce) => {
      total += sauce.quantity * sauce.price;
    });
    return total;
  };

  const placeOrder = () => {
    if (pizzas.length > 0) {
      hideCart();
      history.push("/checkout");
    } else if (pizzas.length === 0 && sauces.length > 0) {
      alert("You can't order only sauce!");
    } else {
      alert("Your order is empty!");
    }
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
        {pizzas.map((pizza) => (
          <div key={pizza.id} className="cartItem">
            <p>{pizza.name} </p>
            {pizza.additionalIngredients.length > 0 ? (
              <p>Additional ingredients:</p>
            ) : (
              false
            )}
            <ul>
              {getAdditionalIngredients(ingredients, pizza.additionalIngredients).map(
                (ingredient) => (
                  <li key={ingredient}>{ingredient}</li>
                )
              )}
            </ul>
            <button
              onClick={() => editPizza(pizza.id, pizza.additionalIngredients)}
            >
              Edit
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
      </div>
      <div className="order">
        <h4>Total</h4>
        <p>{countTotal()} PLN</p>
        <button className="orderPlacement" onClick={placeOrder}>
          Place an order
        </button>
      </div>
    </div>
  );
};

export default ShoppingCart;
