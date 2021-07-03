import React from "react";
import "../styles/Login.css";
import { Link } from "react-router-dom";

function Login() {

  // set up controlled inputs for login form
  // setup state 
  // validate true or false
  // import mutation LOGIN - execute useMutation and passing into hook actual query
  // useMutation hook from Apollo/Client
  // write function to hanlde form submission
  // function for handleChange
  // clear values
  // import auth from utils/auth.js - call auth.login method




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
