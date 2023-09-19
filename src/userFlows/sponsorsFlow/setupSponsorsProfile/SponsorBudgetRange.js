import { KBTextXs } from "../../../components/fonts/Fonts";
import { handlePaste, preventNegativeValues } from "../../../utils";
import { Input, InputText } from "../../createEvent/FirstCreateEventStyled";
import { SponsorFromTo } from "./SetupSponsorsProfileStyled";

const SponsorBudgetRange = ({ state, handleChange }) => {
  return (
    <>
      <InputText>Budget range to sponsor event (in Naira)</InputText>
      <SponsorFromTo>
        <div style={{width: "100%"}}>
          <KBTextXs>From</KBTextXs>
          <Input
            type="number"
            placeholder="From: 0.00"
            name="budgetRangeFrom"
            onChange={handleChange}
            defaultValue={state?.budgetRangeFrom}
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
            name="budgetRangeTo"
            onChange={handleChange}
            defaultValue={state?.budgetRangeTo}
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