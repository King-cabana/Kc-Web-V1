import React, { useState } from "react";
import {
  BudgetBody,
  BudgetItem,
  BudgetDraft,
  BudgetHeader,
  TextArea,
  Input,
  InputPrice,
  Click,
  Button,
  Total,
  Sum,
  ButtonContainer,
} from "./BudgetStyled.js";
import { useNavigate } from "react-router-dom";
import add from "./../../assets/images/add.svg";
import click from "./../../assets/images/Click.svg";
import {
  AbsolutePrimaryButton,
  AlternativeButton2,
} from "../../components/buttons/Buttons.js";

const Budget = ({ activeStep, setActiveStep }) => {
  const [firstCost, setFirstCost] = useState()
  const [budget, setBudget] = useState([]);
  const [total, setTotal] = useState(0);

  const handleChange = (index, value) => {
    const newBudget = [...budget];
    newBudget[index] = value;
    setBudget(newBudget);

    const sum = newBudget.reduce((accumulator, item) => {
      return accumulator + parseFloat(item || 0);
    }, 0);
    setTotal(sum.toFixed(2));
  };
  const firstCostChange = (value) => {
    const newBudget = [...budget, value];
    setBudget(newBudget);

    const sum = newBudget.reduce((accumulator, item) => {
      return accumulator + parseFloat(item || 0);
    }, 0);
    setTotal(sum.toFixed(2));
  };

  const handleClick = () => {
    setBudget((prev) => [...prev, ""]);
  };

  const navigate = useNavigate();

  const navigateBack = () => {
    navigate("/");
  };

  const handleNext = () => {
    setActiveStep(activeStep + 1);
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
        <BudgetItem>
          <Click>
            <img src={click} alt="" />
          </Click>
          <Input placeholder="Food" />
          <TextArea placeholder="Finger Foods for 1000 students African dishes for VIP Guests" />
          <InputPrice placeholder="250.00" 
          value={firstCost}
          onChange={(e) => firstCostChange(e.target.value)} />
        </BudgetItem>
        {budget.map((item, index) => (
          <BudgetItem key={index}>
            <Click>
              <img src={click} alt="" />
            </Click>
            <Input
              placeholder="Food"
             
            />
            <TextArea placeholder="Finger Foods for 1000 students African dishes for VIP Guests" />
            <InputPrice placeholder="250.00"
             value={item}
             onChange={(e) => handleChange(index, e.target.value)} />
          </BudgetItem>
        ))}
        <Button onClick={handleClick}>
          <img src={add} alt="" />
          Add
        </Button>
        <Total>
          <p>Total</p>
          <Sum>{total}</Sum>
        </Total>
        <ButtonContainer style={{ margin: "0rem" }}>
          <AlternativeButton2
            onClick={navigateBack}
            style={{ color: "#FF2957", fontWeight: "600", marginRight: "2rem" }}
          >
            Back
          </AlternativeButton2>
          <AbsolutePrimaryButton onClick={handleNext}>
            Save & Continue
          </AbsolutePrimaryButton>
        </ButtonContainer>
      </BudgetBody>
    </>
  );
};

export default Budget;
