import styled from "styled-components";
import { fontFamily } from "utils/styles";

export const Wrapper = styled.footer`
  padding: 0.3rem 0.5rem;
  position: fixed;
  bottom: 0;
  right: 0;
`;

export const Freepik = styled.a`
  font-size: 0.5rem;
  color: white;
  text-align: center;
  text-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
  font-family: ${fontFamily.openSans.regular};
`;
