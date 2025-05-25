import React from "react";
import "./login.css";

function Login() {
  return (
    <div className="login-container">
      <h2>Login</h2>
      <input type="email" placeholder="Email" />
      <input type="password" placeholder="Password" />
      <a href="#">Forgot Password?</a>
      <button>Login</button>
      <hr />
      <h3>Register</h3>
      <input type="email" placeholder="Email" />
      <input type="password" placeholder="Create Password" />
      <input type="password" placeholder="Confirm Password" />
      <button>Submit</button>
    </div>
  );
}

export default Login;
