import { authActionTypes } from "./auth-types";

export const signIn = () => {
  return {
    type: authActionTypes.SIGN_IN,
  };
};

export const signOut = () => {
  return {
    type: authActionTypes.SIGN_OUT,
  };
};
