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
import { addEventHistoryFields, addImageUrl, addSponsors, removeSponsors } from "../../../redux/slices/createEventHistorySlice";
import { AiOutlineClose } from "react-icons/ai";

const EventHistoryForm = () => {
  const [loading, setLoading] = useState(false);
  const [sponsorList, setSponsorList] = useState("");
  // const [file, setFile] = useState("");
  const state = useSelector((state) => state.createEventHistory);
  const dispatch = useDispatch()
  console.log(state)

  const otherFields = (e) => {
    dispatch(addEventHistoryFields({ name: e.target.name, value: e.target.value }));
  };

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
  

  return (
    <>
      <TopBar marginBottom="1rem" />
      {loading ? (
        <LoadingScreen />
      ) : (
        <OverallContainer>
          <ProposalContainer style={{padding:"1rem 2rem" }}>
            <WelcomeHeader>
              <Txt>Event</Txt>
              <BsChevronRight style={{ marginRight: "0.5rem" }} />
              <Txt fontWeight="400" color="#FF2957">
                History
              </Txt>
            </WelcomeHeader>
          </ProposalContainer>
          <HistoryInner>
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
{/* 
            <EventSubSection style={{ padding: "0", marginTop: "2%" }}>
              <Txt>Benefits our sponsors received</Txt>
              <InputTagBox>
                <Input
                  placeholder="List any and all benefits sponsors received by sponsoring your event."
                  type="text"
                  //   value={potentialImpacts}
                  //   onChange={(event) => setPotentialImpacts(event.target.value)}
                />
                <AddButton type="button">Add</AddButton>
              </InputTagBox>
              <ProposalTagsWrapper></ProposalTagsWrapper>
            </EventSubSection> */}

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
          </HistoryInner>
        </OverallContainer>
      )}
    </>
  );
};

export default EventHistoryForm;
