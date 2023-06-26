import React from "react";
import TopBar from "../../../userFlows/topBar/dashboardTopBar/TopBar";
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
import { PreviewLogoBg, ProposalInner } from "./ProposalPreviewCoverStyled";
import ProposalPagination from "../../proposalPagination/ProposalPagination";

const ProposalPreviewContent = () => {
  const totalPages = 5;
  const [currentPage, setCurrentPage] = useState(2);

  const navigate = useNavigate();

  const navigateBack = () => {
    navigate("/event/proposal/proposalpreview-page1");
  };

  const navigateNext = () => {
    navigate("/event/proposal/proposalpreview-page3");
  };

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
    navigate(`/event/proposal/proposalpreview-page${pageNumber}`);
  };

  const handlePreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage((prevPage) => prevPage - 1);
      navigate(`/event/proposal/proposalpreview-page${currentPage - 1}`);
    }
  };

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage((prevPage) => prevPage + 1);
      navigate(`/event/proposal/proposalpreview-page${currentPage + 1}`);
    }
  };

  return (
    <>
      <TopBar marginBottom="1rem" />
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
        <PreviewLogoBg style={{height:"fit-content"}}>
          <ProposalInner>
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
          </ProposalInner>
        </PreviewLogoBg>
        
          <ProposalPagination
            totalPages={totalPages}
            currentPage={currentPage}
            onPreviousPage={handlePreviousPage}
            onNextPage={handleNextPage}
            handlePageChange={handlePageChange}
          />

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
    </>
  );
};

export default ProposalPreviewContent;
