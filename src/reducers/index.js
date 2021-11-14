import pizzasReducer from "./pizzas";
import saucesReducer from "./sauces";
import ingredientsReducer from "./ingredients";
import cartReducer from "./cart";
import orderReducer from "./order";
import { combineReducers } from "redux";

const rootReducer = combineReducers({
  pizzas: pizzasReducer,
  sauces: saucesReducer,
  ingredients: ingredientsReducer,
  cart: cartReducer,
  order: orderReducer,
});

export default rootReducer;
