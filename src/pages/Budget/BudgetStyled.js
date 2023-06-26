import styled from "styled-components";

export const BudgetBody = styled.div`
  background-color: #eff3f8;
  padding: 3%;
  width: 100%;
`;
export const BudgetDraft = styled.div`
  h1,
  p {
    color: #484848;
  }
  h1 {
    font-weight: 700;
    font-size: 24px;
    line-height: 32pxx;
  }
  p {
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
  }
  /* @media screen and (max-width: 768px) {
    padding: 1rem;
    font-size: 30px;
    font-size: 30px;
    line-height: 40px;
    margin: 20px 0;
    padding: 20px 0;
    line-height: 1.2;
    width: 100%; 
    height: 60px;
    padding: 0px 40px;
    margin-top: 5%; 
  } */
`;
export const BudgetBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 20px 0;
  gap: 20px;
`;

export const BudgetHeader = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  justify-content: space-between;
  margin: 20px 0;
  gap: 20px;

  p {
    text-align: left;
  }

  @media screen and (max-width: 768px) {
    padding: 1rem;
    font-size: 1rem;
    font-size: 1rem;
    line-height: 40px;
    margin: 20px 0;
    padding: 20px 0;
    line-height: 1.2;
    width: 100%;
    padding-top: 5%;
    margin-top: 5%;
  }
`;

export const BudgetItem = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-around;
  text-align: center;
  gap: 15px;
  padding: 25px;
  height: 60px;
  margin-top: 40px;
  overflow: scroll;
`;
export const Input = styled.input`
  display: flex;
  flex-direction: row;
  /* align-items: center; */
  gap: 25px;
  padding-left: 10px;
  width: 454px;
  height: 60px;
  background: #ffffff;
  border: 1px solid rgba(0, 104, 255, 0.1);
  border-radius: 10px;
  outline: none;
`;
export const TextArea = styled.textarea`
  box-sizing: border-box;
  resize: none;
  // display: flex;
  // flex-direction: row;
  justify-content: center;
  padding: 15px;
  width: 454px;
  height: 90px;
  background: #ffffff;
  border: 1px solid rgba(0, 104, 255, 0.1);
  border-radius: 10px;
  outline: none;

  @media screen and (max-width:480px){
    width: 100%;
  }
`;
export const InputPrice = styled.input`
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 15px;
  gap: 25px;
  width: 250px;
  height: 60px;
  background: #ffffff;
  border: 1px solid rgba(0, 104, 255, 0.1);
  border-radius: 10px;
  outline: none;
`;
export const Button = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 15px;
  margin-left: 9%;
  gap: 8px;
  width: 454px;
  height: 60px;
  margin-top: 40px;
  margin-bottom: 29px;
  background: #ffffff;
  border: 1px solid rgba(0, 104, 255, 0.1);
  border-radius: 10px;
  cursor: pointer;
`;
export const Total = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 10px;
  align-items: center;
  margin-bottom: 20px;
`;
export const Sum = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 15px;
  gap: 25px;
  width: 250px;
  height: 60px;
  background: #ffffff;
  border: 1px solid rgba(0, 104, 255, 0.1);
  border-radius: 10px;
`;

export const ScrollableContainer = styled.div`
  overflow: auto;
  height: 100vh;
  /* white-space: nowrap; */
`;
export const Scrollable = styled.div`
  overflow: auto;
  height: 300px;
  /* white-space: nowrap; */
`;

export const ButtonContainer = styled.footer`
  background-color: white;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  padding: 0px 100px;
  width: 100%;
  height: 75px;
  border: 1px solid #d2cedc;
  box-sizing: border-box;
  z-index: 7;
  position: fixed;
  bottom: 0;
  left: 0;

  @media screen and (max-width: 960px) {
    height: 60px;
    padding: 0px 40px;
  }
`;

export const OverflowContoller = styled.div`
  @media screen and (max-width: 480px) {
    overflow-x: scroll;
  }
`;
