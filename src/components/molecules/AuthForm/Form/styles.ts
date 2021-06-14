import styled from "styled-components";
import { fontFamily, fontSize } from "utils";

export const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

export const ColumnContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

export const FormTitle = styled.h1`
  font-size: ${fontSize.M};
`;

export const FormBody = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.6rem;
`;

export const RowContainer = styled.div`
  display: flex;
`;

export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.2rem;
`;

export const ErrorMessage = styled.span`
  color: red;
  font-size: ${fontSize.S};
  font-family: ${fontFamily.openSans.regular};
`;
