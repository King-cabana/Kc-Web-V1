import styled, { createGlobalStyle } from "styled-components";
import { Link } from "react-router-dom";
import people from "./assets/images/people.jpg";
import computer from "./assets/images/computer.jpg";

//root & global styling
const GlobalStyle = createGlobalStyle`
*, body, html {
    box-sizing: border-box;
    margin: 0;
    padding: 0 ;
    font-family: 'Poppins', sans-serif;
    max-width: 100%;

}
`;

export const ModalOverlay = styled.div`
  width: 100%;
  height: 100vh;
  background: rgba(49, 49, 49, 0.8);
  align-items: center;
  justify-content: center;
  display: flex;
`;

export const AuthBackground = styled.div`
  width: 100%;
  height: 100vh;
  background: #fffcfc;
  align-items: center;
  justify-content: center;
  display: flex;

  /* @media screen and (max-width:'480px') {
    width: 100%;
  } */
`;

export const LongButton = styled.button`
  height: 7vh;
  background-color: #ff2957;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;

  &:disabled {
    background-color: rgba(255, 41, 87, 0.3);
    color: rgba(255, 255, 255, 0.3);
    outline: none;
    border: none;
  }
`;

export const SignInLink = styled(Link)`
  font-size: 12px;
  color: #c4c4c4;
  text-decoration: none;
  display: block;
  text-align: center;
  margin-top: 2%;

  span {
    text-decoration: underline;
    color: blue;
  }
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;

  label {
  
    margin-top: 3%;
  }

  textarea {
    height: 16vh;
    outline: 1px solid #c4c4c4;
    border-radius: 4px;
    padding: 3%;
    border: transparent;
    font-size: 10px;
    opacity: 50%;
  }
`;

export const InputFieldWrapper = styled.div`
  display: flex;
  height: 6vh;
  outline: 1px solid #c4c4c4;
  border-radius: 4px;
  /* margin-top: 2%; */

  input {
    height: inherit;
    width: 100%;
    border: none;
    outline: transparent;
    padding: 3%;
    background-color: transparent;
    font-size: 10px;
    opacity: 50%;
  }

  @media screen and (max-width: 960px) {
    input {
      width: 100%;
    }
  }
`;

export const RadioButtonWrapper = styled.div`
  display: flex;
  height: 6vh;
  outline: 1px solid rgba(0, 104, 255, 0.1);
  border-radius: 4px;
  align-items: center;
  padding: 1%;
  line-height: 2rem;
  margin: 0.5rem 1%;
`;
export const RadioButton = styled.input.attrs({
  type: "radio",
  //   value: 'Submit'
  // name: "name",
})`
  &:hover {
    cursor: pointer;
  }
`;

export const Valueholder = styled.div`
  height: inherit;
  width: fit-content;
  gap: 10px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const ChechkBox = styled.input.attrs({
  type: "checkbox",
})``;

export const InputOthers = styled.input`
  display: ${(props) => (props.display ? props.display : "none")};
  border: 1px solid rgba(0, 104, 255, 0.1);
  border-radius: 5px;
  padding: 10px;
  margin-top: 0.5rem;
  height: inherit;
  outline: transparent;
  width: 98%;
  font-size: 12px;
  margin-left: 1%;
`;

export const AnimationContainer = styled.div`
  width: 150px;
  height: 150px;
  display: block;
  margin-left: auto;
  margin-right: auto;

  @media screen and (max-width: 960px) {
  }
`;
export const CardHolder = styled.div`
  justify-content: space-between;
  padding-left: 8%;
  padding-top: 1%;
  width: 90vw;
  display: inline-flex;
  flex-wrap: wrap;
  gap: 3% 1%;

  @media screen and (max-width: 960px) {
    display: block;
    /* padding-left: 5% ; */
    row-gap: 2%;
  }

  @media screen and (orientation: landscape) and (max-width: 960px){
    background-color: red;
    width: 100%;
    display: inline-block;
  }
`;

export const ExploreMore = styled.div`
  display: flex;
  width: 25vw;
  justify-content: flex-end;
  align-content: center;
  padding: 1%;
  float: right;
  margin-right: 10%;
  /* margin-top: 1%;  */
  cursor: pointer;

  p {
    /* width: 40%; */
    color: #ffbc15;
    font-size: 18px;
    font-weight: 500;
  }

  @media screen and (max-width: 960px) {
    width: 50vw;

    svg {
      height: 20px;
      width: 20px;
    }

    p {
      /* width: 40%; */
      font-size: 11px;
    }
  }
