import React from "react";
import "../styles/Login.css";

function Login() {
  return (
    <>
      <section>
        <form>
          <div id="formContainer">
            <h1>Login</h1>

            <input type="text" placeholder=" Username" />

            <input type="text" placeholder=" Password" />
            <button id="login-btn">Login</button>
          </div>
        </form>

        <button id="signup-btn">Sign Up</button>
      </section>
    </>
  );
}

export default Login;
