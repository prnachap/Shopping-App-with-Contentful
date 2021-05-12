import { shopActionType } from "./shop-type";
export const addToCart = ({ id, title }) => {
  return {
    type: shopActionType.ADD_TO_CART,
    payload: { id, title },
  };
};

export const deleteItemFromCart = (id) => {
  return {
    type: shopActionType.ADD_TO_CART,
    payload: id,
  };
};
