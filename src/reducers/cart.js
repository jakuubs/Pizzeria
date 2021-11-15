const initialState = {
  pizzas: [],
  sauces: [],
  pizzaCartId: 0,
};

const cartReducer = (state = initialState, action) => {
  let index = 0;
  switch (action.type) {
    case "ADD_PIZZA_TO_CART":
      const pizza = action.payload;
      pizza.cartId = state.pizzaCartId;
      return {
        ...state,
        pizzas: [...state.pizzas, pizza],
        pizzaCartId: state.pizzaCartId + 1,
      };
    case "DELETE_PIZZA_FROM_CART":
      const pizzasInCart = [...state.pizzas];
      pizzasInCart.splice(action.payload, 1);
      return {
        ...state,
        pizzas: pizzasInCart,
      };
    case "ADD_SAUCE_TO_CART":
      index = state.sauces.findIndex((sauce) => sauce.id === action.payload.id);
      if (index !== -1) {
        let updatedSauces = [...state.sauces];
        const updatedQuantity =
          updatedSauces[index].quantity + action.payload.quantity;
        updatedSauces[index] = {
          ...updatedSauces[index],
          quantity: updatedQuantity,
        };
        return {
          ...state,
          sauces: updatedSauces,
        };
      } else {
        return {
          ...state,
          sauces: [...state.sauces, action.payload],
        };
      }
    case "CHANGE_SAUCE_QUANTITY":
      const updatedSauces = [...state.sauces];
      index = updatedSauces.findIndex(
        (sauce) => sauce.id === action.payload.id
      );
      if (action.payload.operation === "+") {
        const updatedQuantity = updatedSauces[index].quantity + 1;
        updatedSauces[index] = {
          ...updatedSauces[index],
          quantity: updatedQuantity,
        };
      } else if (action.payload.operation === "-") {
        const updatedQuantity = updatedSauces[index].quantity - 1;
        if (updatedQuantity > 0)
          updatedSauces[index] = {
            ...updatedSauces[index],
            quantity: updatedQuantity,
          };
        else {
          updatedSauces.splice(index, 1);
        }
      }
      return {
        ...state,
        sauces: updatedSauces,
      };
    case "CLEAR_CART":
      return {
        ...state,
        pizzas: [],
        sauces: [],
        pizzaCartId: 0,
      };
    default:
      return state;
  }
};

export default cartReducer;
