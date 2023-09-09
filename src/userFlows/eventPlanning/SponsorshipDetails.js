import { useEffect, useState } from "react";
import ReactLoading from "react-loading";
import axios from "axios";
import { formatHeader } from "../../utils";
import { PreviewLogoBg, ProposalInner, TableAndContentContainer, TableContainer, TableDataCell, TableHeaderCell, TableRow, UlInner } from "../createProposal/proposalPreview/ProposalPreviewCoverStyled";
import { API_URL_2 } from "../../redux/services/authService";
import { LoadingSection } from "./EventPlanningStyled";

const SponsorshipDetails = ({proposalId}) => {
  const [loading, setLoading] = useState(true);
  const [proposal, setProposal] = useState();
  console.log(proposal)
  console.log(proposalId[0]);

  useEffect(() => {
      const fetchGeneralProposal = async () => {
        try {
          const { data } = await axios.get(API_URL_2 + `general-proposals/${proposalId[0]}`);
          setProposal(data);
          console.log(data);
        } catch (error) {
          console.log(error);
        } finally {
          setLoading(false);
        }
      };
      if (typeof proposalId[0] === "number") {
        fetchGeneralProposal();
      };
  }, [proposalId[0]])
  return (
    <>
      {/* <div>Sponsorship Details</div> */}
      {loading ? (<LoadingSection style={{ width: "100vw" }}>
                    <ReactLoading type="spin" color="#FF2957" height={100} width={50} />
                  </LoadingSection>) : (
      <PreviewLogoBg style={{ height: "fit-content" }}>
            <ProposalInner style={{padding: "0rem"}}>
                <div style={{ marginTop: "0rem" }}>
                  <h3 style={{ color: "#484848" }}>Estimated Attendance</h3>
                  <p>{proposal?.estimatedAttendance ? proposal?.estimatedAttendance : "Estimated attendance"}</p>
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
                <h4 style={{ color: "#484848" }}>Benefits of sponsoring this event (Inventory)</h4>
                <div style={{ lineHeight: "2rem", marginTop: "1%" }}>
                  {proposal && proposal.takeInventory && Object.keys(proposal.takeInventory)?.map((key) => {
                    const value = proposal.takeInventory[key];
                    if (Array.isArray(value)) {
                      const formattedKey = formatHeader(key);
                      if (value?.length > 0) {
                      return (
                        <div key={key}>
                          <h4 style={{ color: "#484848" }}>{formattedKey}</h4>
                          <ul style={{ margin: "1% 2%" }}>
                            {value?.map((item) => (
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
                  ) : ("Potential Impact List")}
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
                      {proposal?.budget?.budgetDetails?.map((detail, index) => (
                        <TableRow key={index}>
                          <TableDataCell>{detail?.item}</TableDataCell>
                          <TableDataCell>{detail?.description}</TableDataCell>
                          <TableDataCell>{detail?.cost}</TableDataCell>
                        </TableRow>
                      ))}
                      <TableRow>
                        <TableDataCell></TableDataCell>
                        <TableDataCell>
                          <h4 style={{textDecoration: "none", color: "#484848"}}>Total</h4>
                        </TableDataCell>
                        <TableDataCell>{proposal?.budget?.total}</TableDataCell>
                      </TableRow>
                    </>
                  ) : ("Budget List")}
                </TableContainer>
              </TableAndContentContainer>
            </ProposalInner>
          </PreviewLogoBg>
      )}
    </>
  )
};

export default SponsorshipDetails;