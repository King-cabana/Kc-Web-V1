import styled from "styled-components";
import background from "../../assets/images/clay-banks-POzx_amnWJw-unsplash.jpg";
import sponsorBackground from "../../assets/images/sponsorHero-min.jpeg";
import padlock from "../../assets/images/padlock.png"

export const HeroSection = styled.div`
  width: 100%;
  min-height: 100vh;
  background: url(${background});
  background-position: right;
  background-size: cover;
  background-repeat: no-repeat;

  @media screen and (max-width: 960px) {
    background-size: cover;
    background-position: right;
  }

  @media screen and (orientation: landscape) and (max-width: 960px) {
    width: 100%;
    height: 100vh;
  }
`;

export const SponsorHeroSection = styled(HeroSection)`
  background: url(${sponsorBackground});
  background-size: cover;
  background-repeat: no-repeat;
`;

export const BgOverlay = styled.div`
  height: 100vh;
  width: 100%;
  background: rgba(49, 38, 49, 0.8);

  @media screen and (orientation: landscape) and (max-width: 960px) {
    width: 100%;
    height: 100vh;
  }
`;

export const HeroHolder = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  color: #FFF;
  width: 100%;
  height: 100%;
  gap: 2rem;
  text-align: center;
  padding: 0rem 3rem;

  @media screen and (max-width: 790px) {
    padding: 0rem;
  }
`;

export const SecondSectionHolder = styled(HeroHolder)`
  justify-content: flex-start;
  color: #484848;
  padding: 2rem;

  @media screen and (max-width: 790px) {
    padding: 0rem;
    .second {
      padding: 2rem 1rem;
    }
  }
`;


export const SubSection = styled.div`
  background: #F6E9EC;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  width: 100%;
  height: 100%;
  flex-direction: column;
  gap: 1rem;
  padding: 3rem 2rem;
`;

export const UnlockContainer = styled(SubSection)`
  background: #FFF;
  flex-direction: row;
  justify-content: space-around;
  text-align: start;

  .padlock {
    width: 300px;
  }
  .others {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    gap: 1rem;
  }

  @media screen and (max-width: 768px) {
    flex-direction: column;
    text-align: center;
    .others {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 0.5rem;
  }
  }
`;

export const CardsSection = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 2rem;
  margin-bottom: 2rem;

  @media screen and (max-width: 768px) {
    flex-direction: column;
    margin-bottom: 1rem;
  }
`;

export const CardBorder = styled.section`
  width: 25%;
  height: 15rem;
  display: flex;
  padding: 30px 5px;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  gap: 50px;
  border-radius: 20px;
  border: 1px solid var(--accent, #F6E9EC);
  background:#FFF;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
  font-weight: 500;
    .icon {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 50px;
      height: 50px;
      border-radius: 50%;
      background: #FFBC15;
      color: #FFF;
    }
  
  @media screen and (max-width: 768px) {
    width: 100%;
    padding: 20px;
  }
  
`;

export const ContentHolder = styled.div`
  width: 100%;
  align-content: center;
  padding: 6% 8%;
  line-height: 2;
  align-items: center;

  h1 {
    color: white;
    padding-top: 70px;
    font-weight: bold;
    line-height: 1.5;
  }

  span {
    color: #ffbc15;
  }

  p {
    color: white;
  }

  @media screen and (max-width: 480px) {
    padding-top: 15%;
    display: block;
    width: 100vw;
    text-align: center;
    align-items: center;
    justify-content: center;
    line-height: 1.3;

    p {
      font-size: 14px;
    }

    span {
      color: #ffbc15;
      font-size: 36px;
    }
  }

  @media screen and (min-width: 481px) and (max-width: 960px) {
    text-align: center;
    /* padding-top: 15%; */
    display: block;
    width: fit-content;
    text-align: center;
    line-height: 1.3;
  }

  @media screen and (max-width: 670px) {
    .bottom {
      margin-top: 8rem;
    }
  }
  @media screen and (max-width: 480px) {
    .bottom {
      margin-top: 0rem;
    }
  }

  @media screen and (orientation: landscape) and (max-width: 960px) {
    width: 100%;
    padding-top: 0;
    padding: 5%;
    height: inherit;
    /* display: flex; */

    h1 {
      color: white;
      line-height: 1.2;
      font-size: 48px;
      padding-top: 10px;
    }
  }
`;

