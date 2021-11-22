import React from "react";
import { useDispatch } from "react-redux";
import { addSauceToCart } from "../actions/cart";
import "../styles/Sauce.css";

const Sauce = ({ id, name, price }) => {
  const dispatch = useDispatch();

  const images = {
    czosnkowy:
      "https://ocs-pl.oktawave.com/v1/AUTH_876e5729-f8dd-45dd-908f-35d8bb716177/amrest-web-ordering/DE/PH/MENU/PreviewDI/Sour_Cream_dine-min.png",
    ostry:
      "https://ocs-pl.oktawave.com/v1/AUTH_876e5729-f8dd-45dd-908f-35d8bb716177/amrest-web-ordering/DE/PH/MENU/PreviewDI/Mexican_Salsa_del-min.png",
    "1000 wysp":
      "https://ocs-pl.oktawave.com/v1/AUTH_876e5729-f8dd-45dd-908f-35d8bb716177/amrest-web-ordering/DE/PH/MENU/PreviewDI/Mayonnaise_dine-min.png",
    cart: "https://www.freeiconspng.com/thumbs/cart-icon/basket-cart-icon-27.png",
  };

  return (
    <div className="sauce">
      <img
        className="sauceImage"
        alt="sauce"
        src={images[name.toLowerCase()]}
      />
      <div className="sauceInfo">
        <p>
          <b>{name}</b> - <i>{price} PLN</i>
        </p>
      </div>
      <button
        className="order-button"
        onClick={() => dispatch(addSauceToCart(id, name, 1, price))}
      >
        <b>Add to order</b>
      </button>
    </div>
  );
};

export default Sauce;
