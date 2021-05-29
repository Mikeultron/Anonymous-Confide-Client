import { InputHTMLAttributes } from "react";
import { StyledInput } from "./styles";

interface IProps extends InputHTMLAttributes<HTMLInputElement> {
  isPassword?: boolean;
}

function Input(props: IProps) {
  const { isPassword, ...rest } = props;
  return <StyledInput {...rest} />;
}

export default Input;
