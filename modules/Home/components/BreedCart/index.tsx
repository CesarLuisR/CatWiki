import Image from "next/image";
import styled from "styled-components";
import { useRouter } from "next/router";

export default function BreedCart({ name, image }: Props) {
  const router = useRouter();

  return (
    <Wrapper onClick={() => router.push(`/breeds/${name.toLowerCase()}`)}>
      <div>
        <Image src={image} alt={name} layout="fill" />
      </div>
      <h3>{name}</h3>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: start;
  cursor: pointer;
  margin: 10px 10px;

  div {
    position: relative;
    width: 220px;
    height: 220px;

    @media (max-width: 500px) {
      width: 120px;
      height: 120px;
    }

    img {
      border-radius: 24px;
    }
  }

  h3 {
    font-family: "Montserrat", sans-serif;
    font-style: normal;
    font-weight: 600;
    font-size: 18px;
    line-height: 22px;
    color: #291507;
    margin-top: 10px;

    @media (max-width: 500px) {
      font-size: 12px;
    }
  }
`;

type Props = {
  name: string;
  image: string;
};
