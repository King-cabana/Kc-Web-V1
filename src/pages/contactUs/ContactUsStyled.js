import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  /* height: 100%; */
  /* border: 5px solid black; */
  padding: 0% 10%;
`;
export const ContainerBox = styled.div`
  margin-top: 20px;
`;

export const ContactLabel = styled.label`
  font-weight: 400;
  font-size: 24px;
  line-height: 21px;

  @media screen and (max-width: 960px) {
    font-size: 12px;
    line-height: 21px;
  }
`;

export const NoDecorationLink = styled.a`
  cursor: pointer;
  text-decoration: none;
`;

export const ContactMobile = styled.div`
  /* @media screen and (max-width:960px){
display: flex;
flex-direction: column;
align-items: flex-start;
padding: 0px 20px;
gap: 19px;
width: 361px;
height: 137px;
} */
`;

export const ContactBody = styled.div`
  /* width: 100%; */
  /* border: 5px solid red; */
  /* padding:1% 1%; */
  padding-left: 50px;
  margin-bottom: 10px;
  display: flex;
  justify-content: space-around;
  align-items: center;

  @media screen and (max-width: 960px) {
    flex-direction: column;
    /* padding-left: 20px; */
  }
`;

export const ContactRight = styled.div`
  width: 50%;
  padding: 1% 5%;
  @media screen and (max-width: 960px) {
    width: 100%;
    padding-top: 5%;
  }
`;

export const ContactHeader = styled.h1`
  font-family: "Poppins";
  font-weight: 700;
  font-size: 48px;
  color: #484848;
  width: 100%;
  margin-bottom: 5px;
  display: flex;
  align-items: center;

  @media screen and (max-width: 960px) {
    font-size: 32px;
  }
`;
export const Wrapper = styled.section`
  width: 50%;
  @media screen and (max-width: 960px) {
    width: 100%;
  }
`;

export const ContactParagraph = styled.p`
  font-family: "Poppins";
  font-style: normal;
  font-weight: 400;
  font-size: 24px;
  line-height: 30px;
  color: #484848;
  margin-bottom: 50px;

  @media screen and (max-width: 960px) {
    font-size: 14px;
    line-height: 20px;
    margin-bottom: 20px;
  }
`;

export const ContactLogoBody = styled.div`
  width: auto;
  height: auto;
`;
export const EmailBody = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 30px;

  @media screen and (max-width: 960px) {
    width: 100%;
    margin-bottom: 2px;
  }
`;

export const EmailIcon = styled.div`
  width: 36px;
  height: 36px;
  border-radius: 50%;
  background-color: #f6e9ec;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 20px;
  color: #ffbc15;

  @media screen and (max-width: 960px) {
    width: 40px;
    height: 40px;
    margin-right: 10px;
  }
`;

export const EmailText = styled.p`
  font-family: "Poppins";
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 18px;
  color: #ffbc15;
  text-align: center;
  margin-right: 20px;

  @media screen and (max-width: 960px) {
    font-size: 10px;
    margin-right: 10px;
  }
`;

export const EmailIconArrow = styled.div`
  color: #ffbc15;
  height: 22px;
  @media screen and (max-width: 960px) {
    margin-bottom: 7px;
  }
`;

export const PhoneLogo = styled.div`
  width: 36px;
  height: 36px;
  border-radius: 50%;
  background-color: #f6e9ec;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 20px;
  color: #ffbc15;

  @media screen and (max-width: 960px) {
    width: 40px;
    height: 40px;
    margin-right: 10px;
  }
`;
export const PhoneBody = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
  @media screen and (max-width: 960px) {
    width: 100%;
    margin-bottom: 0px;
  }
`;

export const PhoneText = styled.p`
  font-family: "Poppins";
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 18px;
  text-align: center;
  color: #ffbc15;
  margin-right: 30px;

  @media screen and (max-width: 960px) {
    font-size: 10px;
    margin-right: 10px;
    text-align: center;
  }
`;

export const PhoneIconArrow = styled.div`
  color: #ffbc15;
  height: 22px;
  @media screen and (max-width: 960px) {
    height: 15px;
    /* padding: 0% 2%; */
    margin-bottom: 15px;
  }
`;

export const ContactLeft = styled.div`
  width: 100%;
  /* img{
  
} */
`;

export const ContactGif = styled.div`
  width: 100%;
  /* height: 100%; */
  /* background-color: red; */
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 40px;
  margin-left: 150px;
  margin-right: 150px;
  /* width: 100%; */

  @media screen and (max-width: 1000px) {
    width: 100%;
    margin: auto;
  }
`;

export const ContactInfo = styled.h1`
  font-family: "Poppins";
  font-style: normal;
  font-weight: 600;
  font-size: 44px;
  line-height: 54px;
  color: #484848;

  @media screen and (max-width: 960px) {
    font-size: 20px;
    line-height: 30px;
  }
`;

export const ContactText = styled.p`
  font-family: "Poppins";
  font-weight: 400;
  font-size: 18px;
  line-height: 21px;
  display: flex;
  align-items: center;
  color: #000000;

  @media screen and (max-width: 960px) {
    font-size: 12px;
    line-height: 18px;
  }
