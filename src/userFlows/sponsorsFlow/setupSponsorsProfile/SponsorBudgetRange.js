import { KBTextXs } from "../../../components/fonts/Fonts";
import { handlePaste, preventNegativeValues } from "../../../utils";
import { Input, InputText } from "../../createEvent/FirstCreateEventStyled";
import { SponsorFromTo } from "./SetupSponsorsProfileStyled";

const SponsorBudgetRange = ({ state, handleChange }) => {
  return (
    <>
      <InputText>Budget Range (in Naira)</InputText>
      <SponsorFromTo>
        <div style={{width: "100%"}}>
          <KBTextXs>From</KBTextXs>
          <Input
            type="number"
            placeholder="From: 0.00"
            name="budgetFrom"
            onChange={handleChange}
            defaultValue={state?.budgetFrom}
            min="0"
            onKeyDown={preventNegativeValues}
            onPaste={handlePaste}
          />
        </div>
        <div style={{width: "100%"}}>
          <KBTextXs>To</KBTextXs>
          <Input
            type="number"
            placeholder="To: 0.00"
            name="budgetTo"
            onChange={handleChange}
            defaultValue={state?.budgetTo}
            min="0"
            onKeyDown={preventNegativeValues}
            onPaste={handlePaste}
          />
        </div>
      </SponsorFromTo>
    </>
  )
};

export default SponsorBudgetRange;