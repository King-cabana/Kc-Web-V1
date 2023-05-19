import React from "react";
import {
  BudgetInventorySubtitle,
  ButtonContainer,
} from "./budgetInventory/BudgetStyled";
import { useSelector } from "react-redux";
import { useLocation } from "react-router";
import { SubmittedContainer, SubmittedButtons } from "./SubmittedStyled";
import {
  AbsolutePrimaryButton,
  AlternativeButton2,
} from "../../components/buttons/button";
import Lottie from "lottie-react";
import animationData from "../../assets/lotties/102001-success-icon.json";
import { AnimationContainer } from "../../globalStyles";
import { useNavigate } from "react-router";
import CreateEventTopBar from "../topBar/CreateEventTopBar/CreateEventTopBar";
// import TopBar from "../../components/createEventTopBar/TopBar";

const Submitted = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const event = useSelector((state) => state.eventCreated);
  const shareDetails = {
    title: event?.eventName,
    url: `/guestView/${event?.id}`,
    text: event?.eventTheme,
  };

  return (
    <>
      <CreateEventTopBar />
      <SubmittedContainer>
        <AnimationContainer>
          <Lottie animationData={animationData} loop={true} />
        </AnimationContainer>
        <BudgetInventorySubtitle
          style={{ marginBottom: "1rem", fontWeight: "600" }}
        >
          {location.pathname === "/createEvent/submitted"
            ? "Event created successfully."
            : null}
          {location.pathname === "/proposal-generated"
            ? "You have successfully generated a proposal"
            : null}
        </BudgetInventorySubtitle>

        {location.pathname === "/createEvent/submitted" ? (
          <SubmittedButtons>
            <AlternativeButton2
              onClick={() => {
                window.navigator.share(shareDetails);
              }}
            >
              Share event link
            </AlternativeButton2>
          </SubmittedButtons>
        ) : null}

        <ButtonContainer>
          {location.pathname === "/createEvent/submitted" ? (
            <AbsolutePrimaryButton onClick={() => navigate("/dashboard")}>
              Done
            </AbsolutePrimaryButton>
          ) : null}
          {location.pathname === "/proposal-generated" ? (
            <AbsolutePrimaryButton onClick={() => navigate("/event/proposal")}>
              Done
            </AbsolutePrimaryButton>
          ) : null}
        </ButtonContainer>
      </SubmittedContainer>
    </>
  );
};

export default Submitted;
