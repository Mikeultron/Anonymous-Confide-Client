import { ButtonHTMLAttributes } from "react";
import { ButtonType, IButtonTheme } from "utils";
import { PrimaryButton, SecondaryButton, GhostButton } from "./styles";

interface IProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  buttonStyle?: ButtonType;
  theme?: IButtonTheme;
}

function Button({ theme, buttonStyle, children, ...rest }: IProps) {
  const renderButton = () => {
    switch (buttonStyle) {
      case "primary":
        return (
          <PrimaryButton theme={theme} {...rest}>
            {children}
          </PrimaryButton>
        );
      case "secondary":
        return (
          <SecondaryButton theme={theme} {...rest}>
            {children}
          </SecondaryButton>
        );
      case "ghost":
        return (
          <GhostButton theme={theme} {...rest}>
            {children}
          </GhostButton>
        );
      default:
        return (
          <PrimaryButton theme={theme} {...rest}>
            {children}
          </PrimaryButton>
        );
    }
  };
  return renderButton();
}

export default Button;
