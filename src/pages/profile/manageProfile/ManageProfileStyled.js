import styled from "styled-components";

export const ManageBox = styled.div`
  width: 100%;
  /* height: 100%; */
  display: flex;
  gap: 20px;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 1rem;

  @media screen and (max-width: 960px) {
    /* padding:0.5rem; */
    flex-direction: column;
  }
`;

export const LongButton1 = styled.button`
  width: 200px;
  height: 50px;
  background-color: #ff2957;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  margin-top: 5px;
  font-size: 16px;

  &:disabled {
    background-color: rgba(255, 41, 87, 0.3);
    color: rgba(255, 255, 255, 0.3);
    outline: none;
    border: none;
  }

  @media screen and (max-width: 768px) {
    font-size: 12px;
  }
`;
