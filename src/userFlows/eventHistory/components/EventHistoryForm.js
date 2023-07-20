import React, { useEffect } from "react";
import TopBar from "../../topBar/dashboardTopBar/TopBar";
import LoadingScreen from "../../../LoadingScreen";
import {
  BenefitsTag,
  InputSeg,
  OverallContainer,
  ProposalContainer,
  ProposalTagsWrapper,
  Txt,
  WelcomeHeader,
} from "../../createProposal/proposalBuildup/ProposalBuildupStyled";
import { BsChevronRight } from "react-icons/bs";
import { useState } from "react";
import {
  Description,
  HeaderDiv,
  HistoryInner,
  HistorySection,
  HistoryTimeAndDateHolder,
} from "./EventHistoryFormStyled";
import {
  CustomWrapper,
  FileWrapper,
  FormContainer,
  Input,
  Supported,
  UploadBtn,
} from "../../createEvent/FirstCreateEventStyled";
import {
  AddButton,
  Delete,
  EventSubSection,
  InputTagBox,
} from "../../createEvent/TimeLineEventsStyled";
// import { addFields } from "../../../redux/slices/proposalSlice";
import { useDispatch, useSelector } from "react-redux";
import { useFileUpload } from "../../../components/FileUpload";
import { addEventHistoryFields, addImageUrl, addSponsors, removeSponsors, addSponsorsBenefits, removeSponsorsBenefits, clearEventHistory } from "../../../redux/slices/createEventHistorySlice";
import { AiOutlineClose } from "react-icons/ai";
import { BudgetInventorySubtitle, ButtonContainer} from "../../createProposal/budgetInventory/BudgetStyled";
import { AbsolutePrimaryButton} from "../../../components/buttons/Buttons";
import createEventHistory from "../../../redux/services/createEventHistory";
import {useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import axios from "axios";
import { PrimaryButton3 } from "../../../components/buttons/button";

const EventHistoryForm = () => {
  const [file, setFile] = useState("");
  const [errorMsg, setErrorMsg] = useState(false);
  const [selectedFile, setSelectedFile] = useState(null);
  const [bannerLoading, setBannerLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [loading, setLoading] = useState(false);
  const [sponsorList, setSponsorList] = useState("");
  const [benefitList, setBenefitList] = useState("");
  const [isDisabled, setIsDisabled] = useState(true);
  const state = useSelector((state) => state.createEventHistory);
  const user = useSelector((state) => state.userDetails);
  const keyContact = useSelector((state) => state.eventOrganizerProfile)
  const dispatch = useDispatch()

  const navigate = useNavigate()

  const otherFields = (e) => {
    dispatch(addEventHistoryFields({ name: e.target.name, value: e.target.value }));
  };

  const handleFileChange = async (e) => {
    const MAX_FILE_SIZE = 1024; // 1MB
    const file = e.target.files[0];
    const fileSizeKiloBytes = file?.size / 1024;

    if (fileSizeKiloBytes > MAX_FILE_SIZE) {
      setErrorMsg("*File size is greater than 1mb*");
      setIsSuccess(false);
      return;
    } else {
      const data = new FormData();
      data.append("file", e.target.files[0]);
      data.append("upload_preset", "kingCabana");
      setBannerLoading(true);
      setIsSuccess(false);
      setSelectedFile(null);
      try {
        const response = await axios.post(
          "https://api.cloudinary.com/v1_1/dcanx4ftd/image/upload",
          data
        );
        const uploadedBanner = response.data;
        // console.log(uploadedBanner.secure_url);
        if (uploadedBanner.secure_url) {
          setFile(uploadedBanner.secure_url);
          setBannerLoading(false);
          dispatch(
            addEventHistoryFields({
              name: e.target.name,
              value: uploadedBanner.secure_url,
            })
          );
        }
      } catch (error) {
        setBannerLoading(false);
        setErrorMsg("**ERROR UPLOADING FILE!**");
        console.log(error);
      }
    }
    setSelectedFile(e.target.files[0]);
    localStorage.setItem("banner", e.target.files[0].name);
  };
  useEffect(() => {
    const bannerData = localStorage.getItem("banner");
    if (bannerData) {
      setSelectedFile({ name: bannerData });
    }
  }, []);
  

  const {
    handleFileChange: handleFileChange1,
    errorMsg: errorMsg1,
    isSuccess: isSuccess1,
    loading: loading1,
    file: file1
  } = useFileUpload();

  const {
    handleFileChange: handleFileChange2,
    errorMsg: errorMsg2,
    isSuccess: isSuccess2,
    loading: loading2,
    file: file2
  } = useFileUpload();

  const {
    handleFileChange: handleFileChange3,
    errorMsg: errorMsg3,
    isSuccess: isSuccess3,
    loading: loading3,
    file: file3
  } = useFileUpload();


  useEffect(() => {
    if (isSuccess1) {
      dispatch(addImageUrl(file1));
    }
  }, [isSuccess1, file1]);
  
  useEffect(() => {
    if (isSuccess2) {
      dispatch(addImageUrl(file2));
    }
  }, [isSuccess2, file2]);
  
  useEffect(() => {
    if (isSuccess3) {
      dispatch(addImageUrl(file3));
    }
  }, [isSuccess3, file3]);
  

  const handleSponsorsTag = () => {
    if (sponsorList !== "") {
      const alreadyExists = state?.sponsorList?.some(
        (tag) => tag === sponsorList
      );
      if (!alreadyExists && state?.sponsorList?.length < 5) {
        dispatch(addSponsors(sponsorList));
      }
      setSponsorList("");
    }
  };
  const handleRemoveSponsors = (tag) => {
    dispatch(removeSponsors(tag));
  };
  

  const sponsorsTags = state?.sponsorList?.map((tag, index) => (
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
          onClick={() => handleRemoveSponsors(tag)}
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
  

  const handleBenefitsTag = () => {
    if (benefitList !== "") {
      const alreadyExists = state?.sponsorsBenefits?.some(
        (tag) => tag === benefitList
      );
      if (!alreadyExists && state?.sponsorsBenefits?.length < 5) {
        dispatch(addSponsorsBenefits(benefitList));
      }
      setBenefitList("");
    }
  };
  const handleRemoveBenefits = (tag) => {
    dispatch(removeSponsorsBenefits(tag));
  };
  

  const benefitTags = state?.sponsorsBenefits?.map((tag, index) => (
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
          onClick={() => handleRemoveBenefits(tag)}
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

  const handleEventHistory = async (event) => {
    event.preventDefault();
    try {
      setIsDisabled(true);
      const updatedState = {...state, keyContactEmail: keyContact?.profileEmail }
      await createEventHistory(updatedState, user.token)
      dispatch(clearEventHistory())
      localStorage.removeItem("banner");
      navigate("/event/history")
      toast.success("Event added successfully to History")
     
    } catch (error) {
      console.log(error);
      toast.error("Error adding event to History");
      setIsDisabled(false);
    }
  };
  
  useEffect(() => {
    if (state?.eventName && state?.eventDescription &&
      state?.eventTime && state?.eventDate &&
      state?.eventAddress) {
      setIsDisabled(false);
    } else {
      setIsDisabled(true);
    }
  }, [state?.eventName, state?.eventDescription,
    state?.eventTime, state?.eventDate, state?.eventAddress]);

  return (
    <>
      <TopBar marginBottom="1rem" />
      {loading ? (
        <LoadingScreen />
      ) : (
        <OverallContainer>
          <ProposalContainer style={{padding:"1rem 2rem" }}>
            <WelcomeHeader>
              <Txt onClick={()=>navigate("/event/history")}>Event</Txt>
              <BsChevronRight style={{ marginRight: "0.5rem" }} />
              <Txt fontWeight="400" onClick={()=>navigate("/event/history")}>
                History
              </Txt>
              <BsChevronRight style={{ marginRight: "0.5rem" }} />
              <Txt fontWeight="400" color="#FF2957">
                Add event 
              </Txt>
            </WelcomeHeader>
          </ProposalContainer>
          <HistoryInner onSubmit={handleEventHistory}>
            <HeaderDiv>
              <p
                style={{
                  color: "#484848",
                  fontSize: "20px",
                  fontWeight: "500",
                }}
              >
                Details of the event
              </p>
            </HeaderDiv>
            <InputSeg style={{ marginTop: "2%" }}>
              <Txt>Event Name</Txt>
              <Input
                type="text"
                name="eventName"
                placeholder="Enter your event name"
                onChange={otherFields}
                defaultValue={state?.eventName}
              />
            </InputSeg>

            <HistorySection style={{ marginTop: "2%" }}>
              <Txt>Event Description</Txt>
              <p style={{ marginBottom: "1%" }}>
                What is the purpose of this event
              </p>
              <Description
                type="text"
                name="eventDescription"
                placeholder="Be descriptive and concise"
                onChange={otherFields}
                defaultValue={state?.eventDescription}
              />
            </HistorySection>

            <HistorySection style={{ marginTop: "2%" }}>
              <Txt>Event Banner</Txt>
              <p style={{ marginBottom: "1%" }}>
                Upload a catchy banner that reflected the essence of the event.
              </p>
              <FormContainer style={{padding: "0.5rem", marginTop: "1rem", display: "flex"}}>
              <FileWrapper style={{marginBottom: "1rem", width: "80px", height: "70px"}}>
                <CustomWrapper>
                  <input
                    type="file"
                    style={{ cursor: "pointer" }}
                    onChange={handleFileChange}
                    name="bannerUrl"
                    defaultValue={file}
                    accept="image/png, image/jpeg, image/jpg"
                    // defaultValue={state?.eventBannerUrl}
                  />
                </CustomWrapper>
                <PrimaryButton3>Upload</PrimaryButton3>
              </FileWrapper>
              {isSuccess ? null : (
                <>
                  <Supported>
                    Support files; JPG, PNG, JPEG, *IMG files
                  </Supported>
                  <Supported
                    style={{
                      color: "#ff2957",
                    }}
                  >
                    Not more than 1mb
                  </Supported>
                </>
              )}
              <BudgetInventorySubtitle>
                {selectedFile && `${selectedFile.name}`}
              </BudgetInventorySubtitle>
              {isSuccess ? (
                <div
                  style={{
                    padding: "1rem",
                    display: "flex",
                    justifyContent: "flex-end",
                    alignItems: "center",
                  }}
                >
                  <BudgetInventorySubtitle
                    style={{ color: "green", marginRight: "1rem" }}
                  >
                    File uploaded successfully
                  </BudgetInventorySubtitle>
                </div>
              ) : null}
              {bannerLoading ? (
                <h4 style={{ display: "flex", justifyContent: "flex-end" }}>
                  Loading...
                </h4>
              ) : null}
              <p style={{ color: "#ff2957", fontSize: "16px" }}>
                {!file && errorMsg}
              </p>
            </FormContainer>
            </HistorySection>

            <HistoryTimeAndDateHolder>
              <InputSeg>
                <Txt>Event Time</Txt>
                <Input
                  type="time"
                  name="eventTime"
                  onChange={otherFields}
                  defaultValue={state?.eventTime}
                />
              </InputSeg>

              <InputSeg>
                <Txt>Event Date</Txt>
                <Input
                  type="date"
                  name="eventDate"
                  onChange={otherFields}
                  defaultValue={state?.eventDate}
                />
              </InputSeg>
            </HistoryTimeAndDateHolder>

            <InputSeg style={{ marginTop: "2%" }}>
              <Txt>Event Location</Txt>
              <Input
                type="text"
                name="eventAddress"
                placeholder="Select Location"
                onChange={otherFields}
                defaultValue={state?.eventAddress}
              />
            </InputSeg>

            <EventSubSection style={{ padding: "0" }}>
              <Txt>List of sponsors</Txt>
              <p style={{ marginBottom: "1%" }}>
                Sponsors who partnered for the event.
              </p>
              <InputTagBox>
                <Input
                  placeholder="List of sponsors for the event."
                  type="text"
                  value={sponsorList}
                  onChange={(event) => setSponsorList(event.target.value)}
                />
                <AddButton type="button" onClick={handleSponsorsTag} >Add</AddButton>
              </InputTagBox>
              <ProposalTagsWrapper>{sponsorsTags}</ProposalTagsWrapper>
            </EventSubSection>

            <EventSubSection style={{ padding: "0", marginTop: "2%" }}>
              <Txt>Benefits our sponsors received</Txt>
              <InputTagBox>
                <Input
                  placeholder="List any and all benefits sponsors received by sponsoring your event."
                  type="text"
                  value={benefitList}
                  onChange={(event) => setBenefitList(event.target.value)}
                />
                <AddButton type="button" onClick={handleBenefitsTag}>Add</AddButton>
              </InputTagBox>
              <ProposalTagsWrapper>{benefitTags}</ProposalTagsWrapper>
            </EventSubSection>

            <HistorySection style={{ marginTop: "2%" }}>
              <Txt>Add pictures taken at the event</Txt>
              <p style={{ marginBottom: "1%" }}>
                You can add maximum of three pictures
              </p>
              <HistoryTimeAndDateHolder style={{ padding: "2%" }}>
                <InputSeg style={{ background: "white" }}>
                  <FormContainer>
                    <FileWrapper style={{ width: "100%" }}>
                      <CustomWrapper>
                        <input
                          type="file"
                          style={{ cursor: "pointer" }}
                          onChange={handleFileChange1}
                          hidden
                          id="file1"
                          accept="image/png, image/jpeg, image/jpg"
                          name="imageUrl1"
                          defaultValue={file1}
                        />
                      </CustomWrapper>
                      <UploadBtn style={{ width: "100px" }} htmlFor="file1">
                        Upload
                      </UploadBtn>
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
                      {errorMsg1}
                    </h3>
                    <Supported>Support image: JPEG, JPG, PNG, *img</Supported>
                    <Supported style={{ color: "#ff2957", marginBottom: "3%" }}>
                      Not more than 1mb
                    </Supported>
                    {isSuccess1 ? (
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
                      src={file1}
                      style={{ width: "50px", height: "50px" }}
                      alt=""
                    />
                  </div>
                ) : null}
                    {loading1 ? (
                      <h4
                        style={{ display: "flex", justifyContent: "flex-end" }}
                      >
                        Loading...
                      </h4>
                    ) : null}
                  </FormContainer>
                </InputSeg>

                <InputSeg style={{ background: "white" }}>
                  <FormContainer>
                    <FileWrapper style={{ width: "100%" }}>
                      <CustomWrapper>
                        <input
                          type="file"
                          style={{ cursor: "pointer" }}
                          onChange={handleFileChange2}
                          hidden
                          id="file2"
                          accept="image/png, image/jpeg, image/jpg"
                          name="imageUrl2"
                          defaultValue={file2}
                        />
                      </CustomWrapper>
                      <UploadBtn style={{ width: "100px" }} htmlFor="file2">
                        Upload
                      </UploadBtn>
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
                      {errorMsg2}
                    </h3>
                    <Supported>Support image: JPEG, JPG, PNG, *img</Supported>
                    <Supported style={{ color: "#ff2957", marginBottom: "3%" }}>
                      Not more than 1mb
                    </Supported>
                    {isSuccess2 ? (
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
                      src={file2}
                      style={{ width: "50px", height: "50px" }}
                      alt=""
                    />
                  </div>
                ) : null}
                    {loading2 ? (
                      <h4
                        style={{ display: "flex", justifyContent: "flex-end" }}
                      >
                        Loading...
                      </h4>
                    ) : null}
                  </FormContainer>
                </InputSeg>

                <InputSeg style={{ background: "white" }}>
                  <FormContainer>
                    <FileWrapper style={{ width: "100%" }}>
                      <CustomWrapper>
                        <input
                          type="file"
                          style={{ cursor: "pointer" }}
                          onChange={handleFileChange3}
                          hidden
                          id="file3"
                          accept="image/png, image/jpeg, image/jpg"
                          name="imageUrl3"
                          defaultValue={file3}
                        />
                      </CustomWrapper>
                      <UploadBtn style={{ width: "100px" }} htmlFor="file3">
                        Upload
                      </UploadBtn>
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
                      {errorMsg3}
                    </h3>
                    <Supported>Support image: JPEG, JPG, PNG, *img</Supported>
                    <Supported style={{ color: "#ff2957", marginBottom: "3%" }}>
                      Not more than 1mb
                    </Supported>
                    {isSuccess3 ? (
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
                      src={file3}
                      style={{ width: "50px", height: "50px" }}
                      alt=""
                    />
                  </div>
                ) : null}
                    {loading3 ? (
                      <h4
                        style={{ display: "flex", justifyContent: "flex-end" }}
                      >
                        Loading...
                      </h4>
                    ) : null}
                  </FormContainer>
                </InputSeg>
              </HistoryTimeAndDateHolder>
            </HistorySection>
            <ButtonContainer style={{ margin: "0rem" }}>
              <AbsolutePrimaryButton type="submit" disabled={isDisabled}>
                Save
              </AbsolutePrimaryButton>
            </ButtonContainer>
          </HistoryInner>
        </OverallContainer>
      )}
    </>
  );
};

export default EventHistoryForm;
