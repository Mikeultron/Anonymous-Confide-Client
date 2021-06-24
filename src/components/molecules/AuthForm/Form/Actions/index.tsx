import { Button } from "components/atoms";
import { useHistory } from "react-router";
import { FormStateType } from "utils";
import FormToggler from "../FormToggler";
import GoogleLogin from "../GoogleLogin";
import { ColumnContainer, RowContainer } from "../styles";

interface IProps {
  formState: FormStateType;
  changeFormState: () => void;
}

function Actions({ formState, changeFormState }: IProps) {
  const history = useHistory();
  return (
    <ColumnContainer style={{ alignItems: "center" }}>
      <Button style={{ width: "100%" }}>
        {formState === "login" ? "Masuk" : "Daftar"}
      </Button>
      <GoogleLogin />
      <RowContainer
        style={{
          alignItems: "center",
          justifyContent: "space-around",
          width: "100%",
        }}
      >
        <FormToggler formState={formState} onClick={changeFormState} />
        <Button
          onClick={() => history.push("/home")}
          style={{ padding: ".2rem .4rem" }}
          buttonStyle="secondary"
        >
          Lewati
        </Button>
      </RowContainer>
    </ColumnContainer>
  );
}

export default Actions;
