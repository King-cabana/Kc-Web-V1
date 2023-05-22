import React from "react";
import Lottie from "lottie-react";
import animationData from "../../lotties/lf20_uqlolnxx-shaking-calendar.json";
import {
  NoEventContainer,
  WelcomeHeader,
  Txt,
  NoContentText,
  NoEventCenter,
  OverallContainer,
  ButtonLink,
  LottieWrapper,
  PrimaryButton,
} from "./EmptyEventStyled";
// import { OverallContainer } from "../eventHome/EventHomeStyled";
// import { WelcomeText } from "../eventHome/EventHomeStyled";
import { BsChevronRight } from "react-icons/bs";

const EmptyEvent = () => {
  return (
    <>
      <OverallContainer style={{ width: "100vw" }}>
        <NoEventContainer>
          <WelcomeHeader>
            <Txt>Event</Txt>
            <BsChevronRight style={{ marginRight: "0.5rem" }} />
            <Txt fontWeight="400" color="#FF2957">
              Planning
            </Txt>
          </WelcomeHeader>
          <NoEventCenter>
            <LottieWrapper>
              <Lottie
                animationData={animationData}
                loop={true}
                style={{ width: "90px", height: "90px" }}
              />
            </LottieWrapper>
            <NoContentText>You have no event created yet.</NoContentText>
          </NoEventCenter>
          <ButtonLink to="/createevent/eventdetails/1">
            <PrimaryButton>Create event</PrimaryButton>
          </ButtonLink>
        </NoEventContainer>
      </OverallContainer>
    </>
  );
};

export default EmptyEvent;
