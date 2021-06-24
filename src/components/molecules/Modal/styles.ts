import { FlexColumnWrapper, FlexRowWrapper } from "components/containers";
import styled from "styled-components";

export const Wrapper = styled(FlexRowWrapper)`
  position: fixed;
  inset: 0;
  background-color: rgba(0, 0, 0, 0.8);
  justify-content: center;
  align-items: center;
  z-index: 99999;
  padding: 0.3rem;
`;

export const ModalContainer = styled(FlexColumnWrapper)`
  width: 20rem;
  background-color: white;
  padding: 0.7rem;
  border-radius: 0.5rem;
  position: relative;
`;

export const ModalHeading = styled(FlexRowWrapper)`
  justify-content: center;
  align-items: center;
`;

export const CloseContainer = styled.div`
  position: absolute;
  right: 0.7rem;
  top: 0.3rem;
`;

export const ModalBody = styled(FlexColumnWrapper)``;
