import { FreepikCredit } from "components/atoms";
import { AuthForm, Loading } from "components/molecules";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { RootState } from "reduxConfig";
import { Wrapper } from "./styles";

function Authentication() {
  const { authState } = useSelector((state: RootState) => state.userReducer);
  useEffect(() => {
    if (authState) {
      window.location.replace("/home");
    }
  }, [authState]);
  return authState ? (
    <Loading />
  ) : (
    <Wrapper>
      <AuthForm />
      <FreepikCredit />
    </Wrapper>
  );
}

export default Authentication;
