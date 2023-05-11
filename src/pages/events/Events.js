import React from "react";
import {
  BgOverlay,
  HeroSection,
  ContentHolder,
  BtnHolder,
  ContentSection,
  EventCard,
  NavButtonHolder,
  TypeTextHolder,
  EventCardHolder,
  EventDisplaySection,
  // DisplayEvents,
} from "./EventsStyled";
import {
  CardHolder,
  ImageDisplayOverlay,
  // ImageDisplayOverlayB,
} from "../../globalStyles";
import Footer from "../../components/footer/Footer";
import { NavButtonLink } from "../../components/navbar/Navbar.styled";
import Navbar from "../../components/navbar/Navbar";
import { Typewriter } from "react-simple-typewriter";
// import Img from "../../assets/images/Business.jpg"
// import {
//   ASContentSection,
//   ASContent,
//   ASImage,
//   SponsorSection,
//   SponsorSectionInner,
//   SponsorCard,
//   ASSectionInner,
//   ASContentInner,
//   // TestimonialSection,
//   ReadySection,
// } from "./EventsStyled";
// import Search from "../../assets/images/search.svg"
// import Bulb from "../../assets/images/Frame 21613bulb.svg";
// import Speaker from "../../assets/images/speaker.svg";
// import Subscribe from "../../assets/images/computer.jpg";
// import Testimonial from "../../components/testimonials/Testimonial";
import Food from "../../assets/images/Food.jpg";
import Business from "../../assets/images/BusinessB.jpg";
import Art from "../../assets/images/Arts.jpg";
import Weddings from "../../assets/images/Wedding.jpg";
import Concert from "../../assets/images/Concert.jpg";
import Sports from "../../assets/images/Sport.jpg";
import {
  AlternativeButton,
  PrimaryButton,
} from "../../components/buttons/Buttons";
import {
  KBDisplayL,
  KBDisplayM,
  KBDisplayXs,
  KBTextL,
  // KBTextM,
} from "../../components/fonts/Fonts";
import Card from "../../components/cards/Card";
import CardData from "../../components/cards/CardData";

const Events = () => {
  return (
    <>
      <Navbar />
      <HeroSection>
        <BgOverlay>
          <ContentHolder>
            <TypeTextHolder>
              <KBDisplayL style={{ margin: "auto 0" }}>
                Dreams do come true.
                <br />{" "}
                <span style={{ color: "#FFBC15", fontWeight: "bold" }}>
                  <Typewriter
                    words={[
                      "Create Memories",
                      "Secure Sponsorships",
                      "Assess Target Markets",
                    ]}
                    loop={Infinity}
                    cursor
                    cursorStyle="_"
                    typeSpeed={100}
                    deleteSpeed={100}
                  />
                </span>
              </KBDisplayL>
            </TypeTextHolder>
            <KBTextL>
              Connecting People | Creating Memories | Capturing Value
            </KBTextL>

            <BtnHolder>
              <NavButtonLink to="/signup">
                <PrimaryButton fontWeight="600">Create Event</PrimaryButton>
              </NavButtonLink>
              {/* <NavButtonLink to="/signup">
                <AlternativeButton fontWeight="600" color="white">
                  Sponsor Events
                </AlternativeButton>
              </NavButtonLink> */}
            </BtnHolder>
          </ContentHolder>
        </BgOverlay>
      </HeroSection>
      <ContentSection>
        <KBDisplayM
          style={{
            textAlign: "center",
            marginTop: "4%",
            color: "#484848",
            fontWeight: "600",
            marginBottom: " 1%",
          }}
        >
          Event Categories
        </KBDisplayM>
        <KBTextL
          style={{ color: "#484848", fontWeight: "500", textAlign: "center" }}
        >
          Explore the most trending
        </KBTextL>
        <CardHolder>
          <EventCard img={Business}>
            <ImageDisplayOverlay>Business</ImageDisplayOverlay>
          </EventCard>
          <EventCard img={Weddings}>
            <ImageDisplayOverlay>Weddings</ImageDisplayOverlay>
          </EventCard>
          <EventCard img={Concert}>
            <ImageDisplayOverlay>Concert/Parties</ImageDisplayOverlay>
          </EventCard>
          <EventCard img={Sports}>
            <ImageDisplayOverlay>Sports & Fitness</ImageDisplayOverlay>
          </EventCard>
          <EventCard img={Art}>
            <ImageDisplayOverlay>Art Exhibition</ImageDisplayOverlay>
          </EventCard>
          <EventCard img={Food}>
            <ImageDisplayOverlay>Food & Drinks</ImageDisplayOverlay>
          </EventCard>
        </CardHolder>
        <NavButtonHolder>
          <NavButtonLink to="/waitlist">
            <AlternativeButton style={{ color: "black" }} fontWeight="600">
              Explore More
            </AlternativeButton>
          </NavButtonLink>
        </NavButtonHolder>
      </ContentSection>

      <EventDisplaySection>
        <KBDisplayXs style={{marginBottom:'3%'}} fontWeight="600" color="484848">Upcoming Events</KBDisplayXs>
        <EventCardHolder>
           {CardData.map(data => 
              <Card key={data.id}
                    image={data.image}
                    eventName={data.eventName}
                    eventDescription={data.eventDescription}
                    eventTime={data.eventTime}
                    eventDate={data.eventDate}
                    eventLocation={data.eventLocation}
          />)}
        </EventCardHolder>
        <NavButtonHolder>
          <NavButtonLink to="">
            <AlternativeButton style={{ color: "black" }} fontWeight="600">
              Explore More
            </AlternativeButton>
          </NavButtonLink>
        </NavButtonHolder>

      </EventDisplaySection>

      <EventDisplaySection>
        <KBDisplayXs style={{marginBottom:'3%'}} fontWeight="600" color="484848">Previously Held Events</KBDisplayXs>
        <EventCardHolder>
           {CardData.map(data => 
              <Card key={data.id}
                    image={data.image}
                    eventName={data.eventName}
                    eventDescription={data.eventDescription}
                    eventTime={data.eventTime}
                    eventDate={data.eventDate}
                    eventLocation={data.eventLocation}
          />)}
        </EventCardHolder>
        <NavButtonHolder>
          <NavButtonLink to="">
            <AlternativeButton style={{ color: "black" }} fontWeight="600">
              Explore More
            </AlternativeButton>
          </NavButtonLink>
        </NavButtonHolder>

      </EventDisplaySection>
       
      
      <Footer />
    </>
  );
};

export default Events;
