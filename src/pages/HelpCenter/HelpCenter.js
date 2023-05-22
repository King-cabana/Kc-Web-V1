import React from "react";
import {
  HelpPage,
  HelpBody,
  HelpDetail,
  Help,
  SubSection,
  HeaderHolder,
} from "./HelpStyled";
import { GoPlusSmall } from "react-icons/go";
// import Plus from "../../assets/images/VectorPlus.png"
// import SearchHelp from "../../assets/images/SearchHelp.png";
import Footer from "../../components/footer/Footer";
import Navbar from "../../components/navbar/Navbar"

const HelpCenter = () => {
  return (
    <>
    <Navbar/>
    <HelpPage>
      <HelpBody>
        <h3>Hi, We are here to help you</h3>
      </HelpBody>
      <HelpDetail>
        <h3>
          Here. You'll find answers to common questions and concerns about using
          our platforms.
        </h3>
      </HelpDetail>
      <Help>
        <h1>
          Frequently <br />
         <span>Asked</span><br />
          Question <br />
        </h1>
      </Help>
      <Help>
        <HeaderHolder>
          <h3> How do i create an account?</h3>
          <GoPlusSmall />
        </HeaderHolder>
        <p>
          To create an account, simply click on the "Sign Up" button on the top
          right corner of the homepage. You'll be prompted to enter your email
          address and choose a password. Once you've completed these steps,
          you'll be directed to your account dashboard.
        </p>
      </Help>
      <Help>
        <HeaderHolder>
          <h3>How do i register for an event?</h3>
          <GoPlusSmall />
        </HeaderHolder>
        <p>
          To register for an event, navigate to the event page and click on the
          "Register" button. You'll be prompted to enter your personal
          information. Once you've completed these steps, you'll receive a
          confirmation email with your ticket information.
        </p>
      </Help>
      <Help>
        <HeaderHolder>
          <h3>How do i become a sponsor?</h3>
          <GoPlusSmall />
        </HeaderHolder>
        <p>
          To become a sponsor, navigate to the “sponsor event” page and select
          the sponsorship package that best fits your needs. You'll be prompted
          to enter your company information and payment details. Once you've
          completed these steps, our team will be in touch with you to discuss
          the details of your sponsorship.
        </p>
      </Help>
      <Help>
        <HeaderHolder>
          <h3>How do i contact customer support?</h3>
          <GoPlusSmall />
        </HeaderHolder>
        <p>
          If you have any questions or concerns, please don't hesitate to
          contact our customer support team. You can reach us by email at
          info@kingcabana.com or by phone at (+234) 808-831-118-8. We're
          available 24/7 to assist you with any issues you may encounter on our
          platform.
        </p>
      </Help>
      <SubSection>
        <h3>Troubleshooting</h3>
      </SubSection>
      <Help>
        <HeaderHolder>
          <h3>I can't log in to my account</h3>
          <GoPlusSmall />
        </HeaderHolder>
        <p>
          If you're having trouble logging in to your account, please make sure
          that you're using the correct email address and password. If you're
          still unable to log in, try resetting your password by clicking on the
          "Forgot Password" link on the login page.
        </p>
      </Help>
      <Help>
        <HeaderHolder>
          <h3>I didn't receive any confirmation email</h3>
          <GoPlusSmall />
        </HeaderHolder>
        <ul>
          <li>
            If you haven't received your confirmation email after registering
            for an event or becoming a sponsor, please check your spam folder.
            If you still can't locate the email, please contact our customer
            support team for assistance.
          </li>
          <li>
            We hope this help center has been useful in answering your questions
            and addressing your concerns. If you have any additional feedback or
            suggestions for improving our platform, please don't hesitate to let
            us know!
          </li>
        </ul>
      </Help>
    </HelpPage>
    <Footer />
    </>
  );
};

export default HelpCenter;
