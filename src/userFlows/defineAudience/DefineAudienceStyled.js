import styled from "styled-components";
import Background from "../../assets/images/budgetBackground.jpg";

export const ButtonContainer = styled.footer`
  background-color: white;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  padding: 0px 90px;
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

export const Label = styled.label`
  /* border: 2px solid green; */
  font-size: 16px;
  line-height: 24px;

  &:hover {
    cursor: pointer;
  }

  @media screen and (max-width: 960px) {
    font-size: 12px;
    line-height: 18px;
  }
`;


export const RadioInput = styled.input`
  border: 1px solid rgba(0, 104, 255, 0.1);
  border-radius: 10px;
  padding: 10px;
`;

export const BudgetInventoryContainer = styled.div`
  width: 100%;
  height: 100%;
  padding: 2rem;
  background: ${(prop) =>
    prop.background ? prop.background : `url(${Background})`};

  @media screen and (max-width: 960px) {
    padding: 1rem;
  }

   @media screen and (max-width: 480px) {
    padding: 10px;
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
  }
`;

export const BudgetInventoryHeader = styled.div`
  max-width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin: 10px 1rem;

  @media screen and (max-width: 960px) {
    margin: 7px 0.5rem;
    margin-bottom: 15px;
  }
`;

export const BudgetInventorySubtitle = styled.p`
  /* width: 100%; */
  /* height: 100%; */
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  color: #484848;
  margin-top: 8px;

  @media screen and (max-width: 960px) {
    font-size: 12px;
    line-height: 18px;
    margin-top: 3px;
  }
`;


export const BudgetSection = styled.section`
  /* height: 50%; */
  max-width: 100%;
  margin: 0 1rem;
  margin-bottom: 8rem;
  padding: 2rem;
  // background: #fff;

  @media screen and (max-width: 960px) {
    padding: 0.5rem;
    margin-bottom: 5rem;
  }
  @media screen and (max-width: 480px) {
    width: 100%;
  }
`;

export const BudgetTitle1 = styled.h1`
  /* width: 100%; */
  /* height: 100%; */
  font-weight: 700;
  font-size: 24px;
  line-height: 32px;

  color: #484848;

  @media screen and (max-width: 960px) {
    font-size: 16px;
    line-height: 24px;
  }
`;

export const InputText = styled.label`
  font-weight: 500;
  font-size: ${(props) => (props.fontSize ? props.fontSize : "18px")};
  line-height: 26px;
  align-items: center;
  color: #484848;
  margin-bottom: 1rem;

  @media screen and (max-width: 960px) {
    font-size: 12px;
    line-height: 18px;
  }
`;


