import { Paragraph } from "components/atoms";
import { FlexRowWrapper } from "components/containers";
import styled from "styled-components";
import { colors } from "utils";

export const Wrapper = styled(FlexRowWrapper)`
  background-color: ${colors.primary[20]};
  padding: 0.3rem;
  border-radius: 0.3rem;
`;

export const Text = styled(Paragraph)`
  color: ${colors.primary[100]};
`;
