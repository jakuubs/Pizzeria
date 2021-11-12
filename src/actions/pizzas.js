export const fetchPizzasLoading = () => {
  return {
    type: "FETCH_PIZZAS_LOADING",
  };
};

export const fetchPizzasSuccess = (pizzas) => {
  return {
    type: "FETCH_PIZZAS_SUCCESS",
    payload: pizzas,
  };
};

export const fetchPizzasError = (error) => {
  return {
    type: "FETCH_PIZZAS_ERROR",
    payload: error,
  };
};
