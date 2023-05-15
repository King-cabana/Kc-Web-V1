import React, { useState, useRef, useEffect, lazy } from "react";
import { LoadScript, StandaloneSearchBox } from "@react-google-maps/api";
import { useSelector, useDispatch } from "react-redux";
import {
  editGenerally,
  addTag,
  removeTag,
} from "../../redux/slices/createEventSlice";
import {
  BudgetInventoryContainer,
  BudgetInventoryHeader,
  BudgetInventorySubtitle,
  BudgetSection,
  BudgetTitle1,
  BudgetTitle2,
  ButtonContainer,
} from "./budgetInventory/BudgetStyled";
import {
  EventBox,
  EventInputBox,
  EventInput,
  EventLink,
  ButtonBox,
  ButtonOutline,
  EventPhysical,
  LeftInputBox,
  RightInputBox,
  InputTime,
  InputDate,
} from "./SecondCreateEventStyled";
import { InputText, Input, SmallerInputText } from "./FirstCreateEventStyled";
import { AiOutlineClose } from "react-icons/ai";
import { BiLinkAlt } from "react-icons/bi";
import CrossTime from "../../assets/images/CrossTime.png";
import { useNavigate, useLocation } from "react-router-dom";
import {
  EventSubSection,
  InputTagBox,
  AddButton,
  ErrorText,
  EventButton,
  InputBox,
  AddOtherBox,
  BlueText,
  Delete,
  TagsWrapper,
} from "./TimeLineEventsStyled";
import {
  AlternativeButton2,
  AbsolutePrimaryButton,
} from "../../components/buttons/button";
import { BsChevronRight } from "react-icons/bs";
import { WelcomeHeader, Txt } from "../emptyEvent/EmptyEventStyled";
// const { LoadScript } = lazy(() => import("@react-google-maps/api"));
const libraries = ["places"];

const TimeLineEvent = ({ padding }) => {
  const [newTag, setNewTag] = useState("");
  const [locationType, setLocationType] = useState("physical");
  const dispatch = useDispatch();
  const location = useLocation();
  const state = useSelector((state) => state.createEvent);
  const navigate = useNavigate();
  const inputRef = useRef();

  // useEffect(() => {
  //   if (locationType === "virtual") {
  //     window.location.reload();
  //   }
  // }, [locationType]);

  const handlePlaceChanged = () => {
    const [place] = inputRef.current.getPlaces();
    if (place) {
      console.log(place.formatted_address);
      console.log(place.geometry.location.lat());
      console.log(place.geometry.location.lng());
    }
  };
  // Add tag to the list
  const handleAddTag = () => {
    if (newTag !== "") {
      // Check if the new todo already exists in the array
      const alreadyExists = state?.tags?.some((tag) => tag === newTag);
      if (!alreadyExists && state?.tags?.length < 5) {
        dispatch(addTag(newTag));
      }
      setNewTag("");
    }
  };
  // Remove tag from the list
  const handleRemoveTag = (tag) => {
    dispatch(removeTag(tag));
  };
  // Render the list of tags
  const tagList = state?.tags?.map((tag, index) => (
    <div key={index}>
      <EventButton style={{ marginBottom: "0.5rem", width: "auto" }}>
        {tag}
        <Delete onClick={() => handleRemoveTag(tag)}>
          <AiOutlineClose />
          {/* ... */}
        </Delete>
      </EventButton>
    </div>
  ));

  const change = (e) => {
    dispatch(editGenerally({ name: e.target.name, value: e.target.value }));
  };
  const navigateBack = () => {
    navigate("/createEvent/eventDetails");
  };

  const navigateNext = () => {
    navigate("/createEvent/eventPlanPreview");
    console.log(state);
  };

  return (
    <>
      <BudgetInventoryContainer style={{ padding: padding }}>
        {location.pathname === "/createEvent/eventPlanPreview" ? null : (
          <>
            <WelcomeHeader>
              <Txt>Event Details</Txt>
              <BsChevronRight style={{ marginRight: "0.5rem" }} />
              <Txt color="#FF2957">Timelines</Txt>
              <BsChevronRight
                style={{ marginRight: "0.5rem" }}
                color="#FF2957"
              />
            </WelcomeHeader>
            <BudgetInventoryHeader>
              {/* <BudgetTitle1>Create Event</BudgetTitle1> */}
              <BudgetInventorySubtitle>
                Capture and share every information needed to make your event
                desirable and splendid.
              </BudgetInventorySubtitle>
            </BudgetInventoryHeader>
          </>
        )}

        <BudgetSection>
          <BudgetTitle2>Tags and Timelines</BudgetTitle2>

          <EventSubSection>
            <InputText>Event Tags</InputText>
            <InputTagBox>
              <Input
                placeholder="Add hashtags or search keywords to your event"
                type="text"
                value={newTag}
                onChange={(event) => setNewTag(event.target.value)}
              />
              <AddButton onClick={handleAddTag}>Add</AddButton>
            </InputTagBox>
            <ErrorText>
              *{state?.tags?.length ? state.tags.length : "0"}/5 Tags
            </ErrorText>
            <TagsWrapper>{tagList}</TagsWrapper>
          </EventSubSection>
          {/* second section */}
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
                  defaultValue={state.eventEndDate}
                  style={{ fontSize: "15px" }}
                />
              </EventInput>
            </RightInputBox>
          </EventBox>
          {/* second section  */}
          <EventSubSection>
            <div style={{ marginBottom: "1rem" }}>
              <InputText>Event Location</InputText>
            </div>
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
              <EventLink visibility="visible">
                <InputText style={{ marginBottom: "0rem" }}>
                  Virtual Link
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

            {/* {locationType === "physical" || locationType === "hybrid" ? ( */}

            <LoadScript
              libraries={libraries}
              googleMapsApiKey="AIzaSyA00IiRp5js2iPk45AiKD9RG6SZxjPgOvY"
            >
              <StandaloneSearchBox
                onLoad={(ref) => (inputRef.current = ref)}
                onPlacesChanged={handlePlaceChanged}
              >
                {locationType === "physical" || locationType === "hybrid" ? (
                  <EventPhysical visibility="visible">
                    <InputText style={{ marginBottom: "0rem" }}>
                      Event Location
                    </InputText>
                    <EventInputBox>
                      <input
                        type="text"
                        placeholder="Enter Location"
                        style={{ width: "100vw" }}
                        onChange={change}
                        name="eventAddress"
                        defaultValue={state.eventAddress}
                      />
                    </EventInputBox>
                  </EventPhysical>
                ) : (
                  <></>
                )}
              </StandaloneSearchBox>
            </LoadScript>
            {/* <EventInputBox>
                  <input
                    type="text"
                    placeholder="E.g: 19, Isaac Mike Street, Ikeja, Lagos, Nigeria."
                    name="eventAddress"
                    onChange={change}
                    defaultValue={state.eventAddress}
                    style={{ fontSize: "15px" }}
                  ></input>
                </EventInputBox> */}
          </EventSubSection>
        </BudgetSection>

        {location.pathname === "/createEvent/eventPlanPreview" ? null : (
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
            <AbsolutePrimaryButton onClick={navigateNext}>
              Save & Continue
            </AbsolutePrimaryButton>
          </ButtonContainer>
        )}
      </BudgetInventoryContainer>
    </>
  );
};

export default TimeLineEvent;
