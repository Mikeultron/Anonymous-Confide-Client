import { Landing, Main, Authentication } from "pages";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function LandingRouter() {
  return (
    <Router>
      <Switch>
        <Route path="/home" component={Main} />
        <Route path="/auth" exact={true} component={Authentication} />
        <Route path="/" exact={true} component={Landing} />
      </Switch>
    </Router>
  );
}

export default LandingRouter;
