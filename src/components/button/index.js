import React from "react";
import "./index.scss";

const index = ({
  children,
  bg,
  handleClick,
  width,
  className,
  ...otherProps
}) => {
  return (
    <button
      className={`button ${className}`}
      style={{
        width: `${width === "fullwidth" && "100%"}`,
      }}
      onClick={handleClick}
    >
      {children}
    </button>
  );
};

export default index;
