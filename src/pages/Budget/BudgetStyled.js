import styled from "styled-components";

export const BudgetBody = styled.div`
    background-color: #eff3f8;
    padding: 3%;
    /* width: 100%;
    height: fit-content;
    overflow-x: scroll; */
`
export const BudgetDraft = styled.div`
    h1, p{
        color: #484848;
    }
    h1 {
        font-weight: 700;
        font-size: 24px;
        line-height: 32px;
    }
    p{
        font-weight: 400;
        font-size: 16px;
        line-height: 24px;
    }
    @media screen and (max-width: 768px) {
    padding: 1rem;
    font-size: 30px;
    font-size: 30px;
    line-height: 40px;
    margin: 20px 0;
    padding: 20px 0;
    line-height: 1.2;
    width: 100%; 
    padding-top: 5%;
    margin-top: 5%; 

  }
`;

export const BudgetHeader = styled.div `
    display: flex;
    width: 95%;
    margin-top: 20px;
    padding-left: 120px;
    justify-content: space-between;
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
`
export const Input = styled.input`
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 25px;
    padding-left: 10px;
    width: 454px;
    height: 60px;
    background: #FFFFFF;
    border: 1px solid rgba(0, 104, 255, 0.1);
    border-radius: 10px;
    outline: none;
;
`
export const Click = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 60px;
`
export const TextArea = styled.input`
    box-sizing: border-box;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 15px;
    gap: 25px;
    width: 454px;
    height: 90px;
    background: #FFFFFF;
    border: 1px solid rgba(0, 104, 255, 0.1);
    border-radius: 10px;
    outline: none;
`
export const InputPrice = styled.input`
    box-sizing: border-box;
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 15px;
    gap: 25px;
    width: 250px;
    height: 60px;
    background: #FFFFFF;
    border: 1px solid rgba(0, 104, 255, 0.1);
    border-radius: 10px;
    outline: none;
`
export const Button = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 15px;
    gap: 8px;
    width: 454px;
    height: 60px;
    margin-top: 40px;
    margin-bottom: 29px;
    background: #FFFFFF;
    border: 1px solid rgba(0, 104, 255, 0.1);
    border-radius: 10px;
    margin-left: 110px;
    cursor: pointer;
`
export const Total = styled.div`
    display: flex;
    justify-content: flex-end;
    gap: 10px;
    align-items: center;
`;
export const Sum = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 15px;
    gap: 25px;
    width: 250px;
    height: 60px;
    background: #FFFFFF;
    border: 1px solid rgba(0, 104, 255, 0.1);
    border-radius: 10px;
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
