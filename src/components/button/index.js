import React from "react";
import classes from "./index.module.scss";

const index = ({ children, bg }) => {
  return (
    <button
      className={classes.button}
      style={{
        background: `${
          bg === "google" ? "#4285F4" : bg === "facebook" && "#156FE5"
        }`,
      }}
    >
      {children}
    </button>
  );
};

export default index;
