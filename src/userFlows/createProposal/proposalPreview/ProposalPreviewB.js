import React, { useEffect } from "react";
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
import { PreviewLogoBg, ProposalInner, UlInner } from "./ProposalPreviewCoverStyled";
import ProposalPagination from "../../proposalPagination/ProposalPagination";
import { useSelector } from "react-redux";

const ProposalpreviewB = () => {
  const [loading, setLoading] = useState(false);
  const totalPages = 5;
  const [currentPage, setCurrentPage] = useState(4);

  const user = useSelector((state) => state.userDetails);
  const proposal = useSelector((state) => state.proposal);
  const eventCreated = useSelector((state) => state.eventCreated);

  const navigate = useNavigate();

  const navigateBack = () => {
    navigate("/event/proposal/proposalpreview-page3");
  };

  const navigateNext = () => {
    navigate("/event/proposal/proposalpreview-page5");
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

  useEffect(() => {
    setLoading(true);
    if (user?.token) {
      setLoading(false);
    }
  }, [user?.token]);

  return (
    <>
      <TopBar marginBottom="1rem" />
      {loading ? (
        <LoadingScreen />
      ) : (
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
            <ProposalInner>
              <h4
                style={{
                  textAlign: "center",
                  color: "#0068FF",
                  textDecoration: "underline",
                }}
              >
                {eventCreated?.eventName ? eventCreated?.eventName + `'s` : "Event Name"}{" "}
                Proposal to{" "}
                {proposal?.eventSponsor ? proposal?.eventSponsor : "Sponsor"}.
              </h4>

              <div style={{ marginTop: "3%" }}>
                <h4>Attendees Profile</h4>
                <div style={{ lineHeight: "2rem" }}>
                  <li>
                    Age:{" "}
                    {proposal?.demographyDto
                      ? proposal?.demographyDto?.ageRange.join(", ")
                      : "Age"}
                  </li>
                  <li>
                    Income Range:{" "}
                    {proposal?.demographyDto
                      ? proposal?.demographyDto?.income.join(", ")
                      : "Income"}
                  </li>
                  <li>
                    Gender:{" "}
                    {proposal?.demographyDto
                      ? proposal?.demographyDto?.genderList.join(", ")
                      : "Gender"}
                  </li>
                  <li>
                    Religion:{" "}
                    {proposal?.demographyDto
                      ? proposal?.demographyDto?.religionList.join(", ")
                      : "Religion"}
                  </li>
                  <li>
                    Employment Status:{" "}
                    {proposal?.demographyDto
                      ? proposal?.demographyDto?.employmentStatusList.join(", ")
                      : "Employment status"}
                  </li>
                  <li>
                    Educational Level:{" "}
                    {proposal?.demographyDto
                      ? proposal?.demographyDto?.educationLevelList.join(", ")
                      : "Educational level"}
                  </li>
                </div>
              </div>

              <div style={{ marginTop: "3%" }}>
                <h4>Impact of the event on the community</h4>
                <div style={{ lineHeight: "2rem", marginBottom: "5%" }}>
                  {proposal?.potentialImpacts ? (
                    <UlInner>
                      {proposal.potentialImpacts.map((impacts) => (
                        <li key={impacts}>{impacts}</li>
                      ))}
                    </UlInner>
                  ) : (
                    "Potential Impact List"
                  )}
                </div>
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
      )}
    </>
  );
};

export default ProposalpreviewB;
