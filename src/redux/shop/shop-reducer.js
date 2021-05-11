/* eslint-disable import/no-anonymous-default-export */
import { shopActionType } from "./shop-type";
const INITIAL_STATE = {
  cart: 0,
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case shopActionType.ADD_TO_CART:
      return { ...state, cart: state.cart + 1 };
    default:
      return state;
  }
};
