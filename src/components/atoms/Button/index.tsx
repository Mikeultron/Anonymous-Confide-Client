import { ButtonHTMLAttributes } from "react";
import { IButtonTheme } from "utils";
import { PrimaryButton, SecondaryButton } from "./styles";

interface IProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  secondary?: boolean;
  theme?: IButtonTheme;
}

function Button({ secondary, theme, children, ...rest }: IProps) {
  return !secondary ? (
    <PrimaryButton theme={theme} {...rest}>
      {children}
    </PrimaryButton>
  ) : (
    <SecondaryButton theme={theme} {...rest}>
      {children}
    </SecondaryButton>
  );
}

export default Button;
