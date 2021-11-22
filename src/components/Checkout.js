import React, { useEffect, useRef, useState } from "react";
import Loader from "react-loader-spinner";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { useHistory } from "react-router";
import { clearCart } from "../actions/cart";
import { orderFailed, orderSuccessful } from "../actions/order";
import { countTotal } from "../utils";
import Sauce from "./Sauce";
import PizzaCartInfo from "./PizzaCartInfo";
import SauceCartInfo from "./SauceCartInfo";
import "../styles/Checkout.css";

const Checkout = () => {
  const [isSending, setIsSending] = useState(false);

  const mountedRef = useRef(false);

  const pizzas = useSelector((state) => state.cart.pizzas);
  const sauces = useSelector((state) => state.cart.sauces);
  const ingredients = useSelector((state) => state.ingredients.products);

  const menuSauces = useSelector((state) => state.sauces.products);
  const isLoading = useSelector((state) => {
    if (!state.sauces.loading) return false;
    else return true;
  });

  const history = useHistory();
  const dispatch = useDispatch();

  const sendOrder = (order) => {
    setIsSending(true);
    fetch("http://localhost:3333/api/order", {
      method: "POST",
      body: JSON.stringify(order),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      .then((response) => {
        if (response.ok) {
          setIsSending(false);
          dispatch(clearCart());
          history.push("/");
          dispatch(orderSuccessful());
        } else {
          setIsSending(false);
          history.push("/");
          dispatch(orderFailed());
          return response.json();
        }
      })
      .catch((error) => {
        console.warn("Something went wrong.", error);
      });
  };

  const submitOrder = () => {
    let order = { pizza: [], total: 0 };
    pizzas.forEach((pizza) =>
      order.pizza.push({
        id: pizza.id,
        ingredients: pizza.additionalIngredients,
      })
    );
    if (sauces.length > 0) {
      order.sauce = [];
      sauces.forEach((sauce) =>
        order.sauce.push({ id: sauce.id, count: sauce.quantity })
      );
    }
    order.total = countTotal(pizzas, sauces, ingredients);
    if (mountedRef) sendOrder(order);
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    mountedRef.current = true;
    return () => {
      mountedRef.current = false;
    };
  }, []);

  return (
    <div className="checkout-page">
      <h3 className="summary">Order summary:</h3>
      <div className="checkout-content">
        {pizzas.length + sauces.length > 0 ? (
          <>
            <div className="checkout-content-pizzas">
              {pizzas.length > 0 && <h4>PIZZAS</h4>}
              {pizzas.map((pizza, index) => (
                <PizzaCartInfo
                  key={pizza.cartId}
                  pizza={pizza}
                  index={index}
                  pizzaClassName="pizza-order-item"
                />
              ))}
            </div>
            <div className="checkout-content-sauces">
              {sauces.length > 0 && <h4>SAUCES</h4>}
              {sauces.map((sauce) => (
                <SauceCartInfo
                  key={sauce.id}
                  sauce={sauce}
                  sauceClassName="sauce-order-item"
                />
              ))}
            </div>
          </>
        ) : (
          <h3 className="summary-empty">Your order is empty ;(</h3>
        )}
      </div>
      {isLoading ? (
        <Loader
          className="loader"
          type="Circles"
          color="#ec1f26"
          height={100}
          width={100}
        />
      ) : (
        <div className="checkout-sauces">
          <p>Last chance to add sauces to your order ;)</p>
          <div className="sauces-list">
            {menuSauces.map((sauce) => (
              <Sauce
                key={sauce.id}
                id={sauce.id}
                name={sauce.name}
                price={sauce.price}
              />
            ))}
          </div>
        </div>
      )}
      <div className="submit-order">
      <button
        onClick={submitOrder}
        disabled={isSending || pizzas.length <= 0}
      >
        Submit order
      </button>
      {isSending && (
        <Loader
          type="Circles"
          color="#ec1f26"
          height={100}
          width={100}
        />
      )}
      </div>
    </div>
  );
};

export default Checkout;
