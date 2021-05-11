import React from "react";
import Button from "../button";
import classes from "./index.module.scss";
import Input from "../input";

const SignUp = () => {
  return (
    <div className={classes.signUp}>
      <h2>I do not have account</h2>
      <p>Sign up with your email or google or facebook or phone</p>
      <form>
        <Input type="email" name="email" label="Email" />
        <Input type="password" name="password" label="Password" />
      </form>
      <div className={classes.btnContainer}>
        <Button>Sign In</Button>
        <Button bg="google">Sign In With Google</Button>
      </div>
      <p className={classes.divide}>or</p>
      <div>
        <Button bg="facebook">Sign In With Facebook</Button>
      </div>
    </div>
  );
};

export default SignUp;
