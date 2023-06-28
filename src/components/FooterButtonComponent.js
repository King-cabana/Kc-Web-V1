import { ButtonContainer } from "../userFlows/createProposal/budgetInventory/BudgetStyled";
import { AbsolutePrimaryButton, AlternativeButton2 } from "./buttons/button";

const FooterButtonComponent = ({
  marginright = "2rem",
  fontweight,
  onClickWhiteBtn,
  onClickRedBtn,
  disabledWhiteBtn,
  disabledRedBtn,
  whiteBtnText,
  redBtnText,
}) => {
  return (
    <>
      <ButtonContainer style={{ margin: "0rem" }}>
        {whiteBtnText && (
          <AlternativeButton2
            onClick={onClickWhiteBtn}
            marginright={marginright}
            fontweight={fontweight}
            disabled={disabledWhiteBtn}
          >
            {whiteBtnText}
          </AlternativeButton2>
        )}

        {redBtnText && (
          <AbsolutePrimaryButton
            onClick={onClickRedBtn}
            disabled={disabledRedBtn}
          >
            {redBtnText}
          </AbsolutePrimaryButton>
        )}
      </ButtonContainer>
    </>
  );
};

export default FooterButtonComponent;
