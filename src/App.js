import "./App.scss";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import { Layout } from "./components";
import { Login, Shop, Checkout, Logout, Error } from "./pages";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getShopData } from "./redux/shop/shop-action";

// import useGraph from "./hooks/useGraph";

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getShopData());
  }, [dispatch]);

  const { loggedIn } = useSelector((state) => state.auth);

  return (
    <BrowserRouter>
      <Layout />
      <Switch>
        <Route path="/" exact component={Shop} />
        <Route path="/login" exact>
          {loggedIn ? <Redirect to="/" /> : <Login />}
        </Route>
        <Route path="/checkout" exact>
          {!loggedIn ? <Redirect to="/login" /> : <Checkout />}
        </Route>
        <Route path="/logout" exact>
          {!loggedIn ? <Redirect to="/login" /> : <Logout />}
        </Route>
        <Route path="*" exact component={Error} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
