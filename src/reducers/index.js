import pizzasReducer from "./pizzas";
import saucesReducer from "./sauces";
import ingredientsReducer from "./ingredients";
import { combineReducers } from "redux";

const rootReducer = combineReducers({
  pizzas: pizzasReducer,
  sauces: saucesReducer,
  ingredients: ingredientsReducer,
});

export default rootReducer;
