import React from "react";
import { useState, useEffect } from "react";
import Loader from "react-loader-spinner";
import "../styles/Menu.css";
import Pizza from "./Pizza";

const Menu = () => {
  const [pizzas, setPizzas] = useState([]);
  const [ingredients, setIngredients] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        await fetch("http://localhost:3333/api/pizza")
          .then((response) => response.json())
          .then((data) => setPizzas(data));
      } catch (error) {
        setHasError(true);
      }
      setIsLoading(false);
    };
    fetchData();
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      try {
        await fetch("http://localhost:3333/api/ingredient")
          .then((response) => response.json())
          .then((data) => setIngredients(data));
      } catch (error) {
        setHasError(true);
      }
      setIsLoading(false);
    };
    fetchData();
  }, []);

  return (
    <div className="menu">
      <ul className="pizzaList">
        {hasError && <p>Something went wrong!</p>}
        {isLoading ? (
          <Loader
            className="loader"
            type="Circles"
            color="#FFFFFF"
            height={100}
            width={100}
          />
        ) : (
          pizzas.map((pizza) => (
            <Pizza
              key={pizza.id}
              name={pizza.name}
              price={pizza.price}
              ingredients={ingredients.filter((ingredient) =>
                pizza.ingredients.includes(ingredient.id)
              )}
            />
          ))
        )}
      </ul>
    </div>
  );
};

export default Menu;
