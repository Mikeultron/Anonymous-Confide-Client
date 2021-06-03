import { IcHome, IcNotification, IcTag } from "assets";
import { Button } from "components/atoms";
import { Searchbar } from "components/molecules";
import { useViewport } from "contexts/viewport";

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
  const { width } = useViewport();
  return (
    <Wrapper>
      <Left>
        <Logo>Confide</Logo>
        {width > 768 && (
          <IconContainer>
            <IcHome width={".5rem"} />
            <IcNotification width={".5rem"} />
            <IcTag width={".5rem"} />
          </IconContainer>
        )}
      </Left>
      <Right>
        {width > 768 && <Searchbar />}
        <UserImage src={`https://i.pravatar.cc/${pravatarSize}`} />
        <Button>Confide</Button>
      </Right>
    </Wrapper>
  );
}

export default LoggedInNavbar;
