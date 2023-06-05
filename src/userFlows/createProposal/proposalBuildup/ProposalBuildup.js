import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  ProposalContainer,
  WelcomeHeader,
  Txt,
  OverallContainer,
  ProposalBackground,
  ProposalInner,
  BenefitsTag,
  ProposalTagsWrapper,
} from "./ProposalBuildupStyled";
import { BsChevronRight } from "react-icons/bs";
import { InputSeg } from "../../profile/organiserProfile/OrganiserProfileStyled";
import {
  CustomWrapper,
  FormContainer,
  Input,
  Supported,
  UploadBtn,
} from "../../event/createEvent/FirstCreateEventStyled";
import {
  ButtonContainer,
  FileWrapper,
} from "../../event/budgetInventory/BudgetStyled";
import { useNavigate } from "react-router";
import {
  AddButton,
  Delete,
  EventSubSection,
  InputTagBox,
} from "../../event/createEvent/TimeLineEventsStyled";
import { AiOutlineClose } from "react-icons/ai";
import {
  AbsolutePrimaryButton,
  AlternativeButton2,
} from "../../components/button/button";
import createProposal from "../../redux/service/createProposal";
import { useParams } from "react-router-dom";
import {
  addBenefitList,
  addFields,
  addPotentialImpact,
  removeBLTag,
  removePITag,
} from "../../redux/slices/proposalSlice";

