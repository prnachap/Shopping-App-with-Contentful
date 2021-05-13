import React, { useState } from "react";
import Button from "../button";
import classes from "./index.module.scss";
import Input from "../input";
import GoogleAuth from "../../utils/auth/GoogleAuth";
import FacebookAuth from "../../utils/auth/FacebookAuth";

const SignUp = () => {
  const [input, setInput] = useState({
    email: "",
    password: "",
  });

  const { email, password } = input;

  const handleInputChange = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Login Functionality has not been added, Please Login Using Google");
  };

  return (
    <div className={classes.signUp}>
      <h2>I do not have account</h2>
      <p>Sign up with your email or google or facebook or phone</p>
      <form onSubmit={handleSubmit} className={classes.form}>
        <Input
          type="email"
          name="email"
          label="Email"
          value={email}
          handleChange={handleInputChange}
        />
        <Input
          type="password"
          name="password"
          label="Password"
          value={password}
          handleChange={handleInputChange}
        />
        <Button type="submit">Sign In</Button>
      </form>
      <div className={classes.btnContainer}>
        <GoogleAuth />
      </div>
      <p className={classes.divide}>or</p>
      <div>
        <FacebookAuth />
      </div>
    </div>
  );
};

export default SignUp;
