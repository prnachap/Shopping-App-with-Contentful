/* eslint-disable import/no-anonymous-default-export */
import { cartActionType } from "./cart-type";
import { addItemToCart, deleteItemFromCart } from "./cart-utils";
const INITIAL_STATE = {
  items: [],
};

export default (state = INITIAL_STATE, action) => {
  const { type, payload } = action;

  switch (type) {
    case cartActionType.ADD_TO_CART:
      return { ...state, items: addItemToCart(state.items, payload) };

    case cartActionType.DELETE_FROM_CART:
      return { ...state, items: deleteItemFromCart(state.items, payload) };

    default:
      return state;
  }
};
