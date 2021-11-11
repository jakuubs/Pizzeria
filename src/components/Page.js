import React from "react";
import { useState, useEffect } from "react";
import { Switch, Route } from "react-router-dom";
import HomePage from "./HomePage";
import Menu from "./Menu";
import About from "./About";
import ErrorPage from "./ErrorPage";
import "../styles/Page.css";

const Page = ({addPizzaToCart, addSauceToCart}) => {
  const [pizzas, setPizzas] = useState([]);
  const [sauces, setSauces] = useState([]);
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
        await fetch("http://localhost:3333/api/sauce")
          .then((response) => response.json())
          .then((data) => setSauces(data));
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
    <div>
      <Switch>
        <Route path="/" exact component={HomePage} />
        <Route
          path="/menu"
          render={() => (
            <Menu
              pizzas={pizzas}
              sauces={sauces}
              ingredients={ingredients}
              isLoading={isLoading}
              hasError={hasError}
              addPizzaToCart={addPizzaToCart}
              addSauceToCart={addSauceToCart}
            />
          )}
        />
        <Route path="/about" component={About} />
        <Route component={ErrorPage} />
      </Switch>
    </div>
  );
};

export default Page;
