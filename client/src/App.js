import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./styles/App.css";
import Login from "./pages/Login.js";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            <Navbar />
            <Login />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
