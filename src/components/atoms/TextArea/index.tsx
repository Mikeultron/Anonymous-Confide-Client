import { TextareaHTMLAttributes } from "react";
import { StyledTextArea } from "./styles";

interface IProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {}

function TextArea({ ...rest }: IProps) {
  return <StyledTextArea {...rest} />;
}

export default TextArea;
