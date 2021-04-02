import { MatchRoute, Link } from "@rturnq/solid-router";
import { Switch } from "solid-js";
import { Home } from "./Home"

const Checkout = () => {
  return (
    <>
      Checkout
      <Link href="/">Go home</Link>
    </>
  );
};

export function App() {
  return (
    <Switch>
      <MatchRoute end path="/">
        <Home />
      </MatchRoute>
      <MatchRoute path="/checkout">
        <Checkout />
      </MatchRoute>
    </Switch>
  );
}
