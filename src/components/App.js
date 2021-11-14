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
import PopUp from "./PopUp";
import { useSelector } from "react-redux";
import { clearOrder } from "../actions/order";

const App = () => {
  const dispatch = useDispatch();

  const isDisplayed = useSelector((state) => state.order.isDisplayed);

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

  useEffect(() => {
    if (isDisplayed) {
      const timer = setTimeout(() => {
        dispatch(clearOrder());
      }, 4000);
      return () => {
        clearTimeout(timer);
      };
    }
  }, [dispatch, isDisplayed]);

  return (
    <Router>
      <div className="app">
        {isDisplayed && <PopUp />}
        <header>
          <Header />
          <Navigation />
        </header>
        <main>
          <Page />
        </main>
        <footer>
          <Footer />
        </footer>
      </div>
    </Router>
  );
};

export default App;
