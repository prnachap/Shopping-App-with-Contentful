import React, { Fragment } from "react";
import classes from "./index.module.scss";
import { CheckoutItem, Button } from "../../components";
import { useSelector } from "react-redux";
import { totalPrice } from "../../utils/cartCount";

const Checkout = () => {
  const { items } = useSelector((state) => state.cart);

  const handleClick = () => {
    alert("thank you for shopping with us :christmas_tree:");
  };

  return (
    <div className={classes.container}>
      <h2>Shopping Cart</h2>
      {items.length > 0 ? (
        <Fragment>
          {items.map(({ id, ...otherProps }) => {
            return <CheckoutItem key={id} id={id} {...otherProps} />;
          })}

          <h3>Total Price : &#8377; {totalPrice(items)}</h3>
          <div className={classes.buttonWrapper}>
            <Button handleClick={handleClick}>Proceed to Buy</Button>
          </div>
        </Fragment>
      ) : (
        <h2>No Item in Cart</h2>
      )}
    </div>
  );
};

export default Checkout;
