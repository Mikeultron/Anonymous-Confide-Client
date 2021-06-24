import styled from "styled-components";
import { breakPoints, colors } from "utils";

export const Wrapper = styled.div`
  border: 1px solid ${colors.black[20]};
  border-radius: 0.2rem;
  padding: 0.5rem;
  @media (min-width: ${breakPoints.tablet}px) and (max-width: ${breakPoints.desktop -
    24}px) {
    grid-template-columns: 2fr 1fr;
    grid-area: overview;
  }
  @media (max-width: ${breakPoints.tablet}px) {
    display: none;
  } ;
`;
