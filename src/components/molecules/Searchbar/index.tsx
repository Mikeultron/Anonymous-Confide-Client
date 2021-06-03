import { IcSearch } from "assets";
import { CSSProperties, useState, ChangeEvent } from "react";
import { colors } from "utils/styles";
import { Wrapper, SearchInput, Placeholder } from "./styles";

interface IProps {
  style?: CSSProperties;
}

function Searchbar({ style }: IProps) {
  const [inputValue, setInputValue] = useState("");
  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setInputValue(value);
  };
  return (
    <Wrapper style={style}>
      <SearchInput name="search" onChange={onChange} />
      {!inputValue && (
        <>
          <IcSearch
            width=".5rem"
            fill={colors.subtleMid}
            style={{ position: "absolute", top: ".5rem", left: ".4rem" }}
          />
          <Placeholder htmlFor="search">Search</Placeholder>
        </>
      )}
    </Wrapper>
  );
}

export default Searchbar;
