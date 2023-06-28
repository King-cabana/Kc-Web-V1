import Lottie from "lottie-react";
import animationData from "../../assets/lotties/no-event-history.json";
import {
  NoEventContainer,
  WelcomeHeader,
  Txt,
  NoContentText,
  NoEventCenter,
  OverallContainer,
  ButtonLink,
  LottieWrapper,
  HistoryPrimaryButton,
} from "../emptyEvent/EmptyEventStyled";
import { BsChevronRight } from "react-icons/bs";

const EmptyEventHistory = () => {
  return (
    <>
      <OverallContainer style={{ width: "100vw", height: "80vh" }}>
        <NoEventContainer>
          <WelcomeHeader>
            <Txt>Event</Txt>
            <BsChevronRight style={{ marginRight: "0.5rem" }} />
            <Txt fontWeight="400" color="#FF2957">
              History
            </Txt>
          </WelcomeHeader>
          <NoEventCenter
            style={{ width: "100%", height: "80%", marginTop: "-5rem" }}
          >
            <LottieWrapper>
              <Lottie
                animationData={animationData}
                loop={true}
                style={{ width: "150px", height: "150px" }}
              />
            </LottieWrapper>
            <NoContentText marginbottom="-8rem">
              Oops! <br /> You have no event history <br />
              Add event history to make your event experience more credible to
              potential sponsors
            </NoContentText>
          </NoEventCenter>
          <ButtonLink to="/createEvent/eventdetails">
            <HistoryPrimaryButton>Add Event History</HistoryPrimaryButton>
          </ButtonLink>
        </NoEventContainer>
      </OverallContainer>
    </>
  );
};

export default EmptyEventHistory;
