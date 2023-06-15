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
import {
  PreviewLogoBg,
  TableContainer,
  TableDataCell,
  TableHeaderCell,
  TableRow,
} from "./ProposalPreviewCoverStyled";
import styled from "styled-components";
import ProposalPagination from "../../proposalPagination/ProposalPagination";

const ProposalPreviewC = () => {
  const [loading, setLoading] = useState(true);
  const totalPages = 5;
  const [currentPage, setCurrentPage] = useState(5);

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
          <div style={{ width: "100%", height: "100%", padding: "3rem 5rem" }}>
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
                <TableRow>
                  <TableDataCell>Food</TableDataCell>
                  <TableDataCell>
                    Finger food for 1,000 students, Fruits and Vegetables for
                    2,000 students.
                  </TableDataCell>
                  <TableDataCell>2,000,000</TableDataCell>
                </TableRow>
                <TableRow>
                  <TableDataCell>Beverages</TableDataCell>
                  <TableDataCell>Alcohol for 1,000 students, Soft drinks for 1,000 students.</TableDataCell>
                  <TableDataCell>3,000.00</TableDataCell>
                </TableRow>
                <TableRow>
                  <TableDataCell>Decor</TableDataCell>
                  <TableDataCell>Decor for venue in Yaba hotel.</TableDataCell>
                  <TableDataCell>4,000.00</TableDataCell>
                </TableRow>
                <TableRow>
                  <TableDataCell>Venue</TableDataCell>
                  <TableDataCell>Intentional, Intercontinental hotel.</TableDataCell>
                  <TableDataCell>4,000.00</TableDataCell>
                </TableRow>
                <TableRow>
                  <TableDataCell>Videography</TableDataCell>
                  <TableDataCell>Videographer from international airport</TableDataCell>
                  <TableDataCell>3,000,00.00</TableDataCell>
                </TableRow>
                <TableRow>
                  <TableDataCell>Entertainment</TableDataCell>
                  <TableDataCell>Spin the bottle challenge, bottles and drink</TableDataCell>
                  <TableDataCell>2,000,00.00</TableDataCell>
                </TableRow>

              </TableContainer>
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
      {/* )} */}
    </>
  );
};

export default ProposalPreviewC;
