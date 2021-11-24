import React from "react";
import { useHistory } from "react-router";
import images from "../images";
import "../styles/Pizza.css";

const Pizza = ({ id, name, price, ingredients }) => {
  const history = useHistory();

  return (
    <div className="pizza">
      <img
        className="pizza-image"
        alt="pizza"
        src={images[name.toLowerCase()]}
      />
      <div className="pizza-info">
        <p>
          <b>{name}</b> - <i>{price} PLN</i>
        </p>
        <ul>
          {ingredients.map((ingredient) => (
            <li key={ingredient.id}>{ingredient.name}</li>
          ))}
        </ul>
      </div>
      <button className="order-button"
          onClick={() => {
            history.push({
              pathname: `/pizza/${id}`,
            });
          }}
        >
          <b>Add to order</b>
        </button>
    </div>
  );
};

export default Pizza;
