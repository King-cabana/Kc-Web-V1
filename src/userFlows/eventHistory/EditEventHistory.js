import { createContext, useState, useEffect } from "react";
import axios from "axios";
import { toast} from "react-toastify";
import { useDispatch, useSelector } from "react-redux";
import LoadingScreen from "../../LoadingScreen";
import TopBar from "../topBar/dashboardTopBar/TopBar";
import { BsChevronRight } from "react-icons/bs";
import { useNavigate, useParams } from "react-router";
import { BtnHolderLink, ModalButtonContainer, ModalText, NPopUpComponent, PopUpOverlay } from "../createProposal/budgetInventory/InventoryStyled";
import { AlternativeButton2, ModalPrimaryButton } from "../../components/buttons/button";
import { NoEventContainer, OverallContainer1, Txt, WelcomeHeader } from "../emptyEvent/EmptyEventStyled";
import { Heading } from "../eventPlanning/EventPlanningStyled";
import EditEventComponent from "./components/EditEventComponent";
import { decryptId } from "../../utils";
import { setPastEvent } from "../../redux/slices/pastEventSlice";
import { API_URL_2 } from "../../redux/services/authService";

export const EditEventHistoryContext = createContext();

const EditEventHistory = () => {
  const [loading, setLoading] = useState(true);
  const [originalData, setOriginalData] = useState();
  const [state, setState] = useState();
  const [modal, setModal] = useState(false);
  const navigate = useNavigate();
  const { id } = useParams();
  const decryptedId = decryptId(id);
  console.log(decryptedId);
  console.log(id);
  const toggleModal = () => {setModal(!modal)};
  // Modal Contitions
  if (modal) {
    document.body.classList.add("active-modal");
  } else {document.body.classList.remove("active-modal")};
  const showModal = !modal && "notShown";

  useEffect(() => {
    const fetchEvent = async () => {
      try {
        const { data } = await axios.get(API_URL_2 + `histories/${decryptedId}`);
        console.log(data);
        setState(data);
        setOriginalData(data);
      } catch (error) {
        console.log(error);
        toast.error(error.message);
      } finally {
        setLoading(false);
      }
    };
    fetchEvent();
  }, [decryptedId]);

    return (
      <EditEventHistoryContext.Provider
      value={{toggleModal, originalData, state, setState}}
      >
        <TopBar marginBottom="1rem"/>
        {loading ? (
            <LoadingScreen />
        ) : ( 
            <>
        {modal && <PopUpOverlay onClick={toggleModal} />}
      <div className={`${showModal}`}>
        <NPopUpComponent>
          <ModalText>
            This is going to disrupt all unsaved changes. Are you sure you want to cancel?
          </ModalText>
          <ModalButtonContainer>
            <BtnHolderLink>
              <AlternativeButton2
                onClick={() => setModal(!modal)}
                style={{
                  color: "#FF2957",
                }}
              >
                Continue Editing
              </AlternativeButton2>
            </BtnHolderLink>
            <ModalPrimaryButton onClick={()=>navigate("/event/history")}>
              Yes, cancel
            </ModalPrimaryButton>
          </ModalButtonContainer>
        </NPopUpComponent>
      </div>
        <OverallContainer1>
          <NoEventContainer>
            <WelcomeHeader>
                <Txt onClick={()=>navigate("/event/history")}>Event</Txt>
                <BsChevronRight style={{ marginRight: "0.5rem" }} />
                <Txt fontWeight="400" onClick={()=>navigate("/event/history")}>
                History
                </Txt>
                <BsChevronRight style={{ marginRight: "0.5rem" }} />
                <Txt fontWeight="400" color="#FF2957">
                Edit event 
                </Txt>
            </WelcomeHeader>

            <Heading style={{display: "flex", aligmItems: "center", justifyContent: "center"}}>Details of event</Heading>
            <EditEventComponent />

          </NoEventContainer>
        </OverallContainer1>
          </>
        )};
      </EditEventHistoryContext.Provider>
    )
}

export default EditEventHistory;