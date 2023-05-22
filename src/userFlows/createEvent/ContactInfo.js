import React, { useState } from "react";
import {
  ContactInfoContainer,
  ContactInfoHeader,
  ContactInfoTitle1,
  ContactInfoSubtitle,
  ContactInfoSection,
  ContactInfoTitle2,
  ContactInfoUpload,
  ContactInfoLabel,
  ContactInfoInput,
  ContactInfoPadding,
  Radio,
  RadioInput,
  RadioLabel,
  OthersInput,
} from "./ContactInfoStyled";
import {
  PopUpOverlay,
  BtnHolderLink,
  PopUpComponent,
  ModalText,
  ModalButtonContainer,
} from "../budgetInventory/InventoryStyled";
import {
  ModalPrimaryButton,
  AlternativeButton2,
} from "../../components/button/button";
import "../../App.css";
import { useNavigate } from "react-router";
import {
  DownBtn,
  DownButtonBox,
  DownButtonFull,
  DownButtonOutline,
} from "./SecondCreateEventStyled";

const ContactInfo = () => {
  // form states
  const [pryFullName, setPryFullName] = useState("");
  const [pryPhoneNumber, setPryPhoneNumber] = useState("");
  const [pryEmailAddress, setPryEmailAddress] = useState("");
  const [secRole, setSecRole] = useState("");
  const [secFullName, setSecFullName] = useState("");
  const [secCompanyName, setSecCompanyName] = useState("");
  const [secJobRole, setSecJobRole] = useState("");
  const [secOfficeAddress, setSecOfficeAddress] = useState("");
  const [secPhoneNumber, setSecPhoneNumber] = useState("");
  const [secEmailAddress, setSecEmailAddress] = useState("");
  const [modal, setModal] = useState(false);
  ///////////////
  const [others, setOthers] = useState(false);

  // Modal Contitions
  if (modal) {
    document.body.classList.add("active-modal");
  } else {
    document.body.classList.remove("active-modal");
  }
  const showModal = !modal && "notShown";

  const navigate = useNavigate();

  const navigateBack = () => {
    navigate("/createevent/eventdetails/3");
  };

  const navigateNext = () => {
    navigate("/createevent/defineaudience/1");
  };

  const handleSubmit = async function (e) {
    e.preventDefault();

    const contactInformation = {
      pryFullName,
      pryPhoneNumber,
      pryEmailAddress,
      secRole,
      secFullName,
      secCompanyName,
      secJobRole,
      secOfficeAddress,
      secPhoneNumber,
      secEmailAddress,
    };
    console.log(contactInformation);
  };

  return (
    <>
      {modal && <PopUpOverlay></PopUpOverlay>}
      <ContactInfoContainer>
        <ContactInfoHeader>
          <ContactInfoTitle1>Create Event</ContactInfoTitle1>
          <ContactInfoSubtitle>
            Capture and share every information needed to make your event
            proposal desirable of attracting sponsorships.
          </ContactInfoSubtitle>
        </ContactInfoHeader>

        <ContactInfoSection>
          <ContactInfoTitle2>Contact Information </ContactInfoTitle2>
          <ContactInfoUpload>
            <ContactInfoSubtitle>Primary Contact</ContactInfoSubtitle>
            <ContactInfoPadding>
              <ContactInfoLabel>Full Name</ContactInfoLabel>
              <ContactInfoInput
                type="text"
                placeholder="Enter Full Name"
                onChange={(e) => setPryFullName(e.target.value)}
              />
              <ContactInfoLabel>Phone Number</ContactInfoLabel>
              <ContactInfoInput
                type="text"
                placeholder="Enter Phone Number"
                onChange={(e) => setPryPhoneNumber(e.target.value)}
              />
              <ContactInfoLabel>Email Address</ContactInfoLabel>
              <ContactInfoInput
                type="email"
                placeholder="Enter Email"
                onChange={(e) => setPryEmailAddress(e.target.value)}
              />
              <p
                style={{
                  color: "red",
                  fontWeight: "400",
                  fontSize: "14px",
                  lineHeight: "20px",
                }}
              >
                Please provide your email: validation
              </p>
            </ContactInfoPadding>
          </ContactInfoUpload>
          <ContactInfoUpload>
            <ContactInfoSubtitle>Secondary Contact</ContactInfoSubtitle>
            <ContactInfoPadding>
              <ContactInfoLabel>
                Select a role that befits a guarantor to this event community
              </ContactInfoLabel>
              <Radio>
                <RadioInput
                  type="radio"
                  id="patron"
                  name="role"
                  value="patron"
                />
                <RadioLabel htmlFor="patron">Patron</RadioLabel>
              </Radio>

              <Radio>
                <RadioInput
                  type="radio"
                  id="staffAdviser"
                  name="role"
                  value="Staff Adviser"
                />
                <RadioLabel htmlFor="staffAdviser">Staff Adviser</RadioLabel>
              </Radio>

              <Radio>
                <RadioInput
                  type="radio"
                  id="coordinator"
                  name="role"
                  value="coordinator"
                />
                <RadioLabel htmlFor="coordinator">Coordinator</RadioLabel>
              </Radio>
              <Radio>
                <RadioInput
                  type="radio"
                  id="others"
                  name="role"
                  value="others"
                  onClick={() => setOthers(!others)}
                />
                <RadioLabel htmlFor="others">
                  Others (Please Specify)
                </RadioLabel>
              </Radio>
              <OthersInput
                type="text"
                placeholder="Enter Others"
                display={others ? "flex" : "none"}
              ></OthersInput>
              <ContactInfoLabel>
                Full Name of <i>Secondary Contact</i>
              </ContactInfoLabel>
              <ContactInfoInput
                type="text"
                placeholder="Enter Full Name"
                onChange={(e) => setSecFullName(e.target.value)}
              />
              <ContactInfoLabel>Company/Business Name</ContactInfoLabel>
              <ContactInfoInput
                type="text"
                placeholder="Enter Full Name"
                onChange={(e) => setSecCompanyName(e.target.value)}
              />
              <ContactInfoLabel>Job Role</ContactInfoLabel>
              <ContactInfoInput
                type="text"
                placeholder="Enter Full Name"
                onChange={(e) => setSecJobRole(e.target.value)}
              />
              <ContactInfoLabel>Office Address</ContactInfoLabel>
              <ContactInfoInput
                type="text"
                placeholder="Enter Full Name"
                onChange={(e) => setSecOfficeAddress(e.target.value)}
              />
              <ContactInfoLabel>Phone Number</ContactInfoLabel>
              <ContactInfoInput
                type="text"
                placeholder="Enter Full Name"
                onChange={(e) => setSecPhoneNumber(e.target.value)}
              />
              <ContactInfoLabel>Email Address</ContactInfoLabel>
              <ContactInfoInput
                type="email"
                placeholder="Enter Full Name"
                onChange={(e) => setSecEmailAddress(e.target.value)}
              />
            </ContactInfoPadding>

            <div className={`${showModal}`}>
              {/* <div> */}
              <PopUpComponent>
                <ModalText>
                  This is going to disrupt all saved documents. Are you sure you
                  want to continue?
                </ModalText>

                <ModalButtonContainer>
                  <BtnHolderLink>
                    <AlternativeButton2
                      onClick={() => setModal(!modal)}
                      style={{
                        // width: "70px",
                        // height: "30px",
                        // fontSize: "10px",
                        color: "#FF2957", // fontWeight: "600",
                      }}
                    >
                      Cancel
                    </AlternativeButton2>
                  </BtnHolderLink>

                  <BtnHolderLink to="/dashboard">
                    <ModalPrimaryButton>Yes, Discard</ModalPrimaryButton>
                  </BtnHolderLink>
                </ModalButtonContainer>
              </PopUpComponent>
            </div>
            {/* 
            <ButtonContainer>
              <AlternativeButton2
              onClick={() => setModal(!modal)}
                style={{
                  color: "#FF2957",
                  fontWeight: "600",
                  marginRight: "2rem",
                }}
              >
                Discard
              </AlternativeButton2>
              <PrimaryButton
                onClick={handleSubmit}
                //   disabled={isDisabled}
              >
                Submit & Preview
              </PrimaryButton>
            </ButtonContainer> */}
          </ContactInfoUpload>
        </ContactInfoSection>
      </ContactInfoContainer>
      <DownButtonBox>
        <DownBtn>
          <DownButtonOutline onClick={navigateBack}>Back</DownButtonOutline>
          <DownButtonFull onClick={navigateNext}>
            Save & Continue
          </DownButtonFull>
        </DownBtn>
      </DownButtonBox>
    </>
  );
};

export default ContactInfo;
