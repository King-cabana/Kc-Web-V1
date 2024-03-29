import React, { useState, useEffect, useRef } from "react";
import CreateEventTopBar from "../../topBar/CreateEventTopBar/CreateEventTopBar";
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
import Inventory from "../../createProposal/budgetInventory/Inventory";
import Budget from "../../../pages/Budget/Budget";
import { decryptId } from "../../../utils";
import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addFields } from "../../../redux/slices/proposalSlice";

const FlowBody = () => {
  const [activeStep, setActiveStep] = useState(() => {
    const storedActiveStep = localStorage.getItem("activeStep");
    return storedActiveStep !== null ? parseInt(storedActiveStep) : 0;
  });
  const { id } = useParams();
  const decryptedId = decryptId(id);
  const dispatch = useDispatch();
  dispatch(addFields({ name: "eventId", value: decryptedId }));

  const contentRef = useRef(null);

  useEffect(() => {
    contentRef.current.scrollTop = 0; // Scroll to top whenever active step changes
  }, [activeStep]);

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
    const storedActiveStep = localStorage.getItem("activeStep");
    const parsedActiveStep = storedActiveStep ? parseInt(storedActiveStep) : 0;

    if (parsedActiveStep === 2) {
      setActiveStep(0);
      localStorage.setItem("activeStep", "0");
    }

    return () => {
      if (parsedActiveStep === 2) {
        setActiveStep(0);
        localStorage.setItem("activeStep", "0");
      }
    };
  }, []);

  function getSectionComponent() {
    switch (activeStep) {
      case 0:
        return <Budget activeStep={activeStep} setActiveStep={setActiveStep} />;
      case 1:
        return (
          <Inventory activeStep={activeStep} setActiveStep={setActiveStep} />
        );
      case 2:
        return (
          <DefineAudience
            activeStep={activeStep}
            setActiveStep={setActiveStep}
          />
        );
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

        <div ref={contentRef} style={{ height: "calc(100vh - 200px)", overflowY: "auto" }}>
          {getSectionComponent()}
        </div>
      </WavyBackground>
    </>
  );
};

export default FlowBody;
