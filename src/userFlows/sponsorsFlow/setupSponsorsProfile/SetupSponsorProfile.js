import { useState } from "react"
import { KCLogo, WrapLogo } from "../../../pages/profile/EditOrganiserProfile/EditOrganiserProfileStyled";
import { TheContainer } from "./SetupSponsorsProfileStyled";
import kingCabanaLogo from "../../../assets/images/kingCabanaLogo.svg";
import { KBDisplayXs } from "../../../components/fonts/Fonts";
import SetupInputs from "./SetupInputs";
import ListHandler from "./ListHandler";
import SponsorBudgetRange from "./SponsorBudgetRange";
import SponsorImages from "./SponsorImages";

const SetupSponsorsProfile = () => {
  const [state, setState] = useState({productOffering: [], uniqueSellingPoint: [], projectExecuted: [], csrInterest: []});
  console.log(state);

  const otherFields = (e) => {
    setState((prevState)=>({...prevState, [e.target.name]: e.target.value }));
    console.log(state);
  };
  return (
    <>
      <TheContainer>
        <section>
          <WrapLogo>
            <KCLogo src={kingCabanaLogo} alt="king cabana" />
          </WrapLogo>
          <article>
            <KBDisplayXs fontWeight="700" style={{marginBottom: "0.5rem"}}>
              Set up your profile as a Sponsor
            </KBDisplayXs>
            <SetupInputs state={state} setState={setState} handleChange={otherFields} />
            <ListHandler label="Product Offering"
            items={state?.productOffering} maxItems={5}
            setItems={(newItems) => setState((prevState) => ({
                ...prevState,
                productOffering: newItems,
              }))}
            description="List of products or services you are offering"
          />
            <ListHandler label="Unique Selling Point"
            items={state?.uniqueSellingPoint} maxItems={5}
            setItems={(newItems) => setState((prevState) => ({
                ...prevState,
                uniqueSellingPoint: newItems,
              }))}
            description="List unique attributes of your product that distinguishes it from others"
          />
            <ListHandler label="Project Executed"
            items={state?.projectExecuted} maxItems={5}
            setItems={(newItems) => setState((prevState) => ({
                ...prevState,
                projectExecuted: newItems,
              }))}
            description="List projects you had sponsors in the past"
          />
            <ListHandler label="CSR Interests"
            items={state?.csrInterest} maxItems={5}
            setItems={(newItems) => setState((prevState) => ({
                ...prevState,
                csrInterest: newItems,
              }))}
              description="List Corporate Social Responsibility initiatives"
          />
          <SponsorBudgetRange state={state} handleChange={otherFields}/>
          <SponsorImages state={state} setState={setState} />
          </article>
        </section>
      </TheContainer>
    </>
  )
};

export default SetupSponsorsProfile;
