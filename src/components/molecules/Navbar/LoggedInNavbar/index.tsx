import { IcHome, IcNotification, IcTag } from "assets";
import { Button } from "components/atoms";
import { Searchbar } from "components/molecules";

import {
  Logo,
  Wrapper,
  Left,
  Right,
  IconContainer,
  UserImage,
} from "../styles";
function LoggedInNavbar() {
  const pravatarSize = 50;
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
        <UserImage src={`https://i.pravatar.cc/${pravatarSize}`} />
        <Button>Confide</Button>
      </Right>
    </Wrapper>
  );
}

export default LoggedInNavbar;
