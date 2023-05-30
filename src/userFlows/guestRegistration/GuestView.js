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
              {/* <IconsContainer>
                <Like marginRight="1rem" onClick={() => setLike(!like)}>
                  <FcLike display={like === true ? "flex" : "none"} />
                  <AiOutlineHeart display={like === false ? "flex" : "none"} />
                </Like>
                <Like>
                  <BsUpload cursor="pointer" />
                </Like>
              </IconsContainer> */}
            </BudgetTitle2>
            <HR />

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
                  {event?.eventAddress?.houseNo},{event?.eventAddress?.street},
                  {event?.eventAddress?.city},{event?.eventAddress?.state}.
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

            {event?.tags?.length > 0 ? (
              <>
                <BudgetTitle2>Tags</BudgetTitle2>
                <Tags style={{ padding: "1% 0%" }}>{eventTags}</Tags>
              </>
            ) : null}
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
