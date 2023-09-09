import { KBDisplayXs, KBTextL } from "../../components/fonts/Fonts";
import { BgOverlay, CardBorder, CardsSection, SecondSectionHolder, SubSection } from "../events/EventsStyled";
import {IoSearchOutline, IoBulbOutline} from "react-icons/io5";
import {HiOutlineSpeakerphone} from "react-icons/hi";
import { PrimaryButton } from "../../components/buttons/Buttons";
import { useNavigate } from "react-router-dom";

const SponsorLeverage = () => {
  const navigate = useNavigate()

  const cardBorder = [
    {
      icon: <IoSearchOutline size="1.5rem"/>,
      description: "High conversion & increased sales of products/services",
    },
    {
      icon: <HiOutlineSpeakerphone size="1.5rem"/>,
      description: "Retain Customers, Build Loyalty.",
    },
    {
      icon: <IoBulbOutline size="1.5rem"/>,
      description: "Make informed decisions using analytics",
    },
    
  ]

  return (
    <>
      <SubSection>
        <KBDisplayXs fontWeight="600">
          Leverage for being an Event Sponsor
        </KBDisplayXs>
        <KBTextL>
          As a sponsor, these are some of the opportunities you would get.
        </KBTextL>
        <CardsSection>
          {cardBorder.map((card, index) => {
            return (
              <CardBorder key={index}>
                <p className="icon">{card.icon}</p>
                <p>{card.description}</p>
              </CardBorder>
            )
          })}
        </CardsSection>
        <PrimaryButton onClick={()=>navigate("/sponsor-signup")}>Let's get started</PrimaryButton>
      </SubSection>
    </>
  )
};

export default SponsorLeverage;