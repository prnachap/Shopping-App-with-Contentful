import React from "react";
import classes from "./index.module.scss";
import GoogleAuth from "../../utils/auth/GoogleAuth";
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";

const Logout = () => {
  const { loggedIn } = useSelector((state) => state.auth);
  const history = useHistory();

  return (
    <div className={classes.logout}>
      <h2>See You Again</h2>
      <p>Keep Shopping with us 😄</p>
      <GoogleAuth />
    </div>
  );
};

export default Logout;
