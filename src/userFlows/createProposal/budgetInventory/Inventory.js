import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { editInventoryCheckbox } from "../../../redux/slices/proposalSlice";
import {
  BudgetInventoryContainer,
  BudgetInventoryHeader,
  BudgetTitle1,
  BudgetTitle2,
  BudgetInventorySubtitle,
  BudgetSection,
  BudgetUpload,
  BudgetSubtitle,
  InventoryPopUpTitle,
  ButtonContainer,
} from "./BudgetStyled";
import {
  InventorySection,
  CheckboxWrapper,
  Check,
  CheckInput,
  CheckLabel,
  CheckDivWrap,
  CheckDiv,
  PopUpOverlay,
  InventoryPopUp,
  ButtonDiv,
  InventoryProgressContainer,
} from "./InventoryStyled";
import { BsChevronDown } from "react-icons/bs";
import { inventoryData } from "./InventoryData";
import { ViewButton } from "../../eventPlanning/EventPlanningStyled";
import { AiOutlineCloseCircle } from "react-icons/ai";
import { AbsolutePrimaryButton, AlternativeButton2 } from "../../../components/buttons/Buttons";

const Inventory = ({ padding, activeStep, setActiveStep }) => {
  const dispatch = useDispatch();
  const state = useSelector((state) => state?.proposal?.takeInventory);
  const [modal, setModal] = useState(false);
  const [selectedInventoryIndex, setSelectedInventoryIndex] = useState(null);

  console.log(state)

  const toggleModal = () => {
    setModal(!modal);
  };

  const handleInventoryClick = (index) => {
    setSelectedInventoryIndex(index);
    toggleModal();
  };

  const handleNextInventory = () => {
    setSelectedInventoryIndex((prevIndex) => prevIndex + 1);
  };

  const handlePreviousInventory = () => {
    setSelectedInventoryIndex((prevIndex) => prevIndex - 1);
  };

  const handleNext = () => {
    setActiveStep(activeStep + 1);
  };

  const handlePrevious = () => {
    setActiveStep(activeStep - 1);
  };

  const handleCheckboxChange = (e) => {
    const { name, value, checked } = e.target;
    const arr = state?.[name] || [];
    const updatedArr = checked ? [...arr, value] : arr?.filter((item) => item !== value);
    dispatch(editInventoryCheckbox({ category: name, item: updatedArr }));
  };

  const showModal = !modal && "notShown";

  return (
    <>
      {modal && (
        <PopUpOverlay
          style={{ background: "rgba(246, 233, 236, 0.8)" }}
          onClick={toggleModal}
        />
      )}
      <div className={`${showModal}`}></div>
      <BudgetInventoryContainer style={{ padding: padding }}>
        <BudgetInventoryHeader>
          <BudgetTitle1>Budget & Take Inventory</BudgetTitle1>
          <BudgetInventorySubtitle>
            In order to capture the range of tangible benefits your organization has to offer, you need to prepare an inventory of your assets.
          </BudgetInventorySubtitle>
        </BudgetInventoryHeader>
        <BudgetSection>
          <BudgetTitle2 style={{ marginTop: "3%" }}>Take Inventory</BudgetTitle2>
          <BudgetUpload>
            <BudgetSubtitle style={{ fontWeight: "400" }}>
              Add and make a list of every promotional and marketing opportunity that could possibly be of value to a potential sponsor(s)
            </BudgetSubtitle>
            <InventorySection>
              {inventoryData?.map((inventory, index) => (
                <CheckDivWrap key={index}>
                  <CheckDiv onClick={() => handleInventoryClick(index)}>
                    {inventory?.title} <BsChevronDown />
                  </CheckDiv>
                  <div className={`${showModal}`}>
                    {selectedInventoryIndex === index && (
                      <InventoryPopUp style={{ height: "auto" }}>
                        <InventoryProgressContainer>
                          <input
                            type="range"
                            min="0"
                            max={inventoryData?.length - 1}
                            value={selectedInventoryIndex}
                            style={{ width: "90%" }}
                            readOnly
                          />
                          <AiOutlineCloseCircle
                            size="1.5rem"
                            onClick={toggleModal}
                            cursor="pointer"
                          />
                        </InventoryProgressContainer>
                        <div style={{ marginTop: "1rem" }}>
                          {inventory?.gamificication
                            ?.split(".")
                            ?.map((part, index) => (
                              <BudgetTitle2
                                key={index}
                                style={{ textAlign: "center" }}
                              >
                                {part}.
                                <br />
                              </BudgetTitle2>
                            ))}
                        </div>
                        <InventoryPopUpTitle style={{ marginTop: "1rem" }}>
                          {inventory?.title}
                        </InventoryPopUpTitle>
                        <BudgetInventorySubtitle
                          style={{ textAlign: "center", marginTop: "0.5rem" }}
                        >
                          {inventory?.summary}
                        </BudgetInventorySubtitle>
                        <CheckboxWrapper
                          style={{ margin: "1rem 0rem", width: "100%" }}
                        >
                          {inventory?.items.map((item, itemIndex) => (
                            <Check key={itemIndex}>
                              <CheckInput
                                type="checkbox"
                                value={item}
                                name={inventory?.inventoryName}
                                id={itemIndex}
                                checked={state?.[inventory?.inventoryName]?.includes(item)}
                                onChange={handleCheckboxChange}
                              />
                              <CheckLabel htmlFor={itemIndex}>
                                {item}
                              </CheckLabel>
                            </Check>
                          ))}
                        </CheckboxWrapper>
                        <ButtonDiv>
                          {index === 0 ? (
                            ""
                          ) : (
                            <ViewButton onClick={handlePreviousInventory}>
                              Back
                            </ViewButton>
                          )}
                          {inventory?.title === "Cause Tie-in" ? (
                            <ViewButton
                              style={{
                                backgroundColor: "#ff2957",
                                color: "#fff",
                              }}
                              onClick={handleNext}
                            >
                              Save & Continue
                            </ViewButton>
                          ) : (
                            <ViewButton
                              style={{
                                backgroundColor: "#ff2957",
                                color: "#fff",
                              }}
                              onClick={handleNextInventory}
                            >
                              Next
                            </ViewButton>
                          )}
                        </ButtonDiv>
                      </InventoryPopUp>
                    )}
                  </div>
                </CheckDivWrap>
              ))}
            </InventorySection>
          </BudgetUpload>
        </BudgetSection>
      </BudgetInventoryContainer>
      <ButtonContainer style={{ margin: "0rem" }}>
        <AlternativeButton2 onClick={handlePrevious} style={{ color: "#FF2957", fontWeight: "600", marginRight: "2rem" }}>Back</AlternativeButton2>
        <AbsolutePrimaryButton onClick={() => handleInventoryClick(0)}>Continue</AbsolutePrimaryButton>
      </ButtonContainer>
    </>
  );
};

export default Inventory;
