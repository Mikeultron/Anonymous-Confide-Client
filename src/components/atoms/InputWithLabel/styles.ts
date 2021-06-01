import styled from "styled-components";
import { fontFamily, fontSize } from "utils/styles";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.2rem;
  max-width: 100%;
`;

export const InputLabel = styled.label`
  font-size: ${fontSize.S};
  font-family: ${fontFamily.openSans.regular};
`;
