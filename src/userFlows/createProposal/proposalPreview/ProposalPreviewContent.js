import React from "react";
import TopBar from "../../../userFlows/topBar/dashboardTopBar/TopBar";
import LoadingScreen from "../../../LoadingScreen";
import {
  AbsolutePrimaryButton,
  AlternativeButton2,
} from "../../../components/buttons/Buttons";
import { ButtonContainer } from "../../../userFlows/defineAudience/DefineAudienceStyled";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  OverallContainer,
  ProposalContainer,
  Txt,
  WelcomeHeader,
} from "../proposalBuildup/ProposalBuildupStyled";
import { BsChevronRight } from "react-icons/bs";
import { PreviewLogoBg } from "./ProposalPreviewCoverStyled";

const ProposalPreviewContent = () => {
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  const navigateBack = () => {
    navigate("/event/proposal/proposalpreviewcover");
  };

  const navigateNext = () => {
    navigate("/event/proposal/proposalpreviewpage1");
  };

  return (
    <>
      <TopBar marginBottom="1rem" />
      {/* {loading ? (
        <LoadingScreen />
      ) : ( */}
      <OverallContainer>
        <ProposalContainer style={{ marginTop: "5%" }}>
          <WelcomeHeader>
            <Txt>Event</Txt>
            <BsChevronRight style={{ marginRight: "0.5rem" }} />
            <Txt
              style={{ cursor: "pointer" }}
              onClick={navigateBack}
              fontWeight="400"
            >
              Proposal
            </Txt>
            <BsChevronRight style={{ marginRight: "0.5rem" }} />
            <Txt fontWeight="400" color="#FF2957">
              Proposal Preview Cover
            </Txt>
          </WelcomeHeader>
        </ProposalContainer>
        <PreviewLogoBg>
          <div style={{ width: "100%", height: "100%", padding: "2rem 5rem" }}>
            <h4 style={{ textAlign: "center" }}>Table of Contents</h4>
            <div style={{ lineHeight: "2.5rem" }}>
              <li>Event Name</li>
              <li>
                Event Description (Theme, Time and Location, Estimated Numbers
                of Attendance)
              </li>
              <li>Attendee Profile</li>
              <li>Event Impact</li>
              <li>Sponsorship Benefits</li>
              <li>Budget</li>
              <li>Confidentiality</li>
            </div>
          </div>
        </PreviewLogoBg>

        <ButtonContainer
          style={{ margin: "0rem", borderTop: "1px solid #ff2957" }}
        >
          <AlternativeButton2
            onClick={navigateBack}
            style={{
              color: "#FF2957",
              fontWeight: "600",
              marginRight: "15px",
              width: "fit-content",
              padding: "15px",
              display: "flex",
              alignItems: "center",
            }}
          >
            Back
          </AlternativeButton2>
          <AbsolutePrimaryButton onClick={navigateNext}>
            Next
          </AbsolutePrimaryButton>
        </ButtonContainer>
      </OverallContainer>
      {/* )} */}
    </>
  );
};

export default ProposalPreviewContent;
