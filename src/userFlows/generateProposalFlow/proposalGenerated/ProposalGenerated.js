import React from "react";
import TopBar from "../../topBar/dashboardTopBar/TopBar";
import LoadingScreen from "../../../LoadingScreen";
import {
  OverallContainer,
} from "../../createProposal/proposalBuildup/ProposalBuildupStyled";
import {
  Confidential,
  CoverDetailsHolder,
  CoverImageHolder,
  OrganizerAsk,
  PreparedByDiv,
  PreparedForDiv,
  PreviewLogoBg,
  ProposalInner,
  TableAndContentContainer,
  TableContainer,
  TableDataCell,
  TableHeaderCell,
  TableRow,
  UlInner,
} from "../../createProposal/proposalPreview/ProposalPreviewCoverStyled";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import TestImage from "../../../assets/images/Wedding.jpg";
import { MdAccessTime } from "react-icons/md";
import { AiTwotoneCalendar } from "react-icons/ai";
import { TOCInnerDiv, TableOfContentInner } from "./ProposalGeneratedStyled";
import { API_URL_2 } from "../../../redux/services/authService";
import axios from "axios";
import { useEffect } from "react";
import { toast } from "react-toastify";
import { convertImageToBase64, decryptId } from "../../../utils";
import { setProposalCreated } from "../../../redux/slices/proposalCreatedSlice";
import { Container1 } from "../../guestRegistration/GuestRegistrationStyled";
import { AlternativeButton2 } from "../../../components/buttons/button";
import html2pdf from "html2pdf.js";

