/* eslint-disable import/no-anonymous-default-export */
import { shopActionType } from "./shop-type";
import { addItemToCart, deleteItemFromCart } from "./shop-utils";
const INITIAL_STATE = {
  items: [],
};

export default (state = INITIAL_STATE, action) => {
  const { type, payload } = action;

  switch (type) {
    case shopActionType.ADD_TO_CART:
      return { ...state, items: addItemToCart(state.items, payload) };

    case shopActionType.DELETE_FROM_CART:
      return { ...state, items: deleteItemFromCart(state.items, payload) };

    default:
      return state;
  }
};
