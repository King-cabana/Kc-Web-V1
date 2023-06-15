import React, { useState } from "react";
import {
  BudgetBody,
  BudgetItem,
  BudgetDraft,
  BudgetHeader,
  TextArea,
  BudgetBox,
  Input,
  InputPrice,
  Button,
  Total,
  Sum,
  ButtonContainer,
  Scrollable,
  ScrollableContainer
} from "./BudgetStyled.js";
import { useNavigate } from "react-router-dom";
import add from "./../../assets/images/add.svg";

import click from "./../../assets/images/Click.svg";
import {
  AbsolutePrimaryButton,
  AlternativeButton2,
} from "../../components/buttons/Buttons.js";

const Budget = () => {
  const [budget, setBudget] = useState([]);
  const inputs = (
    <BudgetItem>  
    <Input placeholder="Food" />
      <TextArea placeholder="Finger Foods for 1000 students African dishes for VIP Guests" />
      <InputPrice placeholder="250.00" />
    </BudgetItem>
  );
  const handleClick = () => {
    setBudget((prev) => [...prev, inputs]);
  };

  const navigate = useNavigate();
  const navigateBack = () => {
    navigate("");
  };
  const navigateNext = () => {
    navigate("");
  };

  const handleDelete = (index) => {
    setBudget((prev) => prev.filter((_, i) => i !== index));
  };
  

  return (
    <>
      <BudgetBody>
        <BudgetDraft>
          <h1>Budget Draft</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur. Lorem quam congue mi tempus
            diam aliquet ac odio tempus. Aliquam gravida pellentesque eu
            integer.
          </p>
        </BudgetDraft>
        <BudgetHeader>
          <p>Item</p>
          <p>Description</p>
          <p>Cost(Naira)</p>
        </BudgetHeader>
      <div style={{overflowX: "scroll"}}>
        <div>
          {budget.map((item, index) => {
            return <BudgetBox>
                <img src={click} alt="" onClick={() => handleDelete(index)} />
                <Input placeholder="Food" />
                <TextArea placeholder="Finger Foods for 1000 students African dishes for VIP Guests" />
                <InputPrice placeholder="250.00" />
            </BudgetBox>
          })}
          </div>
        <Button onClick={handleClick}>
          <img src={add} alt="" />
          Add
        </Button>
        </div>
        <Total>
          <p>Total</p>
          <Sum>250.00</Sum>
        </Total>
        <ButtonContainer style={{ margin: "0rem" }}>
          <AlternativeButton2
            onClick={navigateBack}
            style={{ color: "#FF2957", fontWeight: "600", marginRight: "2rem" }}
          >
            Back
          </AlternativeButton2>
          <AbsolutePrimaryButton onClick={navigateNext}>
            Save & Continue
          </AbsolutePrimaryButton>
        </ButtonContainer>
      </BudgetBody>
    </>
  );
};

export default Budget;
