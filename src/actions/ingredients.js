export const fetchIngredientsLoading = () => {
  return {
    type: "FETCH_INGREDIENTS_LOADING",
  };
};

export const fetchIngredientsSuccess = (ingredients) => {
  return {
    type: "FETCH_INGREDIENTS_SUCCESS",
    payload: ingredients,
  };
};

export const fetchIngredientsError = (error) => {
  return {
    type: "FETCH_INGREDIENTS_ERROR",
    payload: error,
  };
};
