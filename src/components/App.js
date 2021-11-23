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
import { read_cookie } from "sfcookies";
import { clearOrder } from "../actions/order";
import { setCart } from "../actions/cart";

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
    fetchPizzas();
    fetchSauces();
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

  useEffect(() => {
    const cart = read_cookie("cart");
    console.log(cart);
    if (!Array.isArray(cart)) {
      console.log(cart);
      dispatch(setCart(cart));
    }
  }, [dispatch]);

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
