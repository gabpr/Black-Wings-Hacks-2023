import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Menu from "../components/Menu.js";

export default function Form() {
  const navigate = useNavigate();

  // States for registration
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  // States for checking the errors
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState(false);

  // Handling the username change
  const handleUsername = (e) => {
    setUsername(e.target.value);
    setSubmitted(false);
  };

  // Handling the password change
  const handlePassword = (e) => {
    setPassword(e.target.value);
    setSubmitted(false);
  };

  // Handling the user submission for log in
  const handleLogIn = (e) => {
    e.preventDefault();
    if (username === "" || password === "") {
      setError(true);
    } else {
      navigate("/home");
      setSubmitted(true);
      setError(false);
    }
  };

  // Handling the user signing up
  const handleSignUp = (e) => {
    e.preventDefault();
    if (username === "" || password === "") {
      setError(true);
    } else {
      navigate("/profile");
      setSubmitted(true);
      setError(false);
    }
  };

  // Showing error message if error is true
  const errorMessage = () => {
    return (
      <div
        className="error"
        style={{
          display: error ? "" : "none",
        }}
      >
        <h1>Please enter all the fields</h1>
      </div>
    );
  };

  function Banner() {
    return (
      <div className="Banner py-5">
        <div class="sh">.</div>
      </div>
    );
  }

  return (
    <div>
      <Menu />
      <Banner />
      <div className="form">
        <div>
          <h1 class="pt-4">
            <b>Log in</b>
          </h1>
        </div>

        {/* Calling to the methods */}
        <div className="messages">
          {errorMessage()}
          {/* {successMessage()} */}
        </div>

        <form class="mx-auto">
          {/* Labels and inputs for form data */}

          <label className="label">
            <b>username</b>
          </label>
          <input
            onChange={handleUsername}
            className="input"
            value={username}
            type="email"
          />

          <label className="label">
            <b>password</b>
          </label>
          <input
            onChange={handlePassword}
            className="input"
            value={password}
            type="password"
          />

          <button
            onClick={handleLogIn}
            className="btn px-3 py-2 mt-4"
            type="submit"
          >
            Log In
          </button>
          <a href="/profile">Sign Up!</a>
        </form>
      </div>
    </div>
  );
}
