import React, { useState } from "react";
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import pizza from "../images/pizza_planet.png";
import images from "../images";
import ShoppingCart from "./ShoppingCart";
import "../styles/Header.css";

const Header = () => {
  const [isCartVisible, setIsCartVisible] = useState(false);
  const cartItemsQuantity = useSelector((state) => {
    let quantity = state.cart.pizzas.length;
    if (state.cart.sauces.length > 0) {
      state.cart.sauces.forEach((sauce) => (quantity += sauce.quantity));
    }
    return quantity;
  });

  let history = useHistory();

  const redirect = () => {
    history.push("/");
  };

  const showShoppingCart = () => {
    setIsCartVisible(true);
  };

  const hideShoppingCart = () => {
    setIsCartVisible(false);
  };

  return (
    <div className="header">
      <img
        className="logo-img"
        alt="Pizza Planet"
        src={pizza}
        onClick={redirect}
      />
      <div className="cart-button-quantity">
        <button onClick={showShoppingCart}>
          <img alt="Shopping Cart" src={images.cart} />
        </button>
        {cartItemsQuantity > 0 && <span>{cartItemsQuantity}</span>}
      </div>
      <AnimatePresence>
        {isCartVisible && (
          <motion.div
          style={{position: "fixed", right: 0, top: 0, zIndex: 10}}
          initial={{x: 350}}
          animate={{x: 0}}
          exit={{x: 350}}>
            <ShoppingCart hideCart={hideShoppingCart} />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Header;
