import "./App.css";
import { Route, Switch } from "wouter";
import Nav from "./components/Nav";
import Landing from "./pages/Landing";
import Footer from "./components/Footer";
import Culture from "./pages/Culture";
import ContactForm from "./pages/Contact";
import ObserverProvider from "./components/ObserverProvieder";
import Products from "./pages/Products";

export default function App() {
  return (
    <ObserverProvider>
      <Nav />
      <Switch>
        <Route path="/" component={Landing} />
        <Route path="/culture" component={Culture} />
        <Route path="/contact" component={ContactForm} />
        <Route path="/products" component={Products} />

        <Route path="/users/:name">
          {(params) => <>Hello, {params.name}!</>}
        </Route>

        {/* Default route in a switch */}
        <Route>
          <div className="flex items-center justify-center py-6 bg-gray-200">
            404: No such page!
          </div>
        </Route>
      </Switch>
      <Footer />
    </ObserverProvider>
  );
}
