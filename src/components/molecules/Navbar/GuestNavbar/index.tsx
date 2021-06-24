import { useViewport } from "contexts/viewport";
import { useHistory } from "react-router";
import { breakPoints } from "utils";

// Components
import { IcHome, IcNotification, IcTag } from "assets";
import { Button } from "components/atoms";
import { Searchbar } from "components/molecules";
import { Logo, Wrapper, Left, Right, IconContainer } from "../styles";

function GuestNavbar() {
  const { width } = useViewport();
  const history = useHistory();
  return (
    <Wrapper>
      <Left>
        <Logo>Confide</Logo>
        {width > breakPoints.tablet && (
          <IconContainer>
            <IcHome width={".5rem"} />
            <IcNotification width={".5rem"} />
            <IcTag width={".5rem"} />
          </IconContainer>
        )}
      </Left>
      <Right>
        {width > breakPoints.tablet && <Searchbar />}
        <Button onClick={() => history.push("/auth")} buttonStyle="secondary">
          Login
        </Button>
        <Button onClick={() => history.push("/auth")}>Register</Button>
      </Right>
    </Wrapper>
  );
}

export default GuestNavbar;
