import React from "react";
import { useSelector } from "react-redux";
import classes from "./index.module.scss";
import { ReactComponent as CartIcon } from "../../assets/shopping-cart.svg";

const Cart = () => {
  const { cart } = useSelector((state) => state.shop);
  return (
    <div className={classes.cart}>
      <CartIcon />
      <span className={classes.cartItem}>{cart}</span>
    </div>
  );
};

export default Cart;
