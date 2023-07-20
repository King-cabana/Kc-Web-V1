import React, { useEffect, useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import { useNavigate } from "react-router";
import { useSelector, useDispatch } from "react-redux";
import { clearEvent } from "../../../redux/slices/createEventSlice";
import { setEventCreated } from "../../../redux/slices/eventCreatedSlice";
import SwipeableViews from "react-swipeable-views";
import Pagination from "./Pagination";
import "./EventPlanPreview.css";
import {
  BudgetInventoryContainer,
  BudgetInventoryHeader,
  BudgetTitle1,
  BudgetInventorySubtitle,
  ButtonContainer,
} from "../../createProposal/budgetInventory/BudgetStyled";
import { Space } from "./EventPlanPreviewStyled";
import { AbsolutePrimaryButton } from "../../../components/buttons/button";
import { AiOutlineLeftCircle, AiOutlineRightCircle } from "react-icons/ai";
import { ImSpinner6 } from "react-icons/im";
import FirstCreateEvent from "../FirstCreateEvent";
import TimeLineEvent from "../TimeLineEvent";
import CreateEventTopBar from "../../topBar/CreateEventTopBar/CreateEventTopBar";
import { API_URL_2 } from "../../../redux/services/authService";

const styles = {
  root: {
    position: "relative",
    height: "510px",
  },
};

const EventPlanPreview = () => {
  const [index, setIndex] = useState(0);
  const [isDisabled, setIsDisabled] = useState(false);
  const [sending, setSending] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const state = useSelector((state) => state.createEvent);
  const user = useSelector((state) => state.userDetails);
  console.log(state)
  console.log(user)

  const handleChangeIndex = (newIndex) => {
    setIndex(newIndex);
  };
  const handleNext = () => {
    setIndex((prevIndex) => prevIndex + 1);
  };
  const handleBack = () => {
    setIndex((prevIndex) => prevIndex - 1);
  };
  const renderArrow = (direction) => {
    const handleClick = direction === "left" ? handleBack : handleNext;
    const disable =
      (direction === "left" && index === 0) ||
      (direction === "right" && index === 1);
    return (
      <div
        className={`arrow arrow-${direction}${disable ? " disabled" : ""}`}
        style={disable ? { display: "none" } : null}
        onClick={disable ? null : handleClick}
      >
        {direction === "left" ? (
          <AiOutlineLeftCircle size={"2rem"} color={"#ff2957"} />
        ) : (
          <AiOutlineRightCircle size={"2rem"} color={"#ff2957"} />
        )}
      </div>
    );
  };

  useEffect(() => {
    if (!state?.eventName) {
      // setIsDisabled(true);
    }
  }, [state?.eventName]);

  const handleSubmit = async function (e) {
    e.preventDefault();
    // console.log(state);
    try {
      setSending(true);
      setIsDisabled(true);
      const { data } = await axios.post(API_URL_2 + "events/create", state, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${user?.token}`,
        },
      });
      // console.log(data);
      dispatch(setEventCreated(data));
      navigate("/createEvent/submitted");
      // toast.success("You have created event Successfully");
      dispatch(clearEvent());
      localStorage.removeItem("banner");
      // localStorage.removeItem("budget");
    } catch (error) {
      console.log(error);
      toast.error("Error Creating Event");
      setIsDisabled(false);
      setSending(false);
    }
  };
  return (
    <>
      <CreateEventTopBar />
      <BudgetInventoryContainer style={{ marginBottom: "0rem" }}>
        <BudgetInventoryHeader>
          <BudgetTitle1>Event Plan Preview</BudgetTitle1>
          <BudgetInventorySubtitle>
            Swipe pages to preview, make changes if need be, then proceed to
            create event.
          </BudgetInventorySubtitle>
        </BudgetInventoryHeader>

        <div style={styles.root}>
          <SwipeableViews
            index={index}
            onChangeIndex={handleChangeIndex}
            enableMouseEvents={true}
            style={{ height: "100%" }}
          >
            <FirstCreateEvent padding="0.1rem" />
            <TimeLineEvent padding="0.1rem" />
          </SwipeableViews>
          <Pagination
            dots={2}
            index={index}
            onChangeIndex={handleChangeIndex}
          />
        </div>
        <Space />
        {renderArrow("left")}
        {renderArrow("right")}
        <ButtonContainer display={"flex"}>
          <AbsolutePrimaryButton onClick={handleSubmit} disabled={isDisabled}>
            <>{sending ? <ImSpinner6 size={"1.5rem"} /> : "Create"}</>
          </AbsolutePrimaryButton>
        </ButtonContainer>
      </BudgetInventoryContainer>
    </>
  );
};

export default EventPlanPreview;
