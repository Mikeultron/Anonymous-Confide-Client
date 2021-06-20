import { IcHome, IcNotification, IcTag } from "assets";
import { Button } from "components/atoms";
import { Searchbar } from "components/molecules";
import { useViewport } from "contexts/viewport";
import { useEffect, useState } from "react";
import { getAndDecryptData, IUser } from "utils";

import {
  Logo,
  Wrapper,
  Left,
  Right,
  IconContainer,
  UserImage,
} from "../styles";
function LoggedInNavbar() {
  const [user, setUser] = useState<IUser>();
  const { width } = useViewport();

  useEffect(() => {
    const data = getAndDecryptData(
      "user",
      process.env.REACT_APP_USER_DATA_PASSWORD!
    );
    if (data) {
      console.log("User parsed", JSON.parse(data));
      setUser(JSON.parse(data));
    }
  }, []);

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
        <UserImage
          size="XL"
          src={user?.image ?? "/Smiley.png"}
          onClick={() => (window.location.href = "/home/profile")}
        />
        <Button>Confide</Button>
      </Right>
    </Wrapper>
  );
}

export default LoggedInNavbar;
