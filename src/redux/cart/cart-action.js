import { cartActionType } from "./cart-type";

export const addToCart = ({ id, title, imageUrl, alt, price }) => {
  return {
    type: cartActionType.ADD_TO_CART,
    payload: { id, title, imageUrl, alt, price },
  };
};

export const deleteItemFromCart = ({ id, title, imageUrl, alt, price }) => {
  return {
    type: cartActionType.DELETE_FROM_CART,
    payload: { id, title, imageUrl, alt, price },
  };
};

export const clearCart = () => {
  return { type: cartActionType.CLEAR_CART };
};
