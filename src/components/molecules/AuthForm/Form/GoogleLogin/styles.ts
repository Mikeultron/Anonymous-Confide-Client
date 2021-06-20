import styled from "styled-components";
import { breakPoints, colors, fontFamily, fontSize } from "utils";

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  gap: 0.3rem;
  border-radius: 999px;
  border: 1px solid ${colors.black[20]};
  padding: 10px 20px;
  cursor: pointer;
  @media screen and (max-width: ${breakPoints.tablet}px) {
    padding: 5px 10px;
  }
`;

export const Title = styled.p`
  font-family: ${fontFamily.openSans.regular};
  font-size: ${fontSize.S};
`;
