import { BottomNavbar, Navbar } from "components/molecules";
import { useViewport } from "contexts/viewport";
import NotFound from "pages/NotFound";
import { Route, Switch } from "react-router-dom";
import { routes } from "./routes";

function Main() {
  const { width } = useViewport();
  return (
    <div>
      <Navbar loggedIn={false} />
      <div>
        <Switch>
          {routes.map((route, i) => {
            return (
              <Route
                path={route.path}
                exact={route.exact}
                component={route.component}
                key={i}
              />
            );
          })}
          <Route component={NotFound} />
        </Switch>
      </div>
      {width <= 768 && <BottomNavbar />}
    </div>
  );
}

export default Main;
