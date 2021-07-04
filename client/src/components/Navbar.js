import React from "react";
import "../styles/Navbar.css";
import { Link } from "react-router-dom";
import Auth from "../utils/auth";

function Navbar() {
  if (Auth.loggedIn()) {
    return (
      <>
        <nav id="navbar">
          <ul>
            <li>
              <Link to="/" className="navItem">
                Dashboard
              </Link>
            </li>
            <li>
              <Link to="/MyCryptos" className="navItem">
                My Cryptos
              </Link>
            </li>
            <li>
              <Link to="/TradeCrypto" className="navItem">
                Trade Crypto
              </Link>
            </li>
            <li>
              <a href="/" className="navItem" onClick={() => Auth.logout()}>
                Logout
              </a>
            </li>
          </ul>
          <h1 id="siteHeader">Crypto-Info</h1>
        </nav>
      </>
    );
  } else {
    return (
      <>
        <nav id="navbar">
          <ul>
            <li>
              <Link to="/" className="navItem">
                Dashboard
              </Link>
            </li>
            <li>
              <Link to="/MyCryptos" className="navItem">
                My Cryptos
              </Link>
            </li>
            <li>
              <Link to="/TradeCrypto" className="navItem">
                Trade Crypto
              </Link>
            </li>
            <li>
              <Link to="/Login" exact className="navItem">
                Login
              </Link>
            </li>
          </ul>
          <h1 id="siteHeader">Crypto-Info</h1>
        </nav>
      </>
    );
  }
}

export default Navbar;
