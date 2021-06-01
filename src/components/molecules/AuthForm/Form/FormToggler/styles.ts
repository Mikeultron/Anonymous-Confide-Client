import styled from "styled-components";
import { colors, fontFamily, fontSize } from "utils/styles";

export const Title = styled.p`
  font-family: ${fontFamily.openSans.regular};
  font-size: ${fontSize.S};
  color: ${colors.subtleMid};
  text-decoration: underline;
  cursor: pointer;
`;
