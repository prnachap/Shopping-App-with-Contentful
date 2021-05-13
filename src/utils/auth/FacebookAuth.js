// import { Button } from "../../components";

const FacebookAuth = () => {
  return (
    <div>
      <button
        className="buttonfacebook"
        onClick={() => {
          window.FB.logout();
        }}
      >
        Login with facebook
      </button>
    </div>
  );
};

export default FacebookAuth;
