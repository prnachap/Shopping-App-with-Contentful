import React, { useEffect, useState } from "react";
import { Button } from "../../components";
import { useDispatch, useSelector } from "react-redux";
import { signIn, signOut } from "../../redux/auth/auth-action";

const GoogleAuth = () => {
  const [auth, setAuth] = useState(null);
  const dispatch = useDispatch();
  const state = useSelector((state) => state.auth);
  // console.log(state);

  useEffect(() => {
    window.gapi.load("client:auth2", () => {
      window.gapi.client
        .init({
          clientId: `${process.env.REACT_APP_GOOGLE_TOKEN}`,
          scope: "email",
        })
        .then(() => {
          setAuth(window.gapi.auth2.getAuthInstance().isSignedIn.get());
          window.gapi.auth2
            .getAuthInstance()
            .isSignedIn.listen(handleAuthChange);
        });
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleAuthChange = () => {
    setAuth(window.gapi.auth2.getAuthInstance().isSignedIn.get());
  };

  const handleSignIn = () => {
    signIn(window.gapi.auth2.getAuthInstance().signIn());
    // dispatch(signIn(true));
  };

  const handleSignOut = () => {
    signOut(window.gapi.auth2.getAuthInstance().signOut());
    // dispatch(signOut(false));
  };

  return (
    <div>
      {auth ? (
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
