import "./App.scss";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { Layout } from "./components";
import { Login, Shop, Checkout } from "./pages";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { getShopData } from "./redux/shop/shop-action";
// import useGraph from "./hooks/useGraph";

function App() {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.shop);
  useEffect(() => {
    dispatch(getShopData());
  }, []);

  return (
    <BrowserRouter>
      <Layout />
      <Switch>
        <Route path="/" exact component={Shop} />
        <Route path="/login" exact component={Login} />
        <Route path="/checkout" exact component={Checkout} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
