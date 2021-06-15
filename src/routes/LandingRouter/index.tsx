import { Landing, Main, Authentication } from "pages";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useCallback, useEffect } from "react";
import { getAndDecryptData } from "utils";
import { setAuthState } from "reduxConfig";

function LandingRouter() {
  const dispatch = useDispatch();

  const initializeUser = useCallback(async () => {
    const storageToken = getAndDecryptData(
      "access_token",
      process.env.REACT_APP_TOKEN_PASSWORD!
    );
    if (storageToken) {
      dispatch(setAuthState(true));
    }
  }, [dispatch]);

  useEffect(() => {
    initializeUser();
  }, [initializeUser]);
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
