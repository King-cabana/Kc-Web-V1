import styled from "styled-components";

export const EventPlanningTable = styled.table`
  border: 1px solid rgba(0, 104, 255, 0.1);
  width: 90%;
  table-layout: fixed;

  @media screen and (max-width: 960px) {
    width: 100%;
  }
`;

export const Heading = styled.section`
  font-size: 16px;
  font-weight: 600;
  line-height: 28px;
  padding: 0.5rem;

  @media screen and (max-width: 960px) {
    font-size: 14px;
    line-height: 24px;
  }
`;

export const TdLarge = styled.td`
  font-size: 14px;
  font-weight: 400;
  line-height: 18px;
  padding: 0.5rem;
  border-top: 1px solid rgba(0, 104, 255, 0.1);
  border-bottom: 1px solid rgba(0, 104, 255, 0.1);
  /* white-space: nowrap; */
  width: 250px;

  @media screen and (max-width: 960px) {
    font-size: 12px;
    line-height: 14px;
  }
`;

export const HistoryTdLg = styled(TdLarge)`
  width: 200px;
`;

export const TdMedium = styled(TdLarge)`
  width: 100px;
  padding-right: 1rem;
`;

export const HistoryTdMd = styled(TdMedium)`
  width: 150px;
`;

export const TdSmall = styled(TdMedium)`
  text-align: end;
`;

export const SM = styled.span`
  font-size: 12px;
  font-weight: 400;
  line-height: 16px;
  font-style: italic;

  @media screen and (max-width: 960px) {
    font-size: 10px;
  }
`;

export const ViewButton = styled.button`
  border-radius: 8px;
  background-color: transparent;
  color: #ff2957;
  border: 1px solid #ff2957;
  cursor: pointer;
  font-weight: 600;
  width: auto;
  height: auto;
  padding: 0.5rem;
  min-width: 50px;
  min-height: 20px;
  font-size: 10px;
  margin-right: 1.5rem;
  align-self: center;

  &:hover {
    color: #ff2957;
    border: 1px solid #f4d5dc;
  }
  &:disabled {
    background-color: white;
    color: white;
    border: 1px solid rgba(255, 41, 87, 0.6);
  }
`;

export const TableHead = styled.tr`
  width: 100%;
  overflow-x: scroll;
  padding: 0.5rem;
  color: #484848;
  border: 1px solid rgba(0, 104, 255, 0.1);
`;

export const TableTr = styled(TableHead)`
  cursor: pointer;
  background-color: ${(props) => props.backgroundcolor};

  &:hover {
    background-color: #f6e9ec;
  }
`;

export const EventName = styled.div`
  display: flex;
  flex-direction: column;
`;

export const PopUpOptions = styled.div`
  position: absolute;
  margin-top: -4.5rem;
  margin-bottom: 0.8rem;
  margin-left: 2.2rem;
  background-color: #fff;
  font-weight: 400;
  font-size: 12px;
  line-height: 16px;
  width: auto;
  height: auto;
  border: 1px solid rgba(0, 104, 255, 0.1);
  border-radius: 8px;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  overflow-x: auto;
  z-index: 2;

  @media screen and (max-width: 769px) {
    width: 100%;
    font-weight: 400;
    font-size: 8px;
    line-height: 14px;
    color: #000000;
    text-align: center;
    font-size: 10px;
    line-height: 12px;
    padding: 0.5rem;
  }

  p {
    margin-bottom: 0.8rem;
    font-size: 12px;
    line-height: 16px;
    text-align: start;
    &:hover {
      background-color: #f6e9ec;
    }
    @media screen and (max-width: 769px) {
      font-size: 8px;
      line-height: 14px;
    }
  }
  p:last-child {
    margin-bottom: 0;
  }

  span {
    color: #ff2957;
  }
`;

export const EventDetailsSide = styled.section`
  padding: 25px;
  width: 30%;
  height: 91%;
  /* background-color: blue; */
  background-color: #fff;
  position: fixed;
  top: 3.9rem;
  right: 0;
  z-index: 99999;
  flex-direction: column;
  align-items: center;
  display: ${(props) => (props.display ? props.display : "none")};

  @media screen and (max-width: 769px) {
    width: 100%;
  }
`;

export const ButtonContainer = styled.footer`
  background-color: white;
  display: flex;
  align-items: center;
  padding: 2rem;
  width: 80%;
  height: 75px;
  border: 1px solid #d2cedc;
  box-sizing: border-box;
  z-index: 7;
  position: fixed;
  bottom: 0;
  right: 0;

  @media screen and (max-width: 960px) {
    width: 100%;
    height: 60px;
    padding: 1rem;
  }
`;

export const EditEventSpan = styled.span`
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  margin-top: 8px;
  color: #ff2957;
  cursor: pointer;
  text-decoration: underline;
  text-decoration-color: #ff2957;
  text-decoration-style: double;

  @media screen and (max-width: 960px) {
    font-size: 12px;
    line-height: 18px;
    margin-top: 3px;
  }
`;

export const SECTION = styled.section`
  display: flex;
  justify-content: space-between;
  margin-top: 0.8rem;
  /* width: 60%; */
  /* align-items: center; */

  @media screen and (max-width: 768px) {
    flex-direction: column;
  }
`;

export const LoadingSection = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Partition = styled.section`
  display: ${(props) => props.display};
  justify-content: space-between;
  align-items: flex-start;
  gap: 0rem 1.5rem;
  position: relative;
`;

export const Partition1 = styled.div`
  width: 60%;

  @media screen and (max-width: 960px) {
    width: 100%;
  }
`;

export const Partition2 = styled.div`
  border-left: 2px solid #d2cedc;
  width: 40%;
  padding: 0.5rem 0rem 0.5rem 1rem;
  position: sticky;
  margin-top: 1rem;
  top: 80px;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const Display = styled.div`
  display: none;

  @media screen and (max-width: 768px) {
    display: block;
  }
`;

export const SwitchView = styled.section`
  margin-bottom: 1rem;
  display: flex;
  width: 100%;
  padding: 4px 0.5rem;
  justify-content: space-around;
  align-items: center;
  gap: 32px;
  border-radius: 20px;
  background: #FFF;
  box-shadow: -4px -4px 4px 0px rgba(255, 255, 255, 0.10) inset, 4px 4px 10px 0px rgba(255, 255, 255, 0.15) inset, -2px -2px 10px 0px rgba(0, 0, 0, 0.05) inset, 4px 4px 8px 0px rgba(0, 0, 0, 0.25) inset;

  article {
    text-align: center;
    cursor: pointer;
    width: 100%;
    transition: 0.2s;
  }
    .switch{
      background: #FF2957;
      border-radius: 15px;
      opacity: 0.95;
      box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25), 0px 4px 4px 0px #FFF, 0px 4px 4px 0px #FFF, 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
      
      p {
        color: #FFF;
      }
    }

  @media screen and (max-width: 480px) {
    padding: 2px;
    gap: 2px;
  }
`;
