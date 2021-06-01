import { IcEye, IcEyeSlash } from "assets";
import { useState } from "react";
import { colors } from "utils/styles";
import Input from "..";
import { Wrapper, IconContainer } from "./styles";

function PasswordInput() {
  const [isVisible, setIsVisible] = useState(false);
  return (
    <Wrapper>
      <Input type={isVisible ? "text" : "password"} />
      <IconContainer onClick={(e) => setIsVisible((prev) => !prev)}>
        {isVisible ? (
          <IcEye fill={colors.subtleMid} width={".5rem"} />
        ) : (
          <IcEyeSlash width={".5rem"} fill={colors.subtleMid} />
        )}
      </IconContainer>
    </Wrapper>
  );
}

export default PasswordInput;
