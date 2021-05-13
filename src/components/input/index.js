import React from "react";
import "./index.scss";

const Input = ({ handleChange, label, ...otherProps }) => {
  return (
    <div className="formGroup">
      <input className="formInput" onChange={handleChange} {...otherProps} />
      {label && (
        <label
          className={`${otherProps.value.length ? "resize" : ""} formLabel`}
        >
          {label}
        </label>
      )}
    </div>
  );
};

export default Input;
