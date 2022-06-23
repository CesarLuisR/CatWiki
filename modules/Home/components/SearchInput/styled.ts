import styled from "styled-components";

export const Wrapper = styled.div`
  width: 100%;
  height: 70px;
  background: #ffffff;
  border-radius: 59px;
  display: flex;
  justify-content: space-between;
  border: 1px solid #000000;

  input {
    width: 80%;
    background: transparent;
    border: none;
    outline: none;
    color: #291507;
    font-family: "Montserrat", sans-serif;
    font-style: normal;
    font-weight: 500;
    font-size: 18px;
    line-height: 22px;
    padding: 25px;

    &::placeholder {
      content: "";
      @media (max-width: 1000px) {
        content: "Search";
      }
    }
  }

  input::placeholder {
    color: #291507;
  }

  .search-icon-container {
    width: 20%;
    display: grid;
    place-content: center;
    color: #291507;
    font-size: 25px;
    margin-right: 10px;

    span {
      cursor: pointer;
    }
  }
`;

export const BreedsOutput = styled.div<{
  isVisible: boolean;
  modalOpen: boolean;
}>`
  position: absolute;
  top: ${(props) => (props.modalOpen ? "70px" : "310px")};
  width: 100%;
  height: ${(props) => (props.modalOpen ? "max-content" : "200px")};
  background: #ffffff;
  border-radius: 24px;
  padding: 10px;
  overflow: auto;
  visibility: ${(props) => (props.isVisible ? "visible" : "hidden")};
  z-index: 200;

  &:hover {
    visibility: visible;
  }

  div {
    width: 100%;
    padding: 10px;
    font-family: "Montserrat", sans-serif;
    font-style: normal;
    font-weight: 500;
    font-size: 18px;
    line-height: 22px;
    color: #000000;
    border-radius: 12px;
    cursor: pointer;

    &:hover {
      background: rgba(151, 151, 151, 0.1);
    }
  }

  ::-webkit-scrollbar {
    width: 5px;
    display: block;
  }

  /* Handle */
  ::-webkit-scrollbar-thumb {
    background: #bdbdbd;
    border-radius: 24px;
    right: 10px;
  }

  /* Handle on hover */
  ::-webkit-scrollbar-thumb:hover {
    background: #555;
  }
`;

export const Button = styled.button`
  width: 180px;
  height: 60px;
  background: #ffffff;
  border-radius: 59px;
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 15px;
  color: #291507;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  border: none;
  outline: none;
`;