const ProposalBuildup = () => {
  const [file, setFile] = useState("");
  const [isSuccess, setIsSuccess] = useState(false);
  const [errorMsg, setErrorMsg] = useState(false);
  const [loading, setLoading] = useState(false);
  const [benefitList, setNewBenefitTag] = useState("");
  const [potentialImpacts, setPotentialImpacts] = useState("");
  const { id } = useParams();

  const eventId = id;
  const state = useSelector((state) => state.proposal);
  const user = useSelector((state) => state.userDetails);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleFileChange = async (e) => {
    const MAX_FILE_SIZE = 1024; // 1MB
    const file = e.target.files[0];
    const fileSizeKiloBytes = file.size / 1024;

    if (fileSizeKiloBytes > MAX_FILE_SIZE) {
      setErrorMsg("*Image size is greater than 1mb*");
      setIsSuccess(false);
      return;
    } else {
      const data = new FormData();
      data.append("file", e.target.files[0]);
      data.append("upload_preset", "kingCabana");
      setLoading(true);
      try {
        const response = await fetch(
          "https://api.cloudinary.com/v1_1/dcanx4ftd/image/upload",
          {
            method: "POST",
            body: data,
          }
        );
        const backgroundPicture = await response.json();
        if (backgroundPicture.secure_url) {
          setFile(backgroundPicture.secure_url);
          setLoading(false);
          dispatch(
            addFields({
              name: e.target.name,
              value: backgroundPicture.secure_url,
            })
          );
        }
      } catch (error) {
        setLoading(false);
        setErrorMsg("**ERROR UPLOADING IMAGE!**");
        return null;
      }
    }
  };

  useEffect(() => {
    if (!file) {
      setErrorMsg("*Please choose an image*");
      setIsSuccess(false);
      return;
    }
    setErrorMsg("");
    setIsSuccess(true);
  }, [file]);

  const handleTag = () => {
    if (benefitList !== "") {
      const alreadyExists = state?.benefitList?.some(
        (tag) => tag === benefitList
      );
      if (!alreadyExists && state?.benefitList?.length < 5) {
        dispatch(addBenefitList(benefitList));
      }
      setNewBenefitTag("");
    }
  };
  const handleRemoveTag = (tag) => {
    dispatch(removeBLTag(tag));
  };

  const handlePITag = () => {
    if (potentialImpacts !== "") {
      const alreadyExists = state?.potentialImpacts?.some(
        (tag) => tag === potentialImpacts
      );
      if (!alreadyExists && state?.potentialImpacts?.length < 5) {
        dispatch(addPotentialImpact(potentialImpacts));
      }
      setPotentialImpacts("");
    }
  };
  const handleRemovePITag = (tag) => {
    dispatch(removePITag(tag));
  };

  const otherFields = (e) => {
    dispatch(addFields({ name: e.target.name, value: e.target.value }));
  };

  const benefitTags = state?.benefitList?.map((tag, index) => (
    <div key={index}>
      <BenefitsTag
        style={{
          marginTop: "2%",
          width: "max-content",
          border: "1px solid black",
          color: "black",
        }}
      >
        {tag}
        <Delete
          onClick={() => handleRemoveTag(tag)}
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            color: "#ff2957",
          }}
        >
          <AiOutlineClose />
        </Delete>
      </BenefitsTag>
    </div>
  ));

  const impactTags = state?.potentialImpacts?.map((tag, index) => (
    <div key={index}>
      <BenefitsTag
        style={{
          marginTop: "2%",
          width: "max-content",
          border: "1px solid black",
          color: "black",
        }}
      >
        {tag}
        <Delete
          onClick={() => handleRemovePITag(tag)}
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            color: "#ff2957",
          }}
        >
          <AiOutlineClose />
        </Delete>
      </BenefitsTag>
    </div>
  ));

  const handleProposalPreview = async (event) => {
    event.preventDefault();
    try {
      if (!eventId) {
        throw new Error("ID is not defined");
      }
      const stateWithId = { ...state, eventId: parseInt(eventId) };
      const proposal = await createProposal(stateWithId, user.token);
      sessionStorage.setItem("proposalId", proposal.id);
      navigate(`/event/proposal/proposal-buildup/proposal-preview/${id}`);
    } catch (error) {
      console.log(error);
    }
  };

  const navigateBack = () => {
    navigate("/event/proposal");
  };

  return (
    <>
      <OverallContainer>
        <ProposalContainer>
          <WelcomeHeader>
            <Txt>Event</Txt>
            <BsChevronRight style={{ marginRight: "0.5rem" }} />
            <Txt
              style={{ cursor: "pointer" }}
              onclick={navigateBack}
              fontWeight="400"
            >
              Proposal
            </Txt>
            <BsChevronRight style={{ marginRight: "0.5rem" }} />
            <Txt fontWeight="400" color="#FF2957">
              Proposal Buildup
            </Txt>
          </WelcomeHeader>
        </ProposalContainer>

        <ProposalBackground>
          <ProposalInner onSubmit={handleProposalPreview}>
            <InputSeg>
              <Txt>Event Banner</Txt>
              <FormContainer>
                <FileWrapper style={{ width: "100%" }}>
                  <CustomWrapper>
                    <input
                      type="file"
                      style={{ cursor: "pointer" }}
                      onChange={handleFileChange}
                      hidden
                      id="file"
                      accept="image/png, image/jpeg, image/jpg"
                      name="proposalBannerUrl"
                      // defaultValue={file}
                    />
                  </CustomWrapper>
                  <UploadBtn htmlFor="file">Upload</UploadBtn>
                </FileWrapper>
                <h3
                  style={{
                    color: "#ff2957",
                    fontSize: "16px",
                    justifyContent: "center",
                    display: "flex",
                    marginTop: "0.5rem",
                  }}
                >
                  {errorMsg}
                </h3>
                <Supported>Support image: JPEG, JPG, PNG, *img</Supported>
                <Supported style={{ color: "#ff2957" }}>
                  Not more than 1mb
                </Supported>
                {isSuccess ? (
                  <div
                    style={{
                      padding: "1rem",
                      display: "flex",
                      justifyContent: "flex-end",
                      alignItems: "center",
                    }}
                  >
                    <p style={{ color: "green", marginRight: "1rem" }}>
                      Validation successful
                    </p>
                    <img
                      src={file}
                      style={{ width: "50px", height: "50px" }}
                      alt=""
                    />
                  </div>
                ) : null}
                {loading ? (
                  <h4 style={{ display: "flex", justifyContent: "flex-end" }}>
                    Loading...
                  </h4>
                ) : null}
              </FormContainer>
            </InputSeg>
            <Txt>Sponsorship Request</Txt>

            <InputSeg style={{ marginTop: "2%" }}>
              <Txt>Name of Sponsor’s Organization</Txt>
              <Input
                type="text"
                name="eventSponsor"
                onChange={otherFields}
                defaultValue={state?.eventSponsor}
                // defaultValue={state.}
              />
            </InputSeg>

            <EventSubSection style={{ padding: "0" }}>
              <Txt>Benefits of sponsoring this event</Txt>
              <InputTagBox>
                <Input
                  placeholder="List all benefits"
                  type="text"
                  value={benefitList}
                  onChange={(event) => setNewBenefitTag(event.target.value)}
                />
                <AddButton type="button" onClick={handleTag}>
                  Add
                </AddButton>
              </InputTagBox>
              <ProposalTagsWrapper>{benefitTags}</ProposalTagsWrapper>
            </EventSubSection>

            <EventSubSection style={{ padding: "0" }}>
              <Txt>Impact of the event on the community</Txt>
              <InputTagBox>
                <Input
                  placeholder="List any and all potential impacts of the event on the community"
                  type="text"
                  value={potentialImpacts}
                  onChange={(event) => setPotentialImpacts(event.target.value)}
                />
                <AddButton type="button" onClick={handlePITag}>
                  Add
                </AddButton>
              </InputTagBox>
              <ProposalTagsWrapper>{impactTags}</ProposalTagsWrapper>
            </EventSubSection>

            <InputSeg style={{ marginTop: "3%" }}>
              <Txt>Event Budget</Txt>
              <Input
                type="text"
                name="eventBudgetAddOn"
                placeholder="Add the estimated total of what you need and amount required (optional) "
                onChange={otherFields}
                defaultValue={state?.eventBudgetAddOn}
                // defaultValue
              />
            </InputSeg>
            <ButtonContainer style={{ margin: "0rem" }}>
              <AlternativeButton2
                onClick={() => navigate("/event/proposal")}
                style={{
                  color: "#FF2957",
                  fontWeight: "600",
                  marginRight: "15px",
                }}
              >
                Back
              </AlternativeButton2>
              <AbsolutePrimaryButton type="submit">
                Preview Proposal
              </AbsolutePrimaryButton>
            </ButtonContainer>
          </ProposalInner>
        </ProposalBackground>
      </OverallContainer>
    </>
  );
};

export default ProposalBuildup;
