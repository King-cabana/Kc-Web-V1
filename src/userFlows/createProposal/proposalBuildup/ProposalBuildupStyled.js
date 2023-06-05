import styled from "styled-components";
import Background from "../../images/budgetBackground.png";
 
export const OverallContainer = styled.section`
  width: 100%;
  height: 100%;
`;

export const ProposalContainer = styled.div`
  padding: 1rem 3rem;
  background-color: #fff;
  width: 100%;
//   height: 100%;

  @media screen and (max-width: 769px) {
    padding: 1rem;
    margin-top: 5%;
  }
`;

export const Txt = styled.span`
  font-size: 20px;
  line-height: 32px;
  color: #484848;
  font-weight: ${(props) => (props.fontWeight ? props.fontWeight : "700")};
  color: ${(props) => (props.color ? props.color : "#484848")};
  margin-right: 0.5rem;

  @media screen and (max-width: 769px) {
    font-size: 16px;
    line-height: 24px;
  }
`;

export const WelcomeHeader = styled.section`
  display: flex;
  align-items: center;
`;



export const ProposalBackground = styled.div`
  width: 100%;
  heigth: 100%;
  background-repeat: no-repeat;
  background: url(${Background});
  background-size: cover;
  background-repeat: no-repeat;
  height: max-content;
  padding: 1rem 2rem;
  padding-bottom: 10%;

  @media screen and (max-width: 769px) {
    padding: 1rem;
    padding-bottom: 20%;
 
  }
`;

export const ProposalInner = styled.form`
    width:100%;
    background-color:white;
    padding:1rem;
`

export const BenefitsTag = styled.button`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1px 24px;
  gap: 10px;
  color: #ff2957;
  width: 119px;
  height: 42px;
  height: 28px;
  border: 1px solid #ff2957;
  border-radius: 20px;
  background: transparent;
  @media screen and (max-width: 960px) {
    width: auto;
    height: 28px;
    font-size: 12px;
    padding: 1px 10px;
  }
`;

export const ProposalTagsWrapper = styled.section`
  display: grid;
  grid-template-columns: 1fr;
  row-gap: 10px; 
  

  @media screen and (max-width: 960px) {
    /* flex-direction: column; */
    grid-template-columns: 1fr;
  }
`;
