import styled from "styled-components";
import background from "../../../assets/images/evie-s-uuCjYxJVf4o-unsplash.jpg";

export const TheContainer = styled.div`
  width: 100%;
  min-height: 100vh;
  position: relative;
  display: flex;
  flex-direction: column;
  padding: 2rem;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-image: url(${background});
    background-size: cover;
    background-position: center;
    opacity: 0.1;
    z-index: -1;
  }

  article {
    width: 100%;
    height: 100%;
  }
`;

export const SponsorTags = styled.button`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1px 24px;
  gap: 10px;
  color: #484848;
  min-width: 50px;
  height: 100%;
  border: 1px solid #484848;
  border-radius: 10px;
  background: transparent;
  margin-Top: 0.5rem;
  @media screen and (max-width: 960px) {
    font-size: 12px;
    padding: 1px 10px;
  }
`;

export const SponsorTagsWrapper = styled.section`
  display: grid;
  grid-template-columns: 1fr;
  margin-bottom: 1rem;
  row-gap: 10px;

  @media screen and (max-width: 960px) {
    /* flex-direction: column; */
  }
`;

export const SponsorFromTo = styled.section`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 10px;
`;

