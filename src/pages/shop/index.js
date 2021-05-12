import React from "react";
import classes from "./index.module.scss";
import { Item } from "../../components";
// import useGraph from "../../hooks/useGraph";
import { useSelector } from "react-redux";

const Shop = () => {
  const { items, loading, error } = useSelector((state) => state.shop);
  return (
    <div className={classes.container}>
      {loading && <div>Loading</div>}
      {!loading &&
        items.map(({ sys, image, price, title }) => (
          <Item
            key={sys.id}
            title={title}
            alt={image.description}
            imageUrl={image.url}
            price={price}
          />
        ))}
      {error && <div>{error}</div>}
    </div>
  );
};

export default Shop;
