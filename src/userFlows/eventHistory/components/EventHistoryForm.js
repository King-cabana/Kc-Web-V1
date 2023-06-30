import React from "react";
import TopBar from "../../topBar/dashboardTopBar/TopBar";
import LoadingScreen from "../../../LoadingScreen";
import {
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
import { TextArea } from "../../../pages/Budget/BudgetStyled";
import {
  AddButton,
  EventSubSection,
  InputTagBox,
} from "../../createEvent/TimeLineEventsStyled";

const EventHistoryForm = () => {
  const [loading, setLoading] = useState(false);

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
                // onChange={otherFields}
                // defaultValue={state?.eventSponsor}
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
                // onChange={otherFields}
                // defaultValue={state?.eventSponsor}
              />
            </HistorySection>

            <HistoryTimeAndDateHolder>
              <InputSeg>
                <Txt>Event Time</Txt>
                <Input
                  type="time"
                  name="eventTime"
                  // onChange={otherFields}
                  // defaultValue={state?.eventSponsor}
                />
              </InputSeg>

              <InputSeg>
                <Txt>Event Date</Txt>
                <Input
                  type="date"
                  name="eventDate"
                  // onChange={otherFields}
                  // defaultValue={state?.eventSponsor}
                />
              </InputSeg>
            </HistoryTimeAndDateHolder>

            <InputSeg style={{ marginTop: "2%" }}>
              <Txt>Event Location</Txt>
              <Input
                type="text"
                name="eventLocation"
                placeholder="Select Location"
                // onChange={otherFields}
                // defaultValue={state?.eventSponsor}
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
                  //   value={potentialImpacts}
                  //   onChange={(event) => setPotentialImpacts(event.target.value)}
                />
                <AddButton type="button">Add</AddButton>
              </InputTagBox>
              <ProposalTagsWrapper></ProposalTagsWrapper>
            </EventSubSection>

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
                          //   onChange={handleFileChange}
                          hidden
                          id="file"
                          accept="image/png, image/jpeg, image/jpg"
                          name="proposalBannerUrl"
                          // defaultValue={file}
                        />
                      </CustomWrapper>
                      <UploadBtn style={{ width: "100px" }} htmlFor="file">
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
                      {/* {errorMsg} */}
                    </h3>
                    <Supported>Support image: JPEG, JPG, PNG, *img</Supported>
                    <Supported style={{ color: "#ff2957", marginBottom: "3%" }}>
                      Not more than 1mb
                    </Supported>
                    {/* {isSuccess ? (
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
                ) : null} */}
                    {loading ? (
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
                          //   onChange={handleFileChange}
                          hidden
                          id="file"
                          accept="image/png, image/jpeg, image/jpg"
                          name="proposalBannerUrl"
                          // defaultValue={file}
                        />
                      </CustomWrapper>
                      <UploadBtn style={{ width: "100px" }} htmlFor="file">
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
                      {/* {errorMsg} */}
                    </h3>
                    <Supported>Support image: JPEG, JPG, PNG, *img</Supported>
                    <Supported style={{ color: "#ff2957", marginBottom: "3%" }}>
                      Not more than 1mb
                    </Supported>
                    {/* {isSuccess ? (
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
                ) : null} */}
                    {loading ? (
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
                          //   onChange={handleFileChange}
                          hidden
                          id="file"
                          accept="image/png, image/jpeg, image/jpg"
                          name="proposalBannerUrl"
                          // defaultValue={file}
                        />
                      </CustomWrapper>
                      <UploadBtn style={{ width: "100px" }} htmlFor="file">
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
                      {/* {errorMsg} */}
                    </h3>
                    <Supported>Support image: JPEG, JPG, PNG, *img</Supported>
                    <Supported style={{ color: "#ff2957", marginBottom: "3%" }}>
                      Not more than 1mb
                    </Supported>
                    {/* {isSuccess ? (
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
                ) : null} */}
                    {loading ? (
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
