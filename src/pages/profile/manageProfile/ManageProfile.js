import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router";
import { BsChevronDown, BsChevronRight } from "react-icons/bs";
import { AlternativeButton } from "../../components/button/button";
import kingCabanaLogo from "../../images/kingCabanaLogo.svg";
import {
  InputText,
  Input,
  InputSection,
  CheckBoxContainer,
  CheckBoxInput,
  InputBoxOther,
} from "../../event/createEvent/FirstCreateEventStyled";
import {
  LeftInputBox,
  RightInputBox,
} from "../../event/createEvent/SecondCreateEventStyled";
import { EventHeader1 } from "../../event/createEvent/TimeLineEventsStyled";
import {
  ButtonSave,
  InputSeg,
  SaveBox,
  TransparentButton,
} from "../organiserProfile/OrganiserProfileStyled";
import { ManageBox, LongButton1 } from "./ManageProfileStyled";
import {
  KCLogo,
  LogoDiv,
  ProfileContainer,
  ProfileContent,
  ProfileProgress,
  ProfileSection,
  ShapedBackground,
} from "../createProfile/CreateProfileStyled";
import { editProfile } from "../../redux/slices/profileSlice";

const ManageProfile = () => {
  const [isDisplay, setIsDisplay] = useState(false);
  const [visibility, setVisibility] = useState(false);

  const dispatch = useDispatch();
  const state = useSelector((state) => state.profile);
  const navigate = useNavigate();

  const change = (e) => {
    dispatch(editProfile({ name: e.target.name, value: e.target.value }));
  };

  const navigateBack = () => {
    navigate("/socialProfile");
  };
  const navigateNext = () => {
    console.log({
      name: state.name,
      email: state.email,
      backgroundPicture: state.backgroundPicture,
      website: state.website,
      linkedin: state.linkedin,
      instagram: state.instagram,
      twitter: state.twitter,
      facebook: state.facebook,
      others: state.others,
      guarantorInformation: state.guarantorInformation,
      company: state.company,
      jobRole: state.jobRole,
      officeAddress: state.officeAddress,
      guarantorNumber: state.guarantorNumber,
      guarantorEmail: state.guarantorEmail,
      teamMemberFirstName: state.teamMemberFirstName,
      teamMemberLastName: state.teamMemberLastName,
      teamMemberEmail: state.teamMemberEmail,
    });
    navigate("/dashboard");
  };

  return (
    <>
      <ProfileContainer>
        <ShapedBackground />
        <ProfileContent>
          <LogoDiv>
            <KCLogo src={kingCabanaLogo} alt="kcLogo" />
          </LogoDiv>
          <ProfileSection>
            <ProfileProgress>Step 4 of 4</ProfileProgress>
            <EventHeader1>Manage organizer(s)</EventHeader1>

            <ManageBox>
              <LeftInputBox>
                <InputText>Team member's first name</InputText>
                <Input
                  type="text"
                  placeholder="Enter first name"
                  name="teamMemberFirstName"
                  value={state.teamMemberFirstName}
                  onChange={change}
                />
              </LeftInputBox>

              <RightInputBox>
                <InputText>Team member's last name</InputText>
                <Input
                  type="text"
                  placeholder="Enter last name"
                  name="teamMemberLastName"
                  value={state.teamMemberLastName}
                  onChange={change}
                />
              </RightInputBox>
            </ManageBox>

            <InputSeg>
              <InputText>Team member's Email</InputText>
              <Input
                type="text"
                placeholder="Enter email"
                name="teamMemberEmail"
                value={state.teamMemberEmail}
                onChange={change}
              />
            </InputSeg>

            <InputSeg>
              <InputText>Select team member's role</InputText>
              <InputSection onClick={() => setIsDisplay(!isDisplay)}>
                Admin {isDisplay ? <BsChevronDown /> : <BsChevronRight />}
              </InputSection>
              <CheckBoxContainer display={isDisplay ? "flex" : "none"}>
                <CheckBoxInput>
                  <input
                    onClick={() => setVisibility(!visibility)}
                    type="radio"
                    id="others"
                    name="others"
                  />
                  <label htmlFor="others">Others (Please specify)</label>
                </CheckBoxInput>
                <InputBoxOther display={visibility ? "flex" : "none"}>
                  <Input type="text" placeholder="Enter others" />
                </InputBoxOther>
              </CheckBoxContainer>
            </InputSeg>
            <AlternativeButton color="#ff2957">Add another </AlternativeButton>
            <div
              style={{
                marginBottom: "8rem",
              }}
            ></div>
          </ProfileSection>
        </ProfileContent>
      </ProfileContainer>
      <SaveBox>
        <ButtonSave>
          <TransparentButton onClick={navigateBack}>Back</TransparentButton>
          <LongButton1 onClick={navigateNext}>Proceed to Dashboard</LongButton1>
        </ButtonSave>
      </SaveBox>
    </>
  );
};

export default ManageProfile;
