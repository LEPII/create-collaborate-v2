import React from "react";
import useForm from "./useForm"

const Signup = () => {
    const { handleChange, values, handleSubmit } = useForm();

  return (
    <div className="-form-content-right">
      <form action="" className="form" onSubmit={handleSubmit}>
        <h1> Start connecting with other creatives today! </h1>
        <div className="form-inputs">
          <label htmlFor="username" className="form-label">
            Username
          </label>
          <input
            id="input"
            type="text"
            name="username"
            className="form-input"
            placeholder="Enter your username"
            value={values.username}
            onChange={handleChange}
          />
        </div>
        <div className="form-inputs">
          <label htmlFor="email" className="form-label">
            Email
          </label>
          <input
            id="email"
            type="email"
            name="email"
            className="form-input"
            placeholder="Enter your email"
            value={values.email}
            onChange={handleChange}
          />
        </div>
        <div className="form-inputs">
          <label htmlFor="password" className="form-label">
            Password
          </label>
          <input
            id="password"
            type="password"
            name="password"
            className="form-input"
            placeholder="Enter your password"
            value={values.password}
            onChange={handleChange}
          />
        </div>
        <div className="form-inputs">
          <label htmlFor="password_confirm" className="form-label">
            Confirm Password
          </label>
          <input
            id="password_confirm"
            type="password"
            name="password_confirm"
            className="form-input"
            placeholder="Confirm Password"
            value={values.password_confirm}
            onChange={handleChange}
          />
        </div>
        <button className="form-btn" type="submit ">
          Sign Up
        </button>
        <span className="form-input-login">
          Already have an account? Click <a href="#">here</a> to login.
        </span>
      </form>
    </div>
  );
};

export default Signup;
