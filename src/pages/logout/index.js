import React from "react";
import classes from "./index.module.scss";
import { Button } from "../../components";
import { useDispatch } from "react-redux";
import { clearCart } from "../../redux/cart/cart-action";

const Logout = () => {
  const dispatch = useDispatch();

  const handleSignOut = () => {
    window.gapi.auth2.getAuthInstance().signOut();
    dispatch(clearCart());
  };
  return (
    <div className={classes.logout}>
      <h2>See You Again</h2>
      <p>Keep Shopping with us 😄</p>
      <Button className="facebook" handleClick={handleSignOut}>
        SIGN OUT WITH GOOGLE
      </Button>
    </div>
  );
};

export default Logout;
