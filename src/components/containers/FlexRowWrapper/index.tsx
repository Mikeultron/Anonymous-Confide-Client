import { HTMLAttributes } from "react";
import { Wrapper } from "./styles";

interface IProps extends HTMLAttributes<HTMLDivElement> {}

function FlexRowWrapper({ children, ...rest }: IProps) {
  return <Wrapper {...rest}>{children}</Wrapper>;
}

export default FlexRowWrapper;
