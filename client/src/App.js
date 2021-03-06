import { BrowserRouter, Route, Switch } from "react-router-dom";
import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";
import React, { useSate } from "react";
import "./styles/App.css";
import Login from "./pages/Login.js";
import Navbar from "./components/Navbar";
import Dashboard from "./pages/Home";
import Resources from "./pages/Resources";
import MyCryptos from "./pages/Coin";
import Signup from "./pages/Signup";

import CoinDisplay from "./components/CoinDisplay";
import User from "./pages/User";

import Welcome from "./components/Welcome";

const client = new ApolloClient({
  uri: "/graphql",
  cache: new InMemoryCache(),
});

function App() {
  return (
    <ApolloProvider client={client}>
      <div className="App">
        <BrowserRouter>
          <Navbar />
          <Switch>
            <Route exact path="/">
              <Welcome />
              <Login />
            </Route>
            <Route exact path="/Dashboard">
              <CoinDisplay />
            </Route>
            <Route exact path="/MyCryptos">
              <MyCryptos />
            </Route>
            <Route exact path="/TradeCrypto">
              <Resources />
            </Route>
            <Route exact path="/Signup">
              <Signup />
            </Route>
          </Switch>
        </BrowserRouter>
      </div>
    </ApolloProvider>
  );
}

export default App;
