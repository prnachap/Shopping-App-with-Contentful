import { shopActionType } from "./shop-type";

const query = `{
  shoppingCollection{
    items{
      sys{
        id
      }
      title,
      price,
      image{
        title,
        description,
        url
      }
    }
  }
}`;

export const setLoading = () => {
  return {
    type: shopActionType.SET_LOADING,
    payload: null,
  };
};

export const setError = (message) => {
  return {
    type: shopActionType.ERROR,
    payload: message,
  };
};

export const getShopData = () => async (dispatch, getState) => {
  try {
    dispatch(setLoading());
    const response = await window.fetch(
      `https://graphql.contentful.com/content/v1/spaces/${process.env.REACT_APP_SPACEID}`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${process.env.REACT_APP_TOKEN}`,
        },
        body: JSON.stringify({ query }),
      }
    );

    const data = await response.json();
    const items = await data.data.shoppingCollection.items;
    dispatch({ type: shopActionType.GET_DATA, payload: items });
  } catch (error) {
    dispatch(setError("Something Went Wrong"));
  }
};
