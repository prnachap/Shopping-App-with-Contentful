import { authActionTypes } from "./auth-types";

export const signIn = (status) => {
  return {
    type: authActionTypes.SIGN_IN,
    payload: status,
  };
};

export const signOut = (status) => {
  return {
    type: authActionTypes.SIGN_OUT,
    payload: status,
  };
};
