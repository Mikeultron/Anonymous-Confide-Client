import { useViewport } from "contexts/viewport";
import { Route, Switch } from "react-router-dom";
import { routes } from "./routes";
import { useSelector } from "react-redux";

// Components
import NotFound from "pages/NotFound";
import { BottomNavbar, Navbar } from "components/molecules";
import { RootState } from "reduxConfig";

function Main() {
  const { width } = useViewport();
  const { authState } = useSelector((state: RootState) => state.userReducer);
  return (
    <>
      <Navbar loggedIn={authState} />
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
    </>
  );
}

export default Main;
