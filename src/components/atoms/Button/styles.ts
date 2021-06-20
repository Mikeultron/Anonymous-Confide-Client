import styled from "styled-components";
import { breakPoints, buttonThemes, colors, fontFamily, fontSize } from "utils";

export const PrimaryButton = styled.button`
  background-color: ${(props) => props.theme.background ?? colors.primary[100]};
  color: ${(props) => props.theme.foreground ?? "white"};
  border-radius: 999px;
  font-size: ${fontSize.S};
  font-family: ${fontFamily.poppins.regular};
  outline: none;
  border: none;
  cursor: pointer;
  padding: 10px 20px;
  @media screen and (max-width: ${breakPoints.tablet}px) {
    padding: 5px 10px;
  }
`;

export const SecondaryButton = styled(PrimaryButton)`
  border: 1px solid ${colors.primary[100]};
  color: ${colors.primary[100]};
  background-color: transparent;
`;

PrimaryButton.defaultProps = {
  theme: buttonThemes.primary,
};
