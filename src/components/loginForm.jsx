import React, { Component } from "react";

class LoginForm extends Component {
  render() {
    return (
      <div className="text-center">
        <h1 className="h3 mb-3 font-weight-normal">Please sign in</h1>
        <form className="form-signin">
          <div className="form-group">
            <label htmlFor="username" class="sr-only">
              Username
            </label>
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
              type="text"
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
    );
  }
}

export default LoginForm;
