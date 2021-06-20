import { HTMLAttributes } from "react";
import { Wrapper } from "./styles";

interface IProps extends HTMLAttributes<HTMLDivElement> {}

function FlexColumnWrapper({ children, ...rest }: IProps) {
  return <Wrapper {...rest}>{children}</Wrapper>;
}

export default FlexColumnWrapper;
