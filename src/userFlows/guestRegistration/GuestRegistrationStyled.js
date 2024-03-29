import styled from "styled-components";

export const Header = styled.p`
  font-weight: 700;
  font-size: 24px;
  line-height: 32px;
  color: #484848;

  @media screen and (max-width: 960px) {
    font-size: 16px;
    line-height: 24px;
  }
  @media screen and (max-width: 360px) {
    font-size: 14px;
    line-height: 20px;
  }
  @media screen and (max-width: 275px) {
    font-size: 12px;
    line-height: 14px;
  }
`;

export const Plan = styled.p`
  color: #ff2957;
  font-weight: 400;
  font-size: 18px;
  line-height: 26px;
  cursor: pointer;

  @media screen and (max-width: 960px) {
    font-size: 12px;
    line-height: 14px;
  }
`;

export const Wrapper = styled.section`
  display: flex;
  align-items: center;
  justify-content: ${({ justifycontent }) =>
    justifycontent ? justifycontent : "start"};
  gap: ${({ gap }) => (gap ? gap : "1rem")};
  cursor: ${({ cursor }) => (cursor ? cursor : "default")};
`;

export const Tags = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  gap: 10px;
  padding: 18%;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;

  ul {
    display: flex;
    color: #484848;
    text-align: center;
    width: auto;
    background: #f6e9ec;
    border-radius: 20px;
    padding: 0.5rem;
  }

  @media screen and (max-width: 960px) {
    width: 70%;
    font-size: 12px;
    line-height: 18px;
    flex-direction: column;
  }
  ul {
    border-radius: 15px;
  }

  @media screen and (max-width: 480px) {
    width: fit-content;
    font-size: 12px;
    line-height: 18px;
    // flex-direction: column;
  }
  ul {
    border-radius: 15px;
  }
`;

export const HeaderHolder = styled.div`
  width: 100%;
  height: 3rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Page = styled.div`
  justify-content: center;
  display: flex;
  flex-direction: column;
  /* align-items: center; */
  width: 100%;
  padding: 0 5%;

  @media screen and (max-width: 960px) {
    padding: 0 3%;
  }
`;

export const HR = styled.hr`
  border: none;
  border-top: 3px double #ff2957;
  color: #ff2957;
  overflow: visible;
  text-align: center;
  height: 5px;
`;

export const Like = styled.section`
  display: ${(props) => (props.display ? props.display : "flex")};
  cursor: pointer;
  margin-right: ${(props) => (props.marginright ? props.marginright : "0rem")};

  &:hover {
    color: #969699;
  }
`;

export const Container = styled.section`
  display: flex;
  /* justify-content: space-between; */
  align-items: center;
  gap: 0.5rem;

  @media screen and (max-width: 550px) {
    gap: 0rem;
  }
`;

export const Container1 = styled.section`
    display: flex;
  /* justify-content: space-between; */
  align-items: center;
  padding: 0rem 5rem;

  @media screen and (max-width: 550px) {
    padding: 0rem 1rem
}
`

export const IconsContainer = styled.section`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  gap: 0.5rem;
  margin: 0.5rem 0rem;

  @media screen and (max-width: 960px) {
    font-size: 12px;
    line-height: 20px;
  }

  @media screen and (max-width: 550px) {
    gap: 0rem;
  }
`;
