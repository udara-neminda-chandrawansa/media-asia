import "./App.css";
import { Route, Switch } from "wouter"
import Nav from "./components/Nav";
import Landing from "./pages/Landing";

export default function App() {
  return (
    <>
    <Nav/>
    <Switch>
      <Route path="/" component={Landing} />

      <Route path="/users/:name">
        {(params) => <>Hello, {params.name}!</>}
      </Route>

      {/* Default route in a switch */}
      <Route>404: No such page!</Route>
    </Switch>
    </>
  );
}
