import { InputHTMLAttributes } from "react";
import { InputType } from "utils";
import BottomOutlined from "./BottomOutlined";
import PasswordInput from "./PasswordInput";
import { StyledInput } from "./styles";

interface IProps extends InputHTMLAttributes<HTMLInputElement> {
  inputStyle?: InputType;
}

function Input({ inputStyle, ...rest }: IProps) {
  const renderInput = () => {
    switch (inputStyle) {
      case "normal":
        return <StyledInput {...rest} />;
      case "password":
        return <PasswordInput {...rest} />;
      case "bottom-outlined":
        return <BottomOutlined {...rest} />;
      default:
        return <StyledInput {...rest} />;
    }
  };
  return renderInput();
}

export default Input;
