import React from "react";
import { useDispatch, useSelector } from "react-redux";
import classes from "./index.module.scss";
import src from "../../assets/hats/blue-beanie.png";
import Button from "../button/index";
import { addToCart } from "../../redux/shop/shop-action";

const Item = ({ imageUrl }) => {
  const state = useSelector((state) => state.shop);
  console.log(state);
  const dispatch = useDispatch();
  const handleItemAddition = () => {
    dispatch(addToCart({ id: "1", title: "greenCap" }));
  };
  return (
    <div className={classes.card}>
      <div className={classes.imageContainer}>
        <img src={src} alt="bean cap" className={classes.cardImage} />
      </div>
      <div className={classes.content}>
        <h3>Back Cap</h3>
        <h3>24</h3>
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
