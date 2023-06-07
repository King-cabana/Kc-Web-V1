import React from "react";
import {
  NoEventContainer,
  OverallContainer,
  Txt,
  WelcomeHeader,
} from "../../emptyEvent/EmptyEventStyled";
import { BsChevronRight } from "react-icons/bs";
import { Heading } from "../../eventPlanning/EventPlanningStyled";
import ProposalDetails from "./ProposalDetails";

const ProposalsList = () => {
  return (
    <OverallContainer>
      <NoEventContainer>
        <WelcomeHeader>
          <Txt>Event</Txt>
          <BsChevronRight style={{ marginRight: "0.5rem" }} />
          <Txt fontWeight="400" color="#FF2957">
            Proposal
          </Txt>
        </WelcomeHeader>

        <Heading>Events Created</Heading>
        <ProposalDetails />
      </NoEventContainer>
    </OverallContainer>
  );
};

export default ProposalsList;
