import React from "react";
import { useHistory } from "react-router";
import images from "../images";
import "../styles/Pizza.css";

const Pizza = ({ id, name, price, ingredients }) => {
  const history = useHistory();

  return (
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
        <button
          onClick={() => {
            history.push({
              pathname: `/pizza/${id}`,
            });
          }}
        >
          <b>Add to cart</b>
          <img
            alt="cart"
            src={images.cart}
            style={{ height: "15px", width: "15px", marginLeft: "7px" }}
          />
        </button>
      </div>
      <img
        className="pizzaImage"
        alt="pizza"
        src={images[name.toLowerCase()]}
      />
    </div>
  );
};

export default Pizza;
