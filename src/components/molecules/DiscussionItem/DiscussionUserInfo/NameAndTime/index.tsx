import { fontSize } from "utils";

// Components
import { Headline, MuteText } from "components/atoms";
import { FlexColumnWrapper } from "components/containers";

function NameAndTime() {
  return (
    <FlexColumnWrapper style={{ gap: ".2rem" }}>
      <Headline style={{ fontSize: fontSize.M }}>Mikeul</Headline>
      <MuteText>11 April 2001, 11:53</MuteText>
    </FlexColumnWrapper>
  );
}

export default NameAndTime;
