import CardData from "../../components/cards/CardData";
import { KBDisplayXs } from "../../components/fonts/Fonts";
import { EventCardHolder } from "../../userFlows/eventOrganizerProfile/organizerProfilePage/OrganizerProfilePageStyled";
import { UnlockContainer } from "../events/EventsStyled";
import { truncateText } from "../../utils";
import Card from "../../components/cards/Card";
import { AlternativeButton } from "../../components/buttons/button";

const SponsoredEvents = () => {
  return (
    <UnlockContainer style={{flexDirection: "column", height: "100%"}}>
      <KBDisplayXs fontWeight="600">
        Check out some of the events that were made possible by our sponsors.
      </KBDisplayXs>
      <EventCardHolder>
        {CardData?.map(data => 
            <Card key={data.id} 
              genHeight="320px" image={data?.image}
              eventName={truncateText(data?.eventName)}
              height="120px" holderHeight="100px"
              sponsors = {data?.sponsors}
              eventTime={data?.eventTime}
              eventDate={data.eventDate}
              attendees={data.attendees}
              eventLocation={truncateText(data?.eventAddress, 60)}
        />)}
      </EventCardHolder>

      <AlternativeButton style={{ color: "black" }} fontWeight="600">
        Explore More
      </AlternativeButton>
    </UnlockContainer>
  )
};

export default SponsoredEvents;