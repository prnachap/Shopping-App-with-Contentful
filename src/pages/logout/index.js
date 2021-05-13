import React from "react";
import classes from "./index.module.scss";
import { Button } from "../../components";
import { useDispatch, useSelector } from "react-redux";
import { clearCart } from "../../redux/cart/cart-action";
import { signOut } from "../../redux/auth/auth-action";

const Logout = () => {
  const dispatch = useDispatch();
  const { type } = useSelector((state) => state.auth);

  const handleSignOut = () => {
    if (type === "facebook") {
      window.FB.logout();
      dispatch(signOut("facebook"));
    } else {
      window.gapi.auth2.getAuthInstance().signOut();
    }

    dispatch(clearCart());
  };
  return (
    <div className={classes.logout}>
      <h2>See You Again</h2>
      <p>Keep Shopping with us 😄</p>
      <Button
        className={`${type === "facebook" ? "facebook" : "google"}`}
        handleClick={handleSignOut}
      >
        {`SIGN OUT WITH ${type === "facebook" ? "Facebook" : "Google"}`}
      </Button>
    </div>
  );
};

export default Logout;
