import styled from "styled-components";

export const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 380px 1fr;
  padding: 10px 40px;
  gap: 110px;
  margin-bottom: 50px;

  @media (max-width: 1000px) {
    grid-template-columns: 1fr;
    grid-template-rows: 450px 1fr;
    gap: 0;
    padding: 0;
  }
`;

export const ImageContainer = styled.div`
  position: relative;
  width: 100%;
  height: 370px;
  display: flex;
  align-items: center;

  span {
    width: 20px;
    height: 305px;
    position: absolute;
    left: 0;
    background: #dec68b;
    border-radius: 14px;
  }

  img {
    left: 10px !important;
    border-radius: 24px;
  }
`;

export const ContentContainer = styled.div`
  width: 100%;
  font-family: "Montserrat";
  font-size: 18px;

  @media (max-width: 1000px) {
    font-size: 16px;
  }

  h1 {
    font-weight: 600;
    font-size: 2rem;
    color: #291507;
    margin: 0;
  }

  p {
    margin: 32px 0;
    font-weight: 500;
    font-size: 1rem;
    line-height: 22px;
    color: #291507;
  }
`;
