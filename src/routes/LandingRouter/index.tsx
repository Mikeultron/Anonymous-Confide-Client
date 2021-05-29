import { Login, Register, Landing, Main } from "pages";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function LandingRouter() {
  return (
    <Router>
      <Switch>
        <Route path="/home" exact={true} component={Main} />
        <Route path="/register" exact={true} component={Register} />
        <Route path="/login" exact={true} component={Login} />
        <Route path="/" exact={true} component={Landing} />
      </Switch>
    </Router>
  );
}

export default LandingRouter;
