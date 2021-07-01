import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./styles/App.css";
import Login from "./pages/Login.js";
import Navbar from "./components/Navbar";
import Dashboard from "./pages/Home";
import Resources from "./pages/Resources";
import MyCryptos from "./pages/Coin";
import Signup from "./pages/Signup";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            <Navbar />
            <Login />
          </Route>
          <Route exact path="/Dashboard">
            <Navbar />
            <Dashboard />
          </Route>
          <Route exact path="/MyCryptos">
            <Navbar />
            <MyCryptos />
          </Route>
          <Route exact path="/TradeCrypto">
            <Navbar />
            <Resources />
          </Route>
          <Route exact path="/Signup">
            <Navbar />
            <Signup />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
