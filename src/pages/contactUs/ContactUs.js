import React from "react";
import { HiOutlineMail, HiOutlinePhone, HiChevronRight } from "react-icons/hi";
import ContactInput from "./ContactInput";
import Rectangle from "../../assets/images/Rectangle 741.png";
import Facebook from "../../assets/images/Vector3.svg";
import Linkedin from "../../assets/images/Vector.svg";
import Twitter from "../../assets/images/Vector2.svg";
import Instagram from "../../assets/images/Vector4.svg";
import Lottie from "lottie-react";
import animationData from "../../assets/lotties/lf30_editor_meubo9a6.json";
import {
  ContactBody,
  NoDecorationLink,
  ContactRight,
  ContainerBox,
  Wrapper,
  ContactHeader,
  AnimationContainer,
  ContactParagraph,
  ContactLogoBody,
  EmailBody,
  EmailText,
  EmailIcon,
  EmailIconArrow,
  PhoneBody,
  LocationCenter,
  PhoneLogo,
  PhoneText,
  PhoneIconArrow,
  Box,
  BoxBody,
  BoxHeader,
  BoxContainer,
  BoxParagraph,
  IconHolder,
  SocialIcon,
  Location,
  LocationHeader,
  LocationText,
} from "./ContactUsStyled";
import Navbar from "../../components/navbar/Navbar";
import Footer from "../../components/footer/Footer";

const ContactUs = () => {
  return (
    <>
      <Navbar />
      <ContactBody>
        <ContactRight>
          <ContactHeader>Get in touch</ContactHeader>
          <ContactParagraph>
            We'd be thrilled to hear from you. Our staffs are always available
            to ease your journey.
          </ContactParagraph>
          <ContactLogoBody>
            <EmailBody>
              <EmailIcon>
                <HiOutlineMail size={25} />
              </EmailIcon>
              <NoDecorationLink href="mailto:info@kingcabana.com">
                <EmailText>Email: info@kingcabana.com</EmailText>
              </NoDecorationLink>
              <EmailIconArrow>
                <HiChevronRight size={25} />
              </EmailIconArrow>
            </EmailBody>
            <PhoneBody>
              <PhoneLogo>
                {" "}
                <HiOutlinePhone size={25} />{" "}
              </PhoneLogo>
              <NoDecorationLink href="tel:+2348088311188">
                <PhoneText>Phone: (+234) 808 831 118 8</PhoneText>
              </NoDecorationLink>
              <PhoneIconArrow>
                <HiChevronRight size={25} />
              </PhoneIconArrow>
            </PhoneBody>
          </ContactLogoBody>
        </ContactRight>
        <AnimationContainer>
          <Lottie
            animationData={animationData}
            loop={true}
            style={{ width: "300px", height: "300px" }}
          />
        </AnimationContainer>
      </ContactBody>
      <ContainerBox>
        <ContactInput />
      </ContainerBox>
      <Box>
        <BoxContainer>
          <Wrapper>
            <img src={Rectangle} alt="Rectangle" />
          </Wrapper>
          <BoxBody>
            <BoxHeader>Join Our Online Community</BoxHeader>
            <BoxParagraph>
              Follow us on social media. Be the first to hear about King Cabana
              news and exclusive information before anyone else.
            </BoxParagraph>
            <IconHolder>
              <SocialIcon href="info@kingcabana.com">
                <div>
                  <img src={Linkedin} alt="" />
                </div>
              </SocialIcon>
              <SocialIcon
                href="https://twitter.com/KingCabanaHQ"
                target="_blank"
              >
                <div>
                  <img src={Twitter} alt="" />
                </div>
              </SocialIcon>
              <SocialIcon href="info@kingcabana.com">
                <div>
                  <img src={Facebook} alt="" />
                </div>
              </SocialIcon>
              <SocialIcon
                href="https://www.instagram.com/kingcabanahq/"
                target="_blank"
              >
                <div>
                  <img src={Instagram} alt="" />
                </div>
              </SocialIcon>
            </IconHolder>
          </BoxBody>
        </BoxContainer>
      </Box>
      <Location>
        <LocationCenter>
          <LocationHeader>Our Location</LocationHeader>
          <LocationText>371, Borno Way, Alagomeji, Lagos</LocationText>
        </LocationCenter>
      </Location>
      <Footer />
    </>
  );
};

export default ContactUs;
