import { FlexColumnWrapper } from "components/containers";
import DiscussionActions from "./DiscussionActions";
import DiscussionBody from "./DiscussionBody";
import DiscussionUserInfo from "./DiscussionUserInfo";

function DiscussionItem() {
  return (
    <FlexColumnWrapper style={{ gap: ".5rem" }}>
      <DiscussionUserInfo />
      <DiscussionBody />
      <DiscussionActions />
    </FlexColumnWrapper>
  );
}

export default DiscussionItem;
