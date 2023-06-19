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
import TestImage from "../../../assets/images/Wedding.jpg";
import {
  CoverDetailsHolder,
  CoverImageHolder,
} from "./ProposalPreviewCoverStyled";
import ProposalPagination from "../../proposalPagination/ProposalPagination";
import { useSelector } from "react-redux";
import axios from "axios";

const ProposalPreviewCover = () => {
  const [loading, setLoading] = useState(true);
  const [preview, setPreview] = useState({});
  const totalPages = 5;
  const [currentPage, setCurrentPage] = useState(1);
  const user = useSelector((state) => state.userDetails);
  const proposalId = sessionStorage.getItem("proposalId");

  const navigate = useNavigate();

  const navigateBack = () => {
    navigate(`/event/proposal/proposal-buildup`);
  };

  const navigateNext = () => {
    navigate("/event/proposal/proposalpreview-page2");
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
                Proposal Preview Cover
              </Txt>
            </WelcomeHeader>
          </ProposalContainer>
          <CoverImageHolder>
            <img
              src={
                preview?.proposalBannerUrl
                  ? preview?.proposalBannerUrl
                  : TestImage
              }
              alt="banner"
            />
          </CoverImageHolder>

          <CoverDetailsHolder>
            <div style={{ width: "30%", height: "30vh" }}>
              <h3>Prepared by</h3>
              <p>
                {preview?.eventOrganizerName
                  ? preview?.eventOrganizerName
                  : "Event Organizer's name"}
              </p>
              <p>{preview?.eventName ? preview?.eventName : "Event Name"}</p>
              <p>
                {preview?.profileEmailAddress
                  ? preview?.profileEmailAddress
                  : "Organizer's email"}
              </p>
              <p>
                {preview?.profilePhoneNumber
                  ? preview?.profilePhoneNumber
                  : "Phone number"}
              </p>
            </div>

            <div style={{ width: "30%", height: "30vh", textAlign: "right" }}>
              <h3>Prepared For</h3>
              <p>
                {preview?.eventSponsor
                  ? preview?.eventSponsor
                  : "Event sponsor"}
              </p>
            </div>
          </CoverDetailsHolder>
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

export default ProposalPreviewCover;
