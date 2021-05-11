import { shopActionType } from "./shop-type";
export const addToCart = () => {
  return {
    type: shopActionType.ADD_TO_CART,
  };
};
