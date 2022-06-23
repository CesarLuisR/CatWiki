import styled, { css } from "styled-components";

export const Wrapper = styled.div<any>`
  display: flex;
  font-family: "Montserrat";
  font-size: 16px;
  line-height: 20px;
  margin-bottom: 30px;
  width: 90%;
  ${(props) => props.rate && "justify-content: space-between"};
  ${(props) => props.rate && "align-items: center"};

  @media (max-width: 1400px) {
    width: 100%;
    font-size: 14px;
  }
`;

function createCSS(rate: number) {
  let styles = "";

  for (let i = 1; i <= rate; i++) {
    styles += `
       div:nth-child(${i}) {
        background: #544439;;
       }
     `;
  }

  return css`
    ${styles}
  `;
}

export const Rate = styled.div<{ rate: number }>`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 8px;
  height: 12px;
  justify-self: end;
  width: 60%;

  @media (max-width: 1000px) {
    width: 50%;
  }

  ${(props) => createCSS(props.rate)}

  div {
    width: 100%;
    height: 100%;
    background: #e0e0e0;
    border-radius: 8px;
  }
`;
