import { IcHome, IcNotification, IcTag } from "assets";
import { Button } from "components/atoms";
import { Searchbar } from "components/molecules";
import { Logo, Wrapper, Left, Right, IconContainer } from "../styles";

function GuestNavbar() {
  return (
    <Wrapper>
      <Left>
        <Logo>Confide</Logo>
        <IconContainer>
          <IcHome width={".5rem"} />
          <IcNotification width={".5rem"} />
          <IcTag width={".5rem"} />
        </IconContainer>
      </Left>
      <Right>
        <Searchbar />
        <Button secondary={true}>Login</Button>
        <Button>Register</Button>
      </Right>
    </Wrapper>
  );
}

export default GuestNavbar;
