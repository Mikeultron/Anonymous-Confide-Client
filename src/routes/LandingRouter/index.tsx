import { Landing, Main, Authentication } from "pages";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useCallback, useEffect } from "react";
import {
  fetchNewToken,
  getAndDecryptData,
  getCurrentTimestamp,
  parseJwt,
} from "utils";
import { setAuthState } from "reduxConfig";

function LandingRouter() {
  const dispatch = useDispatch();

  const initializeUser = useCallback(async () => {
    const storageToken = getAndDecryptData(
      "access_token",
      process.env.REACT_APP_TOKEN_PASSWORD!
    ) as string;
    const parsedToken = parseJwt(storageToken);
    if (parsedToken) {
      const tokenExpired = parsedToken?.exp;
      const currentTimestamp = getCurrentTimestamp();
      console.log(tokenExpired);
      console.log(currentTimestamp);
      // Check if token is expired
      if (tokenExpired <= currentTimestamp) {
        await fetchNewToken()
          .then(() => dispatch(setAuthState(true)))
          .catch(() => dispatch(setAuthState(false)));
      } else {
        dispatch(setAuthState(true));
      }
    } else {
      dispatch(setAuthState(false));
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
