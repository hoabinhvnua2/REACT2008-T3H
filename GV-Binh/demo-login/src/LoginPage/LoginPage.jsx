import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useActions } from "../actions/user.actions";

export function LoginPage() {
  const [user, setUser] = useState({
    userName: "",
    password: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const dispatch = useDispatch();
  const loggingIn = useSelector((state) => state.loginReduce.loggingIn);
  const location = useLocation();

  function handleSubmit(e) {
    e.preventDefault();

    setSubmitted(true);
    if (user.userName && user.password) {
      const { from } = location.state || { from: { pathname: "/" } };
      dispatch(useActions.login(user, from));
    }
  }

  function handleChange(e) {
    const { name, value } = e.target;
    setUser((user) => ({ ...user, [name]: value }));
  }

  return (
    <div className="col-lg-8 offset-lg-2">
      <h2>Login</h2>
      <form name="form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Username</label>
          <input
            type="text"
            name="userName"
            value={user.userName}
            onChange={handleChange}
            className={
              "form-control" +
              (submitted && !user.userName ? " is-invalid" : "")
            }
          />
          {submitted && !user.userName && (
            <div className="invalid-feedback">Username is required</div>
          )}
        </div>
        <div className="form-group">
          <label>Password</label>
          <input
            type="password"
            name="password"
            value={user.password}
            onChange={handleChange}
            className={
              "form-control" +
              (submitted && !user.password ? " is-invalid" : "")
            }
          />
          {submitted && !user.password && (
            <div className="invalid-feedback">Password is required</div>
          )}
        </div>
        <div className="form-group">
          <button className="btn btn-primary">
            {loggingIn && (
              <span className="spinner-border spinner-border-sm mr-1"></span>
            )}
            Login
          </button>
          <Link to="/register" className="btn btn-link">
            Register
          </Link>
        </div>
      </form>
    </div>
  );
}
