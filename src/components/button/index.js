import React from "react";
import classes from "./index.module.scss";

const index = ({ children, bg, handleClick, width }) => {
  return (
    <button
      className={classes.button}
      style={{
        background: `${
          bg === "google" ? "#4285F4" : bg === "facebook" && "#156FE5"
        }`,
        width: `${width === "fullwidth" && "100%"}`,
      }}
      onClick={handleClick}
    >
      {children}
    </button>
  );
};

export default index;
