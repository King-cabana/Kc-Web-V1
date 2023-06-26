import React from "react";
import {
  BudgetInventorySubtitle,
  ButtonContainer,
} from "../createProposal/budgetInventory/BudgetStyled";
import { useSelector } from "react-redux";
import { useLocation } from "react-router";
import { SubmittedContainer, SubmittedButtons } from "./SubmittedStyled";
import {
  AbsolutePrimaryButton,
  AlternativeButton2,
  ModalPrimaryButton,
} from "../../components/buttons/button";
import Lottie from "lottie-react";
import animationData from "../../assets/lotties/102001-success-icon.json";
import { AnimationContainer } from "../../globalStyles";
import { useNavigate } from "react-router";
import CreateEventTopBar from "../topBar/CreateEventTopBar/CreateEventTopBar";
import { encryptId, decryptId } from "../../utils";
import { ModalButtonContainer } from "../createProposal/budgetInventory/InventoryStyled";

const Submitted = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const event = useSelector((state) => state.eventCreated);
  const encryptedId = encryptId(event?.id);
  const decryptedId = decryptId(encryptedId);
  // console.log(encryptedId);
  // console.log(decryptedId);

  const shareDetails = {
    title: event?.eventName,
    url: `/guestRegistration/${encryptedId}`,
    text: event?.eventTheme,
  };
  return (
    <>
      <CreateEventTopBar />
      <SubmittedContainer>
        <AnimationContainer>
          <Lottie animationData={animationData} loop={true} />
        </AnimationContainer>

        {location.pathname === "/createEvent/submitted" ? (
          <BudgetInventorySubtitle
            style={{ marginBottom: "1rem", fontWeight: "600" }}
          >
            Event created successfully.
          </BudgetInventorySubtitle>
        ) : null}
        {location.pathname === "/create-proposal/generated" ? (
          <>
            <BudgetInventorySubtitle
              style={{
                marginBottom: "0.5rem",
                fontWeight: "600",
                textAlign: "center",
              }}
            >
              You have successfully generated a proposal.
            </BudgetInventorySubtitle>
            <BudgetInventorySubtitle
              style={{
                marginBottom: "1.5rem",
                fontWeight: "600",
                textAlign: "center",
              }}
            >
              Proceed to share with prospective sponsors.
            </BudgetInventorySubtitle>

            <ModalButtonContainer>
              <AlternativeButton2>Download PDF</AlternativeButton2>
              <ModalPrimaryButton>Share proposal link</ModalPrimaryButton>
            </ModalButtonContainer>
          </>
        ) : null}

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
          {location.pathname === "/create-proposal/generated" ? (
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
