import React, { useContext } from "react";
import { EventDetailsSide, ViewButton } from "../eventPlanning/EventPlanningStyled";
import { useNavigate } from "react-router";
import { Txt } from "../emptyEvent/EmptyEventStyled";
import { FaTimes } from "react-icons/fa";
import { BudgetInventorySubtitle } from "../../userFlows/createProposal/budgetInventory/BudgetStyled";
import {
  AbsolutePrimaryButton,
  AlternativeButton2,
} from "../../components/buttons/button";
import { encryptId, formatDate, formatTime } from "../../utils";
import { HistoryContext } from "./FilledEventHistory";

const EventHistorySidebar = () => {
  const navigate = useNavigate();
  const { selectedEvent, shareDetails } = useContext(HistoryContext);

  // const navigateViewEvent = (selectedEvent) => {
  //   // if (selectedEvent?.status === "Draft") {
  //   //   navigate(`/event/planning/view-draft-event/${selectedEvent?.id}`);
  //   // } else if (selectedEvent?.status === "Completed") {
  //   //   navigate(`/event/planning/view-completed-event/${selectedEvent?.id}`);
  //   // } else {
  //   //   navigate(`/event/planning/view-draft-event/${selectedEvent?.id}`);
  //   // }
  //   navigate(`/event/planning/view-completed-event/${selectedEvent?.id}`);
  // };

  const handleViewButtonClick = (e, selectedEvent) => {
    e.stopPropagation();
    const encryptedId = encryptId(selectedEvent?.id);
    navigate(`/event/history/view-event/${encryptedId}`);
  };

  return (
    <>
      <EventDetailsSide display={selectedEvent && "flex"}>
        <FaTimes
          cursor="pointer"
          style={{ alignSelf: "flex-start", marginBottom: "1rem" }}
        />
        <Txt fontWeight="600">{selectedEvent?.eventName}</Txt>
        <ViewButton
          style={{ marginRight: "0rem" }}
          onClick={(e) => handleViewButtonClick(e, selectedEvent)}
        >
          View
        </ViewButton>
        <BudgetInventorySubtitle>
          {formatDate(selectedEvent?.eventDate)}
        </BudgetInventorySubtitle>
        <BudgetInventorySubtitle>
          {formatTime(selectedEvent?.eventTime)}
        </BudgetInventorySubtitle>

        {/* {selectedEvent?.status === "Completed" ? ( */}
        <AlternativeButton2
          style={{ marginTop: "1rem", width: "150px" }}
          onClick={() => {
            window.navigator?.share(shareDetails);
          }}
        >
          Share Event Link
        </AlternativeButton2>
        {/* ) : null} */}

        <AlternativeButton2 style={{ marginTop: "1rem", width: "150px" }}>
          Edit Event
        </AlternativeButton2>
        {/* {selectedEvent?.status === "Completed" ? ( */}
        
        {/* ) : null} */}
        <AbsolutePrimaryButton style={{ width: "150px", marginTop: "auto" }}>
          Delete Event
        </AbsolutePrimaryButton>
      </EventDetailsSide>
    </>
  );
};

export default EventHistorySidebar;
