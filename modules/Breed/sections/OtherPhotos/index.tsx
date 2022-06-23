import useBreedImages from "@modules/Breed/hooks/useBreedImages";
import Image from "next/image";
import { GridContainer, ImageContainer, Wrapper } from "./styled";

export default function OtherPhotos() {
  const images = useBreedImages();

  return (
    <Wrapper>
      <h2>Other photos</h2>
      <GridContainer>
        {images.map((image: any) => (
          <ImageContainer key={image.id}>
            <Image src={image.url} alt={image.breeds.name} layout="fill" />
          </ImageContainer>
        ))}
      </GridContainer>
    </Wrapper>
  );
}
