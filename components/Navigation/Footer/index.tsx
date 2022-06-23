import Image from "next/image";
import styled from "styled-components";

const Wrapper = styled.div`
  position: relative;
  bottom: 0;
  width: 100%;
  height: 100px;
  background-color: #000000;
  border-radius: 42px 42px 0 0;
  display: flex;
  align-items: center;
  padding: 20px 100px;
  justify-content: space-between;

  @media (max-width: 900px) {
    flex-direction: column;
    align-items: flex-start;
    padding: 20px 50px;
    height: min-content;

    p {
      font-size: 14px;
    }
  }

  p {
    color: #ffffff;
    font-family: "Montserrat", sans-serif;
    font-weight: 400;
    font-size: 16px;
  }

  img {
    filter: brightness(0) invert(1);
  }
`;

const Footer = () => {
  return (
    <Wrapper>
      <Image
        src="/CatwikiLogo.svg"
        alt="Footer image"
        width={130}
        height={80}
      />
      <p>© created by Cesar Luis Rijo Cedano - devChallenge.io 2022</p>
    </Wrapper>
  );
};

export default Footer;
