import React from "react";
import "../styles/Navbar.css";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <>
      <nav id="navbar">
        <ul>
          <li>
            <Link to="/Dashboard" className="navItem">
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
            <Link to="/" exact className="navItem">
              Logout
            </Link>
          </li>
        </ul>
        <h1 id="siteHeader">Crypto-Info</h1>
      </nav>
    </>
  );
}

export default Navbar;
