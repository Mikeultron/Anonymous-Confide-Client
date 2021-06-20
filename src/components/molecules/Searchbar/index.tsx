import { IcSearch } from "assets";
import { CSSProperties, useState, ChangeEvent } from "react";
import { colors } from "utils";
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
            fill={colors.black[40]}
            style={{
              position: "absolute",
              top: ".5rem",
              left: ".4rem",
              cursor: "default",
            }}
          />
          <Placeholder htmlFor="search">Search</Placeholder>
        </>
      )}
    </Wrapper>
  );
}

export default Searchbar;
