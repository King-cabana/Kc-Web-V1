import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
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
import "../../../App.css";
import "../../../modal.css";
import { BsChevronDown } from "react-icons/bs";
import { inventoryData } from "./InventoryData";
import { ViewButton } from "../../eventPlanning/EventPlanningStyled";
import { AiOutlineCloseCircle } from "react-icons/ai";

const Inventory = ({ padding }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const dispatch = useDispatch();
  const state = useSelector((state) => state.proposal);
  const [modal, setModal] = useState(false);
  const [selectedInventoryIndex, setSelectedInventoryIndex] = useState(null);
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
  // Modal Contitions
  if (modal) {
    document.body.classList.add("active-modal");
  } else {
    document.body.classList.remove("active-modal");
  }
  const showModal = !modal && "notShown";

  const handleCheckboxChange = (e) => {
    const { name, value, checked } = e.target;
    const arr = state[name];
    const updatedArr = checked
      ? [...arr, value]
      : arr.filter((item) => item !== value);
    console.log(updatedArr);
    dispatch(editInventoryCheckbox({ category: name, item: updatedArr }));
    console.log(state);
  };
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
        {location.pathname === "/eventPlanPreview" ? null : (
          <BudgetInventoryHeader>
            <BudgetTitle1>Budget & Take Inventory</BudgetTitle1>
            <BudgetInventorySubtitle>
              In order to capture the range of tangible benefits your
              organization has to offer, you need to prepare an inventory of
              your assets.
            </BudgetInventorySubtitle>
          </BudgetInventoryHeader>
        )}

        <BudgetSection style={{ height: "100%" }}>
          <BudgetTitle2>Take Inventory</BudgetTitle2>
          <BudgetUpload>
            <BudgetSubtitle style={{ fontWeight: "400" }}>
              Add and make a list of every promotional and marketing opportunity
              that could possibly be of value to a potential sponsor(s)
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
                          {inventory.items.map((item, itemIndex) => (
                            <Check key={itemIndex}>
                              <CheckInput
                                type="checkbox"
                                value={item}
                                name={inventory?.inventoryName}
                                id={itemIndex}
                                checked={
                                  state?.[inventory?.inventoryName]?.includes(
                                    item
                                  )
                                    ? true
                                    : false
                                }
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
    </>
  );
};

export default Inventory;
