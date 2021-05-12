import React from "react";
import classes from "./index.module.scss";
import { Item } from "../../components";
import useGraph from "../../hooks/useGraph";

const Shop = () => {
  return (
    <div className={classes.container}>
      <Item />
    </div>
  );
};

export default Shop;
