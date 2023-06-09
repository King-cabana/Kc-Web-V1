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

const ProposalpreviewB = () => {
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  const navigateBack = () => {
    navigate("/event/proposal/proposalpreviewpage1");
  };

  const navigateNext = () => {
    navigate("/event/proposal/proposalpreviewpage3");
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
              Proposal Preview
            </Txt>
          </WelcomeHeader>
        </ProposalContainer>
        <PreviewLogoBg style={{ height: "fit-content" }}>
          <div style={{ width: "100%", height: "100%", padding: "2rem 5rem" }}>
            <h4
              style={{
                textAlign: "center",
                color: "#0068FF",
                textDecoration: "underline",
              }}
            >
              Kofoworola Ademola Hall Week Proposal to FirstBank PLC.
            </h4>

            <div style={{ marginTop: "3%" }}>
              <h4>Attendees Profile</h4>
              <div style={{ lineHeight: "2rem" }}>
                <li>Age: 15 and younger, 30-39.</li>
                <li>Income Range: Below #50,000.00</li>
                <li>Gender: Female and Male</li>
                <li>Religion: Christianity and Islam</li>
                <li>Employment Status: Employed and Unemployed.</li>
                <li>Educational Level: High school, Others.</li>
              </div>
            </div>

            <div style={{ marginTop: "3%" }}>
              <h4>Benefits of sponsoring this event (Inventory)</h4>
              <div style={{ lineHeight: "2rem" }}>
                <li>
                  Lorem ipsum dolor sit amet consectetur. In aliquet elit
                  pellentesque sapien scelerisque in.
                </li>
                <li>
                  Amet platea pharetra et ac lectus ac sed dictum. Nulla in
                  laoreet sem enim.
                </li>
                <li>
                  Lorem ipsum dolor sit amet consectetur. In aliquet elit
                  pellentesque sapien scelerisque in.
                </li>
              </div>
            </div>

            <div style={{ marginTop: "3%" }}>
              <h4>Impact of the event on the community</h4>
              <div style={{ lineHeight: "2rem", marginBottom:"5%" }}>
                <li>
                  Lorem ipsum dolor sit amet consectetur. In aliquet elit
                  pellentesque sapien scelerisque in.
                </li>
                <li>
                  Amet platea pharetra et ac lectus ac sed dictum. Nulla in
                  laoreet sem enim.
                </li>
                <li>
                  Lorem ipsum dolor sit amet consectetur. In aliquet elit
                  pellentesque sapien scelerisque in.
                </li>
                <li>
                  Amet platea pharetra et ac lectus ac sed dictum. Nulla in
                  laoreet sem enim.
                </li>
              </div>
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

export default ProposalpreviewB;
