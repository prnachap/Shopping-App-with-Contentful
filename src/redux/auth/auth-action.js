import { authActionTypes } from "./auth-types";

export const signIn = (status) => {
  return {
    type: authActionTypes.SIGN_IN,
  };
};

export const signOut = (status) => {
  return {
    type: authActionTypes.SIGN_OUT,
  };
};
