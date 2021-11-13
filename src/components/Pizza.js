import React from "react";
// import { useDispatch } from "react-redux";
import { useHistory } from "react-router";
// import { addPizzaToCart } from "../actions/cart";
import images from "../images";
import "../styles/Pizza.css";

const Pizza = ({ id, name, price, ingredients }) => {
  // const dispatch = useDispatch();
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
              state: { image: images[name.toLowerCase()], ingredients: [] },
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
