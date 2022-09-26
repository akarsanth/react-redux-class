import {
  ORDER_LIST_REQUEST,
  ORDER_LIST_SUCCESS,
  ORDER_LIST_FAIL,
} from "../constants/orderConstants";
import { getOrders } from "../lib/api";

export const listOrders = () => {
  return async (dispatch) => {
    try {
      dispatch({ type: ORDER_LIST_REQUEST });

      const orders = await getOrders();

      dispatch({ type: ORDER_LIST_SUCCESS, payload: orders });
    } catch (error) {
      dispatch({
        type: ORDER_LIST_FAIL,
        payload: "Orders could not be loaded. Try again!",
      });
    }
  };
};
