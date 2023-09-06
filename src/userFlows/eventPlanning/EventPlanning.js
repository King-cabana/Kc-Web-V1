import React, { createContext, useState, useEffect } from "react";
import axios from "axios";
import { Heading, ButtonContainer } from "./EventPlanningStyled";
import EventDetailsSidebar from "./EventDetailsSidebar";
import {
  NoEventContainer,
  WelcomeHeader,
  Txt,
  OverallContainer,
  ButtonLink,
} from "../emptyEvent/EmptyEventStyled";
import { BsChevronRight } from "react-icons/bs";
import EventDetails from "./EventDetails";
import { PopUpOverlay } from "../eventHome/EventHomeStyled";
import { AbsolutePrimaryButton } from "../../components/buttons/button";
import { API_URL_2 } from "../../redux/services/authService";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import { setEventCreated } from "../../redux/slices/eventCreatedSlice";
import { encryptId } from "../../utils";

export const EventContext = createContext();

const EventPlanning = () => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.userDetails);
  const event = useSelector((state) => state.eventCreated);
  const organizer = useSelector((state) => state.eventOrganizerProfile);
  const [modal, setModal] = useState(false);
  const [active, setActive] = useState([]);
  const [popUpVisibility, setPopUpVisibility] = useState([]);
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [loading, setLoading] = useState(true);
  // Modal Contitions
  if (modal) {
    document.body.classList.add("active-modal");
  } else {
    document.body.classList.remove("active-modal");
  }
  const encryptedId = encryptId(selectedEvent?.id);
  const shareDetails = {
    title: selectedEvent?.eventName,
    url: `/guestRegistration/${encryptedId}`,
    text: selectedEvent?.eventTheme,
  };

  useEffect(() => {
    // console.log(organizer);
    // console.log(event);
    const fetchOrganizerEvents = async () => {
      try {
        const { data } = await axios.get(
          API_URL_2 + `events/organizer-profile/${organizer?.id}`,
          {
            headers: {
              Authorization: `Bearer ${user?.token}`,
            },
          }
        );
        const reversedData = data.reverse();
        console.log(data);
        dispatch(setEventCreated(reversedData));
        setActive(reversedData?.map((data) => ({ ...data, selected: false })));
        setPopUpVisibility(reversedData?.map(() => false));
      } catch (error) {
        console.log(error);
        toast.error(error.message);
      } finally {
        setLoading(false);
      }
    };
    fetchOrganizerEvents();
  }, [organizer?.id]);

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
    <EventContext.Provider
      value={{ active, selectedEvent, handleApiClick, shareDetails, loading }}
    >
      {modal && <PopUpOverlay onClick={handleOutsideClick} />}
      <OverallContainer onClick={handleOutsideClick}>
        <NoEventContainer>
          <WelcomeHeader>
            <Txt>Event</Txt>
            <BsChevronRight style={{ marginRight: "0.5rem" }} />
            <Txt fontWeight="400" color="#FF2957">
              Planning
            </Txt>
          </WelcomeHeader>

          <Heading>Event details</Heading>
          <EventDetails />

          <ButtonContainer>
            <ButtonLink to="/createevent/eventdetails">
              <AbsolutePrimaryButton>Create event</AbsolutePrimaryButton>
            </ButtonLink>
          </ButtonContainer>
        </NoEventContainer>

        {popUpVisibility.includes(true) && <EventDetailsSidebar />}
      </OverallContainer>
    </EventContext.Provider>
  );
};
export default EventPlanning;
