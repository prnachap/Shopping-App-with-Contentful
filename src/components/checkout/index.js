import React from "react";
import { useSelector, useDispatch } from "react-redux";
import classes from "./index.module.scss";
import srcImg from "../../assets/hats/brown-brim.png";
import { FiChevronLeft } from "react-icons/fi";
import { FiChevronRight } from "react-icons/fi";
import { deleteItemFromCart } from "../../redux/cart/cart-action";

const CheckoutItem = () => {
  const dispatch = useDispatch();
  const state = useSelector((state) => state.cart);
  return (
    <div className={classes.item}>
      <div className={classes.flexWrapper}>
        <div className={classes.imgContainer}>
          <img src={srcImg} alt="brownHat" />
        </div>
        <div className={classes.itemDetails}>
          <h3>Wiskas Item</h3>
          <div className={classes.qtyContainer}>
            <p>Qty : </p>
            <FiChevronLeft
              className={classes.icons}
              onClick={() => dispatch(deleteItemFromCart("1"))}
            />
            <p>5</p>
            <FiChevronRight className={classes.icons} />
          </div>
        </div>
      </div>
      <div className={classes.priceWrapper}>
        <h3>&#8377; 900</h3>
      </div>
    </div>
  );
};

export default CheckoutItem;
