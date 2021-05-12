import React from "react";
import classes from "./index.module.scss";
import { CheckoutItem, Button } from "../../components";

const Checkout = () => {
  return (
    <div className={classes.container}>
      <h2>Shopping Cart</h2>
      <CheckoutItem />
      <h3>Total Price : &#8377; 400</h3>
      <div className={classes.buttonWrapper}>
        <Button>Proceed to Buy</Button>
      </div>
    </div>
  );
};

export default Checkout;