export const TypeTextHolder = styled.div`
  @media screen and (max-width: 480px) {
    height: 45vh;
  }

  @media screen and (min-width: 481px) and (max-width: 960px) {
    height: 35vh;
  }
`;

export const BtnHolder = styled.div`
  display: flex;
  padding-top: 5%;
  width: 20%;
  gap: 10px;
  justify-content: space-between;

  @media screen and (max-width: 960px) {
    display: flex;
    width: max-content;
    flex-direction: column;
    justify-content: center;
    align-content: center !important;
    justify-items: center !important ;
    margin: auto;
  }

  @media screen and (orientation: landscape) and (max-width: 960px) {
    width: 40%;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    gap: 10px;
  }
`;

export const EventButton = styled.button`
  height: 8vh;
  width: 11vw;
  border: 1.5px none;
  border-radius: 8px;
  background-color: #ff2957;
  color: white;
  cursor: pointer;
  font-weight: 600;

  &:hover {
    background-color: rgba(255, 41, 87, 0.8);
    color: white;
  }

  @media screen and (max-width: 960px) {
    width: 40vw;
    margin-bottom: 10%;
  }
`;

export const ContentSection = styled.div`
  width: 100%;
  height: 100vh;

  @media screen and (max-width: 960px) {
    height: max-content;
  }
`;

export const ContentSectionHeader = styled.h4`
  text-align: center;
  margin-top: 6%;
  color: #484848;
  font-size: 26px;
  font-weight: 600;
  margin-bottom: 4%;
`;

export const ContentSectionParagraph = styled.p`
  color: #484848;
  margin-left: 8%;
  font-weight: 500;
  font-size: 14px;
  align-self: flex-start;
  text-align: left;
  /* margin-left: 5%; */

  @media screen and (max-width: 960px) {
    font-size: small;
    text-align: center;
    margin-left: 0%;
    margin-top: 0%;
  }
`;

export const EventDisplaySection = styled.div`
  padding: 2% 6%;
  width: 100%;
  height: max-content;
  display: flex;
  flex-direction: column;
  justify-content: center;

  @media screen and (max-width: 480px) {
    margin-top: 10%;
  }
`;

export const EventCardHolder = styled.div`
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 20px;

  @media screen and (max-width: 480px) {
    display: block;
  }
`;

export const EventCard = styled.div`
  box-sizing: border-box;
  width: 26vw;
  height: 25vh;
  background: ${(props) => `url(${props.img})`};
  background-position: center;
  background-size: cover;
  border-radius: 5px;
  background-repeat: no-repeat;
  margin-bottom: 2%;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;

  @media screen and (max-width: 960px) {
    width: 90vw;
    margin-bottom: 4%;
    /* display: inline-block; */
    /* margin: 2%; */
  }

  @media screen and (orientation: landscape) and (max-width: 960px) {
    width: 100%;
  }
`;

export const ASContentSection = styled.div`
  width: 100%;
  height: 100vh;
  padding: 4% 8%;
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media screen and (max-width: 480px) {
    /* width: 100vw; */
    /* padding-top: 2%; */
    display: block;
    padding: 0;
    height: fit-content;
    font-size: 20px;
  }

  @media screen and (min-width: 481px) and (max-width: 960px) {
    /* width: 100vw; */
    /* padding-top: 2%; */
    display: block;
    padding: 0;
    height: fit-content;
  }
`;

export const ASContent = styled.div`
  width: 40vw;
  height: 60vh;
  padding: 2%;
  display: flex;
  justify-content: center;
  align-items: center;

  h4 {
    font-size: 32px;
    font-weight: 600;
    color: #484848;
  }

  p {
    margin-top: 10%;
    margin-bottom: 8%;
  }

  @media screen and (max-width: 480px) {
    width: 100vw;
    height: fit-content;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;

    h4 {
      font-size: 20px;
    }

    p {
      margin-top: 0;
    }
  }

  @media screen and (min-width: 481px) and (max-width: 960px) {
    width: 100vw;
    height: fit-content;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
  }
`;

export const ASSectionInner = styled.div`
  width: inherit;
  height: inherit;
  display: flex;
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media screen and (max-width: 960px) {
    margin-top: 10%;
    display: flex;
    flex-direction: column-reverse;
  }
`;

export const ASContentInner = styled.div`
  width: inherit;

  p {
    margin-top: 10%;
    margin-bottom: 8%;
  }

  @media screen and (max-width: 480px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 4%;

    h4 {
      font-size: 22px;
    }

    @media screen and (max-width: 480px) {
      display: flex;
      flex-direction: column;
      align-items: center !important;
      justify-content: center !important;
      padding: 4%;
    }
  }

  @media screen and (min-width: 480px) and (max-width: 960px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 4%;
  }
`;

