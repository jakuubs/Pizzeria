import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { deletePizzaFromCart } from "../actions/cart";
import { getAdditionalIngredients } from "../utils";

const PizzaCartInfo = ({ pizza, index, pizzaClassName }) => {
  const dispatch = useDispatch();
  const ingredients = useSelector((state) => state.ingredients.products);
  return (
    <div className={pizzaClassName}>
      <p>{pizza.name} </p>
      <div>
        {pizza.additionalIngredients.length > 0 && (
          <p>Additional ingredients:</p>
        )}
        <ul>
          {getAdditionalIngredients(
            ingredients,
            pizza.additionalIngredients
          ).map((ingredient) => (
            <li key={ingredient}>{ingredient}</li>
          ))}
        </ul>
      </div>
      <span>
        <button onClick={() => dispatch(deletePizzaFromCart(index))}>
          Delete
        </button>
      </span>
    </div>
  );
};

export default PizzaCartInfo;
