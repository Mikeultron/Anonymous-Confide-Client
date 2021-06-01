import { Navbar } from "components/molecules";
import NotFound from "pages/NotFound";
import { Route, Switch } from "react-router-dom";
import { routes } from "./routes";

function Main() {
  return (
    <div>
      <Navbar loggedIn={true} />
      <div>
        <Switch>
          {routes.map((route) => {
            return (
              <Route
                path={route.path}
                exact={route.exact}
                component={route.component}
              />
            );
          })}
          <Route component={NotFound} />
        </Switch>
      </div>
    </div>
  );
}

export default Main;
