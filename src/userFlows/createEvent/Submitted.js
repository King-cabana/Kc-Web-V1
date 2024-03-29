import React from "react";
import {
  BudgetInventorySubtitle,
  ButtonContainer,
} from "../createProposal/budgetInventory/BudgetStyled";
import { useSelector } from "react-redux";
import { useLocation } from "react-router";
import { SubmittedContainer, SubmittedButtons } from "./SubmittedStyled";
import {
  AbsolutePrimaryButton,
  AlternativeButton2,
  ModalPrimaryButton,
} from "../../components/buttons/button";
import Lottie from "lottie-react";
import animationData from "../../assets/lotties/102001-success-icon.json";
import { AnimationContainer } from "../../globalStyles";
import { useNavigate } from "react-router";
import CreateEventTopBar from "../topBar/CreateEventTopBar/CreateEventTopBar";
import { encryptId, decryptId } from "../../utils";
import { ModalButtonContainer } from "../createProposal/budgetInventory/InventoryStyled";
// import { jsPDF } from "jspdf";
// import html2canvas from "html2canvas";


const Submitted = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const event = useSelector((state) => state.eventCreated);
  const encryptedId = encryptId(event?.id);
  const decryptedId = decryptId(encryptedId);

  const proposal = useSelector((state) => state?.proposalCreated);
  const encryptedProposalId = encryptId(proposal?.id);
  const decryptedProposalId= decryptId(encryptedProposalId)
  const proposalId = (localStorage.getItem("proposalId"))


  console.log(encryptedProposalId);
  console.log(proposal);
  console.log(decryptedProposalId)
  // console.log(encryptedId);
  // console.log(decryptedId);

  const shareDetails = {
    title: event?.eventName,
    url: `/guestRegistration/${encryptedId}`,
    text: event?.eventTheme,
  };

  const shareProposal = {
    title: event?.eventName,
    url: `/generated-proposal/${encryptId(proposalId)}`,
    text: event?.eventTheme,
  };

  // const generatePdfFromElement = (elementId) => {
  //   const pdf = new jsPDF();
  
  //   return new Promise((resolve) => {
  //     html2canvas(document.getElementById(elementId)).then((canvas) => {
  //       const imgData = canvas.toDataURL("image/png");
  //       const imgWidth = 210; // A4 paper width in mm
  //       const imgHeight = (canvas.height * imgWidth) / canvas.width;
  
  //       pdf.addImage(imgData, "PNG", 0, 0, imgWidth, imgHeight);
  //       resolve(pdf.output("datauristring"));
  //     });
  //   });
  // };

  
  // const handleDownloadPdf = async () => {
  //   const pdf = new jsPDF();
  
  //   const page1Data = await generatePdfFromElement("page1");
  //   pdf.addPage();
  //   pdf.addImage(page1Data, "PNG", 0, 0);
  
    // const page2Data = await generatePdfFromElement("page2");
    // pdf.addPage();
    // pdf.addImage(page2Data, "PNG", 0, 0);
  
    // const page3Data = await generatePdfFromElement("page3");
    // pdf.addPage();
    // pdf.addImage(page3Data, "PNG", 0, 0);

    // const page4Data = await generatePdfFromElement("page4");
    // pdf.addPage();
    // pdf.addImage(page4Data, "PNG", 0, 0);

    // const page5Data = await generatePdfFromElement("page5");
    // pdf.addPage();
    // pdf.addImage(page5Data, "PNG", 0, 0);
  
  //   pdf.save("combined.pdf");
  // };
  

  return (
    <>
      <CreateEventTopBar />
      <SubmittedContainer id="page1">
        <AnimationContainer>
          <Lottie animationData={animationData} loop={true} />
        </AnimationContainer>

        {location.pathname === "/createEvent/submitted" ? (
          <BudgetInventorySubtitle
            style={{ marginBottom: "1rem", fontWeight: "600" }}
          >
            Event created successfully.
          </BudgetInventorySubtitle>
        ) : null}
        {location.pathname === "/create-proposal/generated" ? (
          <>
            <BudgetInventorySubtitle
              style={{
                marginBottom: "0.5rem",
                fontWeight: "600",
                textAlign: "center",
              }}
            >
              You have successfully generated a proposal.
            </BudgetInventorySubtitle>
            <BudgetInventorySubtitle
              style={{
                marginBottom: "1.5rem",
                fontWeight: "600",
                textAlign: "center",
              }}
            >
              Proceed to share with prospective sponsors.
            </BudgetInventorySubtitle>

            <ModalButtonContainer>
              <AlternativeButton2 >Download PDF</AlternativeButton2>
              <ModalPrimaryButton
                onClick={() => {
                  window.navigator.share(shareProposal);
                }}
              >
                Share proposal link
              </ModalPrimaryButton>
            </ModalButtonContainer>
          </>
        ) : null}

        {location.pathname === "/createEvent/submitted" ? (
          <SubmittedButtons>
            <AlternativeButton2
              onClick={() => {
                window.navigator.share(shareDetails);
              }}
            >
              Share event link
            </AlternativeButton2>
          </SubmittedButtons>
        ) : null}

        <ButtonContainer>
          {location.pathname === "/createEvent/submitted" ? (
            <AbsolutePrimaryButton onClick={() => navigate("/dashboard")}>
              Done
            </AbsolutePrimaryButton>
          ) : null}
          {location.pathname === "/create-proposal/generated" ? (
            <AbsolutePrimaryButton onClick={() => navigate("/event/proposal")}>
              Done
            </AbsolutePrimaryButton>
          ) : null}
        </ButtonContainer>
      </SubmittedContainer>
    </>
  );
};

export default Submitted;
