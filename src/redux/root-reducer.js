import { combineReducers } from "redux";
import cartReducer from "./cart/cart-reducer";
import shopReducer from "./shop/shop-reducer";
import authReducer from "./auth/auth-reducer";

export default combineReducers({
  cart: cartReducer,
  shop: shopReducer,
  auth: authReducer,
});
