import React, { useEffect, useState } from "react";
import { Button } from "../../components";

const GoogleAuth = () => {
  const [auth, setAuth] = useState(null);
  const [authObject, setAuthObject] = useState(null);
  useEffect(() => {
    window.gapi.load("client:auth2", () => {
      window.gapi.client
        .init({
          clientId: `${process.env.REACT_APP_GOOGLE_TOKEN}`,
          scope: "email",
        })
        .then(() => {
          setAuthObject(window.gapi.auth2.getAuthInstance());
          console.log(authObject.isSignedIn);
          setAuth(window.gapi.auth2.getAuthInstance().isSignedIn.get());
          window.gapi.auth2
            .getAuthInstance()
            .isSignedIn.listen(handleAuthChange);
        });
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleAuthChange = () => {
    setAuth(authObject.isSignedIn.get());
  };

  const handleSignIn = () => {
    authObject.signIn();
    console.log(authObject);
  };

  const handleSignOut = () => {
    authObject.signOut();
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
