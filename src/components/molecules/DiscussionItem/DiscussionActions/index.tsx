import { IcComment, IcDislike, IcLike, IcShare } from "assets";
import { FlexRowWrapper } from "components/containers";

function DiscussionActions() {
  return (
    <FlexRowWrapper style={{ gap: ".5rem" }}>
      <IcLike width={".5rem"} />
      <IcDislike width={".5rem"} />
      <IcComment width={".5rem"} />
      <IcShare width={".5rem"} />
    </FlexRowWrapper>
  );
}

export default DiscussionActions;