`;
export const ContactInfoBody = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 15px;
  gap: 25px;
  width: 100%;
  height: 126px;
`;

export const InputInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0px;
  gap: 24px;
  width: 100%;
  height: 100%;
  margin-bottom: 10rem;

  input::placeholder {
    font-size: 16px;
    line-height: 21px;
    letter-spacing: -0.3%;
    @media screen and (max-width: 960px) {
      font-size: 12px;
    }
  }
  label {
    font-family: "Poppins";
    font-style: normal;
    font-weight: 400;
    font-size: 24px;
    line-height: 21px;
    display: flex;
    align-items: center;
    letter-spacing: -0.3%;
    color: #000000;
    margin-bottom: 10px;

    @media screen and (max-width: 960px) {
      font-size: 16px;
    }
  }

  button {
    margin-top: 5%;
    height: 7vh;
    background-color: #ff2957;
    color: white;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    width: 100%;

    &:disabled {
      background-color: rgba(255, 41, 87, 0.3);
      color: rgba(255, 255, 255, 0.3);
    }
  }
  @media screen and (max-width: 960px) {
    margin-bottom: 5rem;
  }
`;
export const AnimationContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 50%;
  padding: 1% 10%;
  @media screen and (max-width: 960px) {
    width: 100%;
    order: -1;
  }
`;

export const InputBoxLabel = styled.div`
  margin-bottom: 20px;
  width: 100%;
`;

export const InputBox = styled.div`
  input {
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 15px;
    gap: 10px;
    width: 100%;
    height: 80px;
    border: 1px solid rgba(0, 104, 255, 0.1);
    outline: none;
    border-radius: 10px;

    &:invalid {
      border-left: 2px solid red;
      border-right: 2px solid red;
    }
    &:valid {
      border: 1px solid rgba(0, 104, 255, 0.1);
    }

    @media screen and (max-width: 960px) {
      width: 100%;
      height: 60px;
    }
  }

  textarea {
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    padding: 15px;
    gap: 10px;
    width: 100%;
    height: 100px;
    background: #ffffff;
    border: 1px solid rgba(72, 72, 72, 0.1);
    border-radius: 10px;
  }
`;

export const Box = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  background: #fef5f7;
  justify-content: center;
  align-items: center;
`;
export const BoxContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  padding: 5rem;

  img {
    width: 450px;
    height: 450px;
    border-radius: 20px;
    /* margin-left: 30px; */

    @media screen and (max-width: 960px) {
      width: 250px;
      height: 250px;
    }
  }

  @media screen and (max-width: 960px) {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;

    padding: 4rem 1rem;
  } ;
`;

export const BoxBody = styled.div`
  display: flex;
  flex-direction: column;
  width: 50%;

  @media screen and (max-width: 1200px) {
    margin-left: 4rem;
  }
  @media screen and (max-width: 960px) {
    height: max-content;
    justify-content: center;
    align-items: center;
    text-align: center;
    margin-left: 0rem;
    width: 80%;
  }
`;

export const BoxHeader = styled.h1`
  font-family: "Poppins";
  font-style: normal;
  font-weight: 600;
  font-size: 48px;
  line-height: 54px;
  color: #484848;
  margin-bottom: 1.5rem;

  @media screen and (max-width: 960px) {
    font-size: 32px;
    line-height: 40px;
    margin: 1rem 0rem;
  }
`;

export const BoxParagraph = styled.p`
  font-family: "Poppins";
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 30px;
  color: #484848;

  @media screen and (max-width: 960px) {
    font-size: 14px;
    line-height: 20px;
    margin-bottom: 1rem;
  }
`;

export const BoxLogo = styled.div`
  /* position: absolute; */
`;
export const IconHolder = styled.div`
  display: flex;
  width: 12%;
  justify-content: space-between;
  margin-top: 5%;
  @media screen and (max-width: 960px) {
    /* width: 100%; */
    /* margin-left:50px; */
    margin-right: 120px;
  }
`;

export const SocialIcon = styled.a`
  color: black;
  text-decoration: none;
  margin-right: 10px;
  margin-bottom: 20px;

  div {
    width: 34.88px;
    height: 33.88px;
    border-radius: 50%;
    border: 1.125px solid #484848;
    display: flex;
    justify-content: center;
    align-content: center;
    background-color: rgba(255, 255, 255, 0.3);
  }

  img {
    width: 16px;
    height: 24px;
    margin: auto;
  }
`;

export const Location = styled.div`
  width: 100%;
  height: 100%;
`;
export const LocationCenter = styled.div`
  padding: 10rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  /* gap: 25px; */

  @media screen and (max-width: 960px) {
    width: 100%;
    padding: 5rem;
  }
`;

export const LocationHeader = styled.h1`
  font-family: "Poppins";
  font-weight: 600;
  font-size: 36px;
  line-height: 44px;
  margin-bottom: 1.5rem;
  @media screen and (max-width: 960px) {
    font-size: 24px;
    line-height: 32px;
    margin-bottom: 0.5rem;
  }
`;

export const LocationText = styled.p`
  font-family: "Poppins";
  font-weight: 400;
  font-size: 18px;
  line-height: 28px;

  @media screen and (max-width: 960px) {
    font-size: 12px;
    line-height: 18px;
  }
`;
