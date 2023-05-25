import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem 2rem;
  background-color: white;

  @media screen and (max-width: 426px) {
    padding: 0.5rem 1rem;
  }
`;
