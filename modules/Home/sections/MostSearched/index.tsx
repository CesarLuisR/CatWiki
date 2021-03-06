import useBreeds from "@modules/Home/hooks/useBreeds";
import useGetRandomsBreeds from "../../hooks/useGetRamdomsBreeds";
import BreedCart from "@modules/Home/components/BreedCart";
import StyledLink from "@components/Navigation/Link";
import { BreedCartsContainer, Head, TextContent, Wrapper } from "./styled";

const MostSearchedBreeds = () => {
  const { breeds } = useBreeds();
  const { randomBreeds } = useGetRandomsBreeds();

  if (randomBreeds.length === 0 || !breeds || breeds.length === 0)
    return <div>Loading...</div>;

  return (
    <Wrapper>
      <Head>
        <h2>Most Searched Breeds</h2>
        <span />
      </Head>

      <TextContent>
        <h3>
          {breeds.length - 1}+ Breeds For you <br /> to discover
        </h3>
        <StyledLink href="" text="See more" />
      </TextContent>

      <BreedCartsContainer>
        {randomBreeds.map((breed: any) => (
          <BreedCart key={breed.id} name={breed.name} image={breed.image.url} />
        ))}
      </BreedCartsContainer>
    </Wrapper>
  );
};

export default MostSearchedBreeds;
