// import { useNavigate } from "react-router";
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
// import { encryptId, formatDate, formatTime, getEventStatus } from "../../utils";

const HistoryDetails = () => {
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

            {/* {active?.map((data, index) => ( */}
            <TableTr
            //   key={index}
            //   backgroundcolor={data.selected ? "#f9e6ea" : "white"}
            //   onClick={() => handleApiClick(data, index)}
            >
              <HistoryTdLg>
                {/* {data.eventName} */}
                Peter Enumah And Co
              </HistoryTdLg>
              <HistoryTdMd>
                {/* {formatDate(data?.eventStartDate)} at{" "}
                      {formatTime(data?.eventStartTime)} */}
                Tuesday, January 22, 2023 at 7:00 PM WAT
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
                  // onClick={(event) => handleViewButtonClick(event, data)}
                  >
                    View
                  </ViewButton>
                </div>
                <SlOptionsVertical cursor="pointer" />
              </TdSmall>
            </TableTr>
            {/* ))} */}
          </tbody>
        </EventPlanningTable>
      </div>
    </>
  );
};

export default HistoryDetails;
