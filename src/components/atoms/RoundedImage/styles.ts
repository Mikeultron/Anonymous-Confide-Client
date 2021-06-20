import styled from "styled-components";

interface IProps {
  width: string | number;
  height: string | number;
}

export const Image = styled.img<Pick<IProps, "width" | "height">>`
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  border-radius: 50%;
`;
