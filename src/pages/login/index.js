import React from "react";
import classes from "./index.module.scss";
import { SignUp } from "../../components";

const Login = () => {
  return (
    <section className={classes.login}>
      <SignUp />
    </section>
  );
};

export default Login;
