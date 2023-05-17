import React, { useEffect, useState } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useLocation } from "react-router-dom";
import {
  AbsolutePrimaryButton,
  PrimaryButton3,
  AlternativeButton2,
} from "../../components/button/button";
import { editGenerally } from "../../redux/slices/createEventSlice";
import {
  BudgetInventoryContainer,
  BudgetInventoryHeader,
  BudgetInventorySubtitle,
  BudgetSection,
  BudgetTitle1,
  BudgetTitle2,
  BudgetSubtitle,
  BudgetUpload,
  FormContainer,
  ButtonContainer,
  Supported,
  FileWrapper,
  CustomWrapper,
} from "./BudgetStyled";

const Budget = ({ padding }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const [selectedFile, setSelectedFile] = useState(null);
  const [loading, setLoading] = useState(false);
  const [file, setFile] = useState("");
  const [errorMsg, setErrorMsg] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [isDisabled, setisDisabled] = useState(true);
  const dispatch = useDispatch();
  const state = useSelector((state) => state.createEvent);

  const handleFileChange = async (e) => {
    const MAX_FILE_SIZE = 1024; // 1MB
    const file = e.target.files[0];
    const fileSizeKiloBytes = file.size / 1024;

    if (fileSizeKiloBytes > MAX_FILE_SIZE) {
      setErrorMsg("*File size is greater than 1mb*");
      setIsSuccess(false);
      return;
    } else {
      const data = new FormData();
      data.append("file", e.target.files[0]);
      data.append("upload_preset", "kingCabana");
      data.append("resource_type", "raw");
      setLoading(true);
      setIsSuccess(false);
      setSelectedFile(null);
      try {
        const response = await axios.post(
          "https://api.cloudinary.com/v1_1/dcanx4ftd/raw/upload",
          data
        );
        const uploadedFile = response.data;
        // console.log(uploadedFile.secure_url);
        if (uploadedFile.secure_url) {
          setFile(uploadedFile.secure_url);
          setLoading(false);
          dispatch(
            editGenerally({
              name: e.target.name,
              value: uploadedFile.secure_url,
            })
          );
        }
      } catch (error) {
        setLoading(false);
        setErrorMsg("**ERROR UPLOADING FILE!**");
        console.log(error);
      }
    }
    setSelectedFile(e.target.files[0]);
    localStorage.setItem("budget", e.target.files[0].name);
  };
  useEffect(() => {
    const budgetData = localStorage.getItem("budget");
    if (budgetData) {
      setSelectedFile({ name: budgetData });
    }
  }, []);
  useEffect(() => {
    // console.log(state);
    const MAX_FILE_SIZE = 1024; // 1MB
    if (!state?.eventBudgetTemplateUrl) {
      setErrorMsg("*Please a choose file*");
      setIsSuccess(false);
      setisDisabled(true);
      return;
    }
    const fileSizeKiloBytes = file.size / 1024;
    if (fileSizeKiloBytes > MAX_FILE_SIZE) {
      setErrorMsg("*File size is greater than maximum limit*");
      setIsSuccess(false);
      setisDisabled(true);
      return;
    }
    setErrorMsg("");
    setIsSuccess(true);
    setisDisabled(false);
  }, [file]);
  const handleSubmit = async function (e) {
    e.preventDefault();
    navigate("/createevent/budget&inventory/2");
  };

  return (
    <>
      <BudgetInventoryContainer style={{ padding: padding }}>
        {location.pathname === "/eventPlanPreview" ? null : (
          <BudgetInventoryHeader>
            <BudgetTitle1>Budget & Take Inventory</BudgetTitle1>
            <BudgetInventorySubtitle>
              In order to capture the range of tangible benefits your
              organization has to offer, you need to prepare an inventory of
              your assets.
            </BudgetInventorySubtitle>
          </BudgetInventoryHeader>
        )}

        <BudgetSection style={{ height: "50%" }}>
          <BudgetTitle2>Budget</BudgetTitle2>
          <BudgetUpload>
            <BudgetSubtitle>Event Budget Template</BudgetSubtitle>
            <BudgetInventorySubtitle>
              Work within clear parameters for your event
            </BudgetInventorySubtitle>

            <FormContainer>
              <FileWrapper>
                <CustomWrapper>
                  <input
                    type="file"
                    style={{ cursor: "pointer" }}
                    onChange={handleFileChange}
                    name="eventBudgetTemplateUrl"
                    defaultValue={file}
                  />
                </CustomWrapper>
                <PrimaryButton3>Upload</PrimaryButton3>
              </FileWrapper>

              {isSuccess ? null : (
                <>
                  <Supported>
                    Support files; JPG, PNG, JPEG, DOCX, PDF, CSV
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
              <BudgetInventorySubtitle>
                {selectedFile && `${selectedFile.name}`}
              </BudgetInventorySubtitle>
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
              {loading ? (
                <h4 style={{ display: "flex", justifyContent: "flex-end" }}>
                  Loading...
                </h4>
              ) : null}
              <p style={{ color: "#ff2957", fontSize: "16px" }}>
                {!file && errorMsg}
              </p>

              {location.pathname === "/eventPlanPreview" ? null : (
                <div>
                  <ButtonContainer style={{ margin: "0rem" }}>
                    <AlternativeButton2
                      style={{
                        color: "#FF2957",
                        fontWeight: "600",
                        marginRight: "2rem",
                      }}
                      onClick={() => navigate("/createevent/defineaudience/1")}
                    >
                      Back
                    </AlternativeButton2>
                    <AbsolutePrimaryButton
                      onClick={handleSubmit}
                      disabled={isDisabled}
                    >
                      Save & Continue
                    </AbsolutePrimaryButton>
                  </ButtonContainer>
                </div>
              )}
            </FormContainer>
          </BudgetUpload>
        </BudgetSection>
      </BudgetInventoryContainer>
    </>
  );
};

export default Budget;
