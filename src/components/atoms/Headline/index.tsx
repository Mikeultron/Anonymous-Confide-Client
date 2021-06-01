import { HTMLAttributes } from "react";
import { StyledHeadline } from "./styles";

interface IProps extends HTMLAttributes<HTMLHeadingElement> {}

function Headline({ children, ...rest }: IProps) {
  return <StyledHeadline {...rest}>{children}</StyledHeadline>;
}

export default Headline;
