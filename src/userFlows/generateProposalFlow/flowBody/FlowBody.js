import React, { useState, useEffect } from "react";
import CreateEventTopBar from "../../topBar/CreateEventTopBar/CreateEventTopBar";
import EmptyEvent from "../../emptyEvent/EmptyEvent";
import ProgressBar from "../progressBar/ProgressBar";
import {
  WavyBackground,
  StepLabel,
  HeaderTextHolder,
  ProgressBarBody,
  EventCaretHolder,
} from "./FlowBodyStyled";
import { RxCaretLeft } from "react-icons/rx";
import { KBTextL } from "../../../components/fonts/Fonts";
import DefineAudience from "../../defineAudience/DefineAudience";

const FlowBody = () => {
  const [activeStep, setActiveStep] = useState(() => {
    const storedActiveStep = localStorage.getItem("activeStep");
    return storedActiveStep ? parseInt(storedActiveStep) : 0;
  });

  const steps = [
    { label: <StepLabel>Budget</StepLabel>, onClick: () => setActiveStep(0) },
    {
      label: <StepLabel>Take Inventory</StepLabel>,
      onClick: () => setActiveStep(1),
    },
    {
      label: <StepLabel>Define Audience</StepLabel>,
      onClick: () => setActiveStep(2),
    },
  ];

  useEffect(() => {
    localStorage.setItem("activeStep", activeStep.toString());
  }, [activeStep]);

  function getSectionComponent() {
    switch (activeStep) {
      case 0:
        return <EmptyEvent />;
      case 1:
        return <EmptyEvent />;
      case 2:
        return <DefineAudience />;
      default:
        return null;
    }
  }

  return (
    <>
      <CreateEventTopBar />
      <WavyBackground>
        <HeaderTextHolder>
          <KBTextL fontWeight="500" color="#0068FF">
            Sponsorship Readiness
          </KBTextL>
        </HeaderTextHolder>
        <ProgressBarBody>
          <EventCaretHolder>
            <RxCaretLeft style={{ width: "fit-content", fontSize: "25px" }} />
            Event
          </EventCaretHolder>
          <ProgressBar
            style={{ width: "100%" }}
            steps={steps}
            activeStep={activeStep}
          />
        </ProgressBarBody>

        <div style={{ padding: "5px"}}></div>
        {getSectionComponent()}
        {activeStep !== 0 && activeStep !== steps.length - 1 && (
          <button onClick={() => setActiveStep(activeStep - 1)}>
            Previous
          </button>
        )}
        {activeStep !== steps.length - 1 && (
          <button onClick={() => setActiveStep(activeStep + 1)}>Next</button>
        )}
      </WavyBackground>
    </>
  );
};

export default FlowBody;
