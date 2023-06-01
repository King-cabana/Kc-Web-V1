import React, { useState, useEffect } from "react";
import axios from "axios";
import {
  Page,
  Tags,
  Wrapper,
  HR,
  Like,
  Container,
  IconsContainer,
} from "../guestRegistration/GuestRegistrationStyled";
import { useNavigate, useParams, useLocation } from "react-router";
import banner from "../../../src/assets/images/bgBanner.jpg";
import { AiTwotoneCalendar, AiOutlineEdit } from "react-icons/ai";
import { RiDeleteBin5Line } from "react-icons/ri";
import { BsChevronRight, BsUpload } from "react-icons/bs";
import {
  BackgroundPicture,
  ImagesContainer,
} from "../eventHome/EventHomeStyled";
import {
  BudgetInventorySubtitle,
  BudgetSection,
  BudgetTitle1,
  BudgetTitle2,
  ButtonContainer,
} from "../createEvent/budgetInventory/BudgetStyled";
import {
  AbsolutePrimaryButton,
  AlternativeButton2,
} from "../../components/buttons/button";
import { API_URL_2 } from "../../redux/services/authService";
import { ImLocation, ImLink } from "react-icons/im";
import { toast } from "react-toastify";
import TopBar from "../topBar/dashboardTopBar/TopBar";
import { Txt, WelcomeHeader } from "../emptyEvent/EmptyEventStyled";
import { EditEventSpan, SECTION } from "./EventPlanningStyled";
import LoadingScreen from "../../LoadingScreen";
import { encryptId, decryptId, formatDate, formatTime } from "../../utils";

