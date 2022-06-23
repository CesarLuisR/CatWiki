import Portal from "@components/Display/Portal";
import SearchInput from "../SearchInput";
import { CloseButton, SearchInputContainer, Wrapper } from "./styled";


export default function SearchModal({ isOpen, toggle }: Props) {
  if (!isOpen) return null;
  return (
    <Portal>
      <Wrapper>
        <CloseButton onClick={() => toggle()}>
          <span className="material-symbols-outlined">close</span>
        </CloseButton>
        <SearchInputContainer>
          <SearchInput />
        </SearchInputContainer>
      </Wrapper>
    </Portal>
  );
}

type Props = { isOpen: boolean; toggle: Function };
