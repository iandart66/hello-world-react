import React from "react";
import { Route, Switch } from "react-router-dom";
import Home from "./components/home";
import NavBar from "./components/navBar";
import LoginForm from "./components/loginForm";
import Broadband from "./components/broadband";
import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <React.Fragment>
      <NavBar />
      <main className="container">
        <Switch>
          <Route path="/loginForm" component={LoginForm} />
          <Route path="/broadband" component={Broadband} />
          <Route path="/" component={Home} />
        </Switch>
      </main>
    </React.Fragment>
  );
}

export default App;