`;

export const ImageDisplay = styled.div`
  width: 82vw;
  height: 50vh;
  border-radius: 7px;
  background: url(${people});
  background-position: center;
  background-size: 100%;
  background-repeat: no-repeat;
  margin: 2% 8%;
  align-items: center;
  justify-content: center;
  display: flex;

  p {
    text-align: center;
    font-size: 40px;
    color: white;
  }

  @media screen and (max-width: 960px) {
    height: 40vh;
    background-position: right;
    background-size: cover;

    p {
      font-size: 20px;
    }
  }
`;
export const ImageDisplayOverlay = styled.div`
  width: inherit;
  height: inherit;
  /* background:rgba(58, 45, 28, 0.6); */
  background: rgba(9, 12, 255, 0.3);
  border-radius: 7px;
  display: flex;
  align-items: center;
  justify-content: center;
`;
export const TCBody = styled.div`
  height: 55vh;
  width: 82vw;
  margin: 6% 8%;
`;

export const TCHead = styled.p`
  color: #ffbc15;
  padding-top: 2%;
  font-size: 20px;
  font-weight: 500;
`;
export const TCHolder = styled.div`
  display: flex;
  margin: 2%;
  width: 78.5vw;
  justify-content: space-between;

  @media screen and (max-width: 960px) {
    overflow: scroll;
    scroll-snap-type: x mandatory;
    gap: 3%;
  }
`;

export const ImageDisplayB = styled.div`
  width: 82vw;
  height: 50vh;
  border-radius: 7px;
  background: url(${computer});
  background-position: center;
  background-size: 100%;
  background-repeat: no-repeat;
  margin: 2% 8%;
  opacity: 150%;
  display: flex;
  flex-direction: column;
  align-content: center;
  justify-items: center;

  p {
    text-align: center;
    font-size: 24px;
    color: white;
  }

  @media screen and (max-width: 960px) {
    height: 40vh;
    background-position: center;
    background-size: cover;
    display: flex;
    flex-direction: column;
    align-content: center;
    justify-items: center;

    p {
      font-size: 12px;
      /* margin-top: 25%;   */
    }
  }
`;

export const ImageDisplayOverlayB = styled.div`
  /* width: inherit;  */
  height: inherit;
  background: rgba(9, 12, 255, 0.6);
  border-radius: 7px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const InputHolder = styled.div`
  /* margin-left:23%; */
  margin-top: 2%;
  width: inherit;
  gap: 1%;
  align-items: center;
  justify-content: center;
  display: flex;

  @media screen and (max-width: 960px) {
    /* width: 80vw; */
    align-items: center;
    justify-content: center;
    display: flex;
  }
`;

export const Input = styled.input`
  padding: 16px;
  font-size: 15px;
  color: white;
  width: 35vw;
  height: 7vh;
  background-color: transparent;
  border: 1.5px solid white;
  outline: transparent;
  border-radius: 3px;
`;
export const SubscribeButton = styled.button`
  width: 8vw;
  height: 7vh;
  border: none;
  background-color: #ff2957;
  border-radius: 3px;
  color: white;
  cursor: pointer;

  @media screen and (max-width: 960px) {
    width: 20vw;
  }
`;

export const WhatsApp = styled.div`
  height: 10vh;
  align-content: center;
  cursor: pointer;
  display: flex;
  margin: 2% 8%;
  justify-content: flex-end;
  align-content: center;
  padding: 1%;

  img {
    width: 55px;
    height: 55px;
  }

  @media screen and (max-width: 960px) {
    img {
      width: 35px;
      height: 35px;
    }
  }
`;
export const Div = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  font-size: 12px;
  justify-content: space-between;

  @media only screen and (max-width: 960px) {
    width: 100%;
  }
`;

export const Horizontal = styled.div`
  width: 40vw;
  height: 0.2vh;
  background-color: #c4c4c4;

  @media only screen and (max-width: 960px) {
    width: 70vw;
  }
`;

export const Or = styled.div`
  width: 50vw;
  color: #c4c4c4;
  display: flex;
  justify-content: center;
  align-items: center;

  @media only screen and (max-width: 960px) {
    width: 90vw;
    padding: 5%;
  }
`;

export const SocialIconsHolder = styled.div`
  border: 1px solid #d9d9d9;
  border-radius: 50px;
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;

  img {
    width: 20px;
    height: 20px;
  }

  @media only screen and (max-width: 960px) {
    display: flex;
    border: 1px solid #d9d9d9;
    border-radius: 50%;
    width: 40px;
    height: 40px;
    flex-direction: column;

    img {
      width: 20px;
      height: 20px;
    }
  }
`;

export default GlobalStyle;
