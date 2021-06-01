import { Headline } from "components/atoms";
import { Wrapper, HeadlineContainer, Container } from "./styles";
import SubHeadline from "components/atoms/SubHeadline";
import Form from "./Form";

function AuthForm() {
  return (
    <Wrapper>
      <Container>
        <HeadlineContainer>
          <Headline style={{ fontSize: ".8rem" }}>Confide</Headline>
          <SubHeadline style={{ textAlign: "center" }}>
            Tempat curhat dan berbagi cerita
          </SubHeadline>
        </HeadlineContainer>
        <Form />
      </Container>
    </Wrapper>
  );
}

export default AuthForm;
