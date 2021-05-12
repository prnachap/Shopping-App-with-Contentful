/* eslint-disable import/no-anonymous-default-export */
import { authActionTypes } from "./auth-types";

const INITIAL_STATE = {
  loggedIn: null,
  error: null,
};
export default (state = INITIAL_STATE, action) => {
  const { type } = action;
  switch (type) {
    case authActionTypes.SIGN_IN:
      return { ...state, loggedIn: true, error: null };
    case authActionTypes.SIGN_OUT:
      return { ...state, loggedIn: false, error: null };
    default:
      return state;
  }
};
