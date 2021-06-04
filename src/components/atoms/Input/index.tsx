import { InputHTMLAttributes } from "react";
import PasswordInput from "./PasswordInput";
import { StyledInput } from "./styles";

interface IProps extends InputHTMLAttributes<HTMLInputElement> {
  isPassword?: boolean;
}

function Input(props: IProps) {
  const { isPassword, ...rest } = props;
  return isPassword ? <PasswordInput {...rest} /> : <StyledInput {...rest} />;
}

export default Input;
