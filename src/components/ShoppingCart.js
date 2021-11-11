import React from "react";
import "../styles/ShoppingCart.css";

const ShoppingCart = ({
  hideCart,
  pizzas,
  sauces,
  changeQuantity,
  clearCart,
}) => {
  const countTotal = () => {
    let total = 0;
    pizzas.forEach((pizza) => {
      total += pizza.quantity * pizza.price;
    });
    sauces.forEach((sauce) => {
      total += sauce.quantity * sauce.price;
    });
    return total;
  };

  const placeOrder = () => {
    if (pizzas.length > 0) {
      console.log("Order placed!");
      clearCart();
    } else if (pizzas.length === 0 && sauces.length > 0) {
      alert("You can't order only sauce!");
    } else {
      alert("Your order is empty!");
    }
  };

  return (
    <div className="shoppingCart">
      <button className="closeButton" onClick={hideCart}>
        XXXXX
      </button>
      <h3>Cart items</h3>
      {pizzas.map((pizza) => (
        <div className="cartItem">
          <p>{pizza.name} </p>
          <button
            className="addition"
            onClick={() => changeQuantity(pizza.id, "pizza", "addition")}
          >
            +
          </button>
          <span>{pizza.quantity}</span>
          <button
            className="subtraction"
            onClick={() => changeQuantity(pizza.id, "pizza", "subtraction")}
          >
            -
          </button>
        </div>
      ))}
      {sauces.map((sauce) => (
        <div className="cartItem">
          <p>{sauce.name}</p>
          <button
            className="addition"
            onClick={() => changeQuantity(sauce.id, "sauce", "addition")}
          >
            +
          </button>
          <span>{sauce.quantity}</span>
          <button
            className="subtraction"
            onClick={() => changeQuantity(sauce.id, "sauce", "subtraction")}
          >
            -
          </button>
        </div>
      ))}
      <div>
        <h4>Total</h4>
        <p>{countTotal()} PLN</p>
      </div>
      <div className="orderPlacement">
        <button onClick={placeOrder}>Place an order</button>
      </div>
    </div>
  );
};

export default ShoppingCart;
