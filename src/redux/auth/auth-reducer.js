/* eslint-disable import/no-anonymous-default-export */
import { authActionTypes } from "./auth-types";

const INITIAL_STATE = {
  loggedIn: null,
  type: null,
};
export default (state = INITIAL_STATE, action) => {
  const { type, payload } = action;
  switch (type) {
    case authActionTypes.SIGN_IN:
      return { ...state, loggedIn: true, type: payload };
    case authActionTypes.SIGN_OUT:
      return { ...state, loggedIn: false, type: payload };
    default:
      return state;
  }
};
