import { Spinner } from "components/atoms";
import { Wrapper } from "./styles";
import { ISpinnerProps } from "../../atoms/Spinner";

interface IProps extends ISpinnerProps {}

function Loading({ type, size, ...rest }: IProps) {
  return (
    <Wrapper>
      <Spinner type={type} size={size} {...rest} />
    </Wrapper>
  );
}

export default Loading;
