import styled from "styled-components";
import budgetBackground from "../../images/budgetBackground.png";

export const ContactInfoContainer = styled.div`
  width: 100%;
  height: 100%;
  padding: 2rem;
  background: url(${budgetBackground});

  @media screen and (max-width: 960px) {
    padding: 1rem;
  }
`;

export const ContactInfoHeader = styled.div`
  max-width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin: 20px 1rem;

  @media screen and (max-width: 960px) {
    margin: 7px 0.5rem;
    margin-bottom: 15px;
  }
`;
export const ContactInfoTitle1 = styled.h1`
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

export const ContactInfoTitle2 = styled.h1`
  /* width: 100%; */
  /* height: 100%; */
  font-weight: 700;
  font-size: 24px;
  line-height: 32px;

  color: #484848;

  @media screen and (max-width: 960px) {
    font-size: 14px;
    line-height: 20px;
  }
`;

export const ContactInfoSubtitle = styled.p`
  /* width: 100%; */
  /* height: 100%; */
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  color: #484848;
  margin-top: 15px;

  @media screen and (max-width: 960px) {
    font-size: 12px;
    line-height: 18px;
    margin-top: 5px;
  }
`;

export const ContactInfoSection = styled.section`
  /* height: 100%; */
  /* width: 100%; */
  max-width: 100%;
  margin: 1rem;
  margin-bottom: 8rem;
  padding: 2rem;
  background: #fff;

  @media screen and (max-width: 960px) {
    padding: 0.5rem;
    margin: 0.5rem;
    margin-bottom: 5rem;
  }
`;

// export const ContactInfoSubtitle = styled.p`
//   width: 100%;
//   height: 100%;
//   font-weight: 500;
//   font-size: 18px;
//   line-height: 28px;
//   display: flex;
//   align-items: center;
//   color: #484848;

//   @media screen and (max-width: 960px) {
//     font-size: 12px;
//     line-height: 18px;
//   }
// `;
export const ContactInfoUpload = styled.section`
  display: flex;
  flex-direction: column;
  /* margin-top: 1.5rem; */
  padding: 0 1rem;

  @media screen and (max-width: 960px) {
    padding: 1rem 0;
    margin-top: 0;
  }
`;
export const ContactInfoLabel = styled.label`
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  color: #484848;
  margin-top: 15px;

  @media screen and (max-width: 960px) {
    font-size: 12px;
    line-height: 18px;
    margin-top: 5px;
  }
`;

export const ContactInfoInput = styled.input`
  border: 1px solid rgba(0, 104, 255, 0.1);
  border-radius: 10px;
  padding: 10px;
  margin-top: 0.5rem;

  @media screen and (max-width: 960px) {
    padding: 5px;
  }
`;

export const ContactInfoPadding = styled.section`
  padding: 1rem;
  display: flex;
  flex-direction: column;

  @media screen and (max-width: 960px) {
    padding: 0;
  }
`;

export const Radio = styled.section`
  margin-bottom: 2px;
  border: 1px solid rgba(0, 104, 255, 0.1);
  border-radius: 10px;
  padding: 10px 20px;
  display: flex;
  align-items: center;
  cursor: pointer;

  @media screen and (max-width: 960px) {
    padding: 7px 10px;
  }
`;

export const RadioInput = styled.input`
  border: 1px solid rgba(0, 104, 255, 0.1);
  border-radius: 10px;
  padding: 10px;
`;

export const RadioLabel = styled.label`
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  margin-left: 2rem;
  color: #484848;

  @media screen and (max-width: 960px) {
    font-size: 12px;
    line-height: 18px;
    margin-left: 0.5rem;
  }
`;

export const OthersInput = styled.input`
  display: ${(props) => (props.display ? props.display : "none")};
  border: 1px solid rgba(0, 104, 255, 0.1);
  border-radius: 10px;
  padding: 10px;
  margin-top: 0.5rem;
`;
