import { PrimaryButton } from "../../components/buttons/Buttons"
import { KBDisplayL, KBTextL } from "../../components/fonts/Fonts"
import Footer from "../../components/footer/Footer"
import Navbar from "../../components/navbar/Navbar"
import { NavButtonLink } from "../../components/navbar/Navbar.styled"
import { BgOverlay, HeroHolder, SponsorHeroSection} from "../events/EventsStyled"
import SecondSection from "./SecondSection"
import SponsorLeverage from "./SponsorLeverage"
import SponsoredEvents from "./SponsoredEvents"
import UnlockingSection from "./UnlockingSection"

const Sponsor  = () => {
  return (
    <>
      <Navbar pryBtnCTA="Sponsor Event" signup="/sponsor-signup"/>
      <SponsorHeroSection>
        <BgOverlay>
          <HeroHolder>
              <KBDisplayL>
                Amplify Your Brand's Reach with Event Sponsorship
              </KBDisplayL>
            <KBTextL>
              Enhance Brand Visibility, Maximize Customer Engagement, and Achieve Optimal ROI.
            </KBTextL>
              <NavButtonLink to="/sponsor-signup">
                <PrimaryButton fontWeight="600">Sponsor Event</PrimaryButton>
              </NavButtonLink>
          </HeroHolder>
        </BgOverlay>
      </SponsorHeroSection>
      <SecondSection />
      <SponsorLeverage />
      <SponsoredEvents />
      <UnlockingSection />
      <Footer />
    </>
  )
}
 
export default Sponsor