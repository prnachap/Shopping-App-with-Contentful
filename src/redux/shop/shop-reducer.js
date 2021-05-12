/* eslint-disable import/no-anonymous-default-export */
import { shopActionType } from "./shop-type";

const INITIAL_STATE = {
  items: [],
  loading: true,
  error: null,
};

export default (state = INITIAL_STATE, action) => {
  const { type, payload } = action;
  switch (type) {
    case shopActionType.GET_DATA:
      return { ...state, items: payload, loading: false, error: null };
    case shopActionType.SET_LOADING:
      return { ...state, loading: true };
    case shopActionType.ERROR:
      return { ...state, loading: false, error: payload };
    default:
      return state;
  }
};
