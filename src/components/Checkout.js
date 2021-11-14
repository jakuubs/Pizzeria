import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { getAdditionalIngredients } from "../utils";

const Checkout = () => {
  const pizzas = useSelector((state) => state.cart.pizzas);
  const sauces = useSelector((state) => state.cart.sauces);

  const ingredients = useSelector((state) => state.ingredients.products);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      {pizzas.length + sauces.length > 0 ? (
        <h3>Order summary:</h3>
      ) : (
        <h3>Your order is empty</h3>
      )}
      {pizzas.length > 0 && <p>pizzas:</p>}
      <ul>
        {pizzas.map((pizza) => (
          <li key={pizza.id}>
            {pizza.name}
            {pizza.additionalIngredients.length > 0 && <ul>
                {getAdditionalIngredients(ingredients, pizza.additionalIngredients).map(
                (ingredient) => (
                  <li key={ingredient}>{ingredient}</li>
                )
              )}
                </ul>}
          </li>
        ))}
      </ul>
      {sauces.length > 0 && <p>sauces:</p>}
      <ul>
          {sauces.map(sauce => <li>{sauce.name} {sauce.quantity > 1 && "x" + sauce.quantity}</li>)}
      </ul>
    </div>
  );
};

export default Checkout;
