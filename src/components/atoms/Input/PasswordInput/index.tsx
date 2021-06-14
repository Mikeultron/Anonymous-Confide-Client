import { IcEye, IcEyeSlash } from "assets";
import { InputHTMLAttributes, useState } from "react";
import { colors } from "utils";
import Input from "..";
import { Wrapper, IconContainer } from "./styles";

interface IProps extends InputHTMLAttributes<HTMLInputElement> {}

function PasswordInput({ ...rest }: IProps) {
  const [isVisible, setIsVisible] = useState(false);
  return (
    <Wrapper>
      <Input type={isVisible ? "text" : "password"} {...rest} />
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
