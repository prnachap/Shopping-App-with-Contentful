import React from "react";
import classes from "./index.module.scss";
import { SignUp } from "../../components";

const Login = () => {
  return (
    <div className={classes.login}>
      <SignUp />
    </div>
  );
};

export default Login;
