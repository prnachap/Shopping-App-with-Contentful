import "./App.scss";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { Layout } from "./components";
import { Login, Shop } from "./pages";

function App() {
  return (
    <BrowserRouter>
      <Layout />
      <Switch>
        <Route path="/" exact component={Shop} />
        <Route path="/login" exact component={Login} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
