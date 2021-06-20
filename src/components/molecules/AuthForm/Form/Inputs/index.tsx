import { Dispatch, SetStateAction } from "react";
import { IFormDataState, FormStateType } from "utils";

// Components
import { InputWithLabel } from "components/atoms";
import { ColumnContainer } from "../styles";

interface IProps {
  formState: FormStateType;
  setFormDataState: Dispatch<SetStateAction<IFormDataState>>;
}

function Inputs({ formState, setFormDataState }: IProps) {
  return (
    <ColumnContainer>
      {formState === "register" && (
        <InputWithLabel
          autoComplete="off"
          name="username"
          label="Username"
          type="text"
          onChange={(e) =>
            setFormDataState((prev) => ({
              ...prev,
              username: e.target.value,
            }))
          }
        />
      )}
      <InputWithLabel
        placeholder="example@email.com"
        autoComplete="off"
        name="email"
        label="Email"
        type="email"
        onChange={(e) =>
          setFormDataState((prev) => ({
            ...prev,
            email: e.target.value,
          }))
        }
      />
      <InputWithLabel
        name="password"
        label="Password"
        isPassword={true}
        onChange={(e) =>
          setFormDataState((prev) => ({
            ...prev,
            password: e.target.value,
          }))
        }
      />
    </ColumnContainer>
  );
}

export default Inputs;
