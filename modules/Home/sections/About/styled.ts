import styled from "styled-components";

export const Wrapper = styled.div`
  position: relative;
  width: 100%;
  height: 500px;
  border-radius: 59px 59px 0 0;
  background-image: url("/HeroImagelg.png");
  background-size: 100% 100%;

  @media (max-width: 1100px) {
    height: 300px;
    background-image: url("/HeroImagemd.png");
  }

  @media (max-width: 620px) {
    height: 200px;
    background-image: url("/HeroImagesm.png");
  }
`;

export const ContentZone = styled.div`
  position: absolute;
  top: 100px;
  left: 100px;
  z-index: 10;
  width: 340px;

  @media (max-width: 1100px) {
    transform: scale(0.6) translate(-35%, -60%);
  }

  @media (max-width: 620px) {
    transform: scale(0.4) translate(-130%, -130%);
  }

  p {
    font-family: "Montserrat", sans-serif;
    font-style: normal;
    font-weight: 500;
    font-size: 24px;
    line-height: 29px;
    color: #ffffff;
    margin-bottom: 50px;
  }

  img {
    filter: brightness(0) invert(1);
  }
`;
