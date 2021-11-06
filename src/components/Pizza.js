import React from "react";

const Pizza = ({ name, price, ingredients }) => {
  return (
    <li>
      <p>
        {name} - {price} PLN
      </p>
      <ul>
        {ingredients.map((ingredient) => (
          <li key={ingredient.id}>{ingredient.name}</li>
        ))}
      </ul>
    </li>
  );
};

export default Pizza;
