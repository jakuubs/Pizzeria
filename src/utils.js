export const getAdditionalIngredients = (ingredients, addedIngredients) => {
  const additionalIngredients = addedIngredients.reduce(
    (ingredientsQuantity, e) => {
      ingredientsQuantity[e] = (ingredientsQuantity[e] || 0) + 1;
      return ingredientsQuantity;
    },
    {}
  );
  let ingredientsList = [];
  for (const [ingredient, quantity] of Object.entries(additionalIngredients)) {
    const listedIngredient = `${
      ingredients.find((i) => ingredient === i.id).name
    } ${quantity > 1 ? "x" + quantity : ""}`.trim();
    ingredientsList.push(listedIngredient);
  }
  return ingredientsList;
};

export const countTotal = (pizzas, sauces, ingredients) => {
  let total = 0;
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
  return total;
};
