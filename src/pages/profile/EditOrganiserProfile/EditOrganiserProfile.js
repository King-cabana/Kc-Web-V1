import React, { useState, useEffect } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { setEventOrganizerProfile } from "../../redux/slices/eventOrganizerProfileSlice";
import {
  ModalButtonContainer,
  ModalText,
  PopUpComponent,
  PopUpOverlay,
  BtnHolderLink,
} from "../../event/budgetInventory/InventoryStyled";
import {
  Input,
  InputText,
  MyTextArea,
  SmallText,
  InputBoxOther,
  CheckBoxInput,
  Supported,
} from "../../event/createEvent/FirstCreateEventStyled";
import {
  InputSeg,
  Asterix,
  Wrapper,
} from "../organiserProfile/OrganiserProfileStyled";
import {
  OverallContainer,
  EditSection,
  EditHeader,
  KCLogo,
  WrapLeftArrow,
  WrapLogo,
  EditLogoPicture,
  EditBackgroundPicture,
  WrapBs,
  WrapRx,
  EditForm,
  ButtonWrapper,
  Messages,
  ErrorMessages,
} from "./EditOrganiserProfileStyled";
import { BsArrowLeft, BsPencilSquare } from "react-icons/bs";
import { ImSpinner6 } from "react-icons/im";
import kingCabanaLogo from "../../images/kingCabanaLogo.svg";
import {
  WelcomeText,
  ImagesContainer,
} from "../../event/eventHome/EventHomeStyled";
import backgroundPicture from "../../images/dashboardBackgroundPicture.png";
import logo from "../../images/dashboardLogo.png";
import {
  ModalPrimaryButton,
  AlternativeButton2,
  AbsolutePrimaryButton,
} from "../../components/button/button";
import { useNavigate } from "react-router";
import { toast } from "react-toastify";
import { API_URL_2 } from "../../redux/service/authService";

