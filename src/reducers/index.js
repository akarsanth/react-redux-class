import { combineReducers } from "redux";

// Reducers
import cartReducer from "./cartReducer";
import { orderListReducer } from "./orderReducer";

const reducers = combineReducers({
  cart: cartReducer,
  orderList: orderListReducer,
});

export default reducers;
