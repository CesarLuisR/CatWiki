import { Context } from "@modules/Home/context/Context";
import useSearch from "@modules/Home/hooks/useSearch";
import { useRouter } from "next/router";
import { useContext, useState } from "react";
import SearchModal from "../SearchModal";
import { BreedsOutput, Button, Wrapper } from "./styled";

export function SearchButton() {
  const { isOpen, toggle } = useContext(Context);

  return (
    <>
      <Button onClick={() => toggle()}>
        Search &nbsp; &nbsp;
        <span className="material-symbols-outlined">search</span>
      </Button>
      <SearchModal isOpen={isOpen} toggle={toggle} />
    </>
  );
}

const SearchInput = () => {
  const [isFocused, setIsFocused] = useState(false);
  const { search, setSearch, breeds } = useSearch();
  const { isOpen } = useContext(Context);
  const router = useRouter();

  const isVisible = isFocused && breeds.length > 0;

  return (
    <Wrapper>
      <input
        type="text"
        placeholder={"Enter your breed"}
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
      />
      <div className="search-icon-container">
        <span
          className="material-symbols-outlined"
          onClick={() => router.push(`/breeds/${search.toLowerCase()}`)}
        >
          search
        </span>
      </div>
      <BreedsOutput isVisible={isVisible} modalOpen={isOpen}>
        {breeds.map((breed: any) => {
          return (
            <div
              key={breed.id}
              onClick={() => router.push(`/breeds/${breed.name.toLowerCase()}`)}
            >
              {breed.name}
            </div>
          );
        })}
      </BreedsOutput>
    </Wrapper>
  );
};

export default SearchInput;
