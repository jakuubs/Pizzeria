export const fetchSaucesLoading = () => {
  return {
    type: "FETCH_SAUCES_LOADING",
  };
};

export const fetchSaucesSuccess = (sauces) => {
  return {
    type: "FETCH_SAUCES_SUCCESS",
    payload: sauces,
  };
};

export const fetchSaucesError = (error) => {
  return {
    type: "FETCH_SAUCES_ERROR",
    payload: error,
  };
};
