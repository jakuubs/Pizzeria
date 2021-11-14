export const orderSuccessful = () => {
  return {
    type: "ORDER_SUCCESSFUL",
  };
};

export const orderFailed = () => {
  return {
    type: "ORDER_FAILED",
  };
};

export const clearOrder = () => {
  return {
    type: "CLEAR_ORDER",
  };
};
