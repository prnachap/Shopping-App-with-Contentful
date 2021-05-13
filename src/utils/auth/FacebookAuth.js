import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Button } from "../../components";
import { signIn, signOut } from "../../redux/auth/auth-action";

const FacebookAuth = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    window.fbAsyncInit = function () {
      window.FB.init({
        appId: `${process.env.REACT_APP_FACEBOOK_TOKEN}`,
        cookie: true,
        xfbml: true,
        version: "v10.0",
      });

      window.FB.AppEvents.logPageView();
      window.FB.getLoginStatus(function (response) {
        statusChangeCallback(response);
      });
    };
    (function (d, s, id) {
      var js,
        fjs = d.getElementsByTagName(s)[0];
      if (d.getElementById(id)) {
        return;
      }
      js = d.createElement(s);
      js.id = id;
      js.src = "https://connect.facebook.net/en_US/sdk.js";
      fjs.parentNode.insertBefore(js, fjs);
    })(document, "script", "facebook-jssdk");
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const statusChangeCallback = (response) => {
    if (response.status === "connected") {
      dispatch(signIn("facebook"));
    } else {
      dispatch(signOut("facebook"));
    }
  };

  const handleSignIn = () => {
    window.FB.login();
    window.FB.getLoginStatus(function (response) {
      statusChangeCallback(response);
    });
  };

  return (
    <Button className="facebook" handleClick={handleSignIn}>
      Sign In With Facebook
    </Button>
  );
};

export default FacebookAuth;
