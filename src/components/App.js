import "../styles/App.css";
import { BrowserRouter as Router } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import {
  fetchPizzasLoading,
  fetchPizzasSuccess,
  fetchPizzasError,
} from "../actions/pizzas";
import {
  fetchSaucesLoading,
  fetchSaucesSuccess,
  fetchSaucesError,
} from "../actions/sauces";
import {
  fetchIngredientsLoading,
  fetchIngredientsSuccess,
  fetchIngredientsError,
} from "../actions/ingredients";
import Header from "./Header";
import Navigation from "./Navigation";
import Page from "./Page";
import Footer from "./Footer";
import { useState } from "react";

const App = () => {
  const dispatch = useDispatch();
  const [pizzas, setPizzas] = useState([]);
  const [sauces, setSauces] = useState([]);

  const addPizzaToCart = (id, name, quantity, price) => {
    const index = pizzas.findIndex((pizza) => pizza.id === id);
    if (index !== -1) {
      let updatedPizzas = [...pizzas];
      const updatedQuantity = updatedPizzas[index].quantity + quantity;
      updatedPizzas[index] = {
        ...updatedPizzas[index],
        quantity: updatedQuantity,
      };
      setPizzas(updatedPizzas);
    } else {
      setPizzas([
        ...pizzas,
        { id: id, name: name, quantity: quantity, price: price },
      ]);
    }
  };

  const addSauceToCart = (id, name, quantity, price) => {
    const index = sauces.findIndex((sauce) => sauce.id === id);
    if (index !== -1) {
      let updatedSauces = [...sauces];
      const updatedQuantity = updatedSauces[index].quantity + quantity;
      updatedSauces[index] = {
        ...updatedSauces[index],
        quantity: updatedQuantity,
      };
      setSauces(updatedSauces);
    } else {
      setSauces([
        ...sauces,
        { id: id, name: name, quantity: quantity, price: price },
      ]);
    }
  };

  const changeQuantity = (id, type, action) => {
    if (type === "pizza") {
      let pizzaList = [...pizzas];
      let index = pizzaList.findIndex((pizza) => pizza.id === id);
      if (action === "addition") {
        const updatedQuantity = pizzaList[index].quantity + 1;
        pizzaList[index] = { ...pizzaList[index], quantity: updatedQuantity };
      } else if (action === "subtraction") {
        const updatedQuantity = pizzaList[index].quantity - 1;
        if (updatedQuantity > 0)
          pizzaList[index] = { ...pizzaList[index], quantity: updatedQuantity };
        else {
          pizzaList.splice(index, 1);
        }
      } else {
        console.log("Invalid action!");
      }
      setPizzas(pizzaList);
    } else if (type === "sauce") {
      let sauceList = [...sauces];
      let index = sauceList.findIndex((sauce) => sauce.id === id);
      if (action === "addition") {
        const updatedQuantity = sauceList[index].quantity + 1;
        sauceList[index] = { ...sauceList[index], quantity: updatedQuantity };
      } else if (action === "subtraction") {
        const updatedQuantity = sauceList[index].quantity - 1;
        if (updatedQuantity > 0)
          sauceList[index] = { ...sauceList[index], quantity: updatedQuantity };
        else {
          sauceList.splice(index, 1);
        }
      } else {
        console.log("Invalid action!");
      }
      setSauces(sauceList);
    } else {
      console.log("Invalid item type!");
    }
  };

  const clearCart = () => {
    setPizzas([]);
    setSauces([]);
  };

  useEffect(() => {
    const fetchPizzas = () => {
      dispatch(fetchPizzasLoading());
      fetch("http://localhost:3333/api/pizza")
        .then((response) => response.json())
        .then((response) => {
          if (response.error) {
            throw response.error;
          }
          dispatch(fetchPizzasSuccess(response));
          return response;
        })
        .catch((error) => {
          dispatch(fetchPizzasError(error));
        });
    };
    fetchPizzas();
  }, [dispatch]);

  useEffect(() => {
    const fetchSauces = () => {
      dispatch(fetchSaucesLoading());
      fetch("http://localhost:3333/api/sauce")
        .then((response) => response.json())
        .then((response) => {
          if (response.error) {
            throw response.error;
          }
          dispatch(fetchSaucesSuccess(response));
          return response;
        })
        .catch((error) => {
          dispatch(fetchSaucesError(error));
        });
    };
    fetchSauces();
  }, [dispatch]);

  useEffect(() => {
    const fetchIngredients = () => {
      dispatch(fetchIngredientsLoading());
      fetch("http://localhost:3333/api/ingredient")
        .then((response) => response.json())
        .then((response) => {
          if (response.error) {
            throw response.error;
          }
          dispatch(fetchIngredientsSuccess(response));
          return response;
        })
        .catch((error) => {
          dispatch(fetchIngredientsError(error));
        });
    };
    fetchIngredients();
  }, [dispatch]);

  return (
    <Router>
      <div className="app">
        <header>
          <Header
            pizzas={pizzas}
            sauces={sauces}
            changeQuantity={changeQuantity}
            clearCart={clearCart}
          />
          <Navigation />
        </header>
        <main>
          <Page
            addPizzaToCart={addPizzaToCart}
            addSauceToCart={addSauceToCart}
          />
        </main>
        <footer>
          <Footer />
        </footer>
      </div>
    </Router>
  );
};

export default App;
