import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import { useNavigate } from "react-router";
import {
  KCLogo,
  LogoDiv,
  ProfileContainer,
  ProfileContent,
  ProfileProgress,
  ProfileSection,
  ShapedBackground,
} from "../createProfile/CreateProfileStyled";
import kingCabanaLogo from "../../images/kingCabanaLogo.svg";
import { EventHeader1 } from "../../event/createEvent/TimeLineEventsStyled";
import { InputSeg, Asterix } from "../organiserProfile/OrganiserProfileStyled";
import {
  CheckBoxInput,
  Input,
  InputBoxOther,
  InputText,
  SmallText,
} from "../../event/createEvent/FirstCreateEventStyled";
import { clearProfile, editProfile } from "../../redux/slices/profileSlice";
import axios from "axios";
import { ImSpinner6 } from "react-icons/im";
import { setEventOrganizerProfile } from "../../redux/slices/eventOrganizerProfileSlice";
import { ButtonContainer } from "../../event/budgetInventory/BudgetStyled";
import {
  AbsolutePrimaryButton,
  AlternativeButton2,
} from "../../components/button/button";
import { API_URL_2 } from "../../redux/service/authService";

const SocialProfile = () => {
  const [visibility, setVisibility] = useState(false);
  const [isDisabled, setIsDisabled] = useState(true);
  const [sending, setSending] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const state = useSelector((state) => state.profile);
  const user = useSelector((state) => state.userDetails);

  const toggleOthers = () => {
    if (visibility === true) {
      setVisibility(false);
    }
  };

  useEffect(() => {
    if (
      state.guarantorRole &&
      state.secondaryContactFullName &&
      state.jobRole &&
      state.officeAddress &&
      state.secondaryContactPhoneNumber &&
      state.companyName
    ) {
      setIsDisabled(false);
    }
  }, [
    state.guarantorRole,
    state.secondaryContactFullName,
    state.jobRole,
    state.officeAddress,
    state.secondaryContactPhoneNumber,
    state.companyName,
  ]);

  const change = (e) => {
    dispatch(editProfile({ name: e.target.name, value: e.target.value }));
  };

  const navigateNext = async (e) => {
    e.preventDefault();
    setSending(true);
    setIsDisabled(true);
    try {
      const { data } = await axios.post(API_URL_2 + "profiles/create/", state, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${user.token}`,
        },
      });
      // console.log(data);
      dispatch(setEventOrganizerProfile(data));
      navigate("/dashboard");
      toast.success("Form Submitted Successfully");
      dispatch(clearProfile());
    } catch (error) {
      // console.log(error);
      if (error.response.data === "Profile already exists") {
        navigate("/createProfile");
        toast.error("Profile already exists");
      } else if (error.response.data === "User does not exist") {
        toast.error(
          "User does not exist, input valid userEmail on King Cabana"
        );
        navigate("/organizerProfile");
      } else {
        toast.error("Error Submitting Form");
        navigate("/createProfile");
      }
    }
  };

  const navigateBack = () => {
    navigate("/organiserProfile");
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
            <ProfileProgress>Step 3 of 3</ProfileProgress>
            <EventHeader1>Social Media & Guarantor information</EventHeader1>

            <InputText>Social media information</InputText>
            <InputSeg>
              <InputText>Website</InputText>
              <Input
                type="url"
                placeholder="https://example.com/"
                name="website"
                defaultValue={state.website}
                onChange={change}
              />
            </InputSeg>

            <InputSeg>
              <InputText>Linkedin</InputText>
              <Input
                type="url"
                placeholder="https://linkedin.com/*****"
                name="linkedIn"
                defaultValue={state.linkedIn}
                onChange={change}
              />
            </InputSeg>

            <InputSeg>
              <InputText>Instagram</InputText>
              <Input
                type="url"
                placeholder="https://instagram.com/*****"
                name="instagram"
                defaultValue={state.instagram}
                onChange={change}
              />
            </InputSeg>

            <InputSeg>
              <InputText>Twitter</InputText>
              <Input
                type="url"
                placeholder="https://twitter.com/*****"
                name="twitter"
                defaultValue={state.twitter}
                onChange={change}
              />
            </InputSeg>

            <InputSeg>
              <InputText>Facebook</InputText>
              <Input
                type="url"
                placeholder="https://facebook.com/*****"
                name="faceBook"
                defaultValue={state.faceBook}
                onChange={change}
              />
            </InputSeg>

            <InputSeg>
              <InputText>Others</InputText>
              <Input
                type="url"
                placeholder="https://others.com/"
                name="otherHandle"
                defaultValue={state.otherHandle}
                onChange={change}
              />
            </InputSeg>

            <InputSeg>
              <InputText>
                Guarantor's information <Asterix>*</Asterix>
              </InputText>
              <SmallText>
                Select a role that befits a guarantor to this event community
              </SmallText>

              <CheckBoxInput>
                <input
                  type="radio"
                  id="patron"
                  name="guarantorRole"
                  defaultValue="Patron"
                  onChange={change}
                  onClick={toggleOthers}
                  checked={
                    state.guarantorRole?.includes("Patron") ? true : false
                  }
                />
                <label htmlFor="patron">Patron</label>
              </CheckBoxInput>

              <CheckBoxInput>
                <input
                  type="radio"
                  id="staff"
                  name="guarantorRole"
                  defaultValue="Staff Adviser"
                  onChange={change}
                  onClick={toggleOthers}
                  checked={
                    state.guarantorRole?.includes("Staff Adviser")
                      ? true
                      : false
                  }
                />
                <label htmlFor="staff">Staff Adviser</label>
              </CheckBoxInput>

              <CheckBoxInput>
                <input
                  type="radio"
                  id="coordinators"
                  name="guarantorRole"
                  defaultValue="Coordinator"
                  onChange={change}
                  onClick={toggleOthers}
                  checked={
                    state.guarantorRole?.includes("Coordinator") ? true : false
                  }
                />
                <label htmlFor="coordinators">Coordinator</label>
              </CheckBoxInput>

              <CheckBoxInput>
                <input
                  onClick={() => setVisibility(!visibility)}
                  type="radio"
                  id="others"
                  name="guarantorRole"
                  onChange={change}
                  defaultValue="Other"
                  checked={
                    state.guarantorRole?.includes("Other") ? true : false
                  }
                />
                <label htmlFor="others">Others (please specify role)</label>
              </CheckBoxInput>
              <InputBoxOther display={visibility ? "flex" : "none"}>
                <Input
                  type="text"
                  placeholder="Enter others"
                  name="guarantorRole"
                  defaultValue={state.guarantorRole}
                  onChange={change}
                />
              </InputBoxOther>
            </InputSeg>

            <InputSeg>
              <InputText>
                Full name of {""}
                {state?.guarantorRole
                  ? state?.guarantorRole.charAt(0).toUpperCase() +
                    state?.guarantorRole.slice(1)
                  : "Secondary Contact"}{" "}
                <Asterix>*</Asterix>
              </InputText>
              <Input
                type="text"
                placeholder="Enter Full Name of Secondary Contact"
                name="secondaryContactFullName"
                defaultValue={state.secondaryContactFullName}
                onChange={change}
                required
              />
            </InputSeg>

            <InputSeg>
              <InputText>
                Company/Business Name <Asterix>*</Asterix>
              </InputText>
              <Input
                type="text"
                placeholder="Enter Company/Business Name"
                name="companyName"
                defaultValue={state.companyName}
                onChange={change}
                required
              />
            </InputSeg>

            <InputSeg>
              <InputText>
                Job Role <Asterix>*</Asterix>
              </InputText>
              <Input
                type="text"
                placeholder="Enter Job Role"
                name="jobRole"
                defaultValue={state.jobRole}
                onChange={change}
                required
              />
            </InputSeg>

            <InputSeg>
              <InputText>
                Office Address <Asterix>*</Asterix>
              </InputText>
              <Input
                type="text"
                placeholder="Enter Office Address"
                name="officeAddress"
                defaultValue={state.officeAddress}
                onChange={change}
                required
              />
            </InputSeg>

            <InputSeg>
              <InputText>
                Phone Number <Asterix>*</Asterix>
              </InputText>
              <Input
                type="tel"
                placeholder="E.g: +2348022345661"
                name="secondaryContactPhoneNumber"
                defaultValue={state.secondaryContactPhoneNumber}
                onChange={change}
                required
                minLength={5}
              />
            </InputSeg>

            <InputSeg style={{ marginBottom: "4rem" }}>
              <InputText>Email Address</InputText>
              <Input
                type="email"
                title="Email format: xxx@xxxx.xxx)"
                pattern="^([a-zA-Z0-9_\-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([a-zA-Z0-9\-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$"
                placeholder="E.g: email@example.com"
                name="secondaryContactEmail"
                defaultValue={state.secondaryContactEmail}
                onChange={change}
              />
            </InputSeg>
          </ProfileSection>
        </ProfileContent>

        <ButtonContainer style={{ margin: "0rem", zIndex: "999" }}>
          <AlternativeButton2
            onClick={navigateBack}
            style={{
              color: "#FF2957",
              fontWeight: "600",
              marginRight: "2rem",
            }}
          >
            Back
          </AlternativeButton2>
          <AbsolutePrimaryButton
            onClick={navigateNext}
            disabled={isDisabled}
            style={{ width: "auto", padding: "0rem 0.5rem" }}
          >
            {sending ? <ImSpinner6 size={"1.5rem"} /> : "Proceed to Dashboard"}
          </AbsolutePrimaryButton>
        </ButtonContainer>
      </ProfileContainer>
    </>
  );
};

export default SocialProfile;
