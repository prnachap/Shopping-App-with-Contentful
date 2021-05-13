import React from "react";
import classes from "./index.module.scss";
import { SignUp } from "../../components";

const Login = () => {
  // login page
  return (
    <div className={classes.login}>
      <SignUp />
    </div>
  );
};

export default Login;
