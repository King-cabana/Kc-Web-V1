import React from "react";
import {
  ItemsContainer,
  Wrapper,
  ChecklistHeading2,
  ChecklistSubHeading,
  ButtonLink,
  PrimaryButton2,
} from "./EventHomeStyled";

export const eventCkecklistData = [
  {
    heading: "Create event",
    subHeading:
      "Your journey to creating fulfilling memories starts here. Create an event right away.",
    buttonText: "Start here",
  },
  {
    heading: "Define your Audience",
    subHeading:
      "Define your audience in terms of everyone who cares about what you do and the larger theme, not just the people who will attend.",
  },
  {
    heading: "Upload Budget & Take Inventory",
    subHeading:
      "In order to understand the full range of tangible benefits your organization has to offer, you need to prepare an inventory of your assets.",
  },
  {
    heading: "Generate Proposals",
    subHeading:
      "Capture, preview, and share your event proposals with desirable sponsors today.",
  },
];

const ChecklistData = ({ heading, subHeading, buttonText }) => {
  return (
    <>
      <ItemsContainer>
        <Wrapper>
          <ChecklistHeading2>{heading}</ChecklistHeading2>
          <ChecklistSubHeading>{subHeading}</ChecklistSubHeading>
        </Wrapper>
        {buttonText ? (
          <ButtonLink to="/createevent/eventdetails/1">
            <PrimaryButton2>{buttonText}</PrimaryButton2>
          </ButtonLink>
        ) : null}
      </ItemsContainer>
    </>
  );
};

export default ChecklistData;
