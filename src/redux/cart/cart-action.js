import { cartActionType } from "./cart-type";

export const addToCart = ({ id, title }) => {
  return {
    type: cartActionType.ADD_TO_CART,
    payload: { id, title },
  };
};

export const deleteItemFromCart = (id) => {
  return {
    type: cartActionType.ADD_TO_CART,
    payload: id,
  };
};
