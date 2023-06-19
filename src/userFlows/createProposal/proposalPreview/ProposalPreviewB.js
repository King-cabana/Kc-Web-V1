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

const ProposalpreviewB = () => {
  const [loading, setLoading] = useState(true);
  const [preview, setPreview] = useState({});
  const totalPages = 5;
  const [currentPage, setCurrentPage] = useState(4);

  const user = useSelector((state) => state.userDetails);
  const proposalId = sessionStorage.getItem("proposalId");

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
          <PreviewLogoBg style={{ height: "fit-content" }}>
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
                <h4>Attendees Profile</h4>
                <div style={{ lineHeight: "2rem" }}>
                  <li>
                    Age:{" "}
                    {preview?.defineAudience
                      ? preview?.defineAudience?.ageRange
                      : "Age"}
                  </li>
                  <li>
                    Income Range:{" "}
                    {preview?.defineAudience
                      ? preview?.defineAudience?.income
                      : "Income"}
                  </li>
                  <li>
                    Gender:{" "}
                    {preview?.defineAudience
                      ? preview?.defineAudience?.genderList
                      : "Gender"}
                  </li>
                  <li>
                    Religion:{" "}
                    {preview?.defineAudience
                      ? preview?.defineAudience?.religionList
                      : "Religion"}
                  </li>
                  <li>
                    Employment Status:{" "}
                    {preview?.defineAudience
                      ? preview?.defineAudience?.employmentStatusList
                      : "Employment status"}
                  </li>
                  <li>
                    Educational Level:{" "}
                    {preview?.defineAudience
                      ? preview?.defineAudience?.educationLevelList
                      : "Educational level"}
                  </li>
                </div>
              </div>

              {/* <div style={{ marginTop: "3%" }}>
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
            </div> */}

              <div style={{ marginTop: "3%" }}>
                <h4>Impact of the event on the community</h4>
                <div style={{ lineHeight: "2rem", marginBottom: "5%" }}>
                  {preview?.potentialImpacts ? (
                    <ul>
                      {preview.potentialImpacts.map((impacts) => (
                        <li key={impacts}>{impacts}</li>
                      ))}
                    </ul>
                  ) : (
                    "Potential Impact List"
                  )}
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

export default ProposalpreviewB;
