import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  padding: 50px 100px;

  div {
    width: 100%;
  }

  @media (max-width: 1000px) {
    flex-direction: column;
    padding: 0;
  }
`;

export const Content = styled.div`
  padding: 100px 20px;
  font-family: "Montserrat";
  font-style: normal;

  @media (max-width: 1000px) {
    padding-bottom: 80px;
  }

  h2 {
    font-weight: 700;
    font-size: 48px;
    line-height: 59px;
    color: #291507;
  }

  p {
    font-weight: 500;
    font-size: 18px;
    line-height: 22px;
    color: #291507;
    margin: 40px 0;
  }
`;

export const Images = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 25px;

  @media (max-width: 1000px) {
    height: 400px;
    margin-bottom: 100px;
  }

  .first {
    display: grid;
    grid-template-rows: 0.6fr 1fr;
    grid-gap: 25px;

    .image-2 {
      width: 70%;
      justify-self: end;
    }
  }

  .second {
    display: grid;
    height: 80%;
  }

  .image {
    position: relative;
  }
`;
