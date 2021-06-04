import { useHistory } from "react-router";
import Searchbar from "../Searchbar";
import { routes } from "./routes";
import { Wrapper, Container, IconContainer } from "./styles";

function BottomNavbar() {
  const { pathname } = window.location;
  const history = useHistory();

  const onChangeRoute = (path: string) => {
    history.push(path);
  };

  return (
    <Wrapper>
      <Container
        style={{
          flexDirection: "column",
          width: "100%",
          padding: ".5rem 1rem",
          gap: ".5rem",
        }}
      >
        <Searchbar style={{ width: "100%" }} />
        <Container style={{ width: "100%" }}>
          {routes.map((route, i) => {
            return (
              <IconContainer
                key={i}
                selected={pathname === route.path}
                onClick={(e) => onChangeRoute(route.path)}
              >
                <route.icon width=".7rem" />
              </IconContainer>
            );
          })}
        </Container>
      </Container>
    </Wrapper>
  );
}

export default BottomNavbar;
