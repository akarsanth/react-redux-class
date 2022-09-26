import {
  CART_ADD_ITEM,
  CART_REMOVE_ITEM,
  CART_DECREASE_ITEM_QTY,
  CART_INCREASE_ITEM_QTY,
} from "../constants/cartConstants";

const calculateQtyAndPrice = (cartItems) => {
  const totalQuantity = cartItems.reduce((acc, item) => acc + item.qty, 0);
  const total = cartItems.reduce((acc, item) => acc + item.price * item.qty, 0);
  return { totalQuantity, total };
};

const initialState = {
  cartItems: [],
  totalQuantity: 0,
  total: 0,
};

const cartReducer = (state = initialState, action) => {
  const type = action.type;
  if (type === CART_ADD_ITEM) {
    // item to be added in cart
    const currItem = action.payload;

    // checking if item already exists
    const existsItem = state.cartItems.find((item) => item.id === currItem.id);

    // if item exists
    if (existsItem) {
      const newCartItems = state.cartItems.map((item) =>
        item.id === existsItem.id ? currItem : item
      );

      const { totalQuantity, total } = calculateQtyAndPrice(newCartItems);

      return {
        ...state,
        cartItems: newCartItems,
        totalQuantity,
        total,
      };
    } else {
      const newCartItems = [...state.cartItems, currItem];
      const { totalQuantity, total } = calculateQtyAndPrice(newCartItems);

      // add the new item
      return { ...state, cartItems: newCartItems, totalQuantity, total };
    }
  }

  if (type === CART_DECREASE_ITEM_QTY) {
    const newCartItems = state.cartItems.map((item) => {
      if (item.id === action.payload.id) {
        item.qty -= 1;
      }
      return item;
    });

    const { totalQuantity, total } = calculateQtyAndPrice(newCartItems);

    return {
      ...state,
      cartItems: newCartItems,
      totalQuantity,
      total,
    };
  }

  if (type === CART_INCREASE_ITEM_QTY) {
    const newCartItems = state.cartItems.map((item) => {
      if (item.id === action.payload.id) {
        item.qty += 1;
      }
      return item;
    });

    const { totalQuantity, total } = calculateQtyAndPrice(newCartItems);

    return {
      ...state,
      cartItems: newCartItems,
      totalQuantity,
      total,
    };
  }

  if (type === CART_REMOVE_ITEM) {
    const newCartItems = state.cartItems.filter(
      (item) => item.id !== action.payload.id
    );

    const { totalQuantity, total } = calculateQtyAndPrice(newCartItems);

    return {
      ...state,
      cartItems: newCartItems,
      totalQuantity,
      total,
    };
  }

  return state;
};

export default cartReducer;
