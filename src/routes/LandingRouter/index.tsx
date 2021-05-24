import { Login, Register } from "pages";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function LandingRouter() {
  return (
    <Router>
      <Switch>
        <Route path="/register" exact={true} component={Register} />
        <Route path="/login" exact={true} component={Login} />
      </Switch>
    </Router>
  );
}

export default LandingRouter;
