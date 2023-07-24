import { useContext, useState, useEffect } from "react";
import axios from "axios";
import {toast} from "react-toastify";
import { CustomWrapper, FileWrapper, FormContainer, Input, InputText, Supported, UploadBtn } from "../../createEvent/FirstCreateEventStyled";
import { AddButton, Delete, EventSubSection, InputTagBox } from "../../createEvent/TimeLineEventsStyled";
import { BudgetInventorySubtitle,} from "../../createProposal/budgetInventory/BudgetStyled";
import { BenefitsTag, InputSeg, InputSegHidden, ProposalTagsWrapper, Txt } from "../../createProposal/proposalBuildup/ProposalBuildupStyled";
import { Description, HistorySection, HistoryTimeAndDateHolder, MultipleImagesHolder } from "./EventHistoryFormStyled";
import { EditEventHistoryContext } from "../EditEventHistory";
import FooterButtonComponent from "../../../components/FooterButtonComponent"
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addEventHistoryFields, addImageUrl, addSponsors, addSponsorsBenefits, clearEventHistory, removeSponsors, removeSponsorsBenefits } from "../../../redux/slices/createEventHistorySlice";
import { useFileUpload } from "../../../components/FileUpload";
import { AiOutlineClose } from "react-icons/ai";
import { Asterix, Wrapper } from "../../../pages/profile/organiserProfile/OrganiserProfileStyled";
import { BackgroundPicture, ImagesContainer } from "../../eventHome/EventHomeStyled";
import banner from "../../../assets/images/bgBanner.jpg";
import { PrimaryButton3 } from "../../../components/buttons/button";
import { HistoryImage, HistoryImageEdit } from "./SingleEventHistoryStyled";
import { HiOutlineTrash } from "react-icons/hi";
import { TbEdit } from "react-icons/tb";
import { API_URL_2 } from "../../../redux/services/authService";

