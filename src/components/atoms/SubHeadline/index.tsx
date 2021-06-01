import { HTMLAttributes } from "react";
import { StyledSubHeadline } from "./styles";

interface IProps extends HTMLAttributes<HTMLHeadingElement> {}

function SubHeadline({ children, ...rest }: IProps) {
  return <StyledSubHeadline {...rest}>{children}</StyledSubHeadline>;
}

export default SubHeadline;
