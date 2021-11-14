const initialState = {
  isOrdered: false,
  isDisplayed: false,
};

const orderReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ORDER_SUCCESSFUL":
      return {
        ...state,
        isOrdered: true,
        isDisplayed: true,
      };
    case "ORDER_FAILED":
      return {
        ...state,
        isOrdered: false,
        isDisplayed: true,
      };
    case "CLEAR_ORDER":
      return {
        ...state,
        isOrdered: false,
        isDisplayed: false,
      };
    default:
      return state;
  }
};

export default orderReducer;
