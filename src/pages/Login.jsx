import React from "react";
import { Link } from "react-router-dom";
import "../index.css";
import { useState, useEffect } from "react";

function Login() {
  const [formdata, setFormData] = useState({
    email: "",
    password: "",
  });

  const { email, password } = formdata;

  const onChange = (e) => {
    setFormData((prevState) => ({
      [e.target.name]: e.target.value,
    }));
  };

  const onSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <>
      <div class="wrapper">
        <div class="form_container">
          <form name="form" onSubmit={onSubmit}>
            <div class="heading">
              <h2>Welcome Back</h2>
            </div>

            <div class="form_wrap">
              <div class="form_item">
                <input
                  type="email"
                  placeholder="Email Address"
                  name="email"
                  value={email}
                  id="email"
                  required
                  onChange={onChange}
                />
              </div>
            </div>
            <div className="forpass">
              <Link to="/">
                <p>Forgot Passwoord</p>
              </Link>
            </div>
            <div class="form_wrap">
              <div class="form_item">
                <input
                  type="password"
                  placeholder="Password"
                  name="password"
                  value={password}
                  id="password"
                  required
                  onChange={onChange}
                />
              </div>
            </div>

            <div class="btn">
              <input type="submit" value="Login" />
            </div>
            <div>
              <p>
                Not have a Account
                <Link to="/register"> Register here</Link>
              </p>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default Login;
