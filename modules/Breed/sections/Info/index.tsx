import BreedChar from "@modules/Breed/components/BreedChar";
import Image from "next/image";
import useBreedInfo from "../../hooks/useBreedInfo";
import { ContentContainer, ImageContainer, Wrapper } from "./styled";

export default function Info() {
  const breedInfo = useBreedInfo();

  if (!breedInfo) return <div>Loading...</div>;

  return (
    <Wrapper>
      <ImageContainer>
        <span />
        <Image src={breedInfo.image.url} alt={breedInfo.name} layout="fill" />
      </ImageContainer>
      <ContentContainer>
        <h1>{breedInfo.name}</h1>
        <p>{breedInfo.description}</p>
        <BreedChar name="Temperament" content={breedInfo.temperament} />
        <BreedChar name="Origin" content={breedInfo.origin} />
        <BreedChar name="Life Span" content={breedInfo.life_span + " years"} />
        <BreedChar name="Adaptability" rate={breedInfo.adaptability} />
        <BreedChar name="Affection level" rate={breedInfo.affection_level} />
        <BreedChar name="Child friendly" rate={breedInfo.child_friendly} />
        <BreedChar name="Grooming" rate={breedInfo.grooming} />
        <BreedChar name="Intelligence" rate={breedInfo.intelligence} />
        <BreedChar name="Health issues" rate={breedInfo.health_issues} />
        <BreedChar name="Social needs" rate={breedInfo.social_needs} />
        <BreedChar
          name="Stranger friendly"
          rate={breedInfo.stranger_friendly}
        />
      </ContentContainer>
    </Wrapper>
  );
}
