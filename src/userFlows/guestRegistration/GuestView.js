import React, { useState, useEffect } from "react";
import axios from "axios";
import {
  Page,
  Tags,
  Wrapper,
  Like,
  Container,
  IconsContainer,
} from "./GuestRegistrationStyled";
import { useNavigate, useParams } from "react-router";
import banner from "../../../src/assets/images/bgBanner.jpg";
import { AiTwotoneCalendar } from "react-icons/ai";
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
import { AbsolutePrimaryButton } from "../../components/buttons/button";
import TopBar from "../../components/topBar/TopBar";
import { API_URL_2 } from "../../redux/services/authService";
import { ImLocation, ImLink } from "react-icons/im";
import { toast } from "react-toastify";
import LoadingScreen from "../../LoadingScreen";
import { decryptId, encryptId, formatDate, formatTime } from "../../utils";
import {
  Partition,
  Partition1,
  Partition2,
} from "../eventPlanning/EventPlanningStyled";

const GuestView = () => {
  const [event, setEvent] = useState();
  const { id } = useParams();
  // console.log(id);
  const decryptedId = decryptId(id);
  const encryptedId = encryptId(decryptedId);
  // console.log(decryptedId);
  const navigate = useNavigate();
  // const [like, setLike] = useState(false);
  const [loading, setLoading] = useState(true);

  const eventTags = event?.tags.map((tag) => <ul key={tag}>{tag}</ul>);

  useEffect(() => {
    const fetchEvent = async () => {
      try {
        const { data } = await axios.get(API_URL_2 + `events/${decryptedId}`);
        setEvent(data);
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
      <TopBar marginBottom="1rem" />
      {loading ? (
        <LoadingScreen />
      ) : (
        <Page>
          <ImagesContainer>
            <BackgroundPicture
              src={event?.eventBannerUrl ? event?.eventBannerUrl : banner}
              alt="Background Picture"
            />
          </ImagesContainer>
          <BudgetSection>
            <Partition>
              <Partition1>
                <BudgetTitle1 style={{ marginTop: "0.5rem" }}>
                  Event Name
                </BudgetTitle1>
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

                {event?.estimatedAttendance ? (
                  <>
                    <BudgetTitle2 style={{ marginTop: "0.8rem" }}>
                      Estimated Attendance
                    </BudgetTitle2>
                    <BudgetInventorySubtitle style={{ marginBottom: "1rem" }}>
                      {event?.estimatedAttendance}
                    </BudgetInventorySubtitle>
                  </>
                ) : null}

                {event?.tags?.length > 0 ? (
                  <>
                    <BudgetTitle2>Tags</BudgetTitle2>
                    <Tags style={{ padding: "1% 0%" }}>{eventTags}</Tags>
                  </>
                ) : null}
              </Partition1>

              <Partition2>
                {event?.eventStartDate ? (
                  <>
                    <Wrapper>
                      <AiTwotoneCalendar color="#FF2957" size="1.5em" />
                      <BudgetTitle2>Date and Time</BudgetTitle2>
                    </Wrapper>
                    <BudgetInventorySubtitle style={{ marginBottom: "1rem" }}>
                      {formatDate(event?.eventStartDate) + ". "}
                      {formatTime(event?.eventStartTime)}
                    </BudgetInventorySubtitle>
                  </>
                ) : null}

                {event?.eventAddress ? (
                  <>
                    <Wrapper>
                      <ImLocation color="#FF2957" size="1.5em" />
                      <BudgetTitle2>Location</BudgetTitle2>
                    </Wrapper>
                    <BudgetInventorySubtitle style={{ marginBottom: "1rem" }}>
                      {event?.eventAddress?.houseNo},
                      {event?.eventAddress?.street},{event?.eventAddress?.city},
                      {event?.eventAddress?.state}.
                      {event?.eventAddress?.country}.
                    </BudgetInventorySubtitle>
                  </>
                ) : null}

                {event?.eventLink ? (
                  <>
                    <Wrapper>
                      <ImLink color="#FF2957" size="1.5em" />
                      <BudgetTitle2>Event Link</BudgetTitle2>
                    </Wrapper>
                    <BudgetInventorySubtitle style={{ marginBottom: "1rem" }}>
                      {event?.eventLink}
                    </BudgetInventorySubtitle>
                  </>
                ) : null}
              </Partition2>
            </Partition>
          </BudgetSection>
          <ButtonContainer style={{ margin: "0rem" }}>
            <AbsolutePrimaryButton
              onClick={() =>
                navigate(`/guestRegistration/contactInformation/${encryptedId}`)
              }
            >
              Register
            </AbsolutePrimaryButton>
          </ButtonContainer>
        </Page>
      )}
    </>
  );
};

export default GuestView;
