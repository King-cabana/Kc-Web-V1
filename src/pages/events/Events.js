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
} from "./EventsStyled";
import {
  CardHolder,
  ImageDisplayOverlay,
  ImageDisplayOverlayB,
} from "../../globalStyles";
import Footer from "../../components/footer/Footer";
import { NavButtonLink } from "../../components/navbar/Navbar.styled";
import Navbar from "../../components/navbar/Navbar";
import { Typewriter } from "react-simple-typewriter";
import Img from "../../assets/images/Business.jpg"
import {
  ASContentSection,
  ASContent,
  ASImage,
  SponsorSection,
  SponsorSectionInner,
  SponsorCard,
  ASSectionInner,
  ASContentInner,
  // TestimonialSection,
  ReadySection,
} from "./EventsStyled";
import Search from "../../assets/images/search.svg"
import Bulb from "../../assets/images/Frame 21613bulb.svg";
import Speaker from "../../assets/images/speaker.svg";
import Subscribe from "../../assets/images/computer.jpg";
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
  KBTextL,
  KBTextM,
} from "../../components/fonts/Fonts";

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

      {/* <ASContentSection style={{ backgroundColor: "#FEF5F7" }}>
        <ASSectionInner>
          <ASContent>
            <ASContentInner>
              <KBDisplayM fontWeight="600">
                Advertise your events on our platform.
              </KBDisplayM>
              <KBTextL style={{ marginTop: "5%", marginBottom: "4%" }}>
                Publicize your events and business here and experience potential
                customers seek you out in record time.
              </KBTextL>
              <NavButtonLink to="/waitlist">
                <PrimaryButton style={{ marginTop: "4%" }}>
                  Get in touch
                </PrimaryButton>
              </NavButtonLink>
            </ASContentInner>
          </ASContent>
          <ASImage img={Img} />
        </ASSectionInner>
      </ASContentSection>
      <SponsorSection>
        <KBDisplayM fontWeight="600" color="#484848;">
          Leverage for being an Event sponsor
        </KBDisplayM>
        <KBTextL>
          As a sponsor, these are some of the opportunities you would get.
        </KBTextL>
        <SponsorSectionInner>
          <SponsorCard>
            <img src={Search} alt="" />
            <KBTextM style={{ marginTop: "10%" }}>
              Assess target markets.
            </KBTextM>
          </SponsorCard>
          <SponsorCard>
            <img src={Bulb} alt="" />
            <KBTextM style={{ marginTop: "10%" }}>
              Enhance connection with target markets.
            </KBTextM>
          </SponsorCard>
          <SponsorCard>
            <img src={Speaker} alt="" />
            <KBTextM style={{ marginTop: "10%" }}>
              Promote your brand through experiential marketing.
            </KBTextM>
          </SponsorCard>
        </SponsorSectionInner>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            width: "100vw",
          }}
        >
          <NavButtonLink to="/waitlist">
            <PrimaryButton fontWeight="600">Let's get started</PrimaryButton>
          </NavButtonLink>
        </div>
      </SponsorSection>
      
      
      <ReadySection>
        <ASImage img={Subscribe}>
          <ImageDisplayOverlayB />
        </ASImage>
        <ASContent>
          <div style={{ width: "inherit", justifyContent: "flex-start" }}>
            <KBDisplayM fontWeight="600" color="#484848">
              Ready to be sponsored?{" "}
            </KBDisplayM>
            <KBTextL>Enter your email with King Cabana now!</KBTextL>
            <NavButtonLink to="/signup">
              <PrimaryButton>Sign me up</PrimaryButton>
            </NavButtonLink>
          </div>
        </ASContent>
      </ReadySection> */}
      <Footer />
    </>
  );
};

export default Events;
