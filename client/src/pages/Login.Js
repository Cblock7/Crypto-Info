import React from "react";
import "../styles/Login.css";
import { Link } from "react-router-dom";

function Login() {
  return (
    <>
      <section>
        <form>
          <div id="formContainer">
            <h1>Login</h1>

            <input type="text" placeholder=" Username" />

            <input type="text" placeholder=" Password" />

            <Link to="/Dashboard" exact className="navItem" id="login-btn">
              Login
            </Link>
          </div>
        </form>

        <Link to="/Signup" exact className="navItem" id="signup-btn">
          Sign Up
        </Link>
      </section>
    </>
  );
}

export default Login;
