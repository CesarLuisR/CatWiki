import styled from "styled-components";

export const Wrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 100;
  display: flex;
  align-items: end;
  background-color: #ffffff;
  flex-direction: column;
  padding: 20px;
`;

export const CloseButton = styled.button`
  width: 40px;
  height: 40px;
  background: rgba(151, 151, 151, 0.1);
  border-radius: 8px;
  display: grid;
  place-items: center;
  color: #291507;
  margin-bottom: 20px;
  border: none;
  outline: none;
`;

export const SearchInputContainer = styled.div`
  position: relative;
  width: 100%;
`;
