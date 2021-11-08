import React from "react";
import "../styles/Pizza.css";

const Pizza = ({ name, price, ingredients }) => {
  const images = {
    margherita:
      "https://amrestcdn.azureedge.net/ph-web-ordering/Pizza%20Hut%20PL/NEW%20WWW/314x314/PIZZA/PH_314x314_margherita-min_.jpg",
    funghi:
      "https://amrestcdn.azureedge.net/ph-web-ordering/Pizza%20Hut%20PL/NEW%20WWW/314x314/PIZZA/PH_314x314_farmerska-min_.jpg",
    vesuvio:
      "https://amrestcdn.azureedge.net/ph-web-ordering/GRD4/GRD4590/Real%20Deal/pizzahut_szynka-500x500px.png",
    salami:
      "https://amrestcdn.azureedge.net/ph-web-ordering/Pizza%20Hut%20PL/NEW%20WWW/314x314/PIZZA/PH_314x314_pepperoni-min_.jpg",
    capricciosa:
      "https://amrestcdn.azureedge.net/ph-web-ordering/Pizza%20Hut%20PL/NEW%20WWW/314x314/PIZZA/PH_314x314_classica-min_.jpg",
    hawajska:
      "https://amrestcdn.azureedge.net/ph-web-ordering/Pizza%20Hut%20PL/NEW%20WWW/314x314/PIZZA/PH_314x314_hawajska-min_.jpg",
    verona:
      "https://amrestcdn.azureedge.net/ph-web-ordering/Pizza%20Hut%20PL/NEW%20WWW/314x314/PIZZA/PH_314x314_miesna-min_.jpg",
    roma: "https://amrestcdn.azureedge.net/ph-web-ordering/Pizza%20Hut%20PL/NEW%20WWW/314x314/PIZZA/PH_314x314_prosciutto-min_.jpg",
    colosseum:
      "https://amrestcdn.azureedge.net/ph-web-ordering/Pizza%20Hut%20PL/NEW%20WWW/314x314/PIZZA/PH_314x314_carbonara-min_.jpg",
    cart: "https://www.freeiconspng.com/thumbs/cart-icon/basket-cart-icon-27.png",
  };

  return (
    <div>
      <div className="pizza">
        <div className="pizzaInfo">
        <p>
          <b>{name}</b> - <i>{price} PLN</i>
        </p>
        <ul>
          {ingredients.map((ingredient) => (
            <li key={ingredient.id}>{ingredient.name}</li>
          ))}
        </ul>
        <button>
          <b>Add to cart</b>
          <img
            alt="cart"
            src={images.cart}
            style={{ height: "15px", width: "15px", marginLeft: "7px" }}
          />
        </button>
        </div>
        <img className="pizzaImage" alt="pizza" src={images[name.toLowerCase()]} />
      </div>
    </div>
  );
};

export default Pizza;
