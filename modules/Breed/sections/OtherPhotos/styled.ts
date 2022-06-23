import styled from "styled-components";

export const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  font-size: 18px;

  @media (max-width: 1000px) {
    font-size: 16px;
  }

  h2 {
    font-family: "Montserrat";
    font-weight: 600;
    font-size: 2rem;
    line-height: 44px;
    color: #291507;
    margin-bottom: 30px;
  }
`;

export const GridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  grid-template-rows: 1fr 1fr;
  width: 100%;
  height: 100%;
  gap: 45px;
  margin-bottom: 100px;
`;

export const ImageContainer = styled.div`
  position: relative;
  width: 100%;
  height: 250px;

  img {
    border-radius: 24px;
  }
`;
