import React from "react";
import "../styles/Sauce.css";

const Sauce = ({ name, price }) => {
    const images = {
        czosnkowy: "https://ocs-pl.oktawave.com/v1/AUTH_876e5729-f8dd-45dd-908f-35d8bb716177/amrest-web-ordering/DE/PH/MENU/PreviewDI/Sour_Cream_dine-min.png",
        ostry: "https://ocs-pl.oktawave.com/v1/AUTH_876e5729-f8dd-45dd-908f-35d8bb716177/amrest-web-ordering/DE/PH/MENU/PreviewDI/Mexican_Salsa_del-min.png",
        '1000 wysp': "https://ocs-pl.oktawave.com/v1/AUTH_876e5729-f8dd-45dd-908f-35d8bb716177/amrest-web-ordering/DE/PH/MENU/PreviewDI/Mayonnaise_dine-min.png",
        cart: "https://www.freeiconspng.com/thumbs/cart-icon/basket-cart-icon-27.png",
      };
  return (
    <div className="sauce">
      <div className="sauceInfo">
        <p>
          <b>{name}</b> - <i>{price} PLN</i>
        </p>
        <button>
          <b>Add to cart</b>
          <img
            alt="cart"
            src={images.cart}
            style={{ height: "15px", width: "15px", marginLeft: "7px" }}
          />
        </button>
      </div>
      <img className="sauceImage" alt="sauce" src={images[name.toLowerCase()]} />
    </div>
  );
};

export default Sauce;
