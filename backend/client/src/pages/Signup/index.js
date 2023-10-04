import { Link } from "react-router-dom";
import styles from "./styles.module.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import imgg from "./image-removebg-preview.png"

const Signup = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    axios
      .post("http://localhost:3005/signup", { username, email, password })
      .then((res) => {
        console.log(res);
        navigate("/");
      })
      .catch((err) => {
        console.error(err);
      });
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className={styles.container}>
        <h1 className={styles.heading}>Sign up Form</h1>
        <div className={styles.form_container}>
          <div className={styles.left}>
            <img
              className={styles.img}
              src={imgg}
             
              alt="signup"
            />
          </div>
          <div className={styles.right}>
            <h2 className={styles.form_heading}>Create Account</h2>
            <input
              type="text"
              className={styles.input}
              placeholder="Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
            <input
              type="text"
              className={styles.input}
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              type="password"
              className={styles.input}
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <button type="submit" className={styles.btn}>
              Sign Up
            </button>
            <p className={styles.text}>or</p>
            <button className={styles.google_btn} onClick="">
              <img
                src="./images/google.png"
                alt="google icon"
                className={styles.google_icon}
              />
              <span>Sign up with Google</span>
            </button>
            <p className={styles.text}>
              Already Have an Account? <Link to="/">Log In</Link>
            </p>
          </div>
        </div>
      </div>
    </form>
  );
};

export default Signup;
