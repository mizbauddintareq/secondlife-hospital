import React from "react";
import { Form } from "react-bootstrap";

const Registration = () => {
  return (
    //   registration form
    <div className="form-card container-fluid row">
      <Form className="col-12">
        <h2 className="title">Sign Up</h2>

        <div className="email-login">
          <label htmlFor="email">
            {" "}
            <b>Email</b>
          </label>
          <input type="text" placeholder="Enter Email" name="uname" required />
          <label htmlFor="psw">
            <b>Password</b>
          </label>
          <input
            type="password"
            placeholder="Enter Password"
            name="psw"
            required
          />
        </div>
        <button className="cta-btn">Registration</button>

        <a className="forget-pass">Forgot password?</a>
      </Form>
    </div>
  );
};

export default Registration;
