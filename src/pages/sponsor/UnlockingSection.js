import { useNavigate } from "react-router-dom"
import { UnlockContainer } from "../events/EventsStyled";
import padlock from "../../assets/images/padlock.png";
import { PrimaryButton } from "../../components/buttons/Buttons";
import { KBDisplayXs, KBTextL } from "../../components/fonts/Fonts";

const UnlockingSection = () => {
  const navigate = useNavigate();

  return (
    <>
      <UnlockContainer >
        <div className="padlock">
          <img src={padlock} alt="unlock" />
        </div>
        <div className="others">
        <KBDisplayXs fontWeight="600">
          Unlocking the Power of Customer Engagement
        </KBDisplayXs>
        <KBTextL>
          Sign up with King Cabana now!
        </KBTextL>
        <PrimaryButton onClick={()=>navigate("/sponsor-signup")}>Sign me up</PrimaryButton>
        </div>
      </UnlockContainer>
    </>
  )
};

export default UnlockingSection;