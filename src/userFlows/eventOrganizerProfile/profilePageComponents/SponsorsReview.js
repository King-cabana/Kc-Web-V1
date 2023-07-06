import { AnimationContainer } from "../../../globalStyles";
import { Description, Name } from "../../eventHome/EventHomeStyled";
import animationData from "../../../assets/lotties/no-data-preview.json"
import Lottie from "lottie-react"
import { EventsDisplaySection } from "../organizerProfilePage/OrganizerProfilePageStyled";

const SponsorsReview =()=>{
    return(
        <EventsDisplaySection style={{marginBottom: "8rem"}}>
            <Name style={{fontWeight: "500"}}>What sponsors have to say</Name>
            <AnimationContainer>
          <Lottie animationData={animationData} loop={true} />
        </AnimationContainer>
            <div style={{alignSelf: "center"}}>
            <Description >You have no reviews yet</Description></div>
        </EventsDisplaySection>
    )
}

export default SponsorsReview;