const ProposalGenerated = () => {
  const [loading, setLoading] = useState(false);
  const [proposal, setProposal] = useState();

  // const user = useSelector((state) => state.userDetails);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { id } = useParams();

  const decryptedId = decryptId(id);
  const proposalCreated = useSelector((state)=>state.proposalCreated)
  // const encryptedId = encryptId(decryptedId);
  console.log(id);
  console.log(decryptedId);
  const currentYear = new Date().getFullYear();

  // Function to generate the PDF after the image is loaded and updated
  const generatePDF = (imageData) => {
    const rootElement = document.getElementById("pdf-content");
    // Options for PDF conversion (you can customize as needed)
    const options = {
      margin: 10,
      filename: `Proposal to ${proposal?.eventSponsor}`,
      image: { type: "jpeg", quality: 0.98, include: true },
      html2canvas: { scale: 2 },
      pagebreak: { mode: ['avoid-all', 'css', 'legacy'] },
      jsPDF: { unit: "mm", format: "a4", orientation: "portrait" },
    };

    // Modify the image source to use Base64 data
    const imageElement = document.querySelector(".cover-image-holder img");
    imageElement.src = imageData;

    // Start the PDF conversion after modifying the image source
    html2pdf()
      .from(rootElement)
      .set(options)
      .save()
      .then(() => {
        // Revert the image source back to the original
        imageElement.src = proposal?.proposalBannerUrl || TestImage;
      })
      .catch((error) => {
        console.error("Error generating PDF:", error);
        // Revert the image source back to the original in case of an error
        imageElement.src = proposal?.proposalBannerUrl || TestImage;
      });
  };

  // Function to handle the PDF download
  const handleDownloadPDF = () => {
    // Start PDF conversion after converting the image to Base64
    convertImageToBase64(proposal?.proposalBannerUrl || TestImage)
      .then((imageData) => {
        generatePDF(imageData);
      })
      .catch((error) => {
        console.error("Error converting image to Base64:", error);
      });
  };
  
  const formatHeader = (text) => {
    const words = text.match(/[A-Za-z][a-z]*/g);
    return words
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" ");
  };

  useEffect(() => {
    const fetchProposal = async () => {
      try {
        const { data } = await axios.get(API_URL_2 + `proposals/${decryptedId}`);
        setProposal(data);
        dispatch(setProposalCreated(data))
        // console.log(proposalCreated)
        console.log(data)
      } catch (error) {
        if (error?.response?.status === 400) {
          navigate("/*");
          toast.error("Proposal Does Not Exist");
          console.log("Proposal Does Not Exist");
        }
        throw error;
      } finally {
        setLoading(false);
      }
    };
    fetchProposal();
  }, [decryptedId]);

  return (
    <>
      <TopBar marginBottom="1rem" />
      {loading ? (
        <LoadingScreen />
      ) : (
        <OverallContainer style={{marginTop: "4.5rem"}}>
          <Container1
            style={{ marginBottom: "0.5rem", justifyContent: "flex-end" }}
          >
            <AlternativeButton2
              onClick={handleDownloadPDF}
            >
              Download Proposal
            </AlternativeButton2>
          </Container1>
          <div id="pdf-content">
          <CoverImageHolder className="cover-image-holder">
            <img
              src={
                proposal?.proposalBannerUrl
                  ? proposal?.proposalBannerUrl
                  : TestImage
              }
              alt="banner"
            />
          </CoverImageHolder>

          <CoverDetailsHolder>
            <PreparedByDiv>
              <h3 style={{ color: "#484848" }}>Prepared by</h3>
              <p>
                {proposal?.organizerName
                  ? proposal?.organizerName
                  : "Event Organizer's name"}
              </p>
              <p>{proposal?.eventName ? proposal?.eventName : "Event Name"}</p>
              <p>
                {proposal?.profileEmailAddress
                  ? proposal?.profileEmailAddress
                  : "Organizer's email"}
              </p>
              <p>
                {proposal?.profilePhoneNumber ? proposal?.profilePhoneNumber : "Phone number"}
              </p>
            </PreparedByDiv>

            {/* <PreparedForDiv>
              <h3 style={{ color: "#484848" }}>Prepared For</h3>
              <p>
                {proposal?.eventSponsor
                  ? proposal?.eventSponsor
                  : "Event sponsor"}
              </p>
            </PreparedForDiv> */}
          </CoverDetailsHolder>
          <PreviewLogoBg style={{ height: "fit-content" }}>
            <ProposalInner>
              <h4 style={{ textAlign: "center", color: "#484848" }}>
                Table of Contents
              </h4>
              <TableOfContentInner>
                <TOCInnerDiv>
                  <li>Event Name</li>
                  <li>Event Description</li>
                  <li>Attendee Profile</li>
                  <li>Event Impact</li>
                </TOCInnerDiv>
                <TOCInnerDiv>
                  <li>Sponsorship Benefits</li>
                  <li>Budget</li>
                  <li>Confidentiality</li>
                  <li> </li>
                </TOCInnerDiv>
              </TableOfContentInner>

              <div style={{ marginTop: "3%" }}>
                <div>
                  <h3 style={{ color: "#484848" }}>Event Name</h3>
                  <p>
                    {proposal?.eventName
                      ? proposal?.eventName
                      : "Event name"}
                  </p>
                </div>

                <div style={{ marginTop: "4%" }}>
                  <h3 style={{ color: "#484848" }}>Event description</h3>
                  <p>
                    {proposal?.eventDescription
                      ? proposal?.eventDescription
                      : "Event description"}
                  </p>
                </div>

                <div style={{ marginTop: "4%" }}>
                  <h3 style={{ color: "#484848" }}>Event Theme</h3>
                  <p>
                    {proposal?.eventTheme
                      ? proposal?.eventTheme
                      : "Event theme"}
                  </p>
                </div>

                <div
                  style={{
                    width: "100%",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    marginTop: "4%",
                  }}
                >
                  <div style={{ width: "50%" }}>
                    <h3 style={{ color: "#484848" }}>Event Time</h3>
                    <div
                      style={{
                        width: "fit-content",
                        gap: "10px",
                        display: "flex",
                        alignItems: "center",
                      }}
                    >
                      <MdAccessTime />
                      <p>
                        {proposal?.eventStartTime
                          ? proposal?.eventStartTime
                          : "Event time"}
                      </p>
                    </div>
                  </div>
                  <div style={{ width: "50%" }}>
                    <h3 style={{ color: "#484848" }}>Event Date</h3>
                    <div
                      style={{
                        width: "fit-content",
                        gap: "10px",
                        display: "flex",
                        alignItems: "center",
                      }}
                    >
                      <AiTwotoneCalendar />
                      <p>
                        {proposal?.eventStartDate
                          ? proposal?.eventStartDate
                          : "Event date"}
                      </p>
                    </div>
                  </div>
                </div>
                <div style={{ marginTop: "4%" }}>
                  <h3 style={{ color: "#484848" }}>Estimated Attendance</h3>
                  <p>
                    {proposal?.estimatedAttendance
                      ? proposal?.estimatedAttendance
                      : "Estimated attendance"}
                  </p>
                </div>
              </div>

              <div style={{ marginTop: "3%", color: "#484848" }}>
                <h4>Audience (Attendees Profile)</h4>
                <div style={{ lineHeight: "2rem" }}>

                  {proposal?.defineAudience?.ageRange?.length > 0 && <li>
                    Age:{" "}
                    {proposal?.defineAudience?.ageRange.join(", ")}
                  </li> }

                  {proposal?.defineAudience?.incomeRange?.length > 0 && <li>
                    Income:{" "}
                    {proposal?.defineAudience?.incomeRange.join(", ")}
                  </li> }
                  {proposal?.defineAudience?.genderList?.length > 0 && <li>
                    Gender:{" "}
                    {proposal?.defineAudience?.genderList.join(", ")}
                  </li> }
                  {proposal?.defineAudience?.religionList?.length > 0 && <li>
                    Religion:{" "}
                    {proposal?.defineAudience?.religionList.join(", ")}
                  </li> }
                  {proposal?.defineAudience?.employmentStatusList?.length > 0 && <li>
                    Employment Status:{" "}
                    {proposal?.defineAudience?.employmentStatusList.join(", ")}
                  </li> }
                  {proposal?.defineAudience?.educationLevelList?.length > 0 && <li>
                    Educational Level:{" "}
                    {proposal?.defineAudience?.educationLevelList.join(", ")}
                  </li> }
                  </div>
              </div>

              <div style={{ marginTop: "3%" }}>
                <h4 style={{ color: "#484848" }}>
                  Benefits of sponsoring this event (Inventory)
                </h4>
                <div style={{ lineHeight: "2rem", marginTop: "1%" }}>
                  {proposal && proposal.takeInventory && Object.keys(proposal.takeInventory).map((key) => {
                    const value = proposal.takeInventory[key];
                    if (Array.isArray(value)) {
                      const formattedKey = formatHeader(key);
                      if (value.length > 0) {
                      return (
                        <div key={key}>
                          <h4 style={{ color: "#484848" }}>{formattedKey}</h4>
                          <ul style={{ margin: "1% 2%" }}>
                            {value.map((item) => (
                              <li key={item}>{item}</li>
                            ))}
                          </ul>
                        </div>
                      );
                            }
                    }
                    return null;
                  })}
                </div>
              </div>

              <div style={{ marginTop: "3%", color: "#484848" }}>
                <h4>Impact of the event on the community</h4>
                <div style={{ lineHeight: "2rem", marginBottom: "5%" }}>
                  {proposal?.potentialImpacts ? (
                    <UlInner>
                      {proposal?.potentialImpacts?.map((impacts) => (
                        <li key={impacts}>{impacts}</li>
                      ))}
                    </UlInner>
                  ) : (
                    "Potential Impact List"
                  )}
                </div>
              </div>

              <TableAndContentContainer>
                <TableContainer>
                  <TableRow>
                    <TableHeaderCell>Item</TableHeaderCell>
                    <TableHeaderCell>Description</TableHeaderCell>
                    <TableHeaderCell>Cost (#)</TableHeaderCell>
                  </TableRow>
                  {proposal?.budget?.budgetDetails ? (
                    <>
                      {proposal?.budget?.budgetDetails.map((detail, index) => (
                        <TableRow key={index}>
                          <TableDataCell>{detail.item}</TableDataCell>
                          <TableDataCell>{detail.description}</TableDataCell>
                          <TableDataCell>{detail.cost}</TableDataCell>
                        </TableRow>
                      ))}
                      <TableRow>
                        <TableDataCell></TableDataCell>
                        <TableDataCell>
                          <h4
                            style={{ textDecoration: "none", color: "#484848" }}
                          >
                            Total
                          </h4>
                        </TableDataCell>

                        <TableDataCell>{proposal?.budget?.total}</TableDataCell>
                      </TableRow>
                    </>
                  ) : (
                    "Budget List"
                  )}
                </TableContainer>

                {/* <OrganizerAsk>
                  <h4 style={{ color: "#484848" }}>Event Organizer’s Ask</h4>
                  <p>
                    We would require{" "}
                    {proposal?.amountRequired
                      ? proposal?.amountRequired
                      : "Event organizer's Ask "}{" "}
                    worth of sponsorship from your organization
                  </p>
                </OrganizerAsk> */}

                <Confidential>
                  <h4 style={{ color: "#484848" }}>Confidentiality</h4>
                  <p>
                    Copyright{" "}
                    {proposal?.eventOrganizerName
                      ? proposal?.eventOrganizerName
                      : "Event organizer's name"}{" "}
                    {currentYear}.
                  </p>
                  <p>
                    This publication is copyrighted and remains the intellectual
                    property of{" "}
                    {proposal?.eventOrganizerName
                      ? proposal?.eventOrganizerName
                      : "Event organizer's name"}
                    .
                  </p>
                  <p>
                    The information contained in this proposal is confidential,
                    and no part of it may be copied and/or disclosed to any
                    person without the express permission of{" "}
                    {proposal?.eventOrganizerName
                      ? proposal?.eventOrganizerName
                      : "Event organizer's name"}
                    .
                  </p>
                </Confidential>
              </TableAndContentContainer>
            </ProposalInner>
          </PreviewLogoBg>
          </div>
        </OverallContainer>
      )}
    </>
  );
};

export default ProposalGenerated;
