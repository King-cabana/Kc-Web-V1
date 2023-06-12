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
import TestImage from "../../../assets/images/Wedding.jpg";
import { CoverDetailsHolder, CoverImageHolder } from "./ProposalPreviewCoverStyled";

const ProposalPreviewCover = () => {
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  const navigateBack = () => {
    navigate(`/event/proposal/proposal-buildup`);
  };

  const navigateNext = () => {
    navigate("/event/proposal/proposalpreviewcontent");
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
        <CoverImageHolder>
          <img src={TestImage} alt="" />
        </CoverImageHolder>

        <CoverDetailsHolder>

            <div style={{width:'30%', height:'30vh'}}>
                <h3>Prepared by</h3>
                <p>Kofoworola Ademola Hall</p>
                <p>Lanisa Fayomika</p>
                <p>ademolakohall@gmail.com</p>
                <p>+2348025500567</p>
            </div>

            <div style={{width:'30%', height:'30vh', textAlign:'right'}}>
                <h3>Prepared For</h3>
                <p>First Bank PLC</p>
             
            </div>

        </CoverDetailsHolder>
        
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

export default ProposalPreviewCover;
