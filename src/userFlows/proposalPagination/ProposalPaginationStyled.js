import styled from "styled-components";

export const PaginationContainer = styled.div`
  display: flex;
  height: fit-content;
  justify-content: center;
  align-items: center;
  gap: 5px;
  margin-bottom: 10%;
`;

export const PaginationButton = styled.button`
  padding: 5px 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${({ active }) => (active ? "#0068FF" : "#0068FF1A")};
  color: ${({ active }) => (active ? "#FFF" : "#000")};
  border: none;
  border-radius: 5px;
  outline: none;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: ${({ active }) => (active ? "#0068FF" : "#EEE")};
  }
`;

export const NextPrevContainer = styled.button`
  width: 100px;
  height: 70px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 5px;
  background-color: ${({ active }) => (active ? "#0068FF" : "transparent")};
  color: ${({ active }) => (active ? "#FFF" : "#000")};
  border: none;
  border-radius: 5px;
  outline: none;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: ${({ active }) => (active ? "#0068FF" : "#EEE")};
  }

  &:disabled {
    color: #D2CEDC;
    cursor: not-allowed;
  }
`;

export const CaretHolder = styled.div`
display:flex;
border:1px solid #D2CEDC;
border-radius:40%;
width:35px;
display:flex;
justify-content:center;
align-items:center;
padding:10px;
`;
