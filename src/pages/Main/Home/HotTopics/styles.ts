import styled from "styled-components";
import { breakPoints } from "utils";

export const Wrapper = styled.div`
  border: 1px solid black;
  @media (min-width: ${breakPoints.tablet}px) and (max-width: ${breakPoints.desktop -
    24}px) {
    grid-template-columns: 2fr 1fr;
    grid-area: hottopics;
  }
  @media (max-width: ${breakPoints.tablet}px) {
    display: none;
  } ;
`;
