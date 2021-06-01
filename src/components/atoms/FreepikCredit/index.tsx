import { CSSProperties } from "react";
import { Wrapper, Freepik } from "./styles";

interface IProps {
  style?: CSSProperties;
}

function FreepikCredit({ style }: IProps) {
  return (
    <Wrapper style={style}>
      <Freepik
        href="https://www.freepik.com/vectors/background"
        target="_blank"
        rel="noopener"
      >
        Designed by Freepik
      </Freepik>
    </Wrapper>
  );
}

export default FreepikCredit;
