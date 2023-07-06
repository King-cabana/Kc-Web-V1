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
  const [proposals, setProposals] = useState();
  const [proposalList, setProposalList] = useState(0);
  const [attendees, setAttendees] = useState(0);
  const [historyLength, setHistoryLength] = useState(0);
  const { state } = useContext(EventOrganizerContext) || { state: {} };
  const { userEmail, axios, user, API_URL_2, navigate } = useContext(
    EventOrganizerContext
  );

  useEffect(() => {
    setEventListLength(state?.eventList?.length);

    const fetchAttendees = async () => {
      let data = null;
      try {
        if (state?.profileEmail) {
          const response = await axios.get(
            API_URL_2 +
              `profiles/events/attendees?email=${state?.profileEmail}`,
            {
              headers: {
                Authorization: `Bearer ${user?.token}`,
              },
            }
          );
          data = response.data;
        } else {
          const response = await axios.get(
            API_URL_2 + `profiles/events/attendees?email=${userEmail}`,
            {
              headers: { Authorization: `Bearer ${user?.token}` },
            }
          );
          data = response.data;
        }
        // console.log(data);
        setAttendees(data);
      } catch (error) {
        console.log(error);
      }
    };

    const proposalsGenerated = async () => {
      try {
        const { data } = await axios.get(
          API_URL_2 + `proposals/profile?id=${state?.id}`,
          {
            headers: { Authorization: `Bearer ${user?.token}` },
          }
        );
        setProposals(data);
        setProposalList(proposals?.length);
      } catch (error) {
        console.log(error);
      }
    };

    const eventHistory = async()=>{
      try{
        const {data} = await axios.get(API_URL_2+`histories/profile?email=${state?.profileEmail ? state?.profileEmail : userEmail}`,
        {
          header: {Authorization: `Bearer ${user?.token}`},
        });
        setHistoryLength(data?.length);
      }catch(error){
        console.log(error)
      }
    };

    fetchAttendees();
    proposalsGenerated();
    eventHistory();
  }, [state, userEmail, proposals]);

  const eventReportData = [
    {
      title: "Events Created",
      options: ["Total", "Draft", "Completed"],
      counter: eventListLength,
      to: "/event/planning",
    },
    {
      title: "Proposals generated",
      counter: proposalList,
      to: "/event/proposal",
    },
    {
      title: "Attendees registered",
      counter: attendees,
    },
    {
      title: "Event history",
      counter: historyLength,
      to: "/event/history"
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
              <Select
                name="list"
                id="list"
                onClick={(e) => e.stopPropagation()}
              >
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
