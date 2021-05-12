import React from "react";
import classes from "./index.module.scss";
import GoogleAuth from "../../utils/auth/GoogleAuth";

const Logout = () => {
  return (
    <div className={classes.logout}>
      <h2>See You Again</h2>
      <p>Keep Shopping with us 😄</p>
      <GoogleAuth />
    </div>
  );
};

export default Logout;
