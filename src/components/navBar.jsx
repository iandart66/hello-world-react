import React from "react";
import { Link } from "react-router-dom";
//import Home from "./home";
//import App from "./../App";

const NavBar = () => {
  return (
    <ul>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/loginForm">Login</Link>
      </li>
    </ul>
  );
};

export default NavBar;
