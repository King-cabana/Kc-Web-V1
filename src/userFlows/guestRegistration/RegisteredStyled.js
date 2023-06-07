import styled from "styled-components";
import { BudgetInventorySubtitle } from "../createProposal/budgetInventory/BudgetStyled";

export const Paragraph = styled(BudgetInventorySubtitle)`
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  margin-bottom: 1rem;
  margin-top: 0px;

  @media screen and (max-width: 960px) {
    margin-bottom: 0.5rem;
    margin-top: 0px;
  }
`;
