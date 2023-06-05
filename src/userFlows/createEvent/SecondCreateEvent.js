import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { editGenerally } from "../../redux/slices/createEventSlice";
import { BiLinkAlt } from "react-icons/bi";
import { useNavigate, useLocation } from "react-router";
import {
  EventBox,
  EventOccurence,
  EventInputBox,
  EventInput,
  EventLink,
  ButtonBox,
  ButtonOutline,
  EventPhysical,
  LeftInputBox,
  RightInputBox,
  DayBox,
  WeekBox,
  InputTime,
  InputDate,
} from "./SecondCreateEventStyled";
import { InputText, SmallerInputText } from "./FirstCreateEventStyled";
import { EventSubSection } from "../createEvent/TimeLineEventsStyled";
import {
  BudgetInventoryContainer,
  BudgetInventoryHeader,
  BudgetInventorySubtitle,
  BudgetSection,
  BudgetTitle1,
  BudgetTitle2,
  ButtonContainer,
} from "../createProposal/budgetInventory/BudgetStyled";
import {
  AbsolutePrimaryButton,
  AlternativeButton2,
} from "../../components/buttons/button";

const SecondCreateEvent = ({ padding }) => {
  const [isDisabled, setIsDisabled] = useState(true);
  const [visibility, setVisibility] = useState(false);
  const [locationType, setLocationType] = useState("virtual");
  const [calenderType, setCalendarType] = useState("monthly");
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const location = useLocation();
  const state = useSelector((state) => state.createEvent);
  const keyContact = useSelector((state) => state.eventOrganizerProfile);

  useEffect(() => {
    dispatch(
      editGenerally({
        name: "keyContactEmail",
        value: keyContact?.profileEmail,
      })
    );
    dispatch(
      editGenerally({
        name: "organizerName",
        value: keyContact?.organizerName,
      })
    );
    dispatch(
      editGenerally({
        name: "organizerDetails",
        value: keyContact?.organizerDetails,
      })
    );
    // console.log(keyContact?.profileEmail);
    // console.log(keyContact?.organizerName);
    // console.log(keyContact?.organizerDetails);
    // return a cleanup function
    return () => {
      // cleanup code here
    };
  }, []);

  useEffect(() => {
    if (state.eventStartDate && state.eventStartTime) {
      setIsDisabled(false);
    } else {
      setIsDisabled(true);
    }
  }, [state.eventStartDate, state.eventStartTime]);

  const change = (e) => {
    dispatch(editGenerally({ name: e.target.name, value: e.target.value }));
  };

  const navigateBack = (e) => {
    e.preventDefault();
    navigate("/createevent/eventdetails/1");
    // console.log(state);
  };

  const navigateNext = (e) => {
    e.preventDefault();
    navigate("/createevent/eventdetails/3");
    // console.log(state);
  };

  return (
    <>
      <BudgetInventoryContainer style={{ padding: padding }}>
        {location.pathname === "/eventPlanPreview" ? null : (
          <BudgetInventoryHeader>
            <BudgetTitle1>Create Event</BudgetTitle1>
            <BudgetInventorySubtitle>
              Capture and share every information needed to make your event
              proposal desirable of attracting sponsorships.
            </BudgetInventorySubtitle>
          </BudgetInventoryHeader>
        )}

        <BudgetSection>
          <BudgetTitle2>Time and Location</BudgetTitle2>

          <BudgetInventorySubtitle>
            If your event holds regularly, you can record previously held events
            in the event history session
          </BudgetInventorySubtitle>
          {/* first section  */}
          <EventSubSection>
            <EventOccurence>
              <InputText style={{ marginBottom: "0rem" }}>
                Choose Event occurence
              </InputText>
              <ButtonBox>
                <div onClick={() => setVisibility(true)}>
                  <ButtonOutline
                    bgcolor={visibility ? "#0068FF" : undefined}
                    color={visibility ? "white" : undefined}
                    name="eventOccurence"
                    value="Single event"
                    onClick={change}
                  >
                    Single event
                  </ButtonOutline>
                </div>

                <div onClick={() => setVisibility(false)}>
                  <ButtonOutline
                    bgcolor={!visibility ? "#0068FF" : undefined}
                    color={!visibility ? "white" : undefined}
                    name="eventOccurence"
                    value="Reccuring event"
                    onClick={change}
                  >
                    Reccuring event
                  </ButtonOutline>
                </div>
              </ButtonBox>
            </EventOccurence>

            <DayBox display={!visibility ? "flex" : undefined}>
              <InputText style={{ marginBottom: "0rem" }}>
                How frequently does this event take place?
              </InputText>
              <WeekBox>
                <div onClick={() => setCalendarType("weekly")}>
                  <ButtonOutline
                    bgcolor={calenderType === "weekly" ? "#0068FF" : undefined}
                    color={calenderType === "weekly" ? "white" : undefined}
                    name="eventFrequency"
                    value="Weekly"
                    onClick={change}
                  >
                    Weekly
                  </ButtonOutline>
                </div>

                <div onClick={() => setCalendarType("monthly")}>
                  <ButtonOutline
                    bgcolor={calenderType === "monthly" ? "#0068FF" : undefined}
                    color={calenderType === "monthly" ? "white" : undefined}
                    name="eventFrequency"
                    value="Monthly"
                    onClick={change}
                  >
                    Monthly
                  </ButtonOutline>{" "}
                </div>

                <div onClick={() => setCalendarType("quarterly")}>
                  <ButtonOutline
                    bgcolor={
                      calenderType === "quarterly" ? "#0068FF" : undefined
                    }
                    color={calenderType === "quarterly" ? "white" : undefined}
                    name="eventFrequency"
                    value="Quarterly"
                    onClick={change}
                  >
                    Quaterly
                  </ButtonOutline>
                </div>

                <div onClick={() => setCalendarType("yearly")}>
                  <ButtonOutline
                    bgcolor={calenderType === "yearly" ? "#0068FF" : undefined}
                    color={calenderType === "yearly" ? "white" : undefined}
                    name="eventFrequency"
                    value="Yearly"
                    onClick={change}
                  >
                    Yearly
                  </ButtonOutline>
                </div>
              </WeekBox>
            </DayBox>
          </EventSubSection>
          {/* input section  */}
          <EventBox>
            <LeftInputBox>
              <InputText style={{ marginBottom: "0rem" }}>Event Time</InputText>

              <EventInput>
                <SmallerInputText>Start time:</SmallerInputText>
                <InputTime
                  name="eventStartTime"
                  pattern="[0-9]{2}:[0-9]{2}"
                  onChange={change}
                  defaultValue={state.eventStartTime}
                  style={{ fontSize: "15px" }}
                />
              </EventInput>
              <EventInput>
                <SmallerInputText>End time:</SmallerInputText>
                <InputTime
                  name="eventEndTime"
                  pattern="[0-9]{2}:[0-9]{2}"
                  onChange={change}
                  defaultValue={state.eventEndTime}
                  style={{ fontSize: "15px" }}
                />
              </EventInput>
            </LeftInputBox>

            <RightInputBox>
              <InputText style={{ marginBottom: "0rem" }}>Event Date</InputText>
              <EventInput>
                <SmallerInputText>Start date:</SmallerInputText>
                <InputDate
                  name="eventStartDate"
                  pattern="\d{4}-\d{2}-\d{2}"
                  onChange={change}
                  defaultValue={state.eventStartDate}
                  style={{ fontSize: "15px" }}
                />
              </EventInput>
              <EventInput>
                <SmallerInputText>End date:</SmallerInputText>
                <InputDate
                  name="eventEndDate"
                  pattern="\d{4}-\d{2}-\d{2}"
                  onChange={change}
                  defaultValue={state.eventEndDatee}
                  style={{ fontSize: "15px" }}
                />
              </EventInput>
            </RightInputBox>
          </EventBox>
          {/* second section  */}
          <EventSubSection>
            <ButtonBox>
              <div onClick={() => setLocationType("virtual")}>
                <ButtonOutline
                  bgcolor={locationType === "virtual" ? "#0068FF" : undefined}
                  color={locationType === "virtual" ? "white" : undefined}
                  name="eventLocation"
                  value="Virtual"
                  onClick={change}
                >
                  Virtual
                </ButtonOutline>
              </div>
              <div onClick={() => setLocationType("physical")}>
                <ButtonOutline
                  bgcolor={locationType === "physical" ? "#0068FF" : undefined}
                  color={locationType === "physical" ? "white" : undefined}
                  name="eventLocation"
                  value="Physical"
                  onClick={change}
                >
                  Physical
                </ButtonOutline>
              </div>
              <div onClick={() => setLocationType("hybrid")}>
                <ButtonOutline
                  bgcolor={locationType === "hybrid" ? "#0068FF" : undefined}
                  color={locationType === "hybrid" ? "white" : undefined}
                  name="eventLocation"
                  value="Hybrid"
                  onClick={change}
                >
                  Hybrid
                </ButtonOutline>
              </div>
            </ButtonBox>

            {(locationType === "virtual" || locationType === "hybrid") && (
              <EventLink display={"flex"}>
                <InputText style={{ marginBottom: "0rem" }}>
                  Event Link
                </InputText>
                <EventInputBox>
                  <BiLinkAlt
                    style={{
                      margin: "auto",
                      marginLeft: "1.5%",
                      color: "gray",
                    }}
                    size={25}
                  />
                  <input
                    placeholder="Enter link to event"
                    name="eventLink"
                    defaultValue={state.eventLink}
                    onChange={change}
                    style={{ fontSize: "15px" }}
                  />
                </EventInputBox>
              </EventLink>
            )}

            {(locationType === "physical" || locationType === "hybrid") && (
              <EventPhysical display={"flex"}>
                <InputText style={{ marginBottom: "0rem" }}>
                  Event Location
                </InputText>
                <EventInputBox>
                  <input
                    type="text"
                    placeholder="E.g: 19, Isaac Mike Street, Ikeja, Lagos, Nigeria."
                    name="eventAddress"
                    onChange={change}
                    defaultValue={state.eventAddress}
                    style={{ fontSize: "15px" }}
                  ></input>
                </EventInputBox>
              </EventPhysical>
            )}
          </EventSubSection>
        </BudgetSection>

        {location.pathname === "/eventPlanPreview" ? null : (
          <ButtonContainer style={{ margin: "0rem" }}>
            <AlternativeButton2
              onClick={navigateBack}
              style={{
                color: "#FF2957",
                fontWeight: "600",
                marginRight: "2rem",
              }}
            >
              Back
            </AlternativeButton2>
            <AbsolutePrimaryButton onClick={navigateNext} disabled={isDisabled}>
              Save & Continue
            </AbsolutePrimaryButton>
          </ButtonContainer>
        )}
      </BudgetInventoryContainer>
    </>
  );
};

export default SecondCreateEvent;
