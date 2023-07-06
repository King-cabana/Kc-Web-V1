import styled from "styled-components";

export const Info = styled.section`
width: 100%;
    display: flex;
    justify-content: space-between;
    margin-bottom: 0.5rem;

    @media screen and (max-width: 768px){
        flex-direction: column;
    }
`;

export const Half1 = styled.div`
    width: 60%;
    margin-bottom: 0.5rem;

    @media screen and (max-width: 768px){
        width: 95%;
    }
`;
export const Half2 = styled.div`
    width: 25%;
    text-align: end;
    margin-bottom: 0.5rem;

    @media screen and (max-width: 768px){
        margin-bottom: 0;
        width: 100%;
        text-align: start;
    }
`;
export const EventsDisplaySection = styled.section`
  width: 100%;
  height: max-content;
  display: flex;
  flex-direction: column;
  justify-content: center;

  @media screen and (max-width: 768px) {
    margin-top: 1%;
  }
`;

export const EventCardHolder = styled.div`
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 20px;
  margin: 1% 0 1.5% 0%;

  @media screen and (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media screen and (max-width: 480px) {
    display: block;
  }
`;





