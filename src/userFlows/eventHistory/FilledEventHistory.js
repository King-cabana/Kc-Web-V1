import { createContext, useEffect, useState } from "react";import { Heading, ButtonContainer } from "../eventPlanning/EventPlanningStyled";
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
import { encryptId } from "../../utils";
import { PopUpOverlay } from "../eventHome/EventHomeStyled";
import { useSelector } from "react-redux";
import EventHistorySidebar from "./EventHistorySidebar";


export const HistoryContext = createContext();

const FilledEventHistory = () => {
  const [modal, setModal] = useState(false);
  const [active, setActive] = useState([]);
  const [popUpVisibility, setPopUpVisibility] = useState([]);
  const [selectedEvent, setSelectedEvent] = useState(null);
  const eventsHistory = useSelector((state)=>state?.eventsHistory)
  // Modal Contitions
  if (modal) {
    document.body.classList.add("active-modal");
  } else {
    document.body.classList.remove("active-modal");
  }
  const encryptedId = encryptId(selectedEvent?.id);
  const shareDetails = {
    title: selectedEvent?.eventName,
    url: `/profile/previous-event/${encryptedId}`,
    text: selectedEvent?.eventTheme,
  };

  useEffect(()=>{
    setActive(eventsHistory?.map((data)=>({...data, selected: false})));
    setPopUpVisibility(eventsHistory?.map(()=>false));
  }, [eventsHistory])

  const handleApiClick = (data, index) => {
    // Passing a single data from active?.map((data, index)) into selectedEvent state
    setModal(true);
    setSelectedEvent(data);
    // Update the selected state of the clicked div
    setActive((prevActive) =>
      prevActive?.map((data, i) => {
        if (i === index) {
          return { ...data, selected: true };
        } else {
          return { ...data, selected: false };
        }
      })
    );
    // Show sidebar of the selevted div
    setPopUpVisibility((prevPopUpVisibility) =>
      prevPopUpVisibility.map((visibility, i) => index === i && !visibility)
    );
  };

  const handleOutsideClick = (e) => {
    if (
      popUpVisibility?.includes(true) &&
      !e?.target?.closest("#event-details-container")
    ) {
      setPopUpVisibility(active?.map(() => false));
      setModal(false);
    }
  };

  return (
    <HistoryContext.Provider
    value={{active, selectedEvent, handleApiClick, shareDetails}}>
    <>
    {modal && <PopUpOverlay onClick={handleOutsideClick}/>}
      <OverallContainer onClick={handleOutsideClick}>
        <NoEventContainer>
          <WelcomeHeader>
            <Txt>Event</Txt>
            <BsChevronRight style={{ marginRight: "0.5rem" }} />
            <Txt fontWeight="400" color="#FF2957">
              History
            </Txt>
          </WelcomeHeader>

          <Heading>Event History details</Heading>
          <HistoryDetails />

          <ButtonContainer>
            <ButtonLink to="/event/event-history">
              <AbsolutePrimaryButton>Add Event History</AbsolutePrimaryButton>
            </ButtonLink>
          </ButtonContainer>
        </NoEventContainer>

        {popUpVisibility.includes(true) && <EventHistorySidebar/>}
      </OverallContainer>
    </>
    </HistoryContext.Provider>
  );
};

export default FilledEventHistory;
