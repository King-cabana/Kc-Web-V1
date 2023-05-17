import styled from "styled-components";
import budgetBackground from "../../images/budgetBackground.png";

export const BudgetInventoryContainer = styled.div`
  width: 100%;
  height: 100%;
  padding: 2rem;
  background: ${(prop) =>
    prop.background ? prop.background : `url(${budgetBackground})`};

  @media screen and (max-width: 960px) {
    padding: 1rem;
  }
`;

export const DefineAudienceForm = styled.form`
  width: 100%;
  height: 100%;
  padding: 2rem;
  background: ${(prop) =>
    prop.background ? prop.background : `url(${budgetBackground})`};

  @media screen and (max-width: 960px) {
    padding: 1rem;
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

export const BudgetTitle2 = styled.h1`
  font-weight: 600;
  font-size: 21px;
  line-height: 32px;
  color: #484848;

  @media screen and (max-width: 960px) {
    font-size: 12px;
    line-height: 20px;
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
  background: #fff;

  @media screen and (max-width: 960px) {
    padding: 0.5rem;
    margin-bottom: 5rem;
  }
  @media screen and (max-width: 300px) {
    margin: 0 0.1rem;
    margin-bottom: 5rem;
  }
`;

export const BudgetSubtitle = styled.p`
  width: 100%;
  height: 100%;
  font-weight: 500;
  font-size: 18px;
  line-height: 28px;
  display: flex;
  align-items: center;
  color: #484848;

  @media screen and (max-width: 960px) {
    font-size: 12px;
    line-height: 18px;
  }
`;
export const BudgetUpload = styled.section`
  display: flex;
  flex-direction: column;
  padding: 0.5rem 1rem 2rem 1rem;

  @media screen and (max-width: 960px) {
    padding: 1rem 0;
  }
`;

export const FormContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 100%;
  padding: 0.5rem;
  border: 1px dashed rgba(0, 104, 255, 0.1);
  margin-top: 1rem;
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

export const Supported = styled.div`
  font-weight: 400;
  font-size: 12px;
  line-height: 18px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #484848;

  @media screen and (max-width: 960px) {
    font-size: 8px;
    line-height: 18px;
    margin-bottom: -0.3rem;
  }
`;

export const FileWrapper = styled.section`
  margin-top: 3rem;
  position: relative;
  margin-bottom: 1.5em;
  display: flex;
  justify-content: center;
  width: 80px;
  height: 70px;

  @media screen and (max-width: 960px) {
    margin-bottom: 1rem;
  }
`;

export const CustomWrapper = styled.div`
  position: relative;
  max-width: 90px;
  height: 46px;
  z-index: 2;
  cursor: pointer;
  opacity: 0;
  /* font-size: 20rem; */
`;
