import styled from "styled-components";

// Components
import { IcComment, IcDislike, IcLike, IcShare } from "assets";
import { FlexRowWrapper } from "components/containers";

const Wrapper = styled(FlexRowWrapper)`
  gap: 0.5rem;
  & svg {
    cursor: pointer;
  }
`;

function DiscussionActions() {
  return (
    <Wrapper>
      <IcLike width={".5rem"} />
      <IcDislike width={".5rem"} />
      <IcComment width={".5rem"} />
      <IcShare width={".5rem"} />
    </Wrapper>
  );
}

export default DiscussionActions;
