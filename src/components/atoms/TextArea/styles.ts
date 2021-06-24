import styled from "styled-components";
import { colors, fontFamily, fontSize } from "utils";

export const StyledTextArea = styled.textarea`
  border: 1px solid ${colors.black[40]};
  outline: none;
  border-radius: 5px;
  resize: none;
  font-size: ${fontSize.S};
  font-family: ${fontFamily.openSans.regular};
  padding: 0.2rem;
`;
