import React, { Fragment } from "react";
import classes from "./index.module.scss";
import { CheckoutItem, Button } from "../../components";
import { useSelector } from "react-redux";
import { totalPrice } from "../../utils/cartCount";
import { useHistory } from "react-router-dom";

const Checkout = () => {
  const { items } = useSelector((state) => state.cart);
  const { loggedIn } = useSelector((state) => state.auth);
  const history = useHistory();

  if (!loggedIn) {
    history.push("/login");
  }

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
            <Button>Proceed to Buy</Button>
          </div>
        </Fragment>
      ) : (
        <h2>No Item in Cart</h2>
      )}
    </div>
  );
};

export default Checkout;
