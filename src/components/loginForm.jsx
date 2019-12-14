import React, { Component } from "react";
import Logo from "./Logo.svg";

console.log(Logo);

class LoginForm extends Component {
  render() {
    return (
      <div className="container">
        <div>
          <a className="navbar-brand mx-auto" href="#">
            <img
              src={Logo}
              alt="iDC Logo"
              width="100px"
              height="100px"
              className="img-fluid"
            />
          </a>
        </div>

        <div className="row">
          <div className="col-sm-4"></div>
          <div className="col-sm-4">
            <h1 className="h3 mb-3 font-weight-normal">Please sign in</h1>
            <form className="form-signin">
              <div className="form-group">
                <label htmlFor="username">Username</label>
                <input
                  type="text"
                  id="username"
                  className="form-control"
                  placeholder="Username"
                />
              </div>
              <div className="form-group">
                <label htmlFor="password">Password</label>
                <input
                  type="password"
                  id="password"
                  className="form-control"
                  placeholder="Password"
                />
              </div>
              <div class="checkbox mb-3">
                <label>
                  <input type="checkbox" value="remember-me" /> Remember me
                </label>
              </div>
              <button className="btn btn-primary">Login</button>
            </form>
          </div>
          <div className="col-sm-4"></div>
        </div>
      </div>
    );
  }
}

export default LoginForm;
