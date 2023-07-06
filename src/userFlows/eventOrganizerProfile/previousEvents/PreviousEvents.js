import { useNavigate } from "react-router-dom";
import FooterButtonComponent from "../../../components/FooterButtonComponent";
import { GuestTopBar } from "../../createProposal/viewProposal/ShareViewProposal";
import SingleEventHistory from "../../eventHistory/components/SingleEventHistory";

const PreviousEvents = () => {
  const navigate = useNavigate();
  const handleContact = ()=>navigate("/signin")
  // const state = useSelector((state)=>state?.pastEvent)
  return (
    <>
      <SingleEventHistory
        topBar={<GuestTopBar />}
        footerButtonComponent={
          <FooterButtonComponent whiteBtnText="Contact" onClickWhiteBtn={handleContact} marginright="0rem" />
        }
      />
    </>
  );
};

export default PreviousEvents;
