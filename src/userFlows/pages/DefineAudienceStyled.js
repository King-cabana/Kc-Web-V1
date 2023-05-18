import styled from "styled-components";

export const ButtonContainer = styled.footer`
  background-color: white;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  padding: 0px 100px;
  width: 100%;
  height: 75px;
  border: 1px solid #d2cedc;
  box-sizing: border-box;
  z-index: 7;
  position: fixed;
  bottom: 0;
  left: 0;

  @media screen and (max-width: 960px) {
    height: 60px;
    padding: 0px 40px;
  }
`;

export const Label = styled.label`
  /* border: 2px solid green; */
  font-size: 16px;
  line-height: 24px;

  &:hover {
    cursor: pointer;
  }

  @media screen and (max-width: 960px) {
    font-size: 12px;
    line-height: 18px;
  }
`;
