import styled from "styled-components";

export const FooterBody = styled.div`
  width: 100%;
  height: 65vh;
  background-color: #45346E;
  padding: 6% 9%;

  @media screen and (max-width: 480px) {
    display: flex;
    flex-direction: column;
    // width: fit-content;
    height: max-content;
    justify-content: center;
    align-items: center;
    justify-items: center;
    align-content: center;
    text-align: center;
  }

  @media screen and (min-width: 481px) and (max-width: 960px) {
    display: flex;
    flex-direction: column;
    width: fit-content;
    height: fit-content;
    justify-content: center;
    align-items: center;
    justify-items: center;
    align-content: center;
    text-align: center;
    padding: 2%;
  }
`;

export const FooterContent = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  height: fit-content;

  @media screen and (max-width: 480px) {
    display: flex;
    flex-direction: column;
    width: fit-content;
    height: max-content;
    justify-content: center;
    align-items: center;
    justify-items: center;
    align-content: center;
    text-align: center;
    position: relative;
  }

  @media screen and (min-width: 481px) and (max-width: 960px) {
    /* flex-direction: column; */
    width: 100%;
    height: fit-content;
    justify-content: space-between;
    align-items: center;
    justify-items: center;
    align-content: center;
    text-align: center;
    position: relative;
  }
`;

export const FooterInner = styled.div`
  color: white;
  width: 30%;
  height: 30vh;
  line-height: 2em;

  img {
    height: 40px;
    width: fit-content;
  }

  p,
  a {
    font-size: 14px;
    color: white;
    text-decoration: none;
  }

  @media screen and (max-width: 480px) {
    width: inherit;
    align-items: center;
    align-content: center;
    justify-content: center;
    justify-items: center;
    display: flex;
    flex-direction: column;
  }

  @media screen and (min-width: 481px) and (max-width: 960px) {
    width: fit-content;
    height: fit-content;
    text-align: left;
    padding: 1%;
    line-height: 1.5em;
  }
`;

export const IconHolder = styled.div`
  display: flex;
  width: 12vw;
  justify-content: space-between;
  margin-top: 5%;

  @media screen and (max-width: 480px) {
    width: 42vw;
  }

  @media screen and(min-width: 481px) and (max-width: 960px) {
    width: 42vw;
  }
`;
export const SocialIcon = styled.a`
  color: white;
  text-decoration: none;

  div {
    width: 28px;
    height: 28px;
    border-radius: 50%;
    border: 1px solid white;
    display: flex;
    justify-content: center;
    align-content: center;
    background-color: rgba(255, 255, 255, 0.2);
  }

  img {
    filter: invert(100%) sepia(100%) saturate(0%) hue-rotate(95deg)
      brightness(150%) contrast(105%);
    width: 20px;
    height: 15px;
    margin: auto;
  }
`;

export const FooterLinksHolder = styled.div`
  color: white;
  width: 20%;
  height: 30vh;

  p {
    font-size: 14px;
    color: #8A68DC;
    margin-bottom: 5%;
  }
  ul {
    list-style: none;
    line-height: 2.5em;
    font-size: 14px;
    cursor: pointer;
  }

  @media screen and (max-width: 480px) {
    width: inherit;
    margin-top: 5%;
    height: fit-content;
    margin-bottom: 5%;
  }

  @media screen and (min-width: 481px) and (max-width: 960px) {
    padding-top: 3vh;
    text-align: left;
    /* padding-left: 2%; */
  }
`;

export const EventButtonHolder = styled.div`
  width: 15vw;
  height: 20vh;

  @media screen and (max-width: 480px) {
    width: fit-content;
    justify-content: center;
    align-items: center;
    margin-top : 5%;
  }

  @media screen and (min-width: 481px) and (max-width: 960px) {
    width: 22%;
    justify-content: center;
    align-items: flex-end;
    display: flex;
    flex-direction: column;

    p {
      align-self: flex-start;
    }
  }
`;

export const DownloadIconHolder = styled.div`
  display:flex;
  gap:10px;

  @media screen and (max-width: 480px){
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    img{
      width: 50px;
    }
  }
`
export const EventButton = styled.button`
  height: 6vh;
  width: 8vw;
  border: 1.5px none;
  border-radius: 6px;
  background-color: #ff2957;
  color: white;
  cursor: pointer;
  font-weight: 500;
  display: inline-block;
  margin-top: 3%;
  margin-bottom: 3%;
  font-size: 12px;

  img {
    vertical-align: middle;
    filter: invert(100%) sepia(100%) saturate(0%) hue-rotate(95deg)
      brightness(103%) contrast(105%);
    width: 20px;
    height: 20px;
    margin: auto;
  }

  @media screen and (max-width: 480px) {
    padding: 1em;
    object-fit: contain;
    display: flex;
    margin: 6%;
    height: 7vh;
    line-height: 4vh;
    width: 30vw;
  }

  @media screen and (min-width: 481px) and (max-width: 960px) {
    width: 20vw;
    align-self: start;
  }
`;

export const FooterLine = styled.hr`
  width: 100vw;
  margin-right: auto;
  margin-left: auto;
  border-width: 0.5px;
  border-color: white;
  margin-top: 2%;
  margin-bottom: 1%;

  @media screen and (max-width: 480px) {
    margin-top: 6%;
  }
`;

export const BottomLogo = styled.div`
  color: white;
  align-items: center;
  display: flex;
  width: 100%;
  height: 5vh;
  justify-content: space-between;
  margin: auto;
  margin-top: 5%;

  @media screen and (max-width: 480px) {
    // width: 40%;
    margin-bottom: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  @media screen and(min-width: 481px) and (max-width: 960px) {
    width: 20vw;
  }
  @media screen and (min-width: 1281px) {
    width: 10%;
  }
`;
