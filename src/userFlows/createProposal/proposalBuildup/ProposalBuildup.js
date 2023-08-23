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
  InputSeg,
} from "./ProposalBuildupStyled";
import { BsChevronRight } from "react-icons/bs";
import {
  CustomWrapper,
  FormContainer,
  Input,
  Supported,
  UploadBtn,
} from "../../../userFlows/createEvent/FirstCreateEventStyled";
import { ButtonContainer, FileWrapper } from "../budgetInventory/BudgetStyled";
import { useNavigate } from "react-router";
import {
  AddButton,
  Delete,
  EventSubSection,
  InputTagBox,
} from "../../../userFlows/createEvent/TimeLineEventsStyled";
import { AiOutlineClose } from "react-icons/ai";
import {
  AbsolutePrimaryButton,
  AlternativeButton2,
} from "../../../components/buttons/Buttons";
import { useParams } from "react-router-dom";
import {
  addFields,
  addPotentialImpact,
  removePITag,
} from "../../../redux/slices/proposalSlice";
import { decryptId, encryptId } from "../../../utils";
import CreateEventTopBar from "../../topBar/CreateEventTopBar/CreateEventTopBar";

const ProposalBuildup = () => {
  const [file, setFile] = useState("");
  const [isSuccess, setIsSuccess] = useState(false);
  const [errorMsg, setErrorMsg] = useState(false);
  const [loading, setLoading] = useState(false);
  const [potentialImpacts, setPotentialImpacts] = useState("");

  const state = useSelector((state) => state.proposal);
  const id = sessionStorage.getItem("line41");
  console.log(state?.eventId);

  const navigate = useNavigate();
  const decryptedId = decryptId(id);

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
      if (!decryptedId) {
        throw new Error("proposal not defined");
      }
      navigate("/event/proposal/proposalpreview-page1");
    } catch (error) {
      console.log(error);
    }
  };

  const navigateBack = () => {
    navigate("/event/proposal");
  };

  return (
    <>
      <CreateEventTopBar />
      <OverallContainer
        style={{ height: "calc(100vh - 200px)", overflowY: "auto" }}
      >
        <ProposalContainer>
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
              Proposal Buildup
            </Txt>
          </WelcomeHeader>
        </ProposalContainer>

        <ProposalBackground>
          <ProposalInner onSubmit={handleProposalPreview}>
            <Txt>Proposal Banner</Txt>
            <InputSeg style={{ background: "white" }}>
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
            <div
              style={{
                width: "100%",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Txt>Sponsorship Request</Txt>
            </div>

            {/* <InputSeg style={{ marginTop: "2%" }}>
              <Txt>Name of Sponsor’s Organization</Txt>
              <Input
                type="text"
                name="eventSponsor"
                onChange={otherFields}
                defaultValue={state?.eventSponsor}
              />
            </InputSeg> */}

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

            {/* <InputSeg style={{ marginTop: "3%" }}>
              <Txt>Event Organizer's Ask</Txt>
              <p style={{ marginBottom: "1%", fontSize: "14px" }}>
                Highlight the amount required from sponsor.
              </p>
              <Input
                type="text"
                name="eventBudgetAddOn"
                placeholder="Amount required."
                onChange={otherFields}
                defaultValue={state?.eventBudgetAddOn}
              />
            </InputSeg> */}
            <ButtonContainer style={{ margin: "0rem" }}>
              <AlternativeButton2
                onClick={() =>
                  navigate(`/generateproposal/${encryptId(state?.eventId)}`)
                }
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
              <AbsolutePrimaryButton type="submit">
                Proceed to Preview Proposal
              </AbsolutePrimaryButton>
            </ButtonContainer>
          </ProposalInner>
        </ProposalBackground>
      </OverallContainer>
    </>
  );
};

export default ProposalBuildup;
