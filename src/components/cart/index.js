import React from "react";
import { useSelector } from "react-redux";
import classes from "./index.module.scss";
import { ReactComponent as CartIcon } from "../../assets/shopping-cart.svg";
import { cartCount } from "../../utils/cartCount";

const Cart = () => {
  const { items } = useSelector((state) => state.cart);
  const totalQty = cartCount(items);
  return (
    <div className={classes.cart}>
      <CartIcon />
      <span className={classes.cartItem}>{totalQty}</span>
    </div>
  );
};

export default Cart;
