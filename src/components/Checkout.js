import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { useHistory } from "react-router";
import { clearCart } from "../actions/cart";
import { countTotal, getAdditionalIngredients } from "../utils";

const Checkout = () => {
  const pizzas = useSelector((state) => state.cart.pizzas);
  const sauces = useSelector((state) => state.cart.sauces);

  const ingredients = useSelector((state) => state.ingredients.products);

  const history = useHistory();
  const dispatch = useDispatch();

  const sendOrder = (order) => {
    fetch("http://localhost:3333/api/order", {
      method: "POST",
      body: JSON.stringify(order),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      .then((response) => {
        if (response.ok) {
          dispatch(clearCart());
          history.push("/");
        }
        return response.json();
      })
      .catch((error) => {
        console.warn("Something went wrong.", error);
      });
  };

  const submitOrder = () => {
    let order = { pizza: [], sauce: [], total: 0 };
    pizzas.forEach((pizza) =>
      order.pizza.push({
        id: pizza.id,
        ingredients: pizza.additionalIngredients,
      })
    );
    sauces.forEach((sauce) =>
      order.sauce.push({ id: sauce.id, count: sauce.quantity })
    );
    order.total = countTotal(pizzas, sauces, ingredients);
    sendOrder(order);
  };

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
            {pizza.additionalIngredients.length > 0 && (
              <ul>
                {getAdditionalIngredients(
                  ingredients,
                  pizza.additionalIngredients
                ).map((ingredient) => (
                  <li key={ingredient}>{ingredient}</li>
                ))}
              </ul>
            )}
          </li>
        ))}
      </ul>
      {sauces.length > 0 && <p>sauces:</p>}
      <ul>
        {sauces.map((sauce) => (
          <li>
            {sauce.name} {sauce.quantity > 1 && "x" + sauce.quantity}
          </li>
        ))}
      </ul>
      <button onClick={submitOrder}>Submit order</button>
    </div>
  );
};

export default Checkout;