const EditEventComponent = () => {
  const {toggleModal, originalData, state, setState} = useContext(EditEventHistoryContext);
  const [file, setFile] = useState("");
  const [errorMsg, setErrorMsg] = useState(false);
  const [selectedFile, setSelectedFile] = useState(null);
  const [bannerLoading, setBannerLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [sponsorList, setSponsorList] = useState("");
  const [benefitList, setBenefitList] = useState("");
  const [isDisabled, setIsDisabled] = useState(true);
  const user = useSelector((state) => state?.userDetails);
  const keyContact = useSelector((state) => state?.eventOrganizerProfile);
  const navigate = useNavigate();

  const otherFields = (e) => {
    setState((prevState)=>({...prevState, [e.target.name]: e.target.value }));
    console.log(state);
  };
  const addressChange = (e) => {
    setState((prevState)=>({
      ...prevState,
      eventAddress: { ...prevState?.eventAddress, [e.target.name]: e.target.value },
    }));
    console.log(state);
  };

  const handleFileChange = async (e) => {
    const MAX_FILE_SIZE = 1024; // 1MB
    const file = e.target.files[0];
    const fileSizeKiloBytes = file?.size / 1024;

    if (fileSizeKiloBytes > MAX_FILE_SIZE) {
      setErrorMsg("*File size is greater than 1mb*");
      setIsSuccess(false);
      return;
    } else {
      const data = new FormData();
      data.append("file", e.target.files[0]);
      data.append("upload_preset", "kingCabana");
      setBannerLoading(true);
      setIsSuccess(false);
      setSelectedFile(null);
      try {
        const response = await axios.post(
          "https://api.cloudinary.com/v1_1/dcanx4ftd/image/upload",
          data
        );
        const uploadedBanner = response.data;
        // console.log(uploadedBanner.secure_url);
        if (uploadedBanner.secure_url) {
          setFile(uploadedBanner.secure_url);
          setBannerLoading(false);
          setState((prevState)=>({
              ...prevState,
              bannerUrl: uploadedBanner.secure_url,
            }));
          console.log(state);
        }
      } catch (error) {
        setBannerLoading(false);
        setErrorMsg("**ERROR UPLOADING FILE!**");
        console.log(error);
      }
    }
    setSelectedFile(e.target.files[0]);
    localStorage.setItem("banner", e.target.files[0].name);
  };
  useEffect(() => {
    const bannerData = localStorage.getItem("banner");
    if (bannerData) {
      setSelectedFile({ name: bannerData });
    }
  }, []);
  

  const {
    handleFileChange: handleFileChange1,
    errorMsg: errorMsg1,
    isSuccess: isSuccess1,
    loading: loading1,
    file: file1
  } = useFileUpload();

  const {
    handleFileChange: handleFileChange2,
    errorMsg: errorMsg2,
    isSuccess: isSuccess2,
    loading: loading2,
    file: file2
  } = useFileUpload();

  const {
    handleFileChange: handleFileChange3,
    errorMsg: errorMsg3,
    isSuccess: isSuccess3,
    loading: loading3,
    file: file3
  } = useFileUpload();

  const addImageUrl = (file) => {
    const existingIndex = state?.imageUrls?.findIndex((url) => url === file);
    if (existingIndex !== -1) {
      // URL already exists, update it
      const updatedUrls = [...state.imageUrls];
      updatedUrls[existingIndex] = file;
      setState((prevState) => ({
        ...prevState,
        imageUrls: updatedUrls,
      }));
    } else if (state?.imageUrls?.length < 3) {
      // URL doesn't exist and array size is less than 3, add the URL
      setState((prevState) => ({
        ...prevState,
        imageUrls: [...prevState.imageUrls, file],
      }));
    }
  };

  useEffect(() => {
    if (isSuccess1) {
      addImageUrl(file1);
    }
    console.log(state)
  }, [isSuccess1, file1]);
  
  useEffect(() => {
    if (isSuccess2) {
      addImageUrl(file2);
    }
  }, [isSuccess2, file2]);
  
  useEffect(() => {
    if (isSuccess3) {
      addImageUrl(file3);
    }
  }, [isSuccess3, file3]);

  const handleImageRemoval = (index) => {
    if (index >= 0 && index < state?.imageUrls?.length) {
      const updatedUrls = [...state.imageUrls];
      updatedUrls.splice(index, 1);
      setState((prevState) => ({
        ...prevState,
        imageUrls: updatedUrls,
      }));
    }
  };
  
  const handleSponsorsTag = () => {
    if (sponsorList !== "") {
      const alreadyExists = state?.sponsorList?.some(
        (tag) => tag === sponsorList
      );
      if (!alreadyExists && state?.sponsorList?.length < 5) {
        setState((prevState)=>({
          ...prevState,
          sponsorList: [...prevState?.sponsorList, sponsorList]
        }));
      }
      setSponsorList("");
    }
    console.log(state);
  };
  const handleRemoveSponsors = (tag) => {
    setState((prevState)=>({
      ...prevState,
      sponsorList: prevState?.sponsorList?.filter(
      (sponsor) => sponsor !== tag
      )}));
      console.log(state);
  };
  

  const sponsorsTags = state?.sponsorList?.map((tag, index) => (
    <div key={index}>
      <BenefitsTag
        style={{
          marginTop: "1%",
          width: "max-content",
          border: "1px solid black",
          color: "black",
        }}
      >
        {tag}
        <Delete
          onClick={() => handleRemoveSponsors(tag)}
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            color: "#ff2957",
          }}
        >
          <AiOutlineClose />
        </Delete>
      </BenefitsTag>
    </div>
  ));
  

  const handleBenefitsTag = () => {
    if (benefitList !== "") {
      const alreadyExists = state?.sponsorsBenefits?.some(
        (tag) => tag === benefitList
      );
      if (!alreadyExists && state?.sponsorsBenefits?.length < 5) {
        setState((prevState)=>({
          ...prevState,
          sponsorsBenefits: [...prevState?.sponsorsBenefits, benefitList]}));
      }
      setBenefitList("");
    }
    console.log(state);
  };
  const handleRemoveBenefits = (tag) => {
    setState((prevState)=>({
      ...prevState,
      sponsorsBenefits: prevState?.sponsorsBenefits?.filter(
      (sponsor) => sponsor !== tag
      )}));
    console.log(state);
  };
  

  const benefitTags = state?.sponsorsBenefits?.map((tag, index) => (
    <div key={index}>
      <BenefitsTag
        style={{
          marginTop: "1%",
          width: "max-content",
          border: "1px solid black",
          color: "black",
        }}
      >
        {tag}
        <Delete
          onClick={() => handleRemoveBenefits(tag)}
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            color: "#ff2957",
          }}
        >
          <AiOutlineClose />
        </Delete>
      </BenefitsTag>
    </div>
  ));

  const handleEventHistory = async (event) => {
    event.preventDefault();
    if (Object.keys(originalData).length > 0 && Object.keys(state).length > 0) {
      let patchData = [];

      // Compare originalData with state to generate patch updates
      for (const key in state) {
        if (Object.hasOwnProperty.call(state, key)) {
          if (originalData[key] !== state[key]) {
            patchData = [...patchData, { op: "replace", path: `/${key}`, value: state[key] }];
          }
        }
      }
    
    try {
      setIsDisabled(true);
      const {data} = await axios.patch(
        API_URL_2 + `histories/${state?.id}`, patchData,
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${user?.token}`
          },
        },
      );
        console.log(data);
        toast.success("Event updated successfully")
        navigate("/event/history")
    } catch (error) {
      console.log(error);
      toast.error("Error updating event");
      setIsDisabled(false);
    }
  }
};
  
  useEffect(() => {
    if (state?.eventName && state?.eventDescription &&
      state?.eventTime && state?.eventDate &&
      state?.eventAddress?.state && state?.eventAddress?.country) {
      setIsDisabled(false);
    } else {
      setIsDisabled(true);
    }
  }, [state?.eventName, state?.eventDescription,
    state?.eventTime, state?.eventDate,
    state?.eventAddress?.state, state?.eventAddress?.country]);
    return (
        <>
           <InputSeg style={{ marginTop: "1%" }}>
              <Txt>Event Name <Asterix>*</Asterix></Txt>
              <Input
                type="text"
                name="eventName"
                placeholder="Enter your event name"
                onChange={otherFields}
                defaultValue={state?.eventName}
                
              />
            </InputSeg>

            <HistorySection style={{ marginTop: "1%" }}>
              <Txt>Event Description <Asterix>*</Asterix></Txt>
              <p style={{ marginBottom: "1%" }}>
                What is the purpose of this event
              </p>
              <Description
                type="text"
                name="eventDescription"
                placeholder="Be descriptive and concise"
                onChange={otherFields}
                defaultValue={state?.eventDescription}
                
              />
            </HistorySection>

            <HistorySection style={{ marginTop: "1%" }}>
              <Txt>Event Banner</Txt>
              <p style={{ marginBottom: "1%" }}>
                Upload a catchy banner that reflected the essence of the event.
              </p>
             {state?.bannerUrl && 
             <ImagesContainer>
                <BackgroundPicture 
                src={state?.bannerUrl ? state?.bannerUrl : banner}
                alt="Background Picture"/>
              </ImagesContainer> 
              } 
              <FormContainer style={{padding: "0.5rem", marginTop: "1rem", display: "flex"}}>
              <FileWrapper style={{marginBottom: "1rem", width: "80px", height: "70px"}}>
                <CustomWrapper>
                  <input
                    type="file"
                    style={{ cursor: "pointer" }}
                    onChange={handleFileChange}
                    name="bannerUrl"
                    defaultValue={file}
                    accept="image/png, image/jpeg, image/jpg"
                    // defaultValue={state?.eventBannerUrl}
                  />
                </CustomWrapper>
                <PrimaryButton3>Upload</PrimaryButton3>
              </FileWrapper>
              {isSuccess ? null : (
                <>
                  <Supported>
                    Support files; JPG, PNG, JPEG, *IMG files
                  </Supported>
                  <Supported
                    style={{
                      color: "#ff2957",
                    }}
                  >
                    Not more than 1mb
                  </Supported>
                </>
              )}
              {isSuccess ? (
                <div
                  style={{
                    padding: "1rem",
                    display: "flex",
                    justifyContent: "flex-end",
                    alignItems: "center",
                  }}
                >
                  <BudgetInventorySubtitle
                    style={{ color: "green", marginRight: "1rem" }}
                  >
                    File uploaded successfully
                  </BudgetInventorySubtitle>
                </div>
              ) : null}
              {bannerLoading ? (
                <h4 style={{ display: "flex", justifyContent: "flex-end" }}>
                  Loading...
                </h4>
              ) : null}
              <p style={{ color: "#ff2957", fontSize: "16px" }}>
                {!file && errorMsg}
              </p>
            </FormContainer>
            </HistorySection>

            <HistoryTimeAndDateHolder>
              <InputSeg>
                <Txt>Event Time <Asterix>*</Asterix></Txt>
                <Input
                  type="time"
                  name="eventTime"
                  onChange={otherFields}
                  defaultValue={state?.eventTime}
                  
                />
              </InputSeg>

              <InputSeg>
                <Txt>Event Date <Asterix>*</Asterix></Txt>
                <Input
                  type="date"
                  name="eventDate"
                  onChange={otherFields}
                  defaultValue={state?.eventDate}
                  
                />
              </InputSeg>
            </HistoryTimeAndDateHolder>

            <InputSeg style={{ marginTop: "1%" }}>
              <Txt>Event Location <Asterix>*</Asterix></Txt>
            <Wrapper>
              <InputSeg>
                <InputText fontSize="13px">Address Number</InputText>
                <Input
                  type="text"
                  name="houseNo"
                  onChange={addressChange}
                  defaultValue={state?.eventAddress?.houseNo}
                />
              </InputSeg>

              <InputSeg>
                <InputText fontSize="13px">Location/Street-address</InputText>
                <Input
                  type="text"
                  name="street"
                  onChange={addressChange}
                  defaultValue={state?.eventAddress?.street}
                />
              </InputSeg>
            </Wrapper>

            <Wrapper>
              <InputSeg>
                <InputText fontSize="13px">Town/City</InputText>
                <Input
                  type="text"
                  name="city"
                  onChange={addressChange}
                  defaultValue={state?.eventAddress?.city}
                />
              </InputSeg>

              <InputSeg>
                <InputText fontSize="13px">
                  State <Asterix>*</Asterix>
                </InputText>
                <Input
                  type="text"
                  name="state"
                  onChange={addressChange}
                  defaultValue={state?.eventAddress?.state}
                  
                />
              </InputSeg>

              <InputSeg>
                <InputText fontSize="13px">
                  Country <Asterix>*</Asterix>
                </InputText>
                <Input
                  type="text"
                  name="country"
                  onChange={addressChange}
                  defaultValue={state?.eventAddress?.country}
                  
                />
              </InputSeg>
            </Wrapper>
            </InputSeg>

            <EventSubSection style={{ padding: "0" }}>
              <Txt>List of sponsors</Txt>
              <p style={{ marginBottom: "1%" }}>
                Sponsors who partnered for the event.
              </p>
              <InputTagBox>
                <Input
                  placeholder="List of sponsors for the event."
                  type="text"
                  value={sponsorList}
                  onChange={(event) => setSponsorList(event.target.value)}
                />
                <AddButton type="button" onClick={handleSponsorsTag} >Add</AddButton>
              </InputTagBox>
              <ProposalTagsWrapper>{sponsorsTags}</ProposalTagsWrapper>
            </EventSubSection>

            <EventSubSection style={{ padding: "0", marginTop: "1%" }}>
              <Txt>Benefits our sponsors received</Txt>
              <InputTagBox>
                <Input
                  placeholder="List any and all benefits sponsors received by sponsoring your event."
                  type="text"
                  value={benefitList}
                  onChange={(event) => setBenefitList(event.target.value)}
                />
                <AddButton type="button" onClick={handleBenefitsTag}>Add</AddButton>
              </InputTagBox>
              <ProposalTagsWrapper>{benefitTags}</ProposalTagsWrapper>
            </EventSubSection>

            <HistorySection style={{ marginTop: "1%", marginBottom: "3rem"}}>
              <Txt>Add pictures taken at the event</Txt>
              <p style={{ marginBottom: "1%" }}>
                You can add maximum of three pictures
              </p>
              <MultipleImagesHolder>
                <div>
                <AiOutlineClose color= "#ff2957" onClick={() => handleImageRemoval(0)} />
                <HistoryImageEdit src={state?.imageUrls[0] ? state?.imageUrls[0] : banner} alt="img2"/>
                </div>
                <div>
                <AiOutlineClose color= "#ff2957" onClick={() => handleImageRemoval(1)} />
                <HistoryImageEdit src={state?.imageUrls[1] ? state?.imageUrls[1] : banner} alt="img2"/>
                </div>
                <div>
                <AiOutlineClose color= "#ff2957" onClick={() => handleImageRemoval(2)} />
                <HistoryImageEdit src={state?.imageUrls[2] ? state?.imageUrls[2] : banner} alt="img2"/>
                </div>
              </MultipleImagesHolder>
              
              <MultipleImagesHolder>
                <InputSeg style={{ background: "white" }}>
                  <FormContainer>
                    <FileWrapper style={{ width: "100%" }}>
                      <CustomWrapper>
                        <input
                          type="file"
                          style={{ cursor: "pointer" }}
                          onChange={handleFileChange1}
                          hidden
                          id="file1"
                          accept="image/png, image/jpeg, image/jpg"
                          name="imageUrl1"
                          defaultValue={file1}
                        />
                      </CustomWrapper>
                      <UploadBtn style={{ width: "100px" }} htmlFor="file1">
                        Upload
                      </UploadBtn>
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
                      {errorMsg1}
                    </h3>
                    <Supported>Support image: JPEG, JPG, PNG, *img</Supported>
                    <Supported style={{ color: "#ff2957", marginBottom: "3%" }}>
                      Not more than 1mb
                    </Supported>
                    {isSuccess1 ? (
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
                      src={file1}
                      style={{ width: "50px", height: "50px" }}
                      alt=""
                    />
                  </div>
                ) : null}
                    {loading1 ? (
                      <h4
                        style={{ display: "flex", justifyContent: "flex-end" }}
                      >
                        Loading...
                      </h4>
                    ) : null}
                  </FormContainer>
                </InputSeg>

                <InputSegHidden>
                  <FormContainer>
                    <FileWrapper style={{ width: "100%" }}>
                      <CustomWrapper>
                        <input
                          type="file"
                          style={{ cursor: "pointer" }}
                          onChange={handleFileChange2}
                          hidden
                          id="file2"
                          accept="image/png, image/jpeg, image/jpg"
                          name="imageUrl2"
                          defaultValue={file2}
                        />
                      </CustomWrapper>
                      <UploadBtn style={{ width: "100px" }} htmlFor="file2">
                        Upload
                      </UploadBtn>
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
                      {errorMsg2}
                    </h3>
                    <Supported>Support image: JPEG, JPG, PNG, *img</Supported>
                    <Supported style={{ color: "#ff2957", marginBottom: "3%" }}>
                      Not more than 1mb
                    </Supported>
                    {isSuccess2 ? (
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
                      src={file2}
                      style={{ width: "50px", height: "50px" }}
                      alt=""
                    />
                  </div>
                ) : null}
                    {loading2 ? (
                      <h4
                        style={{ display: "flex", justifyContent: "flex-end" }}
                      >
                        Loading...
                      </h4>
                    ) : null}
                  </FormContainer>
                </InputSegHidden>

                <InputSegHidden>
                  <FormContainer>
                    <FileWrapper style={{ width: "100%" }}>
                      <CustomWrapper>
                        <input
                          type="file"
                          style={{ cursor: "pointer" }}
                          onChange={handleFileChange3}
                          hidden
                          id="file3"
                          accept="image/png, image/jpeg, image/jpg"
                          name="imageUrl3"
                          defaultValue={file3}
                        />
                      </CustomWrapper>
                      <UploadBtn style={{ width: "100px" }} htmlFor="file3">
                        Upload
                      </UploadBtn>
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
                      {errorMsg3}
                    </h3>
                    <Supported>Support image: JPEG, JPG, PNG, *img</Supported>
                    <Supported style={{ color: "#ff2957", marginBottom: "3%" }}>
                      Not more than 1mb
                    </Supported>
                    {isSuccess3 ? (
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
                      src={file3}
                      style={{ width: "50px", height: "50px" }}
                      alt=""
                    />
                  </div>
                ) : null}
                    {loading3 ? (
                      <h4
                        style={{ display: "flex", justifyContent: "flex-end" }}
                      >
                        Loading...
                      </h4>
                    ) : null}
                  </FormContainer>
                </InputSegHidden>
              </MultipleImagesHolder>
            </HistorySection>
            <FooterButtonComponent
                whiteBtnText="Cancel"
                onClickWhiteBtn={toggleModal}
                redBtnText="Save"
                onClickRedBtn={handleEventHistory}
                disabledRedBtn={isDisabled}
            />
        </>
    )   
}

export default EditEventComponent;