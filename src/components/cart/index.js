import React from "react";
import classes from "./index.module.scss";
import { ReactComponent as CartIcon } from "../../assets/shopping-cart.svg";

const Cart = () => {
  return (
    <div className={classes.cart}>
      <CartIcon />
      <span className={classes.cartItem}>0</span>
    </div>
  );
};

export default Cart;
