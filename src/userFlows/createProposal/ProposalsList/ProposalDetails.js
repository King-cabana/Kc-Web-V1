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
import { AlignCenter } from "./ProposalsListStyled";
import { HiOutlineDocumentText, HiOutlineTrash } from "react-icons/hi";
import {
  AbsolutePrimaryButton,
  AlternativeButton2,
  ModalPrimaryButton,
} from "../../../components/buttons/button";
import { API_URL_2 } from "../../../redux/services/authService";
import { setEventCreated } from "../../../redux/slices/eventCreatedSlice";
import { formatDate, formatTime } from "../../../utils";
import { encryptId } from "../../../utils";
import "../../../modal.css";
import {
  BtnHolderLink,
  ModalButtonContainer,
  ModalText,
  NPopUpComponent,
  PopUpOverlay,
} from "../budgetInventory/InventoryStyled";

const ProposalDetails = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [active, setActive] = useState([]);
  const [loading, setLoading] = useState(true);
  const user = useSelector((state) => state.userDetails);
  const organizer = useSelector((state) => state.eventOrganizerProfile);
  const [modal, setModal] = useState(false);
  const toggleModal = () => {
    setModal(!modal);
  };
  // Modal Contitions
  if (modal) {
    document.body.classList.add("active-modal");
  } else {
    document.body.classList.remove("active-modal");
  }
  const showModal = !modal && "notShown";

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
        // console.log(data);
        setActive(data);
        dispatch(setEventCreated(data));
      } catch (error) {
        console.log(error);
        toast.error(error.message);
      } finally {
        setLoading(false);
      }
    };
    fetchOrganizerEvents();
  }, [dispatch, organizer?.id, user?.token]);

  const deleteProposal = async (sponsorKey) => {
    // console.log(sponsorKey);
    try {
      await axios.delete(API_URL_2 + `proposals/${sponsorKey}`, {
        headers: {
          Authorization: `Bearer ${user?.token}`,
        },
      });
      toast.success("Proposal deleted successfully.");
      window.location.reload();
    } catch (error) {
      console.log("Failed to delete proposal:", error);
      toast.error(error.message);
    }
  };

  return (
    <div style={{ overflowX: "auto" }}>
      {modal && <PopUpOverlay />}
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
                    Proposal for {data?.eventName} <br />
                    <SM>
                      {formatDate(data?.eventStartDate)} at{" "}
                      {formatTime(data?.eventStartTime)}
                    </SM>
                  </TdLarge>
                  <TdMedium style={{ border: "none", textAlign: "end" }}>
                    <AbsolutePrimaryButton
                      onClick={() =>
                        navigate(`/generateproposal/${encryptId(data?.id)}`)
                      }
                    >
                      Generate Proposal
                    </AbsolutePrimaryButton>
                  </TdMedium>
                </TableHead>
                {Object.keys(data?.proposals).map((sponsorKey) => (
                  <TableTr key={sponsorKey}>
                    <TdLarge style={{ padding: "1rem 0.5rem" }}>
                      <AlignCenter>
                        <HiOutlineDocumentText
                          style={{ marginRight: "0.5rem" }}
                          size="1.5rem"
                        />
                        To {data?.proposals[sponsorKey]}
                      </AlignCenter>
                    </TdLarge>

                    <TdSmall
                      style={{
                        position: "relative",
                      }}
                    >
                      <div
                        style={{
                          position: "absolute",
                          right: "2.5rem",
                          top: "50%",
                          transform: "translateY(-50%)",
                        }}
                      >
                        <ViewButton
                          onClick={() =>
                            navigate(
                              `/event/proposal/proposal-buildup/proposal-preview/${sponsorKey}`
                            )
                          }
                        >
                          View
                        </ViewButton>
                      </div>
                      <div>
                        <HiOutlineTrash
                          size="1.5rem"
                          color="#FF4646"
                          onClick={toggleModal}
                        />
                      </div>
                      <div className={`${showModal}`}>
                        <NPopUpComponent style={{ height: "auto" }}>
                          <ModalText style={{ marginBottom: "1.5rem" }}>
                            Are you sure you wanna delete this Proposal?
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
                              onClick={() => deleteProposal(sponsorKey)}
                            >
                              Yes, delete
                            </ModalPrimaryButton>
                          </ModalButtonContainer>
                        </NPopUpComponent>
                      </div>
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
