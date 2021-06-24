import { HTMLAttributes, ReactNode } from "react";
import { StyledHeadline } from "./styles";

interface IProps extends HTMLAttributes<HTMLHeadingElement> {
  children: ReactNode;
}

function Headline({ children, ...rest }: IProps) {
  return <StyledHeadline {...rest}>{children}</StyledHeadline>;
}

export default Headline;
