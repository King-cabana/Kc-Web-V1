import React, { useEffect } from "react";
import TopBar from "../../../userFlows/topBar/dashboardTopBar/TopBar";
import LoadingScreen from "../../../LoadingScreen";
import {
  AbsolutePrimaryButton,
  AlternativeButton2,
} from "../../../components/buttons/Buttons";
import { ButtonContainer } from "../../../userFlows/defineAudience/DefineAudienceStyled";
import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import {
  OverallContainer,
  ProposalContainer,
  Txt,
  WelcomeHeader,
} from "../proposalBuildup/ProposalBuildupStyled";
import { BsChevronRight } from "react-icons/bs";
import {
  PreviewLogoBg,
  ProposalInner,
  TableContainer,
  TableDataCell,
  TableHeaderCell,
  TableRow,
  TableAndContentContainer,
  OrganizerAsk,
  Confidential,
} from "./ProposalPreviewCoverStyled";
import ProposalPagination from "../../proposalPagination/ProposalPagination";
import { useDispatch, useSelector } from "react-redux";
import createProposal from "../../../redux/services/createProposal";
import { clearAllFields } from "../../../redux/slices/proposalSlice";


const ProposalPreviewC = () => {
  const [loading, setLoading] = useState(false);
  const totalPages = 5;
  const [currentPage, setCurrentPage] = useState(5);
  const { id } = useParams();

  const user = useSelector((state) => state.userDetails);
  const proposal = useSelector((state) => state.proposal);
  const eventCreated = useSelector((state) => state.eventCreated);
  const profile = useSelector((state) => state?.eventOrganizerProfile);

  const currentYear = new Date().getFullYear();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const navigateBack = () => {
    navigate("/event/proposal/proposalpreview-page4");
  };

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
    navigate(`/event/proposal/proposalpreview-page${id}`);
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

  const handleProposalPreview = async (event) => {
    event.preventDefault();
    try {
      if (!eventCreated.id) {
        throw new Error("ID is not defined");
      }
      const stateWithId = { ...proposal, id: eventCreated.id };
      await createProposal(stateWithId, user.token);
      dispatch(clearAllFields());
      navigate("/createEvent/submitted")
    } catch (error) {
      console.log(error);
    }
  };


  return (
    <>
      <TopBar marginBottom="1rem" />
      {loading ? (
        <LoadingScreen />
      ) : (
        <OverallContainer>
          <ProposalContainer style={{ marginTop: "5%"}}>
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
            <ProposalInner>
              <h4 style={{textAlign: "center", color: "#0068ff", textDecoration: "underline"}}>
                {eventCreated?.eventName ? eventCreated?.eventName + `'s` : "Event Name"}{" "}
                Proposal to{" "}
                {proposal?.eventSponsor ? proposal?.eventSponsor : "Sponsor"}.
              </h4>
              <TableAndContentContainer>
                <TableContainer>
                  <TableRow>
                    <TableHeaderCell>Item</TableHeaderCell>
                    <TableHeaderCell>Description</TableHeaderCell>
                    <TableHeaderCell>Cost (#)</TableHeaderCell>
                  </TableRow>
                  {proposal?.budget?.budgetDetails ? (
                    <>
                      {proposal?.budget?.budgetDetails.map((detail, index) => (
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

                        <TableDataCell>{proposal?.budget?.total}</TableDataCell>
                      </TableRow>
                    </>
                  ) : (
                    "Budget List"
                  )}
                </TableContainer>

                <OrganizerAsk>
                  <h4>Event Organizer’s Ask</h4>
                  <p>
                    We would require{" "}
                    {proposal?.eventBudgetAddOn
                      ? proposal?.eventBudgetAddOn
                      : "Event organizer's Ask "}{" "}
                    worth of sponsorship from your organization
                  </p>
                </OrganizerAsk>

                <Confidential>
                  <h4>Confidentiality</h4>
                  <p>
                    Copyright{" "}
                    {profile?.organizerName
                      ? profile?.organizerName
                      : "Event organizer's name"}{" "}
                    {currentYear}.
                  </p>
                  <p>
                    This publication is copyrighted and remains the intellectual
                    property of{" "}
                    {profile?.organizerName
                      ? profile?.organizerName
                      : "Event organizer's name"}
                    .
                  </p>
                  <p>
                    The information contained in this proposal is confidential,
                    and no part of it may be copied and/or disclosed to any
                    person without the express permission of{" "}
                    {profile?.organizerName
                      ? profile?.organizerName
                      : "Event organizer's name"}.
                  </p>
                </Confidential>
              </TableAndContentContainer>
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
            <AbsolutePrimaryButton onClick={handleProposalPreview}>
              Proceed
            </AbsolutePrimaryButton>
          </ButtonContainer>
        </OverallContainer>
      )}
    </>
  );
};

export default ProposalPreviewC;
