import { AuthBackground } from "assets/images";
import styled from "styled-components";

export const Wrapper = styled.div`
  height: 100vh;
  background: url(${AuthBackground}) center/cover no-repeat;
  position: relative;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const FreepikCredit = styled.a`
  font-size: 0.5rem;
  color: white;
  text-align: center;
  padding: 0.5rem 0;
`;
