import styled, { keyframes } from "styled-components";
import { colors } from "utils";

const ripple = keyframes`
  0% {
    top: 36px;
    left: 36px;
    width: 0;
    height: 0;
    opacity: 1;
  }
  100% {
    top: 0px;
    left: 0px;
    width: 72px;
    height: 72px;
    opacity: 0;
  }
`;

export const Wrapper = styled.div`
  display: inline-block;
  position: relative;
  width: 80px;
  height: 80px;
  & div:nth-child(2) {
    animation-delay: -0.5s;
  }
`;

export const Circle = styled.div`
  position: absolute;
  border: 4px solid ${colors.mainColor};
  opacity: 1;
  border-radius: 50%;
  animation: ${ripple} 1s cubic-bezier(0, 0.2, 0.8, 1) infinite;
`;
