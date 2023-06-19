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
import {
  PreviewLogoBg,
  TableContainer,
  TableDataCell,
  TableHeaderCell,
  TableRow,
} from "./ProposalPreviewCoverStyled";
import ProposalPagination from "../../proposalPagination/ProposalPagination";
import axios from "axios";
import { useSelector } from "react-redux";

const ProposalPreviewC = () => {
  const [loading, setLoading] = useState(true);
  const [preview, setPreview] = useState({});
  const totalPages = 5;
  const [currentPage, setCurrentPage] = useState(5);

  const user = useSelector((state) => state.userDetails);
  const proposalId = sessionStorage.getItem("proposalId");

  const currentYear = new Date().getFullYear();
  const navigate = useNavigate();

  const navigateBack = () => {
    navigate("/event/proposal/proposalpreview-page4");
  };

  const navigateNext = () => {
    navigate("/");
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
    const API_URL_2 = "http://localhost:8081/proposals/";
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
              style={{ width: "100%", height: "100%", padding: "3rem 5rem" }}
            >
              <h4
                style={{
                  textAlign: "center",
                  color: "#0068FF",
                  textDecoration: "underline",
                }}
              >
                Kofoworola Ademola Hall Week Proposal to FirstBank PLC.
              </h4>
              <div
                style={{
                  marginTop: "3%",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <TableContainer>
                  <TableRow>
                    <TableHeaderCell>Item</TableHeaderCell>
                    <TableHeaderCell>Description</TableHeaderCell>
                    <TableHeaderCell>Cost (#)</TableHeaderCell>
                  </TableRow>
                  {preview?.budget?.budgetDetails ? (
                    <>
                      {preview.budget.budgetDetails.map((detail, index) => (
                        <TableRow key={index}>
                          <TableDataCell>{detail.item}</TableDataCell>
                          <TableDataCell>{detail.description}</TableDataCell>
                          <TableDataCell>{detail.cost}</TableDataCell>
                        </TableRow>
                      ))}
                      <TableRow>
                        <TableDataCell></TableDataCell>
                        <TableDataCell>
                          <h4 style={{ textDecoration: "none" }}>Total</h4>
                        </TableDataCell>

                        <TableDataCell>{preview.budget.total}</TableDataCell>
                      </TableRow>
                    </>
                  ) : (
                    "Budget List"
                  )}
                </TableContainer>

                <div style={{ width: "100%", marginTop: "5%" }}>
                  <h4>Event Organizer’s Ask</h4>
                  <p style={{marginTop:"2%"}}>
                    We would require{" "}
                    {preview?.amountRequired
                      ? preview?.amountRequired
                      : "Event organizer's Ask "}{" "}
                    worth of sponsorship from your organization
                  </p>
                </div>

                <div
                  style={{
                    width: "100%",
                    marginTop: "5%",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <h4>Confidentiality</h4>
                  <p style={{textAlign:"center", marginTop:"2%"}}>Copyright {preview?.eventOrganizerName ? preview?.eventOrganizerName : "Event organizer's name"} {currentYear}.</p>
                  <p style={{textAlign:"center", marginTop:"2%"}}>
                    This publication is copyrighted and remains the intellectual
                    property of {preview?.eventOrganizerName ? preview?.eventOrganizerName : "Event organizer's name"}.
                  </p>
                  <p style={{textAlign:"center", marginTop:"2%"}}>
                    The information contained in this proposal is confidential,
                    and no part of it may be copied and/or disclosed to any
                    person without the express permission of {preview?.eventOrganizerName ? preview?.eventOrganizerName : "Event organizer's name"}
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

export default ProposalPreviewC;
