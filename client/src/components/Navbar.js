import React from "react";
import "../styles/Navbar.css";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <>
      <nav id="navbar">
        <ul>
          <li>
            <Link to="/" exact className="navItem">
              Dashboard
            </Link>
          </li>
          <li>
            <Link to="/User" exact className="navItem">
              My Cryptos
            </Link>
          </li>
          <li>
            <Link to="/Resources" exact className="navItem">
              Trade Crypto
            </Link>
          </li>
        </ul>
      </nav>
    </>
  );
}

export default Navbar;
