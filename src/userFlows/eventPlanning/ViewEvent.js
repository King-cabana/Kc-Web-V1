import React, { useState, useEffect } from "react";
import axios from "axios";
import {
  Page,
  Tags,
  Wrapper,
  Like,
  Container,
  IconsContainer,
} from "../guestRegistration/GuestRegistrationStyled";
import { useNavigate, useParams } from "react-router";
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
} from "../createProposal/budgetInventory/BudgetStyled";
import {
  AbsolutePrimaryButton,
  AlternativeButton2,
} from "../../components/buttons/button";
import { API_URL_2 } from "../../redux/services/authService";
import { ImLocation, ImLink } from "react-icons/im";
import { toast } from "react-toastify";
import TopBar from "../topBar/dashboardTopBar/TopBar";
import { Txt, WelcomeHeader } from "../emptyEvent/EmptyEventStyled";
import {
  Partition,
  Partition1,
  Partition2,
  SECTION,
  Display,
  SwitchView,
} from "./EventPlanningStyled";
import LoadingScreen from "../../LoadingScreen";
import { encryptId, decryptId, formatDate, formatTime } from "../../utils";
import SponsorshipDetails from "./SponsorshipDetails";

const ViewEvent = () => {
  const [event, setEvent] = useState();
  const [loading, setLoading] = useState(true);
  const [attendees, setAttendees] = useState("");
  const [switchView, setSwitchView] = useState(1);
  const infoEvent = switchView === 1;
  const infoSponsor = switchView === 2;
  const handleEvent = () => setSwitchView(1);
  const handleSponsor = () => setSwitchView(2);
  const { id } = useParams();
  const navigate = useNavigate();
  const encryptedId = encryptId(event?.id);
  const decryptedId = decryptId(id);
  // console.log(decryptedId);
  // console.log(id);
  // console.log(event?.id);
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
        console.log(data);

        const response2 = await axios.get(API_URL_2 + `attendee/event/size?id=${decryptedId}`);
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
  }, [decryptedId, navigate]);

  return (
    <>
      <TopBar />
      {loading ? (
        <LoadingScreen />
      ) : (
        <Page style={{ marginTop: "4.2rem" }}>
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
        
          <Container style={{ marginBottom: "0.5rem", justifyContent: "flex-end" }}>
            {Object.keys(event?.generalProposals)?.length === 0 && (
            <AlternativeButton2 onClick={() => navigate(`/generateproposal/${encryptId(event?.id)}`)}>
              Generate Proposal
            </AlternativeButton2>
            )}
          </Container>
        

          <ImagesContainer>
            <BackgroundPicture
              src={event?.eventBannerUrl ? event?.eventBannerUrl : banner}
              alt="Background Picture"
            />
          </ImagesContainer>

          <BudgetSection>
            <IconsContainer>
              <Like marginright="1rem">
                <AiOutlineEdit />
              </Like>

              <Like marginright="1rem">
                <BsUpload
                  onClick={() => {
                    window.navigator.share(shareDetails);
                  }}
                />
              </Like>
              <Like>
                <RiDeleteBin5Line />
              </Like>
            </IconsContainer>
            {Object.keys(event?.generalProposals)?.length > 0 && (
            <SwitchView>
              <article onClick={handleEvent} className={infoEvent ? "switch" : ""}>
                <BudgetInventorySubtitle style={{fontWeight: "600"}}>
                    Event Details
                </BudgetInventorySubtitle>
              </article>
              <article onClick={handleSponsor} className={infoSponsor ? "switch" : ""}>
                <BudgetInventorySubtitle style={{fontWeight: "600"}}>
                    Sponsorship Details
                </BudgetInventorySubtitle>
              </article>
            </SwitchView>
            )} 

            <Partition display={infoEvent ? "flex" : "none"}>
              <Partition1>
                <BudgetTitle1>Event Name</BudgetTitle1>
                <BudgetInventorySubtitle style={{ marginBottom: "0.3rem" }}>
                  {event?.eventName ? event?.eventName : "Event Name"}
                </BudgetInventorySubtitle>

                <BudgetTitle2>Theme</BudgetTitle2>
                <BudgetInventorySubtitle style={{ marginBottom: "0.3rem" }}>
                  {event?.eventTheme ? event?.eventTheme : ""}
                </BudgetInventorySubtitle>
                <BudgetTitle2>Description</BudgetTitle2>
                <BudgetInventorySubtitle style={{ marginBottom: "0.3rem" }}>
                  {event?.eventDescription ? event?.eventDescription : ""}
                </BudgetInventorySubtitle>
                <BudgetTitle2>Organiser</BudgetTitle2>
                <BudgetInventorySubtitle style={{ marginBottom: "0.3rem" }}>
                  {event?.fullName ? event?.fullName : ""}
                </BudgetInventorySubtitle>

                <SECTION>
                  <div>
                    <BudgetTitle2>Estimated Attendance</BudgetTitle2>
                    <BudgetInventorySubtitle style={{ marginBottom: "0.5rem" }}>
                      {event?.estimatedAttendance
                        ? event?.estimatedAttendance
                        : "---"}
                    </BudgetInventorySubtitle>
                  </div>
                  <div>
                    <BudgetTitle2>Registered Guests</BudgetTitle2>
                    <BudgetInventorySubtitle style={{ marginBottom: "0.5rem" }}>
                      {attendees}
                    </BudgetInventorySubtitle>
                  </div>
                </SECTION>

                <Display>
                  <Wrapper gap="0.5em">
                    <AiTwotoneCalendar color="#FF2957" size="1em" />
                    <BudgetTitle2>Date and Time</BudgetTitle2>
                  </Wrapper>
                  <BudgetInventorySubtitle style={{ marginBottom: "0.5rem" }}>
                    {event?.eventStartDate
                      ? formatDate(event?.eventStartDate) + ". "
                      : "---"}
                    {event?.eventStartTime
                      ? formatTime(event?.eventStartTime)
                      : "---"}
                  </BudgetInventorySubtitle>

                  <Wrapper gap="0.5em">
                    <ImLocation color="#FF2957" size="1em" />
                    <BudgetTitle2>Address</BudgetTitle2>
                  </Wrapper>
                  {event?.eventAddress ? (
                    <BudgetInventorySubtitle style={{ marginBottom: "0.5rem" }}>
                      {event?.eventAddress?.houseNo},
                      {event?.eventAddress?.street},{event?.eventAddress?.city},
                      {event?.eventAddress?.state}.
                      {event?.eventAddress?.country}.
                    </BudgetInventorySubtitle>
                  ) : (
                    "---"
                  )}

                  <Wrapper gap="0.5em">
                    <ImLink color="#FF2957" size="1em" />
                    <BudgetTitle2>Virtual Link</BudgetTitle2>
                  </Wrapper>
                  <BudgetInventorySubtitle style={{ marginBottom: "0.5rem" }}>
                    {event?.eventLink ? event.eventLink : "---"}
                  </BudgetInventorySubtitle>
                </Display>

                <BudgetTitle2>Tags</BudgetTitle2>

                <Tags style={{ padding: "1% 0%" }}>
                  {event?.tags?.length > 0 ? eventTags : "---"}
                </Tags>
              </Partition1>

              <Partition2>
                <Wrapper>
                  <AiTwotoneCalendar color="#FF2957" size="1.5em" />
                  <BudgetTitle2>Date and Time</BudgetTitle2>
                </Wrapper>
                <BudgetInventorySubtitle style={{ marginBottom: "0.5rem" }}>
                  {event?.eventStartDate
                    ? formatDate(event?.eventStartDate) + ". "
                    : "---"}
                  {event?.eventStartTime
                    ? formatTime(event?.eventStartTime)
                    : "---"}
                </BudgetInventorySubtitle>

                <Wrapper>
                  <ImLocation color="#FF2957" size="1.5em" />
                  <BudgetTitle2>Address</BudgetTitle2>
                </Wrapper>
                {event?.eventAddress ? (
                  <BudgetInventorySubtitle style={{ marginBottom: "0.5rem" }}>
                    {event?.eventAddress?.houseNo},{event?.eventAddress?.street}
                    ,{event?.eventAddress?.city},{event?.eventAddress?.state}.
                    {event?.eventAddress?.country}.
                  </BudgetInventorySubtitle>
                ) : (
                  "---"
                )}

                <Wrapper>
                  <ImLink color="#FF2957" size="1.5em" />
                  <BudgetTitle2>Virtual Link</BudgetTitle2>
                </Wrapper>
                <BudgetInventorySubtitle style={{ marginBottom: "0.5rem" }}>
                  {event?.eventLink ? event.eventLink : "---"}
                </BudgetInventorySubtitle>
              </Partition2>
            </Partition>

            <Partition display={infoSponsor ? "flex" : "none"}>
              <SponsorshipDetails proposalId={Object.values(event?.generalProposals)}/>
            </Partition>
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