const EditOrganiserProfile = () => {
  const [modal, setModal] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const state = useSelector((state) => state.eventOrganizerProfile);
  const user = useSelector((state) => state.userDetails);
  const [incomingData, setIncomingData] = useState();
  const toggleModal = () => {
    setModal(!modal);
  };
  // Modal Contitions
  if (modal) {
    document.body.classList.add("active-modal");
  } else {
    document.body.classList.remove("active-modal");
  }
  const showModal = !modal && "notShown";
  const [isDisabled, setIsDisabled] = useState(false);
  const [sending, setSending] = useState(false);
  const [visibility, setVisibility] = useState(false);
  const [file, setFile] = useState("");
  const [isSuccess, setIsSuccess] = useState(false);
  const [errorMsg, setErrorMsg] = useState(false);
  const [loading, setLoading] = useState(false);
  const [successMsg, setSuccessMsg] = useState(false);

  const [logoFile, setLogoFile] = useState("");
  const [logoIsSuccess, setLogoIsSuccess] = useState(false);
  const [logoErrorMsg, setLogoErrorMsg] = useState(false);
  const [logoLoading, setLogoLoading] = useState(false);
  const [logoSuccessMsg, setLogoSuccessMsg] = useState(false);

  useEffect(() => {
    const fetchOrganizerProfile = async () => {
      try {
        const { data } = await axios.get(API_URL_2 + `profiles/${state?.id}`, {
          headers: {
            Authorization: `Bearer ${user.token}`,
          },
        });
        dispatch(setEventOrganizerProfile(data));
        setIncomingData(data);
      } catch (error) {
        console.log(error);
        // handle error here
      }
    };

    fetchOrganizerProfile();
    // return a cleanup function
    return () => {
      // cleanup code here
    };
  }, [state.id]);

  const change = (e) => {
    setIncomingData({ ...incomingData, [e.target.name]: e.target.value });
  };
  const addressChange = (e) => {
    // const { name, value } = e.target;
    setIncomingData({
      ...incomingData,
      address: { ...incomingData.address, [e.target.name]: e.target.value },
    });
  };
  const guarantorChange = (e) => {
    setIncomingData({
      ...incomingData,
      guarantor: { ...incomingData.guarantor, [e.target.name]: e.target.value },
    });
  };
  const guarantorAddressChange = (e) => {
    setIncomingData({
      ...incomingData,
      guarantor: {
        ...incomingData.guarantor,
        officeAddress: {
          ...incomingData.guarantor.officeAddress,
          [e.target.name]: e.target.value,
        },
      },
    });
  };
  const handleFileChange = async (e) => {
    const MAX_FILE_SIZE = 1024; // 1MB
    const file = e.target.files[0];
    const fileSizeKiloBytes = file.size / 1024;

    if (fileSizeKiloBytes > MAX_FILE_SIZE) {
      setErrorMsg("Image size is greater than 1mb");
      setTimeout(() => {
        setErrorMsg("");
      }, 3000);
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
        console.log(backgroundPicture.secure_url);
        if (backgroundPicture.secure_url) {
          setFile(backgroundPicture.secure_url);
          setLoading(false);
          setIncomingData({
            ...incomingData,
            [e.target.name]: backgroundPicture.secure_url,
          });
        }
      } catch (error) {
        setLoading(false);
        setErrorMsg("Error Changing Background Image!");
        setTimeout(() => {
          setErrorMsg("");
        }, 3000);
        console.log(error);
      }
    }
  };
  useEffect(() => {
    if (!file) {
      setIsSuccess(false);
      return;
    }
    setIsSuccess(true);
    setSuccessMsg(true);
    setTimeout(() => {
      setSuccessMsg(false);
    }, 3000);
  }, [file]);
  const handleLogoFileChange = async (e) => {
    const MAX_FILE_SIZE = 1024; // 1MB
    const logoFile = e.target.files[0];
    const logoFileSizeKiloBytes = logoFile.size / 1024;

    if (logoFileSizeKiloBytes > MAX_FILE_SIZE) {
      setLogoErrorMsg("Image size is greater than 1mb");
      setTimeout(() => {
        setLogoErrorMsg("");
      }, 3000);
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
        console.log(logoPicture.secure_url);
        if (logoPicture.secure_url) {
          setLogoFile(logoPicture.secure_url);
          setLogoLoading(false);
          setIncomingData({
            ...incomingData,
            [e.target.name]: logoPicture.secure_url,
          });
        }
      } catch (error) {
        setLogoLoading(false);
        setLogoErrorMsg("**Error Changing Logo Image!**");
        setTimeout(() => {
          setLogoErrorMsg("");
        }, 3000);
        console.log(error);
      }
    }
  };
  useEffect(() => {
    if (!logoFile) {
      setLogoIsSuccess(false);
      return;
    }
    setLogoIsSuccess(true);
    setLogoSuccessMsg(true);
    setTimeout(() => {
      setLogoSuccessMsg(false);
    }, 3000);
  }, [logoFile]);
  const toggleOthers = () => {
    if (visibility === true) {
      setVisibility(false);
    }
  };
  const discardNavigate = () => {
    navigate("/dashboard");
  };

  const saveNavigate = async (e) => {
    e.preventDefault();
    setSending(true);
    setIsDisabled(true);
    const patchData = [
      {
        op: "replace",
        path: "/backgroundPictureUrl",
        value: incomingData.backgroundPictureUrl,
      },
      {
        op: "replace",
        path: "/logoUrl",
        value: incomingData.logoUrl,
      },
      {
        op: "replace",
        path: "/organizerName",
        value: incomingData.organizerName,
      },
      {
        op: "replace",
        path: "/profileEmail",
        value: incomingData.profileEmail,
      },
      { op: "replace", path: "/phoneNumber", value: incomingData.phoneNumber },
      {
        op: "replace",
        path: "/address/houseNo",
        value: incomingData.address.houseNo,
      },
      {
        op: "replace",
        path: "/address/street",
        value: incomingData.address.street,
      },
      {
        op: "replace",
        path: "/address/city",
        value: incomingData.address.city,
      },
      {
        op: "replace",
        path: "/address/state",
        value: incomingData.address.state,
      },
      {
        op: "replace",
        path: "/address/country",
        value: incomingData.address.country,
      },
      {
        op: "replace",
        path: "/organizerDetails",
        value: incomingData.organizerDetails,
      },
      { op: "replace", path: "/website", value: incomingData.website },
      { op: "replace", path: "/linkedIn", value: incomingData.linkedIn },
      { op: "replace", path: "/instagram", value: incomingData.instagram },
      { op: "replace", path: "/twitter", value: incomingData.twitter },
      { op: "replace", path: "/faceBook", value: incomingData.faceBook },
      { op: "replace", path: "/otherHandle", value: incomingData.otherHandle },
      {
        op: "replace",
        path: "/guarantorRole",
        value: incomingData.guarantorRole,
      },
      {
        op: "replace",
        path: "/guarantor/secondaryContactFullName",
        value: incomingData.guarantor.secondaryContactFullName,
      },
      {
        op: "replace",
        path: "/guarantor/companyName",
        value: incomingData.guarantor.companyName,
      },
      {
        op: "replace",
        path: "/guarantor/jobRole",
        value: incomingData.guarantor.jobRole,
      },
      {
        op: "replace",
        path: "/guarantor/officeAddress/houseNo",
        value: incomingData.guarantor.officeAddress.houseNo,
      },
      {
        op: "replace",
        path: "/guarantor/officeAddress/street",
        value: incomingData.guarantor.officeAddress.street,
      },
      {
        op: "replace",
        path: "/guarantor/officeAddress/city",
        value: incomingData.guarantor.officeAddress.city,
      },
      {
        op: "replace",
        path: "/guarantor/officeAddress/state",
        value: incomingData.guarantor.officeAddress.state,
      },
      {
        op: "replace",
        path: "/guarantor/officeAddress/country",
        value: incomingData.guarantor.officeAddress.country,
      },
      {
        op: "replace",
        path: "/guarantor/secondaryContactPhoneNumber",
        value: incomingData.guarantor.secondaryContactPhoneNumber,
      },
      {
        op: "replace",
        path: "/guarantor/secondaryContactEmail",
        value: incomingData.guarantor.secondaryContactEmail,
      },
    ];
    try {
      const { data } = await axios.patch(
        API_URL_2 + `profiles/${state?.id}`,
        patchData,
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${user.token}`,
          },
        }
      );
      console.log(data);
      dispatch(setEventOrganizerProfile(data));
      toast.success("Profile Updated Successfully");
      navigate("/dashboard");
    } catch (error) {
      console.log(error);
      toast.error("Failed to update Profile");
      setSending(false);
      setIsDisabled(false);
    }
  };
  return (
    <>
      {modal && <PopUpOverlay onClick={toggleModal}></PopUpOverlay>}
      <OverallContainer>
        <EditSection>
          <EditHeader>
            <WrapLeftArrow onClick={toggleModal}>
              <BsArrowLeft size={"2rem"} />
            </WrapLeftArrow>
            <WrapLogo>
              <KCLogo src={kingCabanaLogo} alt="king cabana" />
            </WrapLogo>
          </EditHeader>

          <WelcomeText>Edit Profile</WelcomeText>

          <EditForm>
            <ImagesContainer>
              <section>
                {isSuccess ? (
                  <EditBackgroundPicture src={file} alt="new bg pic" />
                ) : (
                  <EditBackgroundPicture
                    src={
                      state.backgroundPictureUrl
                        ? state.backgroundPictureUrl
                        : backgroundPicture
                    }
                    alt="Background Picture"
                  />
                )}
                <WrapRx htmlFor="backgroundPictureFile">
                  <BsPencilSquare size={"1.5rem"} color={"#000"} />
                </WrapRx>
                <input
                  type="file"
                  style={{ cursor: "pointer" }}
                  onChange={handleFileChange}
                  hidden
                  id="backgroundPictureFile"
                  accept="image/png, image/jpeg, image/jpg"
                  name="backgroundPictureUrl"
                  defaultValue={incomingData?.backgroundPictureUrl}
                />
                <ErrorMessages>{errorMsg}</ErrorMessages>

                {successMsg ? (
                  <Messages>
                    <p style={{ color: "green", marginRight: "1rem" }}>
                      Background Image Changed Successfully
                    </p>
                  </Messages>
                ) : null}
                {loading ? (
                  <h4 style={{ display: "flex", justifyContent: "flex-end" }}>
                    Loading...
                  </h4>
                ) : null}
              </section>

              <section>
                {logoIsSuccess ? (
                  <EditLogoPicture src={logoFile} alt="new logo pic" />
                ) : (
                  <EditLogoPicture
                    src={state.logoUrl ? state.logoUrl : logo}
                    alt="Logo Picture"
                  />
                )}
                <WrapBs htmlFor="logoFile">
                  <BsPencilSquare />
                </WrapBs>
                <input
                  type="file"
                  style={{ cursor: "pointer" }}
                  onChange={handleLogoFileChange}
                  hidden
                  id="logoFile"
                  accept="image/png, image/jpeg, image/jpg"
                  name="logoUrl"
                  defaultValue={incomingData?.logoUrl}
                />
                <ErrorMessages>{logoErrorMsg}</ErrorMessages>
                {logoSuccessMsg ? (
                  <Messages>
                    <p style={{ color: "green", marginRight: "1rem" }}>
                      Logo Image Changed Successfully
                    </p>
                  </Messages>
                ) : null}
                {logoLoading ? (
                  <h4 style={{ display: "flex", justifyContent: "flex-end" }}>
                    Loading...
                  </h4>
                ) : null}
              </section>
              <Supported>Supported formats: JPEG, JPG, PNG, *img</Supported>
              <Supported style={{ color: "#ff2957" }}>
                Not more than 1mb
              </Supported>
            </ImagesContainer>

            <InputSeg style={{ marginTop: "1rem" }}>
              <InputText>Organizer's Name</InputText>
              <Input
                type="text"
                placeholder="Enter name"
                name="organizerName"
                onChange={change}
                defaultValue={incomingData?.organizerName}
              />
            </InputSeg>

            <InputSeg>
              <InputText>Organizer's Email address</InputText>
              <Input
                type="email"
                placeholder="E.g: email@example.com"
                name="profileEmail"
                onChange={change}
                defaultValue={incomingData?.profileEmail}
                title="Email format: xxx@xxxx.xxx)"
                pattern="^([a-zA-Z0-9_\-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([a-zA-Z0-9\-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$"
              />
            </InputSeg>

            <InputSeg>
              <InputText>Organizer's Phone Number</InputText>
              <Input
                type="tel"
                placeholder="E.g: +2348022345661"
                name="phoneNumber"
                onChange={change}
                defaultValue={incomingData?.phoneNumber}
                minLength={5}
              />
            </InputSeg>

            <InputText>Organizer's Address</InputText>
            <Wrapper>
              <InputSeg>
                <InputText fontSize="13px">Address Number</InputText>
                <Input
                  type="text"
                  placeholder="E.g: 18 or Number 12 or Km 14 or Room 347 or...?"
                  name="houseNo"
                  onChange={addressChange}
                  defaultValue={incomingData?.address?.houseNo}
                />
              </InputSeg>

              <InputSeg>
                <InputText fontSize="13px">Location/Street-address</InputText>
                <Input
                  type="text"
                  placeholder="E.g: Mike Smith Avenue"
                  name="street"
                  onChange={addressChange}
                  defaultValue={incomingData?.address?.street}
                />
              </InputSeg>
            </Wrapper>

            <Wrapper>
              <InputSeg>
                <InputText fontSize="13px">Town/City</InputText>
                <Input
                  type="text"
                  placeholder="E.g: Ikeja"
                  name="city"
                  onChange={addressChange}
                  defaultValue={incomingData?.address?.city}
                />
              </InputSeg>

              <InputSeg>
                <InputText fontSize="13px">State</InputText>
                <Input
                  type="text"
                  placeholder="E.g: Kaduna State"
                  name="state"
                  onChange={addressChange}
                  defaultValue={incomingData?.address?.state}
                />
              </InputSeg>

              <InputSeg>
                <InputText fontSize="13px">Country</InputText>
                <Input
                  type="text"
                  placeholder="E.g: Nigeria"
                  name="country"
                  onChange={addressChange}
                  defaultValue={incomingData?.address?.country}
                />
              </InputSeg>
            </Wrapper>

            <InputSeg>
              <InputText>
                Organizer's Details{" "}
                <Asterix>
                  {incomingData?.organizerDetails?.length ||
                    incomingData?.organizerDetails?.length}
                  /250 Characters*
                </Asterix>
              </InputText>
              <MyTextArea
                type="textarea"
                row="4"
                name="organizerDetails"
                placeholder="Write a short bio: 250 characters maximum"
                maxLength={250}
                onChange={change}
                defaultValue={incomingData?.organizerDetails}
              />
            </InputSeg>

            <InputText>Social media information</InputText>
            <InputSeg>
              <InputText>Website</InputText>
              <Input
                type="url"
                placeholder="https://example.com/"
                name="website"
                defaultValue={incomingData?.website}
                onChange={change}
              />
            </InputSeg>

            <InputSeg>
              <InputText>Linkedin</InputText>
              <Input
                type="url"
                placeholder="https://linkedin.com/*****"
                name="linkedIn"
                defaultValue={incomingData?.linkedIn}
                onChange={change}
              />
            </InputSeg>

            <InputSeg>
              <InputText>Instagram</InputText>
              <Input
                type="url"
                placeholder="https://instagram.com/*****"
                name="instagram"
                defaultValue={incomingData?.instagram}
                onChange={change}
              />
            </InputSeg>

            <InputSeg>
              <InputText>Twitter</InputText>
              <Input
                type="url"
                placeholder="https://twitter.com/*****"
                name="twitter"
                defaultValue={incomingData?.twitter}
                onChange={change}
              />
            </InputSeg>

            <InputSeg>
              <InputText>Facebook</InputText>
              <Input
                type="url"
                placeholder="https://facebook.com/*****"
                name="faceBook"
                defaultValue={incomingData?.faceBook}
                onChange={change}
              />
            </InputSeg>

            <InputSeg>
              <InputText>Others</InputText>
              <Input
                type="url"
                placeholder="https://others.com/"
                name="otherHandle"
                defaultValue={incomingData?.otherHandle}
                onChange={change}
              />
            </InputSeg>

            <InputSeg>
              <InputText>Guarantor's information</InputText>
              <SmallText>
                Select a role that befits a guarantor to this event community
              </SmallText>

              <CheckBoxInput>
                <input
                  type="radio"
                  id="patron"
                  name="guarantorRole"
                  value={"Patron"}
                  onChange={change}
                  onClick={toggleOthers}
                  checked={
                    incomingData?.guarantorRole?.includes("Patron")
                      ? true
                      : false
                  }
                />
                <label htmlFor="patron">Patron</label>
              </CheckBoxInput>

              <CheckBoxInput>
                <input
                  type="radio"
                  id="staff"
                  name="guarantorRole"
                  value={"Staff Adviser"}
                  onChange={change}
                  onClick={toggleOthers}
                  checked={
                    incomingData?.guarantorRole?.includes("Staff Adviser")
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
                  value={"Coordinator"}
                  onChange={change}
                  onClick={toggleOthers}
                  checked={
                    incomingData?.guarantorRole?.includes("Coordinator")
                      ? true
                      : false
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
                  value={"Other"}
                  checked={
                    incomingData?.guarantorRole?.includes("Other")
                      ? true
                      : false
                  }
                />
                <label htmlFor="others">Others (please specify role)</label>
              </CheckBoxInput>
              <InputBoxOther display={visibility ? "flex" : "none"}>
                <Input
                  type="text"
                  placeholder="Enter others"
                  name="guarantorRole"
                  defaultValue={incomingData?.guarantorRole}
                  onChange={change}
                />
              </InputBoxOther>
            </InputSeg>

            <InputSeg>
              <InputText>
                Full name of {""}
                {incomingData?.guarantorRole
                  ? incomingData?.guarantorRole.charAt(0).toUpperCase() +
                    incomingData?.guarantorRole.slice(1)
                  : "Secondary Contact"}{" "}
              </InputText>
              <Input
                type="text"
                placeholder="Enter Full Name of Secondary Contact"
                name="secondaryContactFullName"
                defaultValue={incomingData?.guarantor?.secondaryContactFullName}
                onChange={guarantorChange}
              />
            </InputSeg>

            <InputSeg>
              <InputText>Company/Business Name</InputText>
              <Input
                type="text"
                placeholder="Enter Company/Business Name"
                name="companyName"
                defaultValue={incomingData?.guarantor?.companyName}
                onChange={guarantorChange}
              />
            </InputSeg>

            <InputSeg>
              <InputText>Job Role</InputText>
              <Input
                type="text"
                placeholder="Enter Job Role"
                name="jobRole"
                defaultValue={incomingData?.guarantor?.jobRole}
                onChange={guarantorChange}
              />
            </InputSeg>

            <InputText>Guarantor's Office Address</InputText>
            <Wrapper>
              <InputSeg>
                <InputText fontSize="13px">Address Number</InputText>
                <Input
                  type="text"
                  placeholder="E.g: 18 or Number 12 or Km 14 or Room 347 or...?"
                  name="houseNo"
                  onChange={guarantorAddressChange}
                  defaultValue={incomingData?.guarantor?.officeAddress?.houseNo}
                />
              </InputSeg>

              <InputSeg>
                <InputText fontSize="13px">Location/Street-address</InputText>
                <Input
                  type="text"
                  placeholder="E.g: Mike Smith Avenue"
                  name="street"
                  onChange={guarantorAddressChange}
                  defaultValue={incomingData?.guarantor?.officeAddress?.street}
                />
              </InputSeg>
            </Wrapper>

            <Wrapper>
              <InputSeg>
                <InputText fontSize="13px">Town/City</InputText>
                <Input
                  type="text"
                  placeholder="E.g: Ikeja"
                  name="city"
                  onChange={guarantorAddressChange}
                  defaultValue={incomingData?.guarantor?.officeAddress?.city}
                />
              </InputSeg>

              <InputSeg>
                <InputText fontSize="13px">State</InputText>
                <Input
                  type="text"
                  placeholder="E.g: Kaduna State"
                  name="state"
                  onChange={guarantorAddressChange}
                  defaultValue={incomingData?.guarantor?.officeAddress?.state}
                />
              </InputSeg>

              <InputSeg>
                <InputText fontSize="13px">Country</InputText>
                <Input
                  type="text"
                  placeholder="E.g: Nigeria"
                  name="country"
                  onChange={guarantorAddressChange}
                  defaultValue={incomingData?.guarantor?.officeAddress?.country}
                />
              </InputSeg>
            </Wrapper>

            <InputSeg>
              <InputText>Phone Number</InputText>
              <Input
                type="tel"
                placeholder="E.g: +2348022345661"
                name="secondaryContactPhoneNumber"
                defaultValue={
                  incomingData?.guarantor?.secondaryContactPhoneNumber
                }
                onChange={guarantorChange}
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
                defaultValue={incomingData?.guarantor?.secondaryContactEmail}
                onChange={guarantorChange}
              />
            </InputSeg>

            <div
              style={{
                marginBottom: "8rem",
              }}
            ></div>

            <ButtonWrapper>
              <AbsolutePrimaryButton
                onClick={saveNavigate}
                disabled={isDisabled}
              >
                {sending ? <ImSpinner6 size={"1.5rem"} /> : "Save"}
              </AbsolutePrimaryButton>
            </ButtonWrapper>
          </EditForm>
          <div className={`${showModal}`}>
            <PopUpComponent>
              <ModalText>
                This is going to disrupt all unsaved changes. Are you sure you
                want to continue?
              </ModalText>

              <ModalButtonContainer>
                <BtnHolderLink>
                  <AlternativeButton2
                    onClick={() => setModal(!modal)}
                    style={{
                      color: "#FF2957",
                    }}
                  >
                    Continue Editing
                  </AlternativeButton2>
                </BtnHolderLink>

                <ModalPrimaryButton onClick={discardNavigate}>
                  Yes, Discard
                </ModalPrimaryButton>
              </ModalButtonContainer>
            </PopUpComponent>
          </div>
        </EditSection>
      </OverallContainer>
    </>
  );
};

export default EditOrganiserProfile;
