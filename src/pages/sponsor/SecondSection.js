import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { PrimaryButton } from "../../components/buttons/Buttons";
import { KBDisplayXs, KBTextL } from "../../components/fonts/Fonts";
import { MetricsImagesContainer, SecondSectionHolder} from "../events/EventsStyled";
import audience from "../../assets/images/audience.png";
import metricsLaptop from "../../assets/images/metricsLaptop.png";
import awareness from "../../assets/images/awareness.png";
import { SponsorInfo } from "../about/AboutStyled";
import { MdOutlineHorizontalRule } from "react-icons/md";

const SecondSection = () => {
  const navigate = useNavigate();
  const [state, setState] = useState(1);
  const one = state === 1;
  const two = state === 2;
  const three = state === 3;

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

  const sponsorData = [
    {
      count: "01",
      topic: "Experience Enhanced Brand Engagement",
      description: "Featuring virtual booths, product showcases, interactive experiences, and contests to optimize brand visibility, forge connections, and leave enduring impressions on your target audience.",
    },
    {
      count: "02",
      topic: "Monitor Performance Metrics",
      description: "Access advanced performance monitoring through our platform's analytics, reporting, and engagement tracking, allowing data-driven decisions for optimized brand activations and increased ROI.",
    },
    {
      count: "03",
      topic: "Amplify Your Reach",
      description: "Utilize our platform's social media integration to effortlessly broaden your brand's reach, transforming your brand into an empowering lifestyle for your target audience.",
    },
  ]

  return (
    <>
      <SecondSectionHolder>
        <div className="second">
          <KBDisplayXs fontWeight="600">
            Are you looking for a way to reach a new audience, increase brand awareness, and generate leads? If so, then sponsoring events  isthe perfect solution for you.
          </KBDisplayXs>
          <SponsorInfo>
            <section>
              {sponsorData.map((data, index) => {
                return (
                  <article key={index}>
                    <KBTextL fontWeight="600">{data.count}</KBTextL>
                    <KBTextL fontWeight="600">-</KBTextL>
                    <div>
                      <KBTextL fontWeight="600">
                        <span style={{marginBottom: ".5rem"}}>{data.topic}</span>
                      </KBTextL>
                      <KBTextL style={{marginBottom: "1rem"}}>
                        {data.description}
                      </KBTextL>
                    </div>
                  </article>
              )})}
            </section>
            <MetricsImagesContainer>
              <img className={one ? "next" : ""}
                src={awareness} alt="audience"
              />
              <img className={two ? "next" : ""}
                src={metricsLaptop} alt="metrics"
              />
              <img className={three ? "next" : ""}
                src={audience} alt="awareness"
              />
              <div>
                <MdOutlineHorizontalRule size={one ? "4rem" : "1.5rem"} className={one ? "showIcon" : ""}/>
                <MdOutlineHorizontalRule size={two ? "4rem" : "1.5rem"} className={two ? "showIcon" : ""}/>
                <MdOutlineHorizontalRule size={three ? "4rem" : "1.5rem"} className={three ? "showIcon" : ""}/>
              </div>
            </MetricsImagesContainer>
          </SponsorInfo>

        <PrimaryButton onClick={() => navigate("/signup")}>Sponsor event</PrimaryButton>
        </div>
      </SecondSectionHolder>
    </>
  )
};

export default SecondSection;

