import React from "react";
import { BudgetInventorySubtitle, ButtonContainer } from "./BudgetStyled";
import { useSelector } from "react-redux";
import { useLocation } from "react-router";
import { SubmittedContainer, SubmittedButtons } from "./SubmittedStyled";
import {
  AbsolutePrimaryButton,
  AlternativeButton2,
} from "../../components/button/button";
import Lottie from "lottie-react";
import animationData from "../../lotties/102001-success-icon.json";
import { AnimationContainer } from "../../globalStyles";
import { useNavigate } from "react-router";
import TopBar from "../topBar/dashboardTopBar/TopBar";

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
      <TopBar />
      <SubmittedContainer>
        <AnimationContainer>
          <Lottie animationData={animationData} loop={true} />
        </AnimationContainer>
        <BudgetInventorySubtitle
          style={{ marginBottom: "1rem", fontWeight: "600" }}
        >
          {location.pathname === "/submitted"
            ? "Event created successfully."
            : null}
          {location.pathname === "/proposal-generated"
            ? "You have successfully generated a proposal"
            : null}
        </BudgetInventorySubtitle>

        {location.pathname === "/submitted" ? (
          <SubmittedButtons>
            <AlternativeButton2
              onClick={() => {
                window.navigator.share(shareDetails);
              }}
            >
              Copy & Share Link
            </AlternativeButton2>
          </SubmittedButtons>
        ) : null}

        <ButtonContainer>
          {location.pathname === "/submitted" ? (
            <AbsolutePrimaryButton onClick={() => navigate("/event/planning")}>
              Done
            </AbsolutePrimaryButton>
          ) : null}
          {location.pathname === "/proposal-generated" ? (
            <AbsolutePrimaryButton onClick={() => navigate("/dashboard")}>
              Done
            </AbsolutePrimaryButton>
          ) : null}
        </ButtonContainer>
      </SubmittedContainer>
    </>
  );
};

export default Submitted;
