import {
  BudgetInventorySubtitle,
  BudgetTitle1,
  BudgetTitle2,
} from "../userFlows/createProposal/budgetInventory/BudgetStyled";
import { Wrapper } from "../userFlows/guestRegistration/GuestRegistrationStyled";

const IconName = ({ icon, title, details, marginbottom, gap, titleLg }) => {
  return (
    <>
      <Wrapper gap={gap}>
        {icon}
        {titleLg && <BudgetTitle1>{titleLg}</BudgetTitle1>}
        {title && <BudgetTitle2>{title}</BudgetTitle2>}
      </Wrapper>
      <BudgetInventorySubtitle marginbottom={marginbottom}>
        {details}
      </BudgetInventorySubtitle>
    </>
  );
};

export default IconName;
