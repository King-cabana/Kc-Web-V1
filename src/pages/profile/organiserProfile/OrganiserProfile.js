import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { editProfile } from "../../redux/slices/profileSlice";
import { useNavigate } from "react-router";
import {
  Input,
  InputText,
  FormContainer,
  FileWrapper,
  CustomWrapper,
  UploadBtn,
  Supported,
  MyTextArea,
} from "../../event/createEvent/FirstCreateEventStyled";
import { EventHeader1 } from "../../event/createEvent/TimeLineEventsStyled";
import kingCabanaLogo from "../../images/kingCabanaLogo.svg";
import {
  KCLogo,
  LogoDiv,
  ProfileContainer,
  ProfileContent,
  ProfileProgress,
  ProfileSection,
  ShapedBackground,
} from "../createProfile/CreateProfileStyled";
import { InputSeg, Asterix, Wrapper } from "./OrganiserProfileStyled";
import { ImSpinner6 } from "react-icons/im";
import { ButtonContainer } from "../../event/budgetInventory/BudgetStyled";
import {
  AbsolutePrimaryButton,
  AlternativeButton2,
} from "../../components/button/button";

const OrganiserProfile = () => {
  const [file, setFile] = useState("");
  const [isSuccess, setIsSuccess] = useState(false);
  const [errorMsg, setErrorMsg] = useState(false);
  const [loading, setLoading] = useState(false);

  const [logoFile, setLogoFile] = useState("");
  const [logoIsSuccess, setLogoIsSuccess] = useState(false);
  const [logoErrorMsg, setLogoErrorMsg] = useState(false);
  const [logoLoading, setLogoLoading] = useState(false);
  const [isDisabled, setIsDisabled] = useState(true);
  const [sending, setSending] = useState(false);

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const state = useSelector((state) => state.profile);

  useEffect(() => {
    const userData = JSON.parse(localStorage.getItem("user") || "{}");
    dispatch(editProfile({ name: "userEmail", value: userData?.email }));
    // return a cleanup function
    return () => {
      // cleanup code here
    };
  }, []);
  const handleFileChange = async (e) => {
    const MAX_FILE_SIZE = 1024; // 1MB
    const file = e.target.files[0];
    const fileSizeKiloBytes = file.size / 1024;

    if (fileSizeKiloBytes > MAX_FILE_SIZE) {
      setErrorMsg("*Image size is greater than 1mb*");
      setIsSuccess(false);
      return;
    } else {
      const data = new FormData();
      data.append("file", e.target.files[0]);
      data.append("upload_preset", "kingCabana");
      setLoading(true);
      try {
        const response = await fetch(
          "https://api.cloudinary.com/v1_1/dcanx4ftd/image/upload",
          {
            method: "POST",
            body: data,
          }
        );
        const backgroundPicture = await response.json();
        // console.log(backgroundPicture.secure_url);
        if (backgroundPicture.secure_url) {
          setFile(backgroundPicture.secure_url);
          setLoading(false);
          dispatch(
            editProfile({
              name: e.target.name,
              value: backgroundPicture.secure_url,
            })
          );
        }
      } catch (error) {
        setLoading(false);
        setErrorMsg("**ERROR UPLOADING IMAGE!**");
        console.log(error);
      }
    }
  };
  useEffect(() => {
    if (!file) {
      setErrorMsg("*Please choose an image*");
      setIsSuccess(false);
      return;
    }
    setErrorMsg("");
    setIsSuccess(true);
  }, [file]);
  
  const handleLogoFileChange = async (e) => {
    const MAX_FILE_SIZE = 1024; // 1MB
    const logoFile = e.target.files[0];
    const logoFileSizeKiloBytes = logoFile?.size / 1024;

    if (logoFileSizeKiloBytes > MAX_FILE_SIZE) {
      setLogoErrorMsg("*Image size is greater than 1mb*");
      setLogoIsSuccess(false);
      return;
    } else {
      const data = new FormData();
      data.append("file", e.target.files[0]);
      data.append("upload_preset", "kingCabana");
      setLogoLoading(true);
      try {
        const response = await fetch(
          "https://api.cloudinary.com/v1_1/dcanx4ftd/image/upload",
          {
            method: "POST",
            body: data,
          }
        );
        const logoPicture = await response.json();
        // console.log(logoPicture.secure_url);
        if (logoPicture.secure_url) {
          setLogoFile(logoPicture.secure_url);
          setLogoLoading(false);
          dispatch(
            editProfile({
              name: e.target.name,
              value: logoPicture.secure_url,
            })
          );
        }
      } catch (error) {
        setLogoLoading(false);
        setLogoErrorMsg("**ERROR UPLOADING IMAGE!**");
        console.log(error);
      }
    }
  };
  useEffect(() => {
    if (!logoFile) {
      setLogoErrorMsg("*Please choose an image*");
      setLogoIsSuccess(false);
      return;
    }
    setLogoErrorMsg("");
    setLogoIsSuccess(true);
  }, [logoFile]);
  useEffect(() => {
    if (
      logoFile &&
      state.organizerName &&
      state.profileEmail &&
      state.phoneNumber &&
      state.address &&
      state.state &&
      state.country &&
      state.organizerDetails
    ) {
      setIsDisabled(false);
    } else {
      setIsDisabled(true);
    }
  }, [
    logoFile,
    state.organizerName,
    state.profileEmail,
    state.phoneNumber,
    state.address,
    state.state,
    state.country,
    state.organizerDetails,
  ]);
  const change = (e) => {
    dispatch(editProfile({ name: e.target.name, value: e.target.value }));
  };
  const navigateNext = () => {
    setSending(true);
    setIsDisabled(true);
    navigate("/socialProfile");
  };
  const navigateBack = () => {
    navigate("/createProfile");
  };
  return (
    <div>
      <ProfileContainer>
        <ShapedBackground />
        <ProfileContent>
          <LogoDiv>
            <KCLogo src={kingCabanaLogo} alt="kcLogo" />
          </LogoDiv>
          <ProfileSection>
            <ProfileProgress>Step 2 of 3</ProfileProgress>

            <EventHeader1>Set up your Event Organizer's Profile</EventHeader1>
            <InputSeg>
              <InputText>
                Event Organization's Name <Asterix>*</Asterix>
              </InputText>
              <Input
                type="text"
                placeholder="Enter name"
                name="organizerName"
                onChange={change}
                defaultValue={state.organizerName}
                required
              />
            </InputSeg>

            <InputSeg>
              <InputText>
                Event Organization's Email address <Asterix>*</Asterix>
              </InputText>
              <Input
                type="email"
                placeholder="E.g: email@example.com"
                name="profileEmail"
                onChange={change}
                defaultValue={state.profileEmail}
                title="Email format: xxx@xxxx.xxx)"
                pattern="^([a-zA-Z0-9_\-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([a-zA-Z0-9\-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$"
                required
              />
            </InputSeg>

            <InputSeg>
              <InputText>
                Event Organization's Phone Number <Asterix>*</Asterix>
              </InputText>
              <Input
                type="tel"
                placeholder="E.g: +2348022345661"
                name="phoneNumber"
                onChange={change}
                defaultValue={state.phoneNumber}
                required
                minLength={5}
              />
            </InputSeg>

            <InputSeg>
              <InputText>
                Event Organizer's Office Address <Asterix>*</Asterix>
              </InputText>
              <Input
                type="text"
                placeholder="E.g: 19, Isaac Mike Street, Thomas Avenue"
                name="address"
                onChange={change}
                defaultValue={state.address}
                required
              />
            </InputSeg>

            <Wrapper>
              <InputSeg>
                <InputText>
                  State <Asterix>*</Asterix>
                </InputText>
                <Input
                  type="text"
                  placeholder="E.g: Kaduna State"
                  name="state"
                  onChange={change}
                  defaultValue={state.state}
                  required
                />
              </InputSeg>

              <InputSeg>
                <InputText>
                  Country <Asterix>*</Asterix>
                </InputText>
                <Input
                  type="text"
                  placeholder="E.g: Nigeria"
                  name="country"
                  onChange={change}
                  defaultValue={state.country}
                  required
                />
              </InputSeg>
            </Wrapper>

            <InputSeg>
              <InputText>
                Event Organizer's Details {" - "}
                <Asterix>
                  *
                  {state?.organizerDetails?.length
                    ? state?.organizerDetails?.length
                    : "0"}
                  /250 Characters
                </Asterix>
              </InputText>
              <MyTextArea
                type="textarea"
                row="4"
                name="organizerDetails"
                placeholder="Write a short bio: 250 characters maximum"
                maxLength={250}
                onChange={change}
                defaultValue={state.organizerDetails}
                required
              />
            </InputSeg>

            <InputSeg>
              <InputText>
                Logo <Asterix>*</Asterix>
              </InputText>
              <FormContainer>
                <FileWrapper>
                  <CustomWrapper>
                    <input
                      type="file"
                      style={{ cursor: "pointer" }}
                      onChange={handleLogoFileChange}
                      hidden
                      id="logoFile"
                      accept="image/png, image/jpeg, image/jpg"
                      name="logoUrl"
                      required
                    />
                  </CustomWrapper>
                  <UploadBtn htmlFor="logoFile">Upload</UploadBtn>
                </FileWrapper>
                <h3
                  style={{
                    color: "#ff2957",
                    fontSize: "16px",
                    justifyContent: "center",
                    display: "flex",
                    marginTop: "0.5rem",
                  }}
                >
                  {logoErrorMsg}
                </h3>
                <Supported>Supported formats: JPEG, JPG, PNG, *img</Supported>
                <Supported style={{ color: "#ff2957" }}>
                  Not more than 1mb
                </Supported>
                {logoIsSuccess ? (
                  <div
                    style={{
                      padding: "1rem",
                      display: "flex",
                      justifyContent: "flex-end",
                      alignItems: "center",
                    }}
                  >
                    <p style={{ color: "green", marginRight: "1rem" }}>
                      Validation successful
                    </p>
                    <img
                      src={logoFile}
                      style={{ width: "50px", height: "50px" }}
                      alt=""
                    />
                  </div>
                ) : null}
                {logoLoading ? (
                  <h4 style={{ display: "flex", justifyContent: "flex-end" }}>
                    Loading...
                  </h4>
                ) : null}
              </FormContainer>
            </InputSeg>

            <InputSeg>
              <InputText>Background Picture</InputText>
              <FormContainer>
                <FileWrapper>
                  <CustomWrapper>
                    <input
                      type="file"
                      style={{ cursor: "pointer" }}
                      onChange={handleFileChange}
                      hidden
                      id="file"
                      accept="image/png, image/jpeg, image/jpg"
                      name="backgroundPictureUrl"
                    />
                  </CustomWrapper>
                  <UploadBtn htmlFor="file">Upload</UploadBtn>
                </FileWrapper>
                <h3
                  style={{
                    color: "#ff2957",
                    fontSize: "16px",
                    justifyContent: "center",
                    display: "flex",
                    marginTop: "0.5rem",
                  }}
                >
                  {errorMsg}
                </h3>
                <Supported>Support image: JPEG, JPG, PNG, *img</Supported>
                <Supported style={{ color: "#ff2957" }}>
                  Not more than 1mb
                </Supported>
                {isSuccess ? (
                  <div
                    style={{
                      padding: "1rem",
                      display: "flex",
                      justifyContent: "flex-end",
                      alignItems: "center",
                    }}
                  >
                    <p style={{ color: "green", marginRight: "1rem" }}>
                      Validation successful
                    </p>
                    <img
                      src={file}
                      style={{ width: "50px", height: "50px" }}
                      alt=""
                    />
                  </div>
                ) : null}
                {loading ? (
                  <h4 style={{ display: "flex", justifyContent: "flex-end" }}>
                    Loading...
                  </h4>
                ) : null}
              </FormContainer>
            </InputSeg>
            <div
              style={{
                marginBottom: "8rem",
              }}
            ></div>
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
          <AbsolutePrimaryButton onClick={navigateNext} disabled={isDisabled}>
            {sending ? <ImSpinner6 size={"1.5em"} /> : "Next"}
          </AbsolutePrimaryButton>
        </ButtonContainer>
      </ProfileContainer>
    </div>
  );
};

export default OrganiserProfile;
