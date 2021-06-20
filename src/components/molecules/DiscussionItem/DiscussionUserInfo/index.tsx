import NameAndTime from "./NameAndTime";
import { RoundedImage } from "components/atoms";
import { FlexRowWrapper } from "components/containers";

function DiscussionUserInfo() {
  return (
    <FlexRowWrapper style={{ gap: ".2rem", alignItems: "center" }}>
      <RoundedImage size="XL" src="/Smiley.png" />
      <NameAndTime />
    </FlexRowWrapper>
  );
}

export default DiscussionUserInfo;
