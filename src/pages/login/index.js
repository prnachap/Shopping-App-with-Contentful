import React from "react";
import classes from "./index.module.scss";
import { SignUp } from "../../components";
import FacebookAuth from "../../utils/auth/FacebookAuth";

const Login = () => {
  return (
    <div className={classes.login}>
      <SignUp />
      <FacebookAuth />
    </div>
  );
};

export default Login;
