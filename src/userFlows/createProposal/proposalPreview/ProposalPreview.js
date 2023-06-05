import React, { useEffect, useState } from "react";
import {
  ProposalDetails,
  Detail,
  SubDetail,
  Budget,
} from "./ProposalPreviewStyled";
import clock from "../../images/Clock.svg";
import Vector from "../../images/VectorNew.svg";
import drummer from "../../images/drummer-proposal.png";
import TopBar from "../../event/topBar/dashboardTopBar/TopBar";
import LoadingScreen from "../../LoadingScreen";
import { useNavigate, useParams } from "react-router";
import axios from "axios";
import {
  AbsolutePrimaryButton,
  AlternativeButton2,
} from "../../components/button/button";
import { ButtonContainer } from "../../event/pages/DefineAudienceStyled";
import { toast } from "react-toastify";
import { useDispatch, useSelector } from "react-redux";
import {
  BackgroundPicture,
  ImagesContainer,
} from "../../event/eventHome/EventHomeStyled";

const ProposalPreview = () => {
  const { id } = useParams();
  const [preview, setPreview] = useState();
  const [loading, setLoading] = useState(true);

  const navigate = useNavigate();
  const user = useSelector((state) => state.userDetails);
  const proposalId = sessionStorage.getItem("proposalId");

  const navigateBack = () => {
    navigate(`/event/proposal/proposal-buildup/${id}`);
  };

  const navigateNext = () => {
    navigate("/proposal-generated");
  };

  useEffect(() => {
    // const API_URL_2 = "https://api.kingcabana.com/proposals/";
    const API_URL_2 = "https://localhost:8080/proposals/";
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
          toast.error("Failed to fetch proposal preview");
          console.log(error);
        }
      } finally {
        setLoading(false);
      }
    };
    if (id && user?.token) {
      fetchProposalPreview();
    }
  }, [id, user?.token]);

  return (
    <>
      <TopBar marginBottom="1rem" />
      {loading ? (
        <LoadingScreen />
      ) : (
        <ProposalDetails>
          <h3>Proposal Preview</h3>
          <h3 className="header">
            Sponsorship Proposal for{" "}
            {preview?.eventName ? preview?.eventName : "Event Name"}
          </h3>
          <ImagesContainer>
            <BackgroundPicture
              src={preview?.eventBannerUrl ? preview.eventBannerUrl : drummer}
              alt="Background Picture"
            />
          </ImagesContainer>
          <Detail>
            <h4>Prepared By</h4>
            <p>
              {preview?.eventOrganizerName
                ? preview?.eventOrganizerName
                : "Event organizer's Name"}
            </p>
            <p>
              {preview?.profileEmailAddress
                ? preview?.profileEmailAddress
                : "Event organizer's E-mail"}
            </p>
            <p>
              {preview?.profilePhoneNumber
                ? preview?.profilePhoneNumber
                : "Phone number"}
            </p>
          </Detail>
          <Detail>
            <h4>To</h4>
            <p>
              {preview?.eventSponsor ? preview?.eventSponsor : "Event Sponsor"}
            </p>
          </Detail>
          <Detail>
            <h4>Event Name</h4>
            <p>{preview?.eventName ? preview?.eventName : "Event Name"}</p>
          </Detail>
          <Detail>
            <h4>Event Theme</h4>
            <p>{preview?.eventTheme ? preview?.eventTheme : "Event Theme"}</p>
          </Detail>
          <SubDetail>
            <Detail>
              <h4>Event Time</h4>
              <img src={clock} alt="time" />
              <p>
                {preview?.eventStartTime
                  ? preview?.eventStartTime
                  : "Event Time"}
              </p>
            </Detail>
            <Detail>
              <h4>Event Date</h4>
              <img src={Vector} alt="date" />
              <p>
                {preview?.eventStartDate
                  ? preview?.eventStartDate
                  : "Event Date"}
              </p>
            </Detail>
          </SubDetail>
          <Detail>
            <h4>Event description</h4>
            <p>
              {preview?.eventDescription
                ? preview?.eventDescription
                : "Event Description"}
            </p>
          </Detail>
          <Detail>
            <h4>Estimated Attendance</h4>
            <p>
              {preview?.estimatedAttendance
                ? preview?.estimatedAttendance
                : "Estimated"}
            </p>
          </Detail>
          <Detail>
            <h4>Benefits of sponsoring this event</h4>
            {preview?.benefitList ? (
              <ul>
                {preview.benefitList.map((benefit) => (
                  <li key={benefit}>{benefit}</li>
                ))}
              </ul>
            ) : (
              "Benefit List"
            )}
          </Detail>

          <Detail>
            <h4>Impact of the event on the community</h4>
            {preview?.potentialImpacts ? (
              <ul>
                {preview.potentialImpacts.map((impacts) => (
                  <li key={impacts}>{impacts}</li>
                ))}
              </ul>
            ) : (
              "Potential Impact List"
            )}
          </Detail>
          <Detail>
            <h4>Event Budget</h4>
            <Budget>
              <div>
                <p>
                  {preview?.eventBudgetAddOn
                    ? preview?.eventBudgetAddOn
                    : "Event Budget"}
                </p>
              </div>
            </Budget>
            <ButtonContainer style={{ margin: "0rem" }}>
              <AlternativeButton2
                onClick={navigateBack}
                style={{
                  color: "#FF2957",
                  fontWeight: "600",
                  marginRight: "15px",
                }}
              >
                Edit
              </AlternativeButton2>
              <AbsolutePrimaryButton onClick={navigateNext}>
                Generate
              </AbsolutePrimaryButton>
            </ButtonContainer>
          </Detail>
        </ProposalDetails>
      )}
    </>
  );
};

export default ProposalPreview;
