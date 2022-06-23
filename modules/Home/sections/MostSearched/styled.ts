import styled from "styled-components";

export const Wrapper = styled.div`
  background: #e3e1dc;
  padding: 50px 100px;
  border-radius: 0 0 59px 59px;
  height: max-content;

  @media (max-width: 620px) {
    padding: 50px 20px;
  }
`;

export const Head = styled.div`
  width: max-content;

  h2 {
    font-family: "Montserrat", sans-serif;
    font-style: normal;
    font-weight: 500;
    font-size: 18px;
    line-height: 22px;
    color: #291507;
  }

  span {
    display: block;
    margin-top: 5px;
    width: 30%;
    height: 3px;
    background: #4d270c;
    border-radius: 77px;
  }
`;

export const TextContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: end;
  width: 100%;
  height: max-content;
  margin-top: 30px;

  @media (max-width: 1000px) {
    flex-direction: column;
    align-items: start;
  }

  h3 {
    font-family: "Montserrat", sans-serif;
    font-size: 48px;
    color: #291507;

    @media (max-width: 620px) {
      font-size: 32px;
    }
  }
`;

export const BreedCartsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: max-content;
  margin-top: 50px;

  @media (max-width: 750px) {
    justify-content: center;
  }
`;
