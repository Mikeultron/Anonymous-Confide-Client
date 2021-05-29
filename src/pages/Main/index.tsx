import { Navbar } from "components/molecules";
import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./Home";

function Main() {
  return (
    <div>
      <Navbar loggedIn={true} />
      <Router>
        <Switch>
          <Route path="/home" exact={true} component={Home} />
        </Switch>
      </Router>
    </div>
  );
}

export default Main;
