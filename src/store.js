// here we connect all of our reducers and any middlewares
import { createStore, applyMiddleware } from "redux";
import reducers from "./reducers";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";

// initial state of reducers
const initialState = {};
// Array of middleware
const middleware = [thunk];

// Creating store
const store = createStore(
  reducers,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
