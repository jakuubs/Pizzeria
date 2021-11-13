import React, { useState } from "react";
import Loader from "react-loader-spinner";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router";
import { addPizzaToCart } from "../actions/cart";

const PizzaPage = ({ match, location }) => {
  const dispatch = useDispatch();
  const history = useHistory();

  const [additionalIngredients, setAdditionalIngredients] = useState([]);

  const pizza = useSelector((state) =>
    state.pizzas.products.find((p) => p.id === match.params.id)
  );
  const ingredients = useSelector((state) => state.ingredients.products);
  const pizzaIngredients = ingredients.filter((ingredient) =>
    pizza.ingredients.includes(ingredient.id)
  );

  const isLoading = useSelector((state) => {
    if (!state.pizzas.loading) return false;
    else return true;
  });
  const hasError = useSelector((state) => {
    if (state.pizzas.error === null) return false;
    else return true;
  });

  const addIngredient = (id) => {
    const ingredient = ingredients.find((i) => i.id === id);
    setAdditionalIngredients([...additionalIngredients, ingredient.id]);
  };

  const removeIngredient = (id) => {
    const index = additionalIngredients.findIndex(
      (ingredientId) => ingredientId === id
    );
    if (index !== -1) {
      const updatedIngredients = [...additionalIngredients];
      updatedIngredients.splice(index, 1);
      setAdditionalIngredients(updatedIngredients);
    } else setAdditionalIngredients([...additionalIngredients]);
  };

  const countIngredients = (id) => {
    if (checkIfIngredientInPizza(id) === 1) {
      return (
        additionalIngredients.filter((ingredientId) => ingredientId === id)
          .length + 1
      );
    } else {
      return additionalIngredients.filter((ingredientId) => ingredientId === id)
        .length;
    }
  };

  const checkIfIngredientInPizza = (id) => {
    if (pizzaIngredients.some((ingredient) => ingredient.id === id)) return 1;
    else return 0;
  };

  const addPizzaToOrder = () => {
    dispatch(addPizzaToCart(pizza.id, pizza.name, pizza.price, additionalIngredients));
    history.push("/menu");
  };

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
            {pizzaIngredients.map((ingredient) => (
              <li key={ingredient.id}>{ingredient.name}</li>
            ))}
          </ul>
          <div>
            <h4>Customize your pizza</h4>
            <ul>
              {ingredients.map((ingredient) => (
                <li key={ingredient.id}>
                  {ingredient.name}
                  <button
                    onClick={() => removeIngredient(ingredient.id)}
                    disabled={
                      countIngredients(ingredient.id) <=
                      checkIfIngredientInPizza(ingredient.id)
                        ? true
                        : false
                    }
                  >
                    -
                  </button>
                  <span>{countIngredients(ingredient.id)}</span>
                  <button
                    onClick={() => addIngredient(ingredient.id)}
                    disabled={
                      countIngredients(ingredient.id) >= 2 ? true : false
                    }
                  >
                    +
                  </button>
                </li>
              ))}
            </ul>
          </div>
          <button onClick={() => addPizzaToOrder()}>Add to order</button>
        </div>
      )}
    </div>
  );
};

export default PizzaPage;
