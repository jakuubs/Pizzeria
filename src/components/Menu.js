import React from "react";
// import { useState, useEffect } from "react";
import Loader from "react-loader-spinner";
import "../styles/Menu.css";
import Pizza from "./Pizza";

const Menu = ({pizzas, sauces, ingredients, isLoading, hasError}) => {
  // const [pizzas, setPizzas] = useState([]);
  // const [ingredients, setIngredients] = useState([]);
  // const [isLoading, setIsLoading] = useState(false);
  // const [hasError, setHasError] = useState(false);

  // useEffect(() => {
  //   const fetchData = async () => {
  //     setIsLoading(true);
  //     try {
  //       await fetch("http://localhost:3333/api/pizza")
  //         .then((response) => response.json())
  //         .then((data) => setPizzas(data));
  //     } catch (error) {
  //       setHasError(true);
  //     }
  //     setIsLoading(false);
  //   };
  //   fetchData();
  // }, []);

  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       await fetch("http://localhost:3333/api/ingredient")
  //         .then((response) => response.json())
  //         .then((data) => setIngredients(data));
  //     } catch (error) {
  //       setHasError(true);
  //     }
  //     setIsLoading(false);
  //   };
  //   fetchData();
  // }, []);

  return (
    <div className="menu">
      <h3>Pizzas</h3>
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
      <h3>Sauces</h3>
      <ul className="sauceList">
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
          sauces.map((sauce) => (
            <li key={sauce.id}>{sauce.name}</li>
          ))
        )}
      </ul>
    </div>
  );
};

export default Menu;
