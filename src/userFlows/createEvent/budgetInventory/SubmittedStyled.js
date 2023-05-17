import styled from "styled-components";

export const SubmittedContainer = styled.div`
  width: 100vw;
  height: 80vh;
  padding: 2rem;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  @media screen and (max-width: 960px) {
    padding: 1rem;
  }
`;

export const SubmittedButtons = styled.section`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
