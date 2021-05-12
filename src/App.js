import "./App.scss";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { Layout } from "./components";
import { Login, Shop, Checkout } from "./pages";
import useGraph from "./hooks/useGraph";

function App() {
  const [data, error] = useGraph();
  return (
    <BrowserRouter>
      {console.log(data, error)}
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
