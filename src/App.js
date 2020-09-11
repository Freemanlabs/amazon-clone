import React, { useEffect } from "react";
// import logo from "./logo.svg";
import "./App.css";
import Header from "./components/Header";
import Home from "./components/Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Checkout from "./components/Checkout";
import Login from "./components/Login";
import { auth } from "./firebase";
import { useStateValue } from "./context";
import Payment from "./components/Payment";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import Orders from "./components/Orders";

const promise = loadStripe(
  "pk_test_51HPzLtAbQ83BZb8vQTQuwLEUYoPljQlvqHMFUYFEuwvwwKM41mrWkM9MM7b5jEkunkhoYmtqurkZntKEo96QarUX00nN8vrkJg"
);

function App() {
  const [{ user }, dispatch] = useStateValue();

  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      console.log("the user is >>> ", authUser);

      authUser
        ? dispatch({
            type: "SET_USER",
            user: authUser,
          })
        : dispatch({
            type: "SET_USER",
            user: null,
          });
    });
  }, []);

  return (
    <Router>
      <div className="app">
        <Switch>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/checkout">
            <Header />
            <Checkout />
          </Route>
          <Route path="/payment">
            <Header />
            <Elements stripe={promise}>
              <Payment />
            </Elements>
          </Route>
          <Route path="/orders">
            <Header />
            <Orders />
          </Route>
          <Route path="/">
            <Header />
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
