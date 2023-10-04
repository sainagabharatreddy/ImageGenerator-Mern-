import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import img from "./login-removebg.png"

import "./login.css"; // Import the CSS file

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    axios
      .post("http://localhost:3005/", { email, password })
      .then((res) => {
        console.log(res);

        if (res.data === "success ful") {
          setMessage("Login successful");
          navigate("/home");
        } else if (res.data === "wrong password") {
          setMessage("Wrong password");
        } else {
          alert("Invalid details");
          navigate("/signup");
        }
      })
      .catch((err) => {
        console.error(err);
      });
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="container">
        <h1 className="heading">Log in Form</h1>
        <div className="form_container">
          <div className="left">
            <img
              className="img2"
              src={img}
              alt="login"
            />
          </div>
          <div className="right">
            <h2 className="form_heading">Members Log in</h2>
            <input
              type="text"
              className="input5"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              type="password"
              className="input5"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <button type="submit" className="btn">
              Log In
            </button>
            <p className="text">or</p>
            <button className="google_btn">
              <img
                src="/images/google.png"
                alt="google icon"
                className="google_icon"
              />
              <span>Sign in with Google</span>
            </button>
            <p className="text">
              New Here? <Link to="/signup">Sign Up</Link>
            </p>
          </div>
        </div>

        <div
          style={{
            color: message === "Login successful" ? "green" : "red",
          }}
          className="message"
        >
          {message}
        </div>
      </div>
    </form>
  );
}

export default Login;
