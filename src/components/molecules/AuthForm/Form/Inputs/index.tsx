import { InputWithLabel } from "components/atoms";
import React from "react";
import { FormStateType } from "utils/types";
import { ColumnContainer } from "../styles";

interface IProps {
  formState: FormStateType;
}

function Inputs({ formState }: IProps) {
  return (
    <ColumnContainer>
      {formState === "register" && (
        <InputWithLabel
          autoComplete="off"
          name="username"
          label="Username"
          type="text"
        />
      )}
      <InputWithLabel
        autoComplete="off"
        name="email"
        label="Email"
        type="email"
      />
      <InputWithLabel name="password" label="Password" isPassword={true} />
    </ColumnContainer>
  );
}

export default Inputs;
