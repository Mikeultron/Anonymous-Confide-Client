import styled from "styled-components";
import { fontSize } from "utils/styles";

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
