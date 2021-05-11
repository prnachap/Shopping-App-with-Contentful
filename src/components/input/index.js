import React from "react";
import classes from "./index.module.scss";

const Input = ({ handleChange, label, ...otherProps }) => {
  return (
    <div className={classes.formGroup}>
      <input
        className={classes.formInput}
        onChange={handleChange}
        {...otherProps}
      />
      {label && <label className={classes.formLabel}>{label}</label>}
    </div>
  );
};

export default Input;
