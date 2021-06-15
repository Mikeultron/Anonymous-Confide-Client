import { FormEvent, useCallback, useState } from "react";

import { getProfile, login, register } from "services";
import {
  ValidationError,
  notify,
  IFormDataState,
  FormStateType,
  encryptAndStoreData,
} from "utils";
import { useDispatch } from "react-redux";

// Components
import Actions from "./Actions";
import Inputs from "./Inputs";
import { Loading } from "components/molecules";
import { StyledForm, FormBody, FormTitle } from "./styles";
import { setAuthState } from "reduxConfig";

function Form() {
  const [loading, setLoading] = useState<boolean>(false);
  const [formState, setFormState] = useState<FormStateType>("login");
  const [formDataState, setFormDataState] = useState<IFormDataState>({
    username: "",
    email: "",
    password: "",
  });
  const dispatch = useDispatch();

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

  const fetchProfile = useCallback(async () => {
    setLoading(true);
    const result = await getProfile().catch((err) => err);
    if (result.success) {
      const user = result?.data?.data?.data;
      console.log("Fetch user after login", user);
      encryptAndStoreData(
        JSON.stringify(user),
        "user",
        process.env.REACT_APP_USER_DATA_PASSWORD!
      );
    } else {
      notify("Something went wrong", "error");
    }
    setLoading(false);
  }, []);

  const onLogin = async (email: string, password: string) => {
    setLoading(true);
    const result = await login({ email, password }).catch((err) => err);
    if (result.success) {
      await fetchProfile();
      dispatch(setAuthState(true));
      // history.push("/home");
      notify("Selamat datang");
    } else {
      notify("Gagal login", "error");
    }
    setLoading(false);
  };

  const onRegister = async (
    username: string,
    email: string,
    password: string
  ) => {
    setLoading(true);
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
    setLoading(false);
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
    <>
      {loading && <Loading />}
      <StyledForm onSubmit={onSubmit}>
        <FormTitle style={{ textAlign: "center" }}>
          {formState === "login" ? "Masuk" : "Daftar"}
        </FormTitle>
        <FormBody>
          <Inputs formState={formState} setFormDataState={setFormDataState} />
          <Actions formState={formState} changeFormState={changeFormState} />
        </FormBody>
      </StyledForm>
    </>
  );
}

export default Form;
