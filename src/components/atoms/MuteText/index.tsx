import { HTMLAttributes } from "react";
import { StyledParagraph } from "./styles";

interface IProps extends HTMLAttributes<HTMLParagraphElement> {}

function MuteText({ children, ...rest }: IProps) {
  return <StyledParagraph {...rest}>{children}</StyledParagraph>;
}

export default MuteText;
