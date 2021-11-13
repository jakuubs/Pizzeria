import React from "react";
import Loader from "react-loader-spinner";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router";
import { addPizzaToCart } from "../actions/cart";

const PizzaPage = ({ match, location }) => {

  const dispatch = useDispatch();
  const history = useHistory();

  const pizza = useSelector((state) =>
    state.pizzas.products.find((p) => p.id === match.params.id)
  );
  const ingredients = useSelector((state) => state.ingredients.products);

  const isLoading = useSelector((state) => {
    if (!state.pizzas.loading) return false;
    else return true;
  });
  const hasError = useSelector((state) => {
    if (state.pizzas.error === null) return false;
    else return true;
  });

  const addPizzaToOrder = () => {
    dispatch(addPizzaToCart(pizza.id, pizza.name, 1, pizza.price, []));
    history.push("/menu");
  }

  return (
    <div className="pizzaPage">
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
        <div>
          <h3>{pizza.name}</h3>
          <img alt={`Pizza ${pizza.name}`} src={location.state} />
          <ul>
            {ingredients
              .filter((ingredient) => pizza.ingredients.includes(ingredient.id))
              .map((ingredient) => (
                <li key={ingredient.id}>{ingredient.name}</li>
              ))}
          </ul>
          <div>
              <h4>Customize your pizza</h4>
              <ul>
                  {ingredients.map(ingredient => <li>{ingredient.name} <button>-</button><button>+</button></li>)}
              </ul>
          </div>
          <button onClick={() => addPizzaToOrder()}>Add to order</button>
        </div>
      )}
    </div>
  );
};

export default PizzaPage;
