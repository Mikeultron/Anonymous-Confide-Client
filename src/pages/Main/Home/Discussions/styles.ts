import styled from "styled-components";
import { breakPoints } from "utils";

export const Wrapper = styled.div`
  @media (min-width: ${breakPoints.tablet}px) and (max-width: ${breakPoints.desktop -
    24}px) {
    grid-template-columns: 2fr 1fr;
    grid-area: discussions;
  }
`;
