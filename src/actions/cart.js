export const addPizzaToCart = (id, name, price, additionalIngredients) => {
  return {
    type: "ADD_PIZZA_TO_CART",
    payload: {
      id,
      name,
      price,
      additionalIngredients,
    },
  };
};

export const deletePizzaFromCart = (index) => {
  return {
    type: "DELETE_PIZZA_FROM_CART",
    payload: index,
  };
};

export const addSauceToCart = (id, name, quantity, price) => {
  return {
    type: "ADD_SAUCE_TO_CART",
    payload: {
      id,
      name,
      quantity,
      price,
    },
  };
};

export const changeSauceQuantity = (id, operation) => {
  return {
    type: "CHANGE_SAUCE_QUANTITY",
    payload: {
      id,
      operation,
    },
  };
};

export const setCart = (cart) => {
  return {
    type: "SET_CART",
    payload: cart,
  };
};

export const clearCart = () => {
  return {
    type: "CLEAR_CART",
  };
};
