import styled from "styled-components";
import { colors, fontFamily, fontSize } from "utils";

export const Wrapper = styled.div`
  position: relative;
`;

export const SearchInput = styled.input`
  box-sizing: border-box;
  padding: 0.4rem 0.5rem;
  border: 1px solid ${colors.subtleHigh};
  outline: none;
  font-size: ${fontSize.S};
  font-family: ${fontFamily.poppins.regular};
  border-radius: 5px;
  width: 100%;
  &:focus {
    & ~ svg,
    & ~ label {
      display: none;
    }
  }
`;

export const Placeholder = styled.label`
  font-size: ${fontSize.S};
  color: ${colors.subtleMid};
  position: absolute;
  top: 0.55rem;
  left: 1.1rem;
`;
