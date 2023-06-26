import { useState } from "react";
import CreateEventTopBar from "../topBar/CreateEventTopBar/CreateEventTopBar";
import kcLogo from "../../assets/images/KCLogo.svg";
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
import { Txt, WelcomeHeader } from "../emptyEvent/EmptyEventStyled";
import {
  Partition,
  Partition1,
  Partition2,
  SECTION,
  Display,
} from "../eventPlanning/EventPlanningStyled";
import LoadingScreen from "../../LoadingScreen";
import { encryptId, decryptId, formatDate, formatTime } from "../../utils";
import {
  HistoryImage,
  HistoryImageContainer,
  IMG,
  LI,
  UL,
} from "./SingleEventHistoryStyled";

const SingleEventHistory = () => {
  //   const [loading, setLoading] = useState(true);
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const dataSponsors = {
    well: [
      "Arike and Sons Nigerian Enterprises",
      "Zenith Bank",
      "Arike and her Lover Man in the Maldives",
    ],
    again: [
      "https://res.cloudinary.com/dcanx4ftd/image/upload/v1687765489/images/nkmvql6kmwdr37peixjm.jpg",
      "https://res.cloudinary.com/dcanx4ftd/image/upload/v1687573273/images/asz7escqvxj3rraufayf.jpg",
      "https://res.cloudinary.com/dcanx4ftd/image/upload/v1687765417/images/wrwx56rlduir17azi1np.jpg",
    ],
  };
  return (
    <>
      <CreateEventTopBar />
      {loading ? (
        <LoadingScreen />
      ) : (
        <Page style={{ marginTop: "1rem", padding: "0 2%" }}>
          <WelcomeHeader style={{ marginBottom: "1.5rem" }}>
            <Txt>Event</Txt>
            <BsChevronRight style={{ marginRight: "0.5rem" }} />
            <Txt fontWeight="400" onClick={() => navigate("/event/history")}>
              History
            </Txt>
            <BsChevronRight style={{ marginRight: "0.5rem" }} />
            <Txt fontWeight="400" color="#FF2957">
              View Event
            </Txt>
          </WelcomeHeader>
          <Display style={{ marginRight: "1.5rem" }}>
            <Wrapper cursor="pointer" justifycontent="end" gap="0.3rem">
              <IMG src={kcLogo} alt="King Cabana Logo" />
              <BudgetInventorySubtitle
                style={{
                  textDecoration: "underline",
                  color: "#FF2957",
                }}
              >
                view event organizer's profile
              </BudgetInventorySubtitle>
            </Wrapper>
          </Display>

          <BudgetSection style={{ padding: "0rem" }}>
            <Partition style={{ gap: "0rem 1rem", marginBottom: "0.4rem" }}>
              <Partition1>
                <BudgetTitle1>Event Name</BudgetTitle1>
                <BudgetInventorySubtitle style={{ marginBottom: "0.6rem" }}>
                  {/* {event?.eventName ? event?.eventName : "Event Name"} */}
                  Peter’s Friends and Family Hang out
                </BudgetInventorySubtitle>
                <BudgetTitle2>Description</BudgetTitle2>
                <BudgetInventorySubtitle style={{ marginBottom: "0.6rem" }}>
                  {/* {event?.eventDescription ? event?.eventDescription : ""} */}
                  Lorem ipsum dolor sit amet consectetur. Arcu gravida non
                  egestas purus eu feugiat nunc turpis fusce. Convallis etiam
                  habitasse in donec velit. Urna congue eu praesent amet aliquam
                  est. Sed quam orci metus ut amet. Pulvinar proin malesuada
                  mauris sed sed. Hac aenean nisl sed tellus nisi phasellus
                  sagittis justo. Nibh porttitor sit volutpat morbi posuere. Est
                  massa iaculis laoreet tristique at cras mus aliquet. Vitae ut
                  rhoncus senectus sed. (250 Characters limit)
                </BudgetInventorySubtitle>
                <BudgetTitle2>Sponsors</BudgetTitle2>
                <UL>
                  {dataSponsors.well.map((eachSponsor, index) => {
                    return <LI key={index}>{eachSponsor}</LI>;
                  })}
                </UL>
                <BudgetTitle2>Benefits our sponsors received</BudgetTitle2>
                <UL>
                  {dataSponsors.well.map((eachSponsor, index) => {
                    return <LI key={index}>{eachSponsor}</LI>;
                  })}
                </UL>

                <Display>
                  <Wrapper gap="0.5em">
                    <AiTwotoneCalendar color="#FF2957" size="1em" />
                    <BudgetTitle2>Date and Time</BudgetTitle2>
                  </Wrapper>
                  <BudgetInventorySubtitle style={{ marginBottom: "0.5rem" }}>
                    {/* {event?.eventStartDate
                      ? formatDate(event?.eventStartDate) + ". "
                      : "---"}
                    {event?.eventStartTime
                      ? formatTime(event?.eventStartTime)
                      : "---"} */}
                    Friday March 3rd, 2023, 10:00am WAT.
                  </BudgetInventorySubtitle>

                  <Wrapper gap="0.5em">
                    <ImLocation color="#FF2957" size="1em" />
                    <BudgetTitle2>Location</BudgetTitle2>
                  </Wrapper>
                  <BudgetInventorySubtitle style={{ marginBottom: "0.5rem" }}>
                    Suite 13 Bola Ahmed Shopping Complex Oyetayo Street, Oshodi
                    Isolo, Nigeria.
                  </BudgetInventorySubtitle>
                  {/* {event?.eventAddress ? (
                    <BudgetInventorySubtitle style={{ marginBottom: "0.5rem" }}>
                      {event?.eventAddress?.houseNo},
                      {event?.eventAddress?.street},{event?.eventAddress?.city},
                      {event?.eventAddress?.state}.
                      {event?.eventAddress?.country}.
                    </BudgetInventorySubtitle>
                  ) : (
                    "---"
                  )} */}
                </Display>
              </Partition1>

              <Partition2>
                <Wrapper>
                  <AiTwotoneCalendar color="#FF2957" size="1.5em" />
                  <BudgetTitle2>Date and Time</BudgetTitle2>
                </Wrapper>
                <BudgetInventorySubtitle style={{ marginBottom: "0.6rem" }}>
                  {/* {event?.eventStartDate
                      ? formatDate(event?.eventStartDate) + ". "
                      : "---"}
                    {event?.eventStartTime
                      ? formatTime(event?.eventStartTime)
                      : "---"} */}
                  Friday March 3rd, 2023, 10:00am WAT.
                </BudgetInventorySubtitle>

                <Wrapper>
                  <ImLocation color="#FF2957" size="1.5em" />
                  <BudgetTitle2>Address</BudgetTitle2>
                </Wrapper>
                <BudgetInventorySubtitle style={{ marginBottom: "1rem" }}>
                  Suite 13 Bola Ahmed Shopping Complex Oyetayo Street, Oshodi
                  Isolo, Nigeria.
                </BudgetInventorySubtitle>
                {/* {event?.eventAddress ? (
                    <BudgetInventorySubtitle style={{ marginBottom: "0.5rem" }}>
                      {event?.eventAddress?.houseNo},
                      {event?.eventAddress?.street},{event?.eventAddress?.city},
                      {event?.eventAddress?.state}.
                      {event?.eventAddress?.country}.
                    </BudgetInventorySubtitle>
                  ) : (
                    "---"
                  )} */}

                <Wrapper cursor="pointer" gap="0.5rem">
                  <IMG src={kcLogo} alt="King Cabana Logo" />
                  <BudgetInventorySubtitle
                    style={{
                      textDecoration: "underline",
                      color: "#FF2957",
                      marginTop: "0px",
                    }}
                  >
                    view event organizer's profile
                  </BudgetInventorySubtitle>
                </Wrapper>
              </Partition2>
            </Partition>

            <BudgetTitle2>Gallery</BudgetTitle2>
            <HistoryImageContainer>
              {dataSponsors.again.map((image, index) => {
                return (
                  <HistoryImage
                    key={index}
                    //   src={event?.eventBannerUrl ? event?.eventBannerUrl : banner}
                    src={image}
                    alt="Background Picture"
                  />
                );
              })}
            </HistoryImageContainer>
          </BudgetSection>

          <ButtonContainer style={{ margin: "0rem" }}>
            <AlternativeButton2
              onClick={() => navigate("/event/history")}
              style={{
                marginRight: "2rem",
                width: "60px",
                height: "auto",
                padding: "0.5rem",
              }}
            >
              Back
            </AlternativeButton2>
            <AbsolutePrimaryButton
              style={{ width: "60px", height: "auto", padding: "0.5rem" }}
            >
              Edit
            </AbsolutePrimaryButton>
          </ButtonContainer>
        </Page>
      )}
    </>
  );
};

export default SingleEventHistory;
