import React from "react";
import { useSelector } from "react-redux";
import "../styles/PopUp.css";

const PopUp = () => {
  const isOrdered = useSelector((state) => state.order.isOrdered);

  return (
    <div className="popup">
      {isOrdered ? (
        <p>You've succesfuly ordered your food!</p>
      ) : (
        <p>Oh no! Something went wrong and we couldn't palce your order :(</p>
      )}
    </div>
  );
};

export default PopUp;
