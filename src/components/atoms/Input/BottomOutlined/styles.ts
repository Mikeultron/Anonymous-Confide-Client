import styled from "styled-components";
import { colors } from "utils";
import Input from "..";

export const StyledInput = styled(Input)`
  border: none;
  border-bottom: 1px solid ${colors.black[40]};
  color: ${colors.black[80]};
  border-radius: 0;
`;
