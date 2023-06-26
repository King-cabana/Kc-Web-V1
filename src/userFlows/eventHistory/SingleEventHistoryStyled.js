import styled from "styled-components";

export const LI = styled.li`
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  color: #484848;

  @media screen and (max-width: 960px) {
    font-size: 11px;
    line-height: 18px;
    margin-top: 3px;
  }
`;

export const UL = styled.ul`
  margin: 0rem 0rem 1.5rem 2rem;
  @media screen and (max-width: 960px) {
    margin: 0rem 0rem 0.6rem 1.5rem;
  }
`;

export const IMG = styled.img`
  width: 16px;
  height: 18px;

  @media screen and (max-width: 768px) {
    width: 12px;
    height: 13px;
  }
`;

export const HistoryImageContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 0rem 1%;
  /* border: 2px solid green; */

  @media screen and (max-width: 768px) {
    flex-direction: column;
    gap: 1rem 0rem;
  }
`;

export const HistoryImage = styled.img`
  width: 32%;
  height: 320px;
  border-radius: 10px;
  object-fit: cover;
  margin: 1rem 0rem 1rem 0rem;

  @media screen and (max-width: 960px) {
    height: 280px;
  }
  @media screen and (max-width: 768px) {
    width: 62%;
    height: 320px;
  }
  @media screen and (max-width: 640px) {
    width: 77%;
    height: 300px;
  }
  @media screen and (max-width: 425px) {
    width: 100%;
    height: 270px;
  }
`;
