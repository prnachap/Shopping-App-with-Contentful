/* eslint-disable import/no-anonymous-default-export */
import { authActionTypes } from "./auth-types";

const INITIAL_STATE = {
  loggedIn: false,
};
export default (state = INITIAL_STATE, action) => {
  const { type, payload } = action;
  switch (type) {
    case authActionTypes.SIGN_IN:
      return { ...state, loggedIn: payload };
    case authActionTypes.SIGN_OUT:
      return { ...state, loggedIn: payload };
    default:
      return state;
  }
};
