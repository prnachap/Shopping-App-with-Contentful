import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";

const useRedirect = ({ path }) => {
  const { loggedIn } = useSelector((state) => state.auth);
  const history = useHistory();

  if (!loggedIn) {
    return history.push("/login");
  }
};

export default useRedirect;
