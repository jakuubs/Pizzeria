import React from "react";
import { useDispatch } from "react-redux";
import { changeSauceQuantity } from "../actions/cart";

const SauceCartInfo = ({ sauce, sauceClassName }) => {
  const dispatch = useDispatch();
  return (
    <div className={sauceClassName}>
      <p>{sauce.name}</p>
      <button
        className="addition"
        onClick={() => dispatch(changeSauceQuantity(sauce.id, "+"))}
      >
        +
      </button>
      <span>{sauce.quantity}</span>
      <button
        className="subtraction"
        onClick={() => dispatch(changeSauceQuantity(sauce.id, "-"))}
      >
        -
      </button>
    </div>
  );
};

export default SauceCartInfo;
