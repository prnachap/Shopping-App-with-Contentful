import { useEffect } from "react";
// import { Button } from "../../components";

const FacebookAuth = () => {
  //   const [log, setLog] = useState(null);
  useEffect(() => {
    window.fbAsyncInit = function () {
      window.FB.init({
        appId: "456098172157456",
        cookie: true,
        xfbml: true,
        version: "v10.0",
      });

      window.FB.AppEvents.logPageView();
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
  }, []);

  window.FB.getLoginStatus(function (response) {
    statusChangeCallback(response);
  });

  const statusChangeCallback = (response) => {
    if (response.status === "connected") {
      var accessToken = response.authResponse.accessToken;
      console.log(accessToken);
      //   setLog(true);
    }
  };

  //   const checkLoginState = () => {
  //     window.FB.getLoginStatus(function (response) {
  //       statusChangeCallback(response);
  //     });
  //   };

  const handleClick = () => {
    // if (log) {
    //   window.FB.logout(function (response) {
    //     console.log("loggedOut");
    //     window.location("/");
    //   });
    // } else {
    window.FB.login();
    // }
    // console.log(log);
    // console.log(status);
  };

  return (
    <div>
      {/* {console.log(window.FB)} */}
      <button className="buttonfacebook" onClick={handleClick}>
        Login with facebook
      </button>
    </div>
  );
};

export default FacebookAuth;
