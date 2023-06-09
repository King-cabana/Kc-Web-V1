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

const ProposalPreviewA = () => {
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  const navigateBack = () => {
    navigate("/event/proposal/proposalpreviewcontent");
  };

  const navigateNext = () => {
    navigate("/event/proposal/proposalpreviewpage2");
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
        <PreviewLogoBg>
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
              <div>
                <h3>Event Name</h3>
                <p>Kofoworala Ademola Hall Week.</p>
              </div>

              <div style={{marginTop:"2%"}}>
                <h3>Event description</h3>
                <p>
                  Lorem ipsum dolor sit amet consectetur. Vulputate ullamcorper
                  lobortis est amet proin diam. Velit ut in augue maecenas.
                  Malesuada nam molestie donec morbi. Amet sed sed id quis ut
                  dictum diam. Enim rhoncus morbi nisl ut nunc. Ornare ipsum
                  venenatis viverra sit leo ut rutrum amet pellentesque. Elit
                  nullam leo sit pellentesque. Sed nunc risus nulla nisi.
                  Interdum malesuada viverra adipiscing parturient nam sem
                  egestas aliquet.
                </p>
              </div>

              <div style={{marginTop:"2%"}}>
                <h3>Event Theme</h3>
                <p>
                  Lorem ipsum dolor sit amet consectetur. Sapien volutpat id
                  nulla id viverra.
                </p>
              </div>

              <div
                style={{
                  width: "100%",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  marginTop:"2%"
                }}
              >
                <div style={{ width: "50%" }}>
                  <h3>Event Time</h3>
                  <p>11:30am-3:30pm</p>
                </div>
                <div style={{ width: "50%" }}>
                  <h3>Event Date</h3>
                  <p>20th, April, 2023.</p>
                </div>
              </div>
              <div style={{marginTop:"2%"}}>
                <h3>Estimated Attendance</h3>
                <p>4000-5000 Students</p>
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

export default ProposalPreviewA;
