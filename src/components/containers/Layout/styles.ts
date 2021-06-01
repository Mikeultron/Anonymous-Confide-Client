import styled from "styled-components";
import { breakPoints } from "utils/styles";

export const Wrapper = styled.div`
  padding: 0.7rem 1.4rem;
  display: grid;
  grid-template-columns: 1fr 2fr 1fr;
  gap: 0.5rem;
  @media (min-width: ${breakPoints.tablet}px) and (max-width: ${breakPoints.desktop -
    24}px) {
    grid-template-columns: 2fr 1fr;
  }
`;
