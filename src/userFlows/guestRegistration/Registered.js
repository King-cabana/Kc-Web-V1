import React from "react";
import TopBar from "../../components/topBar/TopBar";
import { AnimationContainer } from "../../globalStyles";
import Lottie from "lottie-react";
import animationData from "../../assets/lotties/102001-success-icon.json";
import { Paragraph } from "./RegisteredStyled";
import {
  BudgetTitle1,
  ButtonContainer,
} from "../createEvent/budgetInventory/BudgetStyled";
import { SubmittedContainer } from "../createEvent/budgetInventory/SubmittedStyled";
import { AbsolutePrimaryButton } from "../../components/buttons/button";
import { BtnHolderLink } from "../createEvent/budgetInventory/InventoryStyled";

const Registered = () => {
  return (
    <>
      <TopBar />
      <SubmittedContainer>
        <AnimationContainer>
          <Lottie animationData={animationData} loop={true} />
        </AnimationContainer>
        <BudgetTitle1 style={{ marginBottom: "1rem", fontWeight: "600" }}>
          Well done!
        </BudgetTitle1>

        <div style={{ width: "90%" }}>
          <Paragraph>
            You have successfully registered for the event. A ticket has been
            sent to your mail.
          </Paragraph>
          <Paragraph>Would you like to organize an event?</Paragraph>
          <Paragraph>
            Would you like to offer your products or services at an event?
          </Paragraph>
          <Paragraph>Sign up with us now!</Paragraph>
        </div>

        <ButtonContainer>
          <BtnHolderLink to="/signUp">
            <AbsolutePrimaryButton>Sign up with us</AbsolutePrimaryButton>
          </BtnHolderLink>
        </ButtonContainer>
      </SubmittedContainer>
    </>
  );
};

export default Registered;
