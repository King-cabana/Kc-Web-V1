import { Heading, ButtonContainer } from "../eventPlanning/EventPlanningStyled";
import {
  NoEventContainer,
  WelcomeHeader,
  Txt,
  OverallContainer,
  ButtonLink,
} from "../emptyEvent/EmptyEventStyled";
import { BsChevronRight } from "react-icons/bs";
// import { PopUpOverlay } from "../eventHome/EventHomeStyled";
import { AbsolutePrimaryButton } from "../../components/buttons/button";
import HistoryDetails from "./HistoryDetails";

const FilledEventHistory = () => {
  return (
    <>
      <OverallContainer>
        <NoEventContainer>
          <WelcomeHeader>
            <Txt>Event</Txt>
            <BsChevronRight style={{ marginRight: "0.5rem" }} />
            <Txt fontWeight="400" color="#FF2957">
              History
            </Txt>
          </WelcomeHeader>

          <Heading>Event details</Heading>
          <HistoryDetails />

          <ButtonContainer>
            <ButtonLink to="/createEvent/eventDetails">
              <AbsolutePrimaryButton>Add Event History</AbsolutePrimaryButton>
            </ButtonLink>
          </ButtonContainer>
        </NoEventContainer>
      </OverallContainer>
    </>
  );
};

export default FilledEventHistory;