export const ASImage = styled.div`
  /* width: 45%;
  height: 65vh; */
  width: 45%;
  height: 70vh;
  background: ${(props) => `url(${props.img})`};
  background-position: center;
  background-size: cover;
  border-radius: 12px;
  background-repeat: no-repeat;
  margin-right: 2.5%;

  @media screen and (max-width: 960px) {
    width: 90vw;
    height: 40vh;
    display: inline-block;
    margin: 2%;
  }
`;

export const SponsorSection = styled.div`
  width: 100%;
  height: 100vh;
  padding: 8%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;

  /* h4 {
    font-size: 26px;
    font-weight: 600;
    text-align: center;
    color: #484848;
  }

  p {
    font-size: 14px;
    align-self: flex-start;
    text-align: left;
    margin-left: 5%;
  } */

  @media screen and (max-width: 480px) {
    height: fit-content;
    text-align: center;

    h4 {
      font-size: 20px;
      text-align: center;
    }

    p {
      text-align: center;
      align-self: center;
      margin-top: 5%;
      margin-bottom: 2%;
    }
  }

  @media screen and (min-width: 481px) and (max-width: 960px) {
    /* width: 100vw; */
    display: block;
    padding: 0;
    height: fit-content;
    text-align: center;

    h4 {
      font-size: 26px;
      margin-top: 5%;
      font-weight: 600;
    }

    p {
      align-self: center;
      text-align: center;
      margin-left: 0;
      margin-top: 5%;
      margin-bottom: 5%;
    }
  }
`;

export const SponsorSectionInner = styled.div`
  width: inherit;
  height: 30vh;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 5%;

  @media screen and (max-width: 960px) {
    display: flex;
    flex-direction: column;
    height: fit-content;
    justify-content: center;
    align-items: center;
  }
`;

export const SponsorCard = styled.div`
  width: 32%;
  height: 30vh;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 2%;
  text-align: center;
  outline: 1px solid #f6e9ec;

  img {
    width: 40px;
    height: 40px;
  }

  p {
    margin-top: 2%;
    font-weight: 600;
    text-align: center;
    align-self: center;
  }

  img {
    width: 40px;
    height: 40px;
  }

  p {
    margin-top: 2%;
    font-weight: 600;
    text-align: center;
    align-self: center;
  }

  @media screen and (max-width: 480px) {
    width: 90vw;
    margin-bottom: 5%;
  }
  @media screen and (min-width: 481px) and (max-width: 960px) {
    width: 80vw;
    margin-bottom: 5%;
    padding: 2%;
  }
`;

export const NavButtonHolder = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100vw;
  margin-top: 2%;

  @media screen and (max-width: 960px) {
    width: 100vw;
  }
`;

export const TestimonialSection = styled.div`
  width: 100%;
  height: max-content;
  padding: 4% 8%;
  justify-content: space-between;
  align-items: center;
  background-color: #d2cedc;
  display: block;

  @media screen and (max-width: 960px) {
    height: fit-content;
    padding: 3%;
  }

  @media screen and (max-width: 960px) {
    height: fit-content;
    padding: 3%;
  }
`;

export const ReadySection = styled.div`
  width: 100%;
  height: 100vh;
  padding: 10%;
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media screen and (max-width: 960px) {
    display: flex;
    flex-direction: column;
    height: fit-content;
  }
`;

export const TestButton = styled.button`
  width: 143px;
  height: 56px;
  border-radius: 8px;
  background-color: #ff2957;
  color: white;
  border: 1px solid transparent;
  outline: none;
  cursor: pointer;
  font-weight: 600;

  &:hover {
    background-color: white;
    color: #ff2957;
    border: 1.5px solid #ff2957;
  }

  &:disabled {
    background-color: rgba(255, 41, 87, 0);
    color: white;
  }
`;

export const MetricsImagesContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
  color: #C4C4C4;

  @media screen and (max-width: 960px) {
    padding: 1rem;
  }

  img {
    display: none;
  }
  div {
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .showIcon {
    color: #FF2957;
    font-weight: 700;
  }
  .next {
    display: block;
    margin-bottom: 0.5rem;
    width: 90%;
    height: 100%;
    border-radius: 32px;
  }
`;

