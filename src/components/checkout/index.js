import React from "react";
import { useDispatch } from "react-redux";
import classes from "./index.module.scss";
import { FiChevronLeft } from "react-icons/fi";
import { FiChevronRight } from "react-icons/fi";
import { deleteItemFromCart, addToCart } from "../../redux/cart/cart-action";

const CheckoutItem = ({ id, title, imageUrl, alt, qty, price }) => {
  const dispatch = useDispatch();

  const handleItemAddToCart = () => {
    dispatch(addToCart({ id, title, imageUrl, alt, price }));
  };

  const handleDeleteItemFromCart = () => {
    dispatch(deleteItemFromCart({ id, title, imageUrl, alt, price }));
  };

  return (
    <div className={classes.item}>
      <div className={classes.flexWrapper}>
        <div className={classes.imgContainer}>
          <img src={imageUrl} alt={alt} />
        </div>
        <div className={classes.itemDetails}>
          <h3>{title}</h3>
          <div className={classes.qtyContainer}>
            <p>Qty : </p>
            <FiChevronLeft
              className={classes.icons}
              onClick={handleDeleteItemFromCart}
            />
            <p>{qty}</p>
            <FiChevronRight
              className={classes.icons}
              onClick={handleItemAddToCart}
            />
          </div>
        </div>
      </div>
      <div className={classes.priceWrapper}>
        <h3>&#8377; {qty * price}</h3>
      </div>
    </div>
  );
};

export default CheckoutItem;
