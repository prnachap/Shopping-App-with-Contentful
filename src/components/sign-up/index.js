import React from "react";
import Button from "../button";
import classes from "./index.module.scss";
import Input from "../input";
import GoogleAuth from "../../utils/auth/GoogleAuth";

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
        <GoogleAuth />
      </div>
      <p className={classes.divide}>or</p>
      <div>
        <Button className="facebook">Sign In With Facebook</Button>
      </div>
    </div>
  );
};

export default SignUp;
