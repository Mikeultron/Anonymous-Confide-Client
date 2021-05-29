import { IcSearch } from "assets";
import { colors } from "utils/styles";
import { Wrapper, SearchInput, Placeholder } from "./styles";

function Searchbar() {
  return (
    <Wrapper>
      <SearchInput name="search" />
      <IcSearch
        width=".5rem"
        fill={colors.subtleMid}
        style={{ position: "absolute", top: ".5rem", left: ".4rem" }}
      />
      <Placeholder htmlFor="search">Search</Placeholder>
    </Wrapper>
  );
}

export default Searchbar;
