import { FreepikCredit } from "components/atoms";
import { AuthForm } from "components/molecules";
import { Wrapper } from "./styles";

function Authentication() {
  return (
    <Wrapper>
      <AuthForm />
      <FreepikCredit />
    </Wrapper>
  );
}

export default Authentication;
