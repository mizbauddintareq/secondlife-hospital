import React, { useState } from "react";
import { useHistory, useLocation } from "react-router";

import useAuth from "../context/useAuth";

const Registration = () => {
  const location = useLocation();
  const history = useHistory();
  const redirect_uri = location.state?.from || "/";
  const { handleUserRegistration } = useAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleEmail = (e) => {
    setEmail(e.target.value);
  };
  const handlePassword = (e) => {
    setPassword(e.target.value);
  };

  const handleRegistration = () => {
    handleUserRegistration(email, password).then((result) => {
      history.push(redirect_uri);
    });
  };
  return (
    //   registration form
    <div className="form-card container-fluid row">
      <div className="col-12">
        <h2 className="title">Sign Up</h2>

        <div className="email-login">
          <label htmlFor="email">
            {" "}
            <b>Email</b>
          </label>
          <input
            onBlur={handleEmail}
            type="text"
            placeholder="Enter Email"
            name="uname"
            required
          />
          <label htmlFor="psw">
            <b>Password</b>
          </label>
          <input
            onBlur={handlePassword}
            type="password"
            placeholder="Enter Password"
            name="psw"
            required
          />
        </div>
        <button onClick={handleRegistration} className="cta-btn">
          Registration
        </button>

        <a className="forget-pass">Forgot password?</a>
      </div>
    </div>
  );
};

export default Registration;