const ViewEvent = () => {
  const [event, setEvent] = useState();
  const [loading, setLoading] = useState(true);
  const [attendees, setAttendees] = useState("");
  const { id } = useParams();
  const navigate = useNavigate();
  const location = useLocation();
  const encryptedId = encryptId(event?.id);
  const decryptedId = decryptId(id);
  // console.log(decryptedId);
  const shareDetails = {
    title: event?.eventName,
    url: `/guestRegistration/${encryptedId}`,
    text: event?.eventTheme,
  };

  const eventTags = event?.tags.map((tag) => <ul key={tag}>{tag}</ul>);

  useEffect(() => {
    const fetchEvent = async () => {
      try {
        const { data } = await axios.get(API_URL_2 + `events/${decryptedId}`);
        setEvent(data);

        const response2 = await axios.get(
          API_URL_2 + `attendee/event/size?id=${decryptedId}`
        );
        // console.log(response2.data);
        setAttendees(response2.data);
      } catch (error) {
        if (error?.response?.status === 400) {
          navigate("/*");
          toast.error("Event Does Not Exist");
          console.log("Event Does Not Exist");
        }
        throw error;
      } finally {
        setLoading(false);
      }
    };
    fetchEvent();
  }, [decryptedId]);

  return (
    <>
      <TopBar />
      {loading ? (
        <LoadingScreen />
      ) : (
        <Page style={{ marginTop: "5rem" }}>
          <WelcomeHeader style={{ marginBottom: "0.2rem" }}>
            <Txt>Event</Txt>
            <BsChevronRight style={{ marginRight: "0.5rem" }} />
            <Txt fontWeight="400" onClick={() => navigate("/event/planning")}>
              Planning
            </Txt>
            <BsChevronRight style={{ marginRight: "0.5rem" }} />
            <Txt fontWeight="400" color="#FF2957">
              View Event
            </Txt>
          </WelcomeHeader>

          {/* {location.pathname === `/event/planning/view-draft-event/${id}` ? (
          <BudgetInventorySubtitle style={{ marginBottom: "0.5rem" }}>
            Your event is still a draft. Would you like to make updates?{" "}
            <EditEventSpan>Edit Event</EditEventSpan>
          </BudgetInventorySubtitle>
        ) : null} */}
          {/* {location.pathname ===
          `/event/planning/view-completed-event/${id}` ? ( */}
          <Container
            style={{ marginBottom: "0.5rem", justifyContent: "flex-end" }}
          >
            {/* <BudgetInventorySubtitle style={{ color: "#0068FF" }}>
                Completed Event
              </BudgetInventorySubtitle> */}
            <AlternativeButton2>Generate Proposal</AlternativeButton2>
          </Container>
          {/* ) : null} */}

          <ImagesContainer>
            <BackgroundPicture
              src={event?.eventBannerUrl ? event?.eventBannerUrl : banner}
              alt="Background Picture"
            />
          </ImagesContainer>

          <BudgetSection>
            <BudgetTitle1>
              {event?.eventName ? event?.eventName : "Event Name"}
            </BudgetTitle1>

            <BudgetInventorySubtitle>
              Theme: {event?.eventTheme ? event?.eventTheme : ""}
            </BudgetInventorySubtitle>
            <BudgetTitle2>Event description</BudgetTitle2>
            <BudgetInventorySubtitle style={{ marginBottom: "0.8rem" }}>
              {event?.eventDescription ? event?.eventDescription : ""}
            </BudgetInventorySubtitle>

            <BudgetTitle2 style={{ marginBottom: "0.8rem" }}>
              <Container>
                Event Organizer: {event?.fullName ? event?.fullName : ""}
              </Container>
              <IconsContainer>
                <Like marginRight="1rem">
                  <AiOutlineEdit />
                </Like>
                {/* {location.pathname ===
                `/event/planning/view-completed-event/${id}` ? ( */}
                <Like marginRight="1rem">
                  <BsUpload
                    onClick={() => {
                      window.navigator.share(shareDetails);
                    }}
                  />
                </Like>
                {/* ) : null} */}
                <Like>
                  <RiDeleteBin5Line />
                </Like>
              </IconsContainer>
            </BudgetTitle2>
            <HR />

            <SECTION>
              <div>
                <BudgetTitle2>Estimated Attendance</BudgetTitle2>
                <BudgetInventorySubtitle style={{ marginBottom: "1rem" }}>
                  {event?.estimatedAttendance
                    ? event?.estimatedAttendance
                    : "---"}
                </BudgetInventorySubtitle>
              </div>
              {/* {location.pathname ===
                `/event/planning/view-completed-event/${id}` && ( */}
              <div>
                <BudgetTitle2>Number of Registered Guests</BudgetTitle2>
                <BudgetInventorySubtitle style={{ marginBottom: "1rem" }}>
                  {attendees}
                </BudgetInventorySubtitle>
              </div>
              {/* )} */}
            </SECTION>

            <Wrapper>
              <AiTwotoneCalendar color="#FF2957" size="1.5em" />
              <BudgetTitle2>Date and Time</BudgetTitle2>
            </Wrapper>
            <BudgetInventorySubtitle style={{ marginBottom: "1rem" }}>
              {event?.eventStartDate
                ? formatDate(event?.eventStartDate) + ". "
                : "---"}
              {event?.eventStartTime
                ? formatTime(event?.eventStartTime)
                : "---"}
            </BudgetInventorySubtitle>

            <Wrapper>
              <ImLocation color="#FF2957" size="1.5em" />
              <BudgetTitle2>Location</BudgetTitle2>
            </Wrapper>
            {event?.eventAddress ? (
              <BudgetInventorySubtitle style={{ marginBottom: "1rem" }}>
                {event?.eventAddress?.houseNo},{event?.eventAddress?.street},
                {event?.eventAddress?.city},{event?.eventAddress?.state}.
                {event?.eventAddress?.country}.
              </BudgetInventorySubtitle>
            ) : (
              "---"
            )}

            <Wrapper>
              <ImLink color="#FF2957" size="1.5em" />
              <BudgetTitle2>Event Link</BudgetTitle2>
            </Wrapper>
            <BudgetInventorySubtitle style={{ marginBottom: "1rem" }}>
              {event?.eventLink ? event.eventLink : "---"}
            </BudgetInventorySubtitle>

            <BudgetTitle2>Tags</BudgetTitle2>

            <Tags style={{ padding: "1% 0%" }}>
              {event?.tags?.length > 0 ? eventTags : "---"}
            </Tags>
          </BudgetSection>

          <ButtonContainer style={{ margin: "0rem" }}>
            <AbsolutePrimaryButton onClick={() => navigate("/event/planning")}>
              Back
            </AbsolutePrimaryButton>
          </ButtonContainer>
        </Page>
      )}
    </>
  );
};

export default ViewEvent;
