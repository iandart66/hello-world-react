import React from "react";
import { Link } from "react-router-dom";
//import Home from "./home";
//import App from "./../App";
import Logo from "./Logo.svg";
import Broadband from "./broadband";

const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-sm bg-light">
      <a className="navbar-brand" href="#">
        <img
          src={Logo}
          alt="iDC-Logo"
          width="40px"
          height="40px"
          className="img-fluid"
        />
      </a>
      <ul className="navbar-nav">
        <li>
          <Link className="nav-link" to="/">
            Home
          </Link>
        </li>
        <li>
          <Link className="nav-link" to="/broadband">
            Broadband
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
