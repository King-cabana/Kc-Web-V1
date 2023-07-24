import React, { useContext, useState } from "react";
import { EventDetailsSide, ViewButton } from "../eventPlanning/EventPlanningStyled";
import { useNavigate } from "react-router";
import { Txt } from "../emptyEvent/EmptyEventStyled";
import { FaTimes } from "react-icons/fa";
import { BudgetInventorySubtitle } from "../../userFlows/createProposal/budgetInventory/BudgetStyled";
import {
  AbsolutePrimaryButton,
  AlternativeButton2,
  ModalPrimaryButton,
} from "../../components/buttons/button";
import { encryptId, formatDate, formatTime } from "../../utils";
import { HistoryContext } from "./FilledEventHistory";
import { useSelector } from "react-redux";
import { BtnHolderLink, ModalButtonContainer, ModalText, NPopUpComponent, PopUpOverlay } from "../createProposal/budgetInventory/InventoryStyled";
import axios from "axios";
import { API_URL_2 } from "../../redux/services/authService";
import { toast } from "react-toastify";

const EventHistorySidebar = () => {
  const navigate = useNavigate();
  const { selectedEvent, shareDetails } = useContext(HistoryContext);
  const user = useSelector((state)=> state.userDetails);
  const [modal, setModal] = useState(false);
  const toggleModal = (e) => {
    e.stopPropagation();
    setModal(!modal);
  };
  // Modal Contitions
  if (modal) {
    document.body.classList.add("active-modal");
  } else {
    document.body.classList.remove("active-modal");
  }
  const showModal = !modal && "notShown";

  const handleViewButtonClick = (e, selectedEvent) => {
    e.stopPropagation();
    const encryptedId = encryptId(selectedEvent?.id);
    navigate(`/event/history/view-event/${encryptedId}`);
  };
  const handleEditButtonClick = (e, selectedEvent) => {
    e.stopPropagation();
    const encryptedId = encryptId(selectedEvent?.id);
    navigate(`/event/history/edit-event-history/${encryptedId}`);
  };

  const deleteHistory = async (selectedEvent) => {
    try {
      await axios.delete(API_URL_2 + `histories/${selectedEvent?.id}`, {
        headers: {
          Authorization: `Bearer ${user?.token}`,
        },
      });
      toast.success("Event deleted from history successfully.");
      window.location.reload();
    } catch (error) {
      console.log("Failed to delete event from history:", error);
      toast.error(error.message);
    } finally {
      setModal(false);
    }
  };

  return (
    <>
    {modal && <PopUpOverlay />}
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

        <AlternativeButton2
          style={{ marginTop: "1rem", width: "150px" }}
          onClick={() => {
            window.navigator?.share(shareDetails);
          }}
        >
          Share Event Link
        </AlternativeButton2>

        <AlternativeButton2 style={{ marginTop: "1rem", width: "150px" }} onClick={(e) => handleEditButtonClick(e, selectedEvent)}>
          Edit Event
        </AlternativeButton2>

        <AbsolutePrimaryButton onClick={(e)=>toggleModal(e)} style={{ width: "150px", marginTop: "auto" }}>
          Delete Event
        </AbsolutePrimaryButton>
      </EventDetailsSide>

      <div className={`${showModal}`}>
                        <NPopUpComponent style={{ height: "auto", border: "1px solid #ff2957" }}>
                          <ModalText style={{ marginBottom: "1.5rem" }}>
                            Are you sure you want to delete this event from history?
                          </ModalText>
                          <ModalButtonContainer>
                            <BtnHolderLink>
                              <AlternativeButton2
                                onClick={() => setModal(!modal)}
                              >
                                Cancel
                              </AlternativeButton2>
                            </BtnHolderLink>
                            <ModalPrimaryButton
                              onClick={() => deleteHistory(selectedEvent)}
                            >
                              Yes, delete
                            </ModalPrimaryButton>
                          </ModalButtonContainer>
                        </NPopUpComponent>
                      </div>

    </>
  );
};

export default EventHistorySidebar;
