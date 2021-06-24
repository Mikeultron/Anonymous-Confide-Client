import { Input } from "components/atoms";
import { InputHTMLAttributes } from "react";
import { InputType } from "utils";
import { Wrapper, InputLabel } from "./styles";

interface IProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  inputStyle?: InputType;
  isPassword?: boolean;
}

function InputWithLabel({
  name,
  label,
  isPassword,
  inputStyle,
  ...rest
}: IProps) {
  return (
    <Wrapper>
      <InputLabel htmlFor={name}>{label}</InputLabel>
      <Input name={name} inputStyle={inputStyle} {...rest} />
    </Wrapper>
  );
}

export default InputWithLabel;
