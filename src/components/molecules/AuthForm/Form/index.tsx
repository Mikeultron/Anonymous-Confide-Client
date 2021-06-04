import { FormEvent, useState } from "react";
import { login, register } from "services";
import { ValidationError } from "utils/errors";
import { notify } from "utils/functions";
import { IFormDataState } from "utils/interfaces";
import { FormStateType } from "utils/types";
import Actions from "./Actions";
import Inputs from "./Inputs";
import { StyledForm, FormBody, FormTitle } from "./styles";

function Form() {
  const [formState, setFormState] = useState<FormStateType>("login");
  const [formDataState, setFormDataState] = useState<IFormDataState>({
    username: "",
    email: "",
    password: "",
  });

  const changeFormState = () => {
    const nextFormState = formState === "register" ? "login" : "register";
    setFormState(nextFormState);
  };

  const validateForm = (email: string, password: string, username = "") => {
    if (formState === "register" && !username) {
      throw new ValidationError("Username tidak boleh kosong");
    }
    if (!email) {
      throw new ValidationError("Email tidak boleh kosong");
    }
    if (!password) {
      throw new ValidationError("Password tidak boleh kosong");
    }
  };

  const onLogin = async (email: string, password: string) => {
    const result = await login({ email, password }).catch((err) => err);
    if (result.success) {
      notify("Berhasil login", "success");
    } else {
      notify("Gagal login", "error");
    }
  };

  const onRegister = async (
    username: string,
    email: string,
    password: string
  ) => {
    const result = await register({
      username: username!,
      email,
      password,
    }).catch((err) => err);
    if (result.success) {
      notify("Berhasil mendaftar", "success");
    } else {
      notify("Gagal mendaftar", "error");
    }
  };

  const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const { email, password, username } = formDataState;
      validateForm(email, password, username);
      if (formState === "login") {
        onLogin(email, password);
      } else if (formState === "register") {
        onRegister(username!, email, password);
      }
    } catch (e) {
      if (e instanceof ValidationError) {
        notify(e.message, "error");
      }
    }
  };

  return (
    <StyledForm onSubmit={onSubmit}>
      <FormTitle style={{ textAlign: "center" }}>
        {formState === "login" ? "Masuk" : "Daftar"}
      </FormTitle>
      <FormBody>
        <Inputs formState={formState} setFormDataState={setFormDataState} />
        <Actions formState={formState} changeFormState={changeFormState} />
      </FormBody>
    </StyledForm>
  );
}

export default Form;
