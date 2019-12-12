import React from "react";
import { Link } from "react-router-dom";
//import Home from "./home";
//import App from "./../App";

const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-sm bg-light">
      <a className="navbar-brand" href="#">
        iDC Mobile
      </a>
      <ul className="navbar-nav">
        <li>
          <Link className="nav-link" to="/">
            Home
          </Link>
        </li>
        <li>
          <Link className="nav-link" to="/loginForm">
            Login
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
