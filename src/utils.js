export const getAdditionalIngredients = (ingredients, addedIngredients) => {
    const additionalIngredients = addedIngredients.reduce(
      (ingredientsQuantity, e) => {
        ingredientsQuantity[e] = (ingredientsQuantity[e] || 0) + 1;
        return ingredientsQuantity;
      },
      {}
    );
    let ingredientsList = [];
    for (const [ingredient, quantity] of Object.entries(
      additionalIngredients
    )) {
      const listedIngredient = `${
        ingredients.find((i) => ingredient === i.id).name
      } ${quantity > 1 ? "x" + quantity : ""}`.trim();
      ingredientsList.push(listedIngredient);
    }
    return ingredientsList;
  };