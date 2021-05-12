import React from "react";
import classes from "./index.module.scss";
import { Item } from "../../components";
// import useGraph from "../../hooks/useGraph";
import { useSelector } from "react-redux";
import { Spinner } from "../../components";

const Shop = () => {
  const { items, loading, error } = useSelector((state) => state.shop);
  return (
    <div className={classes.container}>
      <h1 className={classes.title}>Hats</h1>
      {loading && <Spinner />}
      {!loading && !error && (
        <div>
          <div className={classes.grid}>
            {!loading &&
              items.map(({ sys, image, price, title }) => (
                <Item
                  key={sys.id}
                  id={sys.id}
                  title={title}
                  alt={image.description}
                  imageUrl={image.url}
                  price={price}
                />
              ))}
          </div>
        </div>
      )}
      {!loading && error && <div>{error}</div>}
    </div>
  );
};

export default Shop;
