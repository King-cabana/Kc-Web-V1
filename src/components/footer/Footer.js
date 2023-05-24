import React from "react";
import LogoWhite from "../../assets/images/KingCabanaLogoWhite.svg"
import Facebook from "../../assets/images/facebook-svgrepo-com (1).svg";
import Linkedin from "../../assets/images/linkedin-svgrepo-com.svg";
import Twitter from "../../assets/images/twitter-svgrepo-com.svg";
import Instagram from "../../assets/images/instagram-svgrepo-com (1).svg";
import googlePlayIcon from "../../assets/images/GooglePlayIcon.png";
import appleIcon from "../../assets/images/appleIcon.png";
import {
  FooterBody,
  FooterContent,
  FooterInner,
  IconHolder,
  SocialIcon,
  FooterLinksHolder,
  EventButtonHolder,
  DownloadIconHolder,
  BottomLogo,
} from "./FooterStyled";

const Footer = () => {

  const copyright = String.fromCodePoint(0x00A9);
  const currentYear = new Date().getFullYear();

  return (
    <>
      <FooterBody>
        <FooterContent>
          <FooterInner>
            <img
              src={LogoWhite}
              alt="King Cabana Logo"
              style={{ width: "120px" }}/>
            <p>371, Borno Way, Alagomeji</p>
            <p>(+234) 808 831 118 8</p>
            <a href="info@kingcabana.com">info@kingcabana.com</a>
            <IconHolder>
              <SocialIcon href="info@kingcabana.com">
                <div>
                  <img src={Linkedin} alt=""/>
                </div>
              </SocialIcon>
              <SocialIcon
                href="https://twitter.com/KingCabanaHQ"
                target="_blank">
                <div>
                  <img src={Twitter} alt=""/>
                </div>
              </SocialIcon>
              <SocialIcon href="info@kingcabana.com">
                <div>
                  <img src={Facebook} alt=""/>
                </div>
              </SocialIcon>
              <SocialIcon
                href="https://www.instagram.com/kingcabanahq/"
                target="_blank">
                <div>
                  <img src={Instagram} alt="" />
                </div>
              </SocialIcon>
              {/* <SocialIcon href="info@kingcabana.com">
                <div>
                  <img src={TikTok} alt="" />
                </div>
              </SocialIcon> */}
            </IconHolder>
          </FooterInner>
          <FooterLinksHolder>
            <p>Company</p>
            <ul>
              <li><a style={{color:'white', textDecoration:'none'}} href="/aboutUs">About</a></li>
              <li><a style={{color:'white', textDecoration:'none'}} href="/contactUs">Contact Us</a></li>
              <li>Privacy Policy</li>
              <li>Terms & Conditions</li>
            </ul>
          </FooterLinksHolder>
          <FooterLinksHolder>
            <p>Learn More</p>
            <ul>
              <li>How it works</li>
              <li>Partners</li>
              <li><a style={{color:'white', textDecoration:'none'}} href="/help" >Help center</a></li>
            </ul>
          </FooterLinksHolder>
      
          <EventButtonHolder>
            <p style={{ color: "white", fontSize: "14px", marginBottom: "5%" }}>
              Download on
            </p>
            <DownloadIconHolder >
              <img style={{cursor:'pointer'}} src={appleIcon} alt="apple store"/>
              <img style={{cursor:'pointer'}} src={googlePlayIcon} alt="google play store"/>
            </DownloadIconHolder>
            
          </EventButtonHolder>
        </FooterContent>
        <BottomLogo>
        {`${copyright} ${currentYear} All Rights Reserved.`}
        </BottomLogo>
      </FooterBody>
    </>
  );
};

export default Footer;
