import React, { useState, useEffect } from "react";
import { toast } from "react-toastify";
import { useSelector } from "react-redux";
import axios from "axios";
import { API_URL_2 } from "../../redux/services/authService";
import LoadingScreen from "../../LoadingScreen";
import EmptyProposal from "./NoProposal/EmptyProposal";
import ProposalsList from "./ProposalsList/ProposalsList";

const Proposal = () => {
  const user = useSelector((state) => state.userDetails);
  const organizer = useSelector((state) => state.eventOrganizerProfile);
  const [active, setActive] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
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
        setActive(data?.map((data) => ({ ...data, selected: false })));
      } catch (error) {
        if (error?.message === "Network Error") {
          toast.error("Error retrieving data, reload page.");
        }

        console.log(error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchOrganizerEvents();
  }, [organizer?.id]);

  if (isLoading) {
    return <LoadingScreen />;
  }

  return (
    <div>{active?.length > 0 ? <ProposalsList /> : <EmptyProposal />}</div>
    // <div>
    //   <ProposalsList />
    // </div>
  );
};

export default Proposal;
