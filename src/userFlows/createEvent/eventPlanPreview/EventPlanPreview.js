import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import { useSelector } from "react-redux";
import SwipeableViews from "react-swipeable-views";
import Pagination from "./Pagination";
import "./EventPlanPreview.css";
import {
  BudgetInventoryContainer,
  BudgetInventoryHeader,
  BudgetTitle1,
  BudgetInventorySubtitle,
  ButtonContainer,
} from "../budgetInventory/BudgetStyled";
import { Space } from "./EventPlanPreviewStyled";
import { AbsolutePrimaryButton } from "../../../components/buttons/button";
import { AiOutlineLeftCircle, AiOutlineRightCircle } from "react-icons/ai";
import FirstCreateEvent from "../FirstCreateEvent";
import TimeLineEvent from "../TimeLineEvent";

const styles = {
  root: {
    position: "relative",
    height: "510px",
  },
};

const EventPlanPreview = () => {
  const [index, setIndex] = useState(0);
  const [isDisabled, setIsDisabled] = useState(true);
  const navigate = useNavigate();
  const state = useSelector((state) => state.createEvent);
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
    console.log(state);
    navigate("/createEvent/submitted");
  };
  return (
    <>
      <BudgetInventoryContainer style={{ marginBottom: "0rem" }}>
        <BudgetInventoryHeader>
          <BudgetTitle1>Event Plan Preview</BudgetTitle1>
          <BudgetInventorySubtitle>
            Swipe to preview, make changes if need be, then proceed to generate
            event proposal.
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
          <AbsolutePrimaryButton
            onClick={handleSubmit}
            // disabled={isDisabled}
          >
            Create
          </AbsolutePrimaryButton>
        </ButtonContainer>
      </BudgetInventoryContainer>
    </>
  );
};

export default EventPlanPreview;
