import styled from "styled-components";

export const EventBox = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  gap: 15px;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-start;
  padding: 1rem;

  @media screen and (max-width: 960px) {
    padding: 0.5rem;
    flex-direction: column;
  }
`;

export const EventOccurence = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 25px;

  @media screen and (max-width: 960px) {
    gap: 5px;
  }
`;

export const EventTitle = styled.p`
  font-weight: 500;
  font-size: 20px;
  line-height: 30px;
  @media screen and (max-width: 960px) {
    font-size: 15px;
    margin-bottom: 0.3rem;
  }
`;

export const ButtonBox = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  gap: 22px;
  width: 100%;

  @media screen and (max-width: 960px) {
    gap: 10px;
  }
`;

export const WeekBox = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  padding: 0px;
  gap: 22px;
  width: 100%;
  height: 100%;
  @media screen and (max-width: 960px) {
    gap: 5px;
  }
`;

export const ButtonOutline = styled.button`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 12px 2px;
  gap: 10px;
  color: ${(props) => (props.color ? props.color : "#0068FF")};
  width: 160px;
  height: 50px;
  background: ${(props) => (props.bgcolor ? props.bgcolor : "transparent")};
  border-radius: 6px;
  border: 1px solid #0068ff;
  box-sizing: border-box;

  /* 
&:hover{
background-color: rgba(0, 104, 255, 0.1);
} */

  @media screen and (max-width: 960px) {
    width: auto;
    height: 30px;
    padding: 0.5rem;
    font-size: 8px;
  }
`;

export const EventInputBox = styled.div`
  width: 100%;
  display: flex;
  border: 1px solid rgba(0, 104, 255, 0.1);
  border-radius: 10px;

  input::placeholder {
    font-weight: 400;
    font-size: 14px;
    line-height: 20px;
    display: flex;
    align-items: center;
    margin-bottom: 10px;
  }

  input {
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 15px;
    gap: 25px;
    width: 100%;
    border: none;
    font-size: 20px;
    outline: none;
    background: #ffffff;
  }

  @media screen and (max-width: 960px) {
    input {
      width: 100%;
      height: 50px;
    }
  }
`;

export const LeftInputBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 15px;
  width: 100%;
  /* height: 100%; */
`;

export const DayBox = styled.div`
  display: ${(props) => (props.display ? props.display : "none")};
  flex-direction: column;
  align-items: flex-start;
  gap: 25px;
  width: 100%;
  height: 100%;
  margin-top: 15px;
  @media screen and (max-width: 960px) {
    gap: 5px;
    margin-top: 5px;
  }
`;

export const TimeText = styled.p`
  font-weight: 400;
  font-size: 20px;
  line-height: 30px;
  display: flex;
  align-items: center;
  color: #484848;

  @media screen and (max-width: 960px) {
    font-size: 12px;
    margin-bottom: 1px;
  }
`;

export const EventInput = styled.div`
  width: 100%;
  display: flex;
  outline: 1px solid rgba(0, 104, 255, 0.1);
  border-radius: 10px;

  input::placeholder {
    font-weight: 400;
    font-size: 14px;
    line-height: 20px;
    display: flex;
    align-items: center;
    margin-bottom: 10px;
  }

  input {
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 15px;
    gap: 25px;
    width: 100%;
    border: none;
    font-size: 20px;
    outline: none;
  }

  @media screen and (max-width: 960px) {
    height: 50px;
    input {
      width: 100%;
      height: 50px;
      padding: 0.3rem;
    }
  }
  @media screen and (max-width: 300px) {
    input {
      padding: 0.3rem;
    }
  }
`;

export const RightInputBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 15px;
  width: 100%;
  /* height: 100%; */
`;

export const EventLink = styled.div`
  /* display: ${(props) => (props.display ? props.display : "none")}; */
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 15px;
  width: 100%;
  height: 100%;
  margin-top: 15px;
  visibility: ${(props) => (props.visibility ? props.visibility : "hidden")};
`;

export const EventPhysical = styled.section`
  /* display: ${(props) => (props.display ? props.display : "none")}; */
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-top: 15px;
  gap: 15px;
  width: 100%;
  height: 100%;
  visibility: ${(props) => (props.visibility ? props.visibility : "hidden")};
`;

export const DownButtonBox = styled.div`
  background-color: white;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
  width: 100%;
  height: 10vh;
  border: 1px solid #d2cedc;
  box-sizing: border-box;
  z-index: 99;
  position: fixed;
  bottom: 0;

  @media screen and (max-width: 768px) {
    padding: 0;
    height: 8vh;
  }
`;

export const DownBtn = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: flex-start;
  padding: 0px 20px;
  gap: 25px;
  width: 416px;
  height: 50px;
`;

export const DownButtonOutline = styled.button`
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 10px 8px;
  background-color: transparent;
  gap: 10px;
  width: 100px;
  height: 50px;
  border: 1px solid #ff2957;
  border-radius: 6px;
  color: #ff2957;
  @media screen and (max-width: 960px) {
    width: 70px;
    height: 40px;
    padding: 3px 4px;
    margin-top: 10px;
    font-size: 15px;
    justify-content: center;
  }
`;

export const DownButtonFull = styled.button`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 10px 8px;
  font-size: 18px;
  width: 191px;
  height: 50px;
  background: #ff2957;
  border-radius: 6px;
  border: 1px solid #ff2957;
  color: white;
  cursor: pointer;

  &:disabled {
    background-color: rgba(255, 41, 87, 0.3);
    color: rgba(255, 255, 255, 0.3);
    outline: none;
    border: none;
  }

  @media screen and (max-width: 960px) {
    width: 135px;
    height: 40px;
    font-size: 15px;
    padding: 8px 2px;
    margin-top: 10px;
  }
`;

export const InputTime = styled.input.attrs({ type: "time" })`
  color: black;
`;

export const InputDate = styled.input.attrs({ type: "date" })`
  color: black;
  padding: 0rem;
`;
