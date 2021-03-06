import React from "react";
import { useDispatch, useSelector } from "react-redux";
import classes from "./index.module.scss";
import Button from "../button/index";
import { addToCart } from "../../redux/cart/cart-action";
import { useHistory } from "react-router-dom";

const Item = ({ id, imageUrl, alt, title, price }) => {
  const history = useHistory();
  const dispatch = useDispatch();
  const { loggedIn } = useSelector((state) => state.auth);

  const handleItemAddition = () => {
    if (!loggedIn) {
      return history.push("/login");
    }
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
