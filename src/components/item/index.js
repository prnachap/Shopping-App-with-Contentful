import React from "react";
import { useDispatch, useSelector } from "react-redux";
import classes from "./index.module.scss";
import src from "../../assets/hats/blue-beanie.png";
import Button from "../button/index";
import { addToCart } from "../../redux/cart/cart-action";

const Item = ({ imageUrl, alt, title, price }) => {
  // const state = useSelector((state) => state.cart);

  const dispatch = useDispatch();
  const handleItemAddition = () => {
    dispatch(addToCart({ id: "1", title: "greenCap" }));
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
      <div className={classes.buttonContainer}>
        <Button width="fullwidth" className="light">
          Add to cart
        </Button>
      </div>
    </div>
  );
};

export default Item;
