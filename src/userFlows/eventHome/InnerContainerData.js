import React, { useContext, useEffect, useState } from "react";
import { EventOrganizerContext } from "./EventHome";
import { useDispatch } from "react-redux";
import {
  InnerContainer,
  Row1,
  Text,
  Select,
  Option,
  Counter,
  InnerWrapper,
} from "./EventHomeStyled";

const InnerContainerData = () => {
  const dispatch = useDispatch();
  const [eventListLength, setEventListLength] = useState(0);
  const [attendees, setAttendees] = useState(0);
  const { state } = useContext(EventOrganizerContext) || { state: {} };
  const { axios, user, API_URL_2, navigate } = useContext(
    EventOrganizerContext
  );

  useEffect(() => {
    setEventListLength(state?.eventList?.length || 0);
    // console.log(state);
    // console.log(state?.profileEmail);

    const fetchAttendees = async () => {
      try {
        const { data } = await axios.get(
          API_URL_2 + `profiles/events/attendees?email=${state?.profileEmail}`,
          {
            headers: {
              Authorization: `Bearer ${user?.token}`,
            },
          }
        );
        // console.log(data);
        setAttendees(data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchAttendees();
  }, [state]);

  const eventReportData = [
    {
      title: "Events Created",
      options: ["Total", "Draft", "Completed"],
      counter: eventListLength,
      to: "/event/planning",
    },
    {
      title: "Proposals generated",
      counter: 0,
      to: "/event/proposal",
    },
    {
      title: "Attendees registered",
      counter: attendees,
    },
    {
      title: "Event history",
      counter: 0,
    },
    {
      title: "Sponsors engaged",
      options: ["Matched", "In progress", "Rejected"],
      counter: 0,
    },
    {
      title: "Vendors engaged",
      counter: 0,
    },
  ];

  return (
    <InnerWrapper>
      {eventReportData?.map((data, index) => (
        <InnerContainer
          key={index}
          onClick={data.to ? () => navigate(`${data?.to}`) : null}
        >
          <Row1>
            <Text>{data.title}</Text>
            {data.options ? (
              <Select name="list" id="list">
                {data.options.map((option, index) => (
                  <Option key={index}>{option}</Option>
                ))}
              </Select>
            ) : null}
          </Row1>
          <Counter>{data.counter}</Counter>
        </InnerContainer>
      ))}
    </InnerWrapper>
  );
};

export default InnerContainerData;
