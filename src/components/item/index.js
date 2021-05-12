import React from "react";
import { useDispatch } from "react-redux";
import classes from "./index.module.scss";
import Button from "../button/index";
import { addToCart } from "../../redux/cart/cart-action";

const Item = ({ id, imageUrl, alt, title, price }) => {
  const dispatch = useDispatch();
  const handleItemAddition = () => {
    dispatch(addToCart({ id, title, imageUrl, alt, price }));
  };
  return (
    <div className={classes.card}>
      <div className={classes.imageContainer}>
        <img src={imageUrl} alt={alt} className={classes.cardImage} />
      </div>
      <div className={classes.content}>
        <h3>{title}</h3>
        <h3>&#8377; {price}</h3>
      </div>
      <div className={classes.buttonContainer} onClick={handleItemAddition}>
        <Button width="fullwidth" className="light">
          Add to cart
        </Button>
      </div>
    </div>
  );
};

export default Item;
