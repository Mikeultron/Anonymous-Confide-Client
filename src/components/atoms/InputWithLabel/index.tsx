import { Input } from "components/atoms";
import { InputHTMLAttributes } from "react";
import { Wrapper, InputLabel } from "./styles";

interface IProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  isPassword?: boolean;
}

function InputWithLabel({ name, label, isPassword, ...rest }: IProps) {
  return (
    <Wrapper>
      <InputLabel htmlFor={name}>{label}</InputLabel>
      <Input name={name} {...rest} isPassword={isPassword} />
    </Wrapper>
  );
}

export default InputWithLabel;
