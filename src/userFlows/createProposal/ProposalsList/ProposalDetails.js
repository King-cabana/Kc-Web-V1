import React, { useState, useEffect } from "react";
import ReactLoading from "react-loading";
import axios from "axios";
import { toast } from "react-toastify";
import { useNavigate } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import {
  EventPlanningTable,
  SM,
  TableHead,
  TableTr,
  TdLarge,
  TdMedium,
  TdSmall,
  ViewButton,
  LoadingSection,
} from "../../eventPlanning/EventPlanningStyled";
import {
  AlignCenter,
  OptionsContainer,
  OptionsText,
} from "./ProposalsListStyled";
import { SlOptionsVertical } from "react-icons/sl";
import { HiOutlineDocumentText } from "react-icons/hi";
import { AbsolutePrimaryButton } from "../../../components/buttons/button";
import { API_URL_2 } from "../../../redux/services/authService";
import { setEventCreated } from "../../../redux/slices/eventCreatedSlice";

const ProposalDetails = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [active, setActive] = useState([]);
  const [loading, setLoading] = useState(true);
  const user = useSelector((state) => state.userDetails);
  const organizer = useSelector((state) => state.eventOrganizerProfile);
  const [createdProposal, setCreatedProposal] = useState([]);
  const [fresh, setFresh] = useState([]);
  const [optionsArr, setOptionsArr] = useState([]);

  const toggleOptions = (proposalId) => {
    setOptionsArr((prevOptionsArr) => {
      const index = prevOptionsArr.findIndex(
        (options) => options.id === proposalId
      );
      if (index === -1) {
        // options state for this proposal not found, create new options state
        return [...prevOptionsArr, { id: proposalId, open: true }];
      } else {
        // options state for this proposal found, toggle the open property
        const newOptionsArr = [...prevOptionsArr];
        newOptionsArr[index] = {
          ...newOptionsArr[index],
          open: !newOptionsArr[index].open,
        };
        return newOptionsArr;
      }
    });
  };

  useEffect(() => {
    // console.log(organizer);
    // console.log(event);
    const fetchOrganizerEvents = async () => {
      try {
        const { data } = await axios.get(
          API_URL_2 + `events/organizer-profile/${organizer?.id}`,
          {
            headers: {
              Authorization: `Bearer ${user?.token}`,
            },
          }
        );
        console.log(data);
        setActive(data);
        dispatch(setEventCreated(data));
      } catch (error) {
        console.log(error);
        toast.error(error.message);
      } finally {
        setLoading(false);
      }
    };

    const fetchProposals = async () => {
      try {
        const { data } = await axios.get(
          API_URL_2 + `proposals/profile?id=${organizer?.id}`,
          {
            headers: {
              Authorization: `Bearer ${user?.token}`,
            },
          }
        );
        setCreatedProposal(data);
        // console.log(createdProposal);
        console.log(data);

        // Filter createdProposal for events that are active
        // const filteredProposals = createdProposal.filter((proposal) =>
        //   data.some((event) => event.id === proposal.eventId)
        // );

        // Push the matching id and eventId into active
        //     const updatedActive = filteredProposals.map((proposal) => {
        //       const matchingEvent = data.find(
        //         (event) => event.id === proposal.eventId
        //       );
        //       return {
        //         ...matchingEvent,
        //         proposalId: proposal.id,
        //         proposalEventId: proposal.eventId,
        //       };
        //     });
        //     setFresh(updatedActive);
        //     console.log(fresh);
      } catch (error) {
        console.log(error);
        toast.error(error.message);
      } finally {
        setLoading(false);
      }
    };
    fetchProposals();
    fetchOrganizerEvents();
  }, [organizer?.id, user?.token]);

  return (
    <div
      style={{ overflowX: "auto" }}
      // onClick={() => options === true && setOptions(false)}
    >
      {loading ? (
        <LoadingSection style={{ width: "100vw" }}>
          <ReactLoading type="spin" color="#FF2957" height={100} width={50} />
        </LoadingSection>
      ) : (
        <div style={{ marginBottom: "10rem" }}>
          {active?.map((data, index) => (
            <EventPlanningTable key={index}>
              <tbody>
                <TableHead>
                  <TdLarge style={{ fontWeight: "600", padding: "1rem" }}>
                    Proposal for {data.eventName} <br />
                    <SM>
                      {data.eventStartDate} at {data.eventStartTime} {data.id}
                    </SM>
                  </TdLarge>
                  <TdMedium style={{ border: "none", textAlign: "end" }}>
                    <AbsolutePrimaryButton
                      onClick={() =>
                        navigate(`/event/proposal/proposal-buildup/${data.id}`)
                      }
                    >
                      Generate Proposal
                    </AbsolutePrimaryButton>
                  </TdMedium>
                </TableHead>

                {createdProposal?.map((proposal, index) => (
                  <TableTr
                    key={index}
                    // backgroundColor={data.selected ? "#f9e6ea" : "white"}
                    // onClick={() => handleApiClick(data, index)}
                  >
                    <TdLarge style={{ padding: "1rem 0.5rem" }}>
                      <AlignCenter>
                        <HiOutlineDocumentText
                          style={{ marginRight: "0.5rem" }}
                          size="1.5rem"
                        />
                        To {proposal.eventSponsor}
                      </AlignCenter>
                    </TdLarge>

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
                          onClick={() =>
                            navigate(
                              `/event/proposal/proposal-buildup/proposal-preview/${proposal.id}`
                            )
                          }
                        >
                          View
                        </ViewButton>
                      </div>
                      <div>
                        <SlOptionsVertical
                          onClick={() => toggleOptions(proposal.id)}
                          style={{
                            position: "absolute",
                            right: "1rem",
                            top: "50%",
                            transform: "translateY(-50%)",
                          }}
                        />
                      </div>
                      {optionsArr.some(
                        (options) => options.id === proposal.id && options.open
                      ) && (
                        <OptionsContainer>
                          <OptionsText>Edit</OptionsText>
                          <OptionsText color="#FF4646">Delete</OptionsText>
                        </OptionsContainer>
                      )}
                    </TdSmall>
                  </TableTr>
                ))}
              </tbody>
            </EventPlanningTable>
          ))}
        </div>
      )}
    </div>
  );
};

export default ProposalDetails;
