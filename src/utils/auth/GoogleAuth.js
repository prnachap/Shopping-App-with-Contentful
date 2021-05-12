import React, { useEffect } from "react";
import { Button } from "../../components";
import { useDispatch, useSelector } from "react-redux";
import { signIn, signOut } from "../../redux/auth/auth-action";
import { clearCart } from "../../redux/cart/cart-action";

const GoogleAuth = () => {
  const dispatch = useDispatch();
  const { loggedIn } = useSelector((state) => state.auth);

  useEffect(() => {
    window.gapi.load("client:auth2", () => {
      window.gapi.client
        .init({
          clientId: `${process.env.REACT_APP_GOOGLE_TOKEN}`,
          scope: "email",
        })
        .then(() => {
          handleAuthChange(
            window.gapi.auth2.getAuthInstance().isSignedIn.get()
          );
          window.gapi.auth2
            .getAuthInstance()
            .isSignedIn.listen(handleAuthChange);
        });
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleAuthChange = (isSignedIn) => {
    if (isSignedIn) {
      dispatch(signIn(isSignedIn));
    } else {
      dispatch(signOut(isSignedIn));
    }
  };

  const handleSignIn = () => {
    signIn(window.gapi.auth2.getAuthInstance().signIn());
    dispatch(clearCart());
  };

  const handleSignOut = () => {
    signOut(window.gapi.auth2.getAuthInstance().signOut());
  };

  return (
    <div>
      {loggedIn ? (
        <Button className="google" handleClick={handleSignOut}>
          Sign Out With Google
        </Button>
      ) : (
        <Button className="google" handleClick={handleSignIn}>
          Sign In With Google
        </Button>
      )}
    </div>
  );
};

export default GoogleAuth;
