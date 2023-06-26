import React, { useState, useEffect, createContext } from "react";
import { useSelector, useDispatch } from "react-redux";
import InnerContainerData from "./InnerContainerData";
import ChecklistData, { eventCkecklistData } from "./ChecklistData";
import axios from "axios";
import {
  OverallContainer,
  PopUpOverlay,
  PopUpComponent,
  HeaderContainer,
  HamburgerWrapper,
  WelcomeContainer,
  WelcomeText,
  WelcomeCenter,
  ButtonLink,
  ButtonsContainer,
  Wrap,
  BioSection,
  Bio,
  Name,
  Location,
  Description,
  JointContainer,
  CustomAlt,
  PrimaryButton,
  EventReportContainer,
  ChecklistContainer,
  ChecklistHeading,
  ChecklistSubHeading,
  Wrapper,
  BackgroundPicture,
  LogoPicture,
  ImagesContainer,
  EditPen,
} from "./EventHomeStyled";
import click from "../../assets/images/click.png";
import backgroundPicture from "../../assets/images/bgImg.png";
import logo from "../../assets/images/logoImg.png";
import "../../modal.css";
import { TbEdit } from "react-icons/tb";
import { useNavigate } from "react-router";
import { setEventOrganizerProfile } from "../../redux/slices/eventOrganizerProfileSlice";
import { API_URL_2 } from "../../redux/services/authService";
import { toast } from "react-toastify";

export const EventOrganizerContext = createContext();

const EventHome = () => {
  const dispatch = useDispatch();
  const state = useSelector((state) => state?.eventOrganizerProfile);
  const user = useSelector((state) => state?.userDetails);
  const [modal, setModal] = useState(true);
  const navigate = useNavigate();
  const userEmail = user.details.email;

  // console.log(user);
  // console.log(user.details.email);

  useEffect(() => {
    let data = null;
    const fetchOrganizerProfile = async () => {
      try {
        if (state?.id) {
          const response = await axios.get(
            API_URL_2 + `profiles/${state?.id}`,
            {
              headers: {
                Authorization: `Bearer ${user?.token}`,
              },
            }
          );
          data = response.data;
        } else {
          const response = await axios.get(
            API_URL_2 + `profiles/email?email=${userEmail}`,
            {
              headers: {
                Authorization: `Bearer ${user?.token}`,
              },
            }
          );
          data = response.data;
        }
        // console.log(data);
        // console.log(user);
        dispatch(setEventOrganizerProfile(data));
        // console.log(state);
        localStorage.setItem("profileEmail", state?.profileEmail);
        // console.log(state?.profileEmail);
      } catch (error) {
        if (error?.message === "Network Error") {
          toast.error("Error retrieving data, reload page.");
        }
        console.log(error);
      }
    };
    fetchOrganizerProfile();
  }, [state?.id, userEmail]);
  // console.log(userEmail);

  const toggleModal = () => {
    setModal(!modal);
  };
  if (modal) {
    document.body.classList.add("active-modal");
  } else {
    document.body.classList.remove("active-modal");
  }
  const showModal = !modal && "notShown";

  useEffect(() => {
    if (
      state?.organizerName &&
      state?.profileEmail &&
      state?.phoneNumber &&
      state?.address?.state &&
      state?.address?.country &&
      state?.organizerDetails
    ) {
      setModal(false);
    } else {
      setModal(true);
    }
  }, [
    state?.organizerName,
    state?.profileEmail,
    state?.phoneNumber,
    state?.address?.state,
    state?.address?.country,
    state?.organizerDetails,
  ]);

  return (
    <EventOrganizerContext.Provider
      value={{ state, axios, user, API_URL_2, navigate, userEmail }}
    >
      {modal && <PopUpOverlay />}
      <OverallContainer>
        <HeaderContainer>
          <WelcomeCenter>
            <HamburgerWrapper></HamburgerWrapper>
            <WelcomeText>
              {state?.organizerName ? state?.organizerName : "-"}
            </WelcomeText>
          </WelcomeCenter>

          <ImagesContainer>
            <BackgroundPicture
              src={
                state?.backgroundPictureUrl
                  ? state?.backgroundPictureUrl
                  : backgroundPicture
              }
              alt="Background Picture"
            />
            <LogoPicture
              src={state?.logoUrl ? state?.logoUrl : logo}
              alt="Logo Picture"
            />
          </ImagesContainer>
        </HeaderContainer>

        <WelcomeContainer>
          <EditPen>
            <JointContainer>
              <div className={`${showModal}`}>
                <PopUpComponent>
                  <img src={click} alt="" onClick={toggleModal} />
                  <p>
                    Optimize your profile now for effective engagements on King
                    Cabana
                  </p>
                  <PrimaryButton
                    onClick={() =>
                      navigate("/dashboard/edit-organiser-profile")
                    }
                    style={{
                      width: "93px",
                      height: "30px",
                      fontSize: "10px",
                    }}
                  >
                    Okay, got it.
                  </PrimaryButton>
                </PopUpComponent>
              </div>
              <div
                style={{
                  position: "absolute",
                  right: 0,
                  backgroundColor: "#fff",
                }}
              >
                <TbEdit
                  size="1.7rem"
                  onClick={() => navigate("/dashboard/edit-organiser-profile")}
                  style={{ cursor: "pointer" }}
                />
              </div>
            </JointContainer>
          </EditPen>

          <BioSection>
            <Bio>
              <Name>{state?.organizerName ? state?.organizerName : ""}</Name>
              <Location>
                {state?.address?.state ? state?.address?.state + ", " : ""}
                {state?.address?.country ? state?.address?.country : ""}.
              </Location>
              <Description>
                {state?.organizerDetails ? state?.organizerDetails : "."}
              </Description>
            </Bio>

            <ButtonsContainer>
              <Wrap>
                <ButtonLink to="/createEvent/eventDetails">
                  <PrimaryButton>Create event</PrimaryButton>
                </ButtonLink>
              </Wrap>
              {/* <JointContainer> */}
              <ButtonLink to="/event/history">
                <CustomAlt
                  style={{
                    color: "#FF2957",
                    fontWeight: "600",
                  }}
                >
                  Add event history
                </CustomAlt>
              </ButtonLink>
            </ButtonsContainer>
          </BioSection>

          <EventReportContainer>
            <InnerContainerData />
          </EventReportContainer>

          <ChecklistContainer>
            <Wrapper style={{ width: "100%" }}>
              <ChecklistHeading>Your Event Checklist</ChecklistHeading>
              <ChecklistSubHeading>
                Check off these tasks and get your event sponsored in no time!
              </ChecklistSubHeading>
            </Wrapper>

            {eventCkecklistData.map((data, index) => (
              <ChecklistData
                key={index}
                heading={data.heading}
                subHeading={data.subHeading}
                buttonText={data.buttonText}
              />
            ))}
          </ChecklistContainer>
        </WelcomeContainer>
      </OverallContainer>
    </EventOrganizerContext.Provider>
  );
};

export default EventHome;
