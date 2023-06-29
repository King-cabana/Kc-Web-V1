import { useContext } from "react";
import {
  EventPlanningTable,
  TdLarge,
  TableTr,
  TableHead,
  ViewButton,
  TdMedium,
  TdSmall,
  HistoryTdMd,
  HistoryTdLg,
} from "../eventPlanning/EventPlanningStyled";
import { SlOptionsVertical } from "react-icons/sl";
import { encryptId, formatDate, formatTime, getEventStatus } from "../../utils";
import { useNavigate } from "react-router-dom";
import { HistoryContext } from "./FilledEventHistory";

const HistoryDetails = () => {
  const navigate = useNavigate();

  const handleViewButtonClick = (e, data) => {
    e.stopPropagation();
    const encryptedId = encryptId(data?.id);
    navigate(`/event/history/view-event/${encryptedId}`);
  };

  const {active, handleApiClick} = useContext(HistoryContext)
  return (
    <>
      <div id="event-details-container" style={{ overflowX: "auto" }}>
        <EventPlanningTable style={{ marginBottom: "10rem" }}>
          <tbody>
            <TableHead>
              <HistoryTdLg style={{ fontWeight: "600" }}>
                Name of Event
              </HistoryTdLg>
              <HistoryTdMd style={{ fontWeight: "600" }}>Date Held</HistoryTdMd>
              <TdMedium style={{ border: "none" }}>{""}</TdMedium>
            </TableHead>

            {active?.map((data, index) => (
            <TableTr
              key={index}
              backgroundcolor={data.selected ? "#f9e6ea" : "white"}
              onClick={() => handleApiClick(data, index)}
            >
              <HistoryTdLg>
                {data.eventName}
                {/* Peter Enumah And Co */}
              </HistoryTdLg>
              <HistoryTdMd>
                {formatDate(data?.eventDate)} at{" "}
                      {formatTime(data?.eventTime)}
                {/* Tuesday, January 22, 2023 at 7:00 PM WAT */}
              </HistoryTdMd>
              <TdSmall style={{ position: "relative" }}>
                <div
                  style={{
                    position: "absolute",
                    right: "1rem",
                    top: "50%",
                    transform: "translateY(-50%)",
                  }}
                >
                  <ViewButton
                  onClick={(e) => handleViewButtonClick(e, data)}
                  >
                    View
                  </ViewButton>
                </div>
                <SlOptionsVertical cursor="pointer" />
              </TdSmall>
            </TableTr>
            ))}
          </tbody>
        </EventPlanningTable>
      </div>
    </>
  );
};

export default HistoryDetails;
