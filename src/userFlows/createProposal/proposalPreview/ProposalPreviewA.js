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
import { PreviewLogoBg } from "./ProposalPreviewCoverStyled";
import ProposalPagination from "../../proposalPagination/ProposalPagination";
import axios from "axios";
import { useSelector } from "react-redux";

const ProposalPreviewA = () => {
  const [loading, setLoading] = useState(true);
  const [preview, setPreview] = useState({});
  const totalPages = 5;
  const [currentPage, setCurrentPage] = useState(3);

  const user = useSelector((state) => state.userDetails);
  const proposalId = sessionStorage.getItem("proposalId");

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
    const API_URL_2 = "http://localhost:8080/proposals/";
    const fetchProposalPreview = async () => {
      try {
        const { data } = await axios.get(API_URL_2 + proposalId, {
          headers: {
            Authorization: `Bearer ${user?.token}`,
          },
        });
        setPreview(data);
      } catch (error) {
        if (error?.response?.status === 400) {
          // toast.error("Proposal Does Not Exist");
        } else {
          // toast.error("Failed to fetch proposal preview");
          console.log(error);
        }
      } finally {
        setLoading(false);
      }
    };
    if (proposalId && user?.token) {
      fetchProposalPreview();
    }
  }, [proposalId, user?.token]);

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
          <PreviewLogoBg>
            <div
              style={{ width: "100%", height: "100%", padding: "2rem 5rem" }}
            >
              <h4
                style={{
                  textAlign: "center",
                  color: "#0068FF",
                  textDecoration: "underline",
                }}
              >
                {preview?.eventName ? preview?.eventName + `'s` : "Event Name"}{" "}
                Proposal to{" "}
                {preview?.eventSponsor ? preview?.eventSponsor : "Sponsor"}.
              </h4>
              <div style={{ marginTop: "3%" }}>
                <div>
                  <h3>Event Name</h3>
                  <p>
                    {preview?.eventName ? preview?.eventName : "Event Name"}
                  </p>
                </div>

                <div style={{ marginTop: "2%" }}>
                  <h3>Event description</h3>
                  <p>
                    {preview?.eventDescription
                      ? preview?.eventDescription
                      : "Event description"}
                  </p>
                </div>

                <div style={{ marginTop: "2%" }}>
                  <h3>Event Theme</h3>
                  <p>
                    {preview?.eventTheme ? preview?.eventTheme : "Event theme"}
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
                    <p>
                      {preview?.eventStartTime
                        ? preview?.eventStartTime
                        : "Event time"}
                    </p>
                  </div>
                  <div style={{ width: "50%" }}>
                    <h3>Event Date</h3>
                    <p>
                      {preview?.eventStartDate
                        ? preview?.eventStartDate
                        : "Event date"}
                    </p>
                  </div>
                </div>
                <div style={{ marginTop: "2%" }}>
                  <h3>Estimated Attendance</h3>
                  <p>
                    {preview?.estimatedAttendance
                      ? preview?.estimatedAttendance
                      : "Estimated attendance"}
                  </p>
                </div>
              </div>
            </div>
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
