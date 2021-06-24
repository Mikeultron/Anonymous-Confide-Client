import { ReactNode } from "react";
import { Wrapper, Text } from "./styles";

interface IProps {
  children: ReactNode;
}

function InfoBox({ children }: IProps) {
  return (
    <Wrapper>
      <Text>{children}</Text>
    </Wrapper>
  );
}

export default InfoBox;
