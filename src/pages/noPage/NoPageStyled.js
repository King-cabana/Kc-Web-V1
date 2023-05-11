import styled from "styled-components";

export const HomePageButton = styled.button`
  height: 8vh;
  width: 11vw;
  border: 1.5px none;
  border-radius: 3px;
  background-color: #ff2957;
  color: white;
  cursor: pointer;
  font-weight: 600;

  @media screen and (max-width: 960px) {
    width: 40vw;
  }
`;

export const NPInner = styled.div`
  width: inherit;
  height: 40vh;
  margin-top: 8%;

  p {
    font-size: 20px;
  }

  @media screen and (max-width: 480px) {
    margin-top: 30%;

    p {
      font-size: 12px;
    }
  }

  @media screen and (min-width: 481px) and (max-width: 960px) {
    margin-top: 20%;
  }
`;
