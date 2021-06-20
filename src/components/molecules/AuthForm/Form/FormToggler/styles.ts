import styled from "styled-components";
import { colors, fontFamily, fontSize } from "utils";

export const Title = styled.p`
  font-family: ${fontFamily.openSans.regular};
  font-size: ${fontSize.S};
  color: ${colors.black[40]};
  text-decoration: underline;
  cursor: pointer;
`;
