import React from "react";
import classes from "./index.module.scss";
import src from "../../assets/hats/blue-beanie.png";
import Button from "../button/index";

const Item = ({ imageUrl }) => {
  return (
    <div className={classes.card}>
      <div className={classes.imageContainer}>
        <img src={src} alt="bean cap" className={classes.cardImage} />
      </div>
      <div className={classes.content}>
        <h3>Back Cap</h3>
        <h3>24</h3>
      </div>
      <div className={classes.buttonContainer}>
        <Button width="fullwidth">Add to cart</Button>
      </div>
    </div>
  );
};

export default Item;
