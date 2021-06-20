import styled from "styled-components";
import { colors, fontFamily, fontSize } from "utils";

export const StyledParagraph = styled.p`
  font-family: ${fontFamily.openSans.regular};
  color: ${colors.black[100]};
  font-size: ${fontSize.S};
  line-height: 160%;
`;
