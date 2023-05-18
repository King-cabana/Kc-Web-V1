import styled from "styled-components";

export const CETopBarContainer = styled.div`
  width: 100%;
  height: 62px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.1);
  padding-right: 2%;
  padding-left: 2%;
  background-color: white;

  @media screen and (max-width: 480px) {
    width: 100%;
  }
`;

export const CETopBarLogo = styled.div`
  height: inherit;
  width: 5%;
  display: flex;
  justify-content: center;
  align-items: center;

  @media screen and (max-width: 480px) {
    width: 15%;
    img {
      width: 30px;
      height: 30px;
    }
  }
`;

export const PPAndArrowHolder = styled.div`
  width: max-content;
  gap: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
