import { useNavigate } from "react-router-dom";
import FooterButtonComponent from "../../../components/FooterButtonComponent";
import { GuestTopBar } from "../../createProposal/viewProposal/ShareViewProposal";
import SingleEventHistory from "../../eventHistory/components/SingleEventHistory";
import TopBar from "../../topBar/dashboardTopBar/TopBar";
import { useSelector } from "react-redux";
import { encryptId } from "../../../utils";
import { Div } from "../../../globalStyles";

const PreviousEvents = () => {
  const navigate = useNavigate();
  // const state = useSelector((state)=>state?.pastEvent)
  const userDetails = useSelector((state)=>state?.userDetails)
  const profile = useSelector((state)=>state?.eventOrganizerProfile);
  const handleContact = ()=>navigate(`/organizer-profile/${encryptId(profile?.id)}`)
  return (
    <>
      <SingleEventHistory
        topBar={userDetails?.isSignedIn === true ? (<div style={{marginBottom: "5rem"}}><TopBar/></div>)  : <GuestTopBar />}
        footerButtonComponent={
          <FooterButtonComponent whiteBtnText="Back" onClickWhiteBtn={handleContact} marginright="0rem" />
        }
      />
    </>
  );
};

export default PreviousEvents;
