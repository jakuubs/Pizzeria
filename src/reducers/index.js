import pizzasReducer from "./pizzas";
import saucesReducer from "./sauces";
import ingredientsReducer from "./ingredients";
import cartReducer from "./cart";
import { combineReducers } from "redux";

const rootReducer = combineReducers({
  pizzas: pizzasReducer,
  sauces: saucesReducer,
  ingredients: ingredientsReducer,
  cart: cartReducer,
});

export default rootReducer;
