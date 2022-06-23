import useMediaQuery from "@hooks/useMediaQuery";
import SearchInput, {
  SearchButton,
} from "@modules/Home/components/SearchInput";
import Image from "next/image";
import { Wrapper, ContentZone } from "./styled";

const About = () => {
  const isMobile = useMediaQuery("(max-width: 600px)");

  return (
    <Wrapper>
      <ContentZone>
        <Image
          src="/CatwikiLogo.svg"
          alt="Content image"
          width={350}
          height={120}
        />
        <p>Get to know more about your cat breed</p>
        {isMobile ? <SearchButton /> : <SearchInput />}
      </ContentZone>
    </Wrapper>
  );
};

export default About;
