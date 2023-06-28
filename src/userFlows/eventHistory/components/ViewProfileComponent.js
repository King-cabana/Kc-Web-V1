import { BudgetInventorySubtitle } from "../../createProposal/budgetInventory/BudgetStyled";
import { Wrapper } from "../../guestRegistration/GuestRegistrationStyled";
import { IMG } from "./SingleEventHistoryStyled";
import kcLogo from "../../../assets/images/KCLogo.svg";

const ViewProfileComponent = ({ marginTop, gap, justifyContent, onClick }) => {
  return (
    <Wrapper
      cursor="pointer"
      justifycontent={justifyContent}
      gap={gap}
      onClick={onClick}
    >
      <IMG src={kcLogo} alt="King Cabana Logo" />
      <BudgetInventorySubtitle
        style={{
          textDecoration: "underline",
          color: "#FF2957",
          marginTop: marginTop,
        }}
      >
        view event organizer's profile
      </BudgetInventorySubtitle>
    </Wrapper>
  );
};

export default ViewProfileComponent;
