import { Headline, Paragraph } from "components/atoms";
import { FlexColumnWrapper } from "components/containers";
import { fontSize } from "utils";

function DiscussionBody() {
  return (
    <FlexColumnWrapper style={{ gap: ".3rem" }}>
      <Headline style={{ fontSize: fontSize.M }}>
        Bagaimana cara melupakan mantan?
      </Headline>
      <Paragraph>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Amet
        laboriosam esse et nam a necessitatibus magni corporis, quod voluptatum.
        Quod illo perspiciatis ipsum dolore fugiat, minima architecto
        consequuntur quis repellat.
      </Paragraph>
    </FlexColumnWrapper>
  );
}

export default DiscussionBody;
