import { IcClose } from "assets";
import { Button, Headline, Input, TextArea } from "components/atoms";
import { FlexColumnWrapper } from "components/containers";
import { buttonThemes, colors, fontSize } from "utils";
// Components
import InfoBox from "../InfoBox";
import {
  CloseContainer,
  ModalBody,
  ModalContainer,
  ModalHeading,
  Wrapper,
} from "./styles";

const info =
  "Tell us what have you been thinking lately? Or ask for some advice for your problem. If you don’t feel like sharing your profile to others, you can turn on the Anonymous mode in your profile settings.";

function Modal() {
  return (
    <Wrapper>
      <ModalContainer style={{ gap: ".5rem" }}>
        <FlexColumnWrapper style={{ gap: "1rem" }}>
          <ModalHeading>
            <Headline
              style={{
                color: colors.black[40],
                fontSize: fontSize.L,
              }}
            >
              Confide
            </Headline>
            <CloseContainer>
              <IcClose width=".5rem" fill={colors.black[40]} />
            </CloseContainer>
          </ModalHeading>
          <InfoBox>{info}</InfoBox>
        </FlexColumnWrapper>
        <ModalBody style={{ gap: ".5rem" }}>
          <FlexColumnWrapper style={{ gap: ".5rem" }}>
            <Input
              placeholder="Your question title"
              inputStyle="bottom-outlined"
            />
            <TextArea placeholder="Your question body" />
          </FlexColumnWrapper>
          <FlexColumnWrapper>
            <Button>Submit</Button>
            <Button buttonStyle="ghost" theme={buttonThemes.danger}>
              Submit
            </Button>
          </FlexColumnWrapper>
        </ModalBody>
      </ModalContainer>
    </Wrapper>
  );
}

export default Modal;
