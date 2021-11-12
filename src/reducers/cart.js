const initialState = {
  pizzas: [],
  sauces: [],
};

const cartReducer = (state = initialState, action) => {
  let index = 0;
  switch (action.type) {
    case "ADD_PIZZA_TO_CART":
      index = state.pizzas.findIndex((pizza) => pizza.id === action.payload.id);
      if (index !== -1) {
        let updatedPizzas = [...state.pizzas];
        const updatedQuantity = updatedPizzas[index].quantity + action.payload.quantity;
        updatedPizzas[index] = {
          ...updatedPizzas[index],
          quantity: updatedQuantity,
        };
        return {
          ...state,
          pizzas: updatedPizzas,
        }
      } else {
        return {
          ...state,
          pizzas: [...state.pizzas, action.payload],
        }; 
      }
    case "CHANGE_PIZZA_QUANTITY":
      const updatedPizzas = [...state.pizzas];
      index = updatedPizzas.findIndex(
        (pizza) => pizza.id === action.payload.id
      );
      if (action.payload.operation === "+") {
        const updatedQuantity = updatedPizzas[index].quantity + 1;
        updatedPizzas[index] = {
          ...updatedPizzas[index],
          quantity: updatedQuantity,
        };
      } else if (action.payload.operation === "-") {
        const updatedQuantity = updatedPizzas[index].quantity - 1;
        if (updatedQuantity > 0)
          updatedPizzas[index] = {
            ...updatedPizzas[index],
            quantity: updatedQuantity,
          };
        else {
          updatedPizzas.splice(index, 1);
        }
      }
      return {
        ...state,
        pizzas: updatedPizzas,
      };
    case "ADD_SAUCE_TO_CART":
      index = state.sauces.findIndex((sauce) => sauce.id === action.payload.id);
      if (index !== -1) {
        let updatedSauces = [...state.sauces];
        const updatedQuantity = updatedSauces[index].quantity + action.payload.quantity;
        updatedSauces[index] = {
          ...updatedSauces[index],
          quantity: updatedQuantity,
        };
        return {
          ...state,
          sauces: updatedSauces,
        }
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
      };
    default:
      return state;
  }
};

export default cartReducer;
