import { FormEvent, useState } from "react";
import { FormStateType } from "utils/types";
import Actions from "./Actions";
import Inputs from "./Inputs";
import { StyledForm, FormBody, FormTitle } from "./styles";

function Form() {
  const [formState, setFormState] = useState<FormStateType>("login");

  const changeFormState = () => {
    const nextFormState = formState === "register" ? "login" : "register";
    setFormState(nextFormState);
  };

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  return (
    <StyledForm onSubmit={onSubmit}>
      <FormTitle style={{ textAlign: "center" }}>
        {formState === "login" ? "Masuk" : "Daftar"}
      </FormTitle>
      <FormBody>
        <Inputs formState={formState} />
        <Actions formState={formState} changeFormState={changeFormState} />
      </FormBody>
    </StyledForm>
  );
}

export default Form;
