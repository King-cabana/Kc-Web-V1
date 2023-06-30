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
import { PreviewLogoBg, ProposalInner } from "./ProposalPreviewCoverStyled";
import ProposalPagination from "../../proposalPagination/ProposalPagination";
import { useSelector } from "react-redux";
import { MdAccessTime } from "react-icons/md";
import { AiTwotoneCalendar } from "react-icons/ai";

const ProposalPreviewA = () => {
  const [loading, setLoading] = useState(false);
  const totalPages = 5;
  const [currentPage, setCurrentPage] = useState(3);

  const user = useSelector((state) => state.userDetails);
  const proposal = useSelector((state) => state.proposal);
  const eventCreated = useSelector((state) => state.eventCreated);
  console.log(eventCreated);
  const navigate = useNavigate();

  const navigateBack = () => {
    navigate("/event/proposal/proposalpreview-page2");
  };

  const navigateNext = () => {
    navigate("/event/proposal/proposalpreview-page4");
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
          <PreviewLogoBg style={{height:"fit-content"}} id="page3">
            <ProposalInner>
              <h4
                style={{
                  textAlign: "center",
                  color: "#0068FF",
                  textDecoration: "underline",
                }}
              >
                {eventCreated?.eventName
                  ? eventCreated?.eventName
                  : "Event name"}{" "}
                Proposal to{" "}
                {proposal?.eventSponsor
                  ? proposal?.eventSponsor
                  : "Event sponsor"}
              </h4>
              <div style={{ marginTop: "3%" }}>
                <div>
                  <h3>Event Name</h3>
                  <p>
                    {eventCreated?.eventName
                      ? eventCreated?.eventName
                      : "Event name"}
                  </p>
                </div>

                <div style={{ marginTop: "2%" }}>
                  <h3>Event description</h3>
                  <p>
                    {eventCreated?.eventDescription
                      ? eventCreated?.eventDescription
                      : "Event description"}
                  </p>
                </div>

                <div style={{ marginTop: "2%" }}>
                  <h3>Event Theme</h3>
                  <p>
                    {eventCreated?.eventTheme
                      ? eventCreated?.eventTheme
                      : "Event theme"}
                  </p>
                </div>

                <div
                  style={{
                    width: "100%",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    marginTop: "2%",
                  }}
                >
                  <div style={{ width: "50%" }}>
                    <h3>Event Time</h3>
                    <div style={{width:"fit-content", gap:"10px", display:"flex", alignItems:"center"}}>
                    <MdAccessTime/>
                    <p>
                      {eventCreated?.eventStartTime
                        ? eventCreated?.eventStartTime
                        : "Event time"}
                    </p>
                    </div>
                  </div>
                  <div style={{ width: "50%" }}>
                    <h3>Event Date</h3>
                    <div style={{width:"fit-content", gap:"10px", display:"flex", alignItems:"center"}}>
                    <AiTwotoneCalendar/>
                    <p>
                      {eventCreated?.eventStartDate
                        ? eventCreated?.eventStartDate
                        : "Event date"}
                    </p>
                    </div>
                  </div>
                </div>
                <div style={{ marginTop: "2%" }}>
                  <h3>Estimated Attendance</h3>
                  <p>
                    {eventCreated?.estimatedAttendance
                      ? eventCreated?.estimatedAttendance
                      : "Estimated attendance"}
                  </p>
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

export default ProposalPreviewA;
