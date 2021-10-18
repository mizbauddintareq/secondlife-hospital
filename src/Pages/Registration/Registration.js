import React, { useState } from "react";
import { useHistory, useLocation } from "react-router";
import { getAuth, updateProfile } from "firebase/auth";
import useAuth from "../context/useAuth";
import initializeAuthentication from "../Login/firebase.init";
initializeAuthentication();
const Registration = () => {
  const location = useLocation();
  const history = useHistory();
  const redirect_uri = location.state?.from || "/";
  const { handleUserRegistration } = useAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };
  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };
  const handleNameChange = (e) => {
    setName(e.target.value);
  };
  const auth = getAuth();
  const setUserName = () => {
    updateProfile(auth.currentUser, {
      displayName: name,
    }).then((result) => {});
  };

  const handleRegistration = () => {
    handleUserRegistration(email, password).then((result) => {
      history.push(redirect_uri);
      setUserName();
    });
  };
  return (
    //   registration form
    <div className="form-card container-fluid row">
      <div className="col-12">
        <h2 className="title">Sign Up</h2>

        <div className="email-login">
          <label htmlFor="name">
            {" "}
            <b>Name</b>
          </label>
          <input
            onBlur={handleNameChange}
            type="text"
            placeholder="Enter Name"
            name="uname"
            required
          />
          <label htmlFor="email">
            {" "}
            <b>Email</b>
          </label>
          <input
            onBlur={handleEmailChange}
            type="text"
            placeholder="Enter Email"
            name="uname"
            required
          />
          <label htmlFor="psw">
            <b>Password</b>
          </label>
          <input
            onBlur={handlePasswordChange}
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
