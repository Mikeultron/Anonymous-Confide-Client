import styled, { css } from "styled-components";
import { colors } from "utils";

interface IProps {
  selected?: boolean;
}

export const Wrapper = styled.div`
  position: fixed;
  bottom: 0;
  width: 100%;
  box-shadow: 0 5px 20px rgba(0, 0, 0, 0.15);
  background-color: white;
`;

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
`;

export const IconContainer = styled.div<Pick<IProps, "selected">>`
  cursor: pointer;
  ${(props) =>
    props.selected &&
    css`
      border-bottom: 2px solid ${colors.mainColor};
      svg {
        padding-bottom: 0.1rem;
        fill: ${colors.mainColor};
      }
    `}
`;
