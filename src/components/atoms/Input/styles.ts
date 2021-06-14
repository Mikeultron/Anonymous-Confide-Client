import styled from "styled-components";
import { colors, fontFamily, fontSize } from "utils";

export const StyledInput = styled.input`
  outline: none;
  border: 1px solid ${colors.subtleHigh};
  padding: 10px 5px;
  font-size: ${fontSize.S};
  font-family: ${fontFamily.openSans.regular};
  border-radius: 0.1rem;
  width: 100%;
  box-sizing: border-box;
`;
