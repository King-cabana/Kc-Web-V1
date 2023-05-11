import React, { useEffect, useState } from "react";
import Navbar from "../../components/navbar/Navbar";
import Footer from "../../components/footer/Footer";
import {
  HeroSection,
  ContentHolder,
  BtnHolderLink,
  EventButton,
  StorySectionContainer,
  StorySectionContent,
  AllAboutSectionContainer,
  AllAboutSectionContent,
  AllAboutImages,
  AllAboutInfo,
  PromiseSectionContainer,
  PromiseSectionContent,
  VisionSectionContainer,
  VisionSectionContent,
  InfoSectionContainer,
  InfoSectionContent,
  InfoBtnHolderLink,
  InfoButton,
} from "./AboutStyled";
import { Typewriter } from "react-simple-typewriter";
import community from "../../assets/images/community.png";
import meeting from "../../assets/images/meeting.png";
import party from "../../assets/images/party.png";
import bulb from "../../assets/images/bulb.png";
import skyscrapper from "../../assets/images/skyscrapper.png";

const About = () => {
  const [state, setState] = useState(1);

  useEffect(() => {
    setTimeout(() => {
      if (state === 1) {
        setState(2);
      } else if (state === 2) {
        setState(3);
      } else {
        setState(1);
      }
    }, 2000);
    return clearInterval();
  }, [state]);

  return (
    <>
      <Navbar />
      <HeroSection>
        <ContentHolder>
          <p className="subheading">We are all about</p>
          <p
            className="typewriter"
            style={{ color: "#FFBC15", fontWeight: "bold" }}
          >
            <Typewriter
              words={[
                "Connecting People",
                "Capturing Value",
                "Fulfilling Memories",
              ]}
              loop={Infinity}
              cursor
              cursorStyle="_"
              typeSpeed={100}
              deleteSpeed={100}
              delaySpeed={1000}
            />
          </p>
          <h1>People || Value || Memories</h1>
          <BtnHolderLink to="/signUp">
            <EventButton>Join us today</EventButton>
          </BtnHolderLink>
        </ContentHolder>
      </HeroSection>
      <StorySectionContainer>
        <StorySectionContent>
          <h2>Our story</h2>
          <p>
            Ours is a story of raising a new generation of men and women,
            intentional about telling their stories ceaselessly. Individual and
            communal tales of cultural authenticity, innovation, stability and
            value. A self sufficient society where individuals and organizations
            do not need to look without in search of sustainability; but look
            within as they optimize the blue oceans in their journeys to
            becoming.
          </p>
        </StorySectionContent>
      </StorySectionContainer>
      <AllAboutSectionContainer>
        <h2>At King Cabana, we are all about;</h2>
        <AllAboutInfo>
          <AllAboutSectionContent>
            <section className={`switch ${state === 1 && "active"}`}>
              <h3>Connecting People</h3>
              <p>
                We believe in a universal bond of sharing that connects all
                humanity. A society where everyone has a sense of belonging.
              </p>
            </section>
            <img
              src={community}
              className={` ${state === 1 && "change"}`}
              alt="community"
            />
            <section className={`switch ${state === 2 && "active"}`}>
              <h3>Capturing Value</h3>
              <p>
                Be it contributing content, volunteering ideas, or selling
                products and services, the best customers co-lead companies to
                the end that value is created and sustained.
              </p>
            </section>
            <img
              src={meeting}
              alt="meeting"
              className={` ${state === 2 && "change"}`}
            />
            <section className={`switch ${state === 3 && "active"}`}>
              <h3>Fulfilling Memories</h3>
              <p>
                Today’s customers want more than products, features or benefits.
                They want meaning. They want creative control over their life
                stories as they mark milestones that acknowledge the past,
                reflect the present and shape future outcomes.
              </p>
            </section>
            <img
              src={party}
              alt="party"
              className={` ${state === 3 && "change"}`}
            />
          </AllAboutSectionContent>
          <AllAboutImages>
            <img
              src={community}
              className={` ${state === 1 && "next"}`}
              alt="community"
            />
            <img
              src={meeting}
              className={` ${state === 2 && "next"}`}
              alt="meeting"
            />
            <img
              src={party}
              className={` ${state === 3 && "next"}`}
              alt="party"
            />
          </AllAboutImages>
        </AllAboutInfo>
      </AllAboutSectionContainer>

      <PromiseSectionContainer>
        <PromiseSectionContent>
          <h2>Our Promise</h2>
          <p>
            Strengthening Africa's economic and sociocultural human capital
            through event optimization.
          </p>
        </PromiseSectionContent>
      </PromiseSectionContainer>
      <VisionSectionContainer>
        <VisionSectionContent>
          <img className="bulb" src={bulb} alt="" />
          <section>
            <h3 className="visionH3">Our Vision</h3>
            <p className="vision">Mark Milestones</p>
          </section>
        </VisionSectionContent>

        <VisionSectionContent>
          <section className="missionComp">
            <h3 className="missionH3">Our Mission</h3>
            <p className="mission">
              To be Africa's event intelligence system, enabling event
              stakeholders to achieve set goals.
            </p>
          </section>
          <img className="skyscrapper" src={skyscrapper} alt="" />
        </VisionSectionContent>
      </VisionSectionContainer>
      <InfoSectionContainer>
        <InfoSectionContent>
          <h2>Excited as we are to explore?</h2>
          <p style={{ textAlign: "center", alignSelf: "center" }}>
            {" "}
            Enter your email with King Cabana now!
          </p>
          <InfoBtnHolderLink to="/signUp">
            <InfoButton>Get early access</InfoButton>
          </InfoBtnHolderLink>
        </InfoSectionContent>
      </InfoSectionContainer>
      <Footer />
    </>
  );
};

export default About;
