import React from "react";
import classes from "./index.module.scss";

const index = ({ children, bg, handleClick }) => {
  return (
    <button
      className={classes.button}
      style={{
        background: `${
          bg === "google" ? "#4285F4" : bg === "facebook" && "#156FE5"
        }`,
      }}
      onClick={handleClick}
    >
      {children}
    </button>
  );
};

export default index;
