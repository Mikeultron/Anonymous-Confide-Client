import { HTMLAttributes } from "react";
import { FormStateType } from "utils/types";
import { Title } from "./styles";

interface IProps extends HTMLAttributes<HTMLParagraphElement> {
  formState: FormStateType;
}

function FormToggler({ formState, ...rest }: IProps) {
  return <Title {...rest}>{formState === "login" ? "Daftar" : "Masuk"}</Title>;
}

export default FormToggler;
