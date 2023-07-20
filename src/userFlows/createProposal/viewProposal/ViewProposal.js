import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import TopBar from "../../topBar/dashboardTopBar/TopBar";
import { GuestTopBar } from "./ShareViewProposal";
import LoadingScreen from "../../../LoadingScreen";
import { Txt } from "../../emptyEvent/EmptyEventStyled";
import { BsChevronRight } from "react-icons/bs";
import { ButtonContainer } from "../budgetInventory/BudgetStyled";
import { Page } from "../../guestRegistration/GuestRegistrationStyled";
import { PWelcomeHeader } from "./ViewProposalStyled";
import { AlternativeButton } from "../../../components/buttons/Buttons";
import { AlternativeButton2 } from "../../../components/buttons/button";

const ViewProposal = () => {
  // I first set loading to false because it will load till infinity until we get data integrated from backend
  const [loading, setLoading] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  return (
    <>
      {location.pathname === "/event/proposal/view-proposal/proposalId" && (
        <>
          <TopBar />
          <PWelcomeHeader style={{ marginBottom: "2rem", marginTop: "4.2rem" }}>
            <Txt>Event</Txt>
            <BsChevronRight style={{ marginRight: "0.5rem" }} />
            <Txt fontWeight="400" onClick={() => navigate("/event/proposal")}>
              Proposal
            </Txt>
            <BsChevronRight style={{ marginRight: "0.5rem" }} />
            <Txt fontWeight="400" color="#FF2957">
              View Proposal
            </Txt>
          </PWelcomeHeader>
        </>
      )}
      {location.pathname === "/view-proposal/proposalId" && <GuestTopBar />}
      {loading ? (
        <LoadingScreen />
      ) : (
        <Page>
          <div>
            {/* ///////////////
            everything goes in here
            /////////////////// */}
            EEVERYTHING GOES IN HERE
            {/* ///////////////
            everything goes in here
            /////////////////// */}
          </div>

          <ButtonContainer style={{ margin: "0rem" }}>
            {location.pathname === "/view-proposal/proposalId" && (
              <AlternativeButton2
                style={{ padding: "0.5rem", width: "auto" }}
                onClick={() => navigate("/organizer-profile/profileName")}
              >
                Reach out to Event Organizer
              </AlternativeButton2>
            )}
            {location.pathname ===
              "/event/proposal/view-proposal/proposalId" && (
              <AlternativeButton onClick={() => navigate("/event/proposal")}>
                Back
              </AlternativeButton>
            )}
          </ButtonContainer>
        </Page>
      )}
    </>
  );
};

export default ViewProposal;
