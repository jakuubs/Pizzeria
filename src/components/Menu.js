import React from "react";
import Loader from "react-loader-spinner";
import { useSelector } from "react-redux";
import "../styles/Menu.css";
import Pizza from "./Pizza";
import Sauce from "./Sauce";

const Menu = ({ addPizzaToCart, addSauceToCart }) => {
  const pizzas = useSelector((state) => state.pizzas.products);
  const sauces = useSelector((state) => state.sauces.products);
  const ingredients = useSelector((state) => state.ingredients.products);
  const isLoading = useSelector((state) => {
    if (
      !state.pizzas.loading &&
      !state.sauces.loading &&
      !state.ingredients.loading
    )
      return false;
    else return true;
  });
  const hasError = useSelector((state) => {
    if (
      state.pizzas.error === null &&
      state.sauces.error === null &&
      state.ingredients.error === null
    )
      return false;
    else return true;
  });

  return (
    <div className="menu">
      {hasError && <p>Something went wrong!</p>}
      {isLoading ? (
        <Loader
          className="loader"
          type="Circles"
          color="#ec1f26"
          height={100}
          width={100}
        />
      ) : (
        <>
          <h3>Pizzas</h3>
          <div className="pizzaList">
            {pizzas.map((pizza) => (
              <Pizza
                key={pizza.id}
                id={pizza.id}
                name={pizza.name}
                price={pizza.price}
                ingredients={ingredients.filter((ingredient) =>
                  pizza.ingredients.includes(ingredient.id)
                )}
                addPizzaToCart={addPizzaToCart}
              />
            ))}
          </div>
          <h3>Sauces</h3>
          <div className="sauceList">
            {sauces.map((sauce) => (
              <Sauce
                key={sauce.id}
                name={sauce.name}
                price={sauce.price}
                addSauceToCart={addSauceToCart}
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default Menu;
