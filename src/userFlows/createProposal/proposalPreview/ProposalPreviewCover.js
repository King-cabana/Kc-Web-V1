import React, { useEffect, useState } from "react";
import TopBar from "../../../userFlows/topBar/dashboardTopBar/TopBar";
import LoadingScreen from "../../../LoadingScreen";
import {
  AbsolutePrimaryButton,
  AlternativeButton2,
} from "../../../components/buttons/Buttons";
import { ButtonContainer } from "../../../userFlows/defineAudience/DefineAudienceStyled";
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
  PreparedByDiv,
  PreparedForDiv,
} from "./ProposalPreviewCoverStyled";
import ProposalPagination from "../../proposalPagination/ProposalPagination";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { API_URL_2 } from "../../../redux/services/authService";
import { toast } from "react-toastify";
import { setEventCreated } from "../../../redux/slices/eventCreatedSlice";

const ProposalPreviewCover = () => {
  const [loading, setLoading] = useState(false);
  const [event, setEvent] = useState();
  const totalPages = 5;
  const [currentPage, setCurrentPage] = useState(1);
  const user = useSelector((state) => state.userDetails);
  const proposal = useSelector((state) => state.proposal);
  const profile = useSelector((state) => state?.eventOrganizerProfile);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchEvent = async () => {
      try {
        const { data } = await axios.get(
          API_URL_2 + `events/${proposal?.eventId}`
        );
        setEvent(data);
        dispatch(setEventCreated(data));
      } catch (error) {
        if (error?.response?.status === 400) {
          navigate("/*");
          toast.error("Event Does Not Exist");
          console.log("Event Does Not Exist");
        }
        throw error;
      } finally {
        setLoading(false);
      }
    };
    fetchEvent();
  }, [proposal]);

  const navigateBack = () => {
    navigate(`/event/proposal/proposalbuildup`);
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
        <OverallContainer id="page1">
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
                proposal?.proposalBannerUrl
                  ? proposal?.proposalBannerUrl
                  : TestImage
              }
              alt="banner"
            />
          </CoverImageHolder>

          <CoverDetailsHolder>
            <PreparedByDiv>
              <h3>Prepared by</h3>
              <p>
                {profile?.organizerName
                  ? profile?.organizerName
                  : "Event Organizer's name"}
              </p>
              <p>{event?.eventName ? event?.eventName : "Event Name"}</p>
              <p>
                {profile?.profileEmail
                  ? profile?.profileEmail
                  : "Organizer's email"}
              </p>
              <p>
                {profile?.phoneNumber ? profile?.phoneNumber : "Phone number"}
              </p>
            </PreparedByDiv>

            <PreparedForDiv>
              <h3>Prepared For</h3>
              <p>
                {proposal?.eventSponsor
                  ? proposal?.eventSponsor
                  : "Event sponsor"}
              </p>
            </PreparedForDiv>
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
