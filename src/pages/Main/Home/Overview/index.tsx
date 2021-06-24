import { Headline } from "components/atoms";
import { FlexRowWrapper } from "components/containers";
import { fontSize } from "utils";
import { Wrapper } from "./styles";

function Overview() {
  return (
    <Wrapper>
      <Headline style={{ fontSize: fontSize.L }}>Overview</Headline>
      <FlexRowWrapper></FlexRowWrapper>
    </Wrapper>
  );
}

export default Overview;
