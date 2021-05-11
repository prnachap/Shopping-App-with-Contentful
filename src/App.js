import "./App.scss";
import { Layout } from "./components";
import { BrowserRouter, Route, Switch } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Layout />
      <Switch>
        <Route path="/" exact component={() => <div>Hello</div>} />
        <Route path="/login" exact component={() => <div>Login</div>} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
