import { HTMLAttributes } from "react";
import { StyledParagraph } from "./styles";

interface IProps extends HTMLAttributes<HTMLParagraphElement> {}

function Paragraph({ children, ...rest }: IProps) {
  return <StyledParagraph {...rest}>{children}</StyledParagraph>;
}

export default Paragraph;
