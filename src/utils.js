export const getAdditionalIngredients = (ingredients, addedIngredients) => {
  let ingredientsList = [];
  if (ingredients.length) {
    const additionalIngredients = addedIngredients.reduce(
      (ingredientsQuantity, e) => {
        ingredientsQuantity[e] = (ingredientsQuantity[e] || 0) + 1;
        return ingredientsQuantity;
      },
      {}
    );
    for (const [ingredient, quantity] of Object.entries(additionalIngredients)) {
      const listedIngredient = `${
        ingredients.find((i) => ingredient === i.id).name
      } ${quantity > 1 ? "x" + quantity : ""}`.trim();
      ingredientsList.push(listedIngredient);
    }
  }
  return ingredientsList;
};

export const countTotal = (pizzas, sauces, ingredients) => {
  let total = 0;
  if (ingredients.length) {
    pizzas.forEach((pizza) => {
      let ingredientsTotal = 0;
      pizza.additionalIngredients.forEach((id) => {
        ingredientsTotal += ingredients.find(
          (ingredient) => ingredient.id === id
        ).price;
      });
      total += pizza.price + ingredientsTotal;
    });
    sauces.forEach((sauce) => {
      total += sauce.quantity * sauce.price;
    });
  }
  return total;
};
