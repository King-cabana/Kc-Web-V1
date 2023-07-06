import React, { useEffect, useState } from "react";
import {
  BudgetBody,
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
  OverflowContoller,
} from "./BudgetStyled.js";
import { useNavigate } from "react-router-dom";
import add from "./../../assets/images/add.svg";

import click from "./../../assets/images/Click.svg";
import {
  AbsolutePrimaryButton,
  AlternativeButton2,
} from "../../components/buttons/Buttons.js";
import { useDispatch } from "react-redux";
import { addTotal, editBudget } from "../../redux/slices/proposalSlice.js";
import { useSelector } from "react-redux";

const Budget = ({ activeStep, setActiveStep }) => {
  const [budget, setBudget] = useState(() => {
    // Retrieve budget from localStorage if it exists, otherwise initialize as an empty array
    const storedBudget = localStorage.getItem("budget");
    return storedBudget ? JSON.parse(storedBudget) : [];
  });
  const [totalCost, setTotalCost] = useState(0);
  const dispatch = useDispatch();
  const state = useSelector((state) => state?.proposal);
  console.log(state);

  const sendTotal = () => {
    dispatch(addTotal({ value: formatNumberWithCommas(totalCost)}));
  };

  const navigate = useNavigate();
  const navigateBack = () => {
    navigate("/event/proposal");
  };

  const handleNext = () => {
    setActiveStep(activeStep + 1);
  };

  const handleChange = (index, field, value) => {
    const updatedBudget = [...budget];
    updatedBudget[index] = { ...updatedBudget[index], [field]: value };
  
    if (field === "cost") {
      updatedBudget[index].cost = formatCost(value); // Format the cost value with commas
    }
  
    setBudget(updatedBudget);
    dispatch(editBudget({ category: index, item: updatedBudget[index] }));
  };
  

  const handleDelete = (index) => {
    setBudget((prev) => prev.filter((_, i) => i !== index));
  };

  const handleClick = () => {
    const newBudgetItem = {
      item: "",
      description: "",
      cost: "",
    };
    setBudget((prev) => [...prev, newBudgetItem]);
  };

  const formatCost = (value) => {
    const unformattedValue = value.replace(/,/g, "");
    const floatValue = parseFloat(unformattedValue.replace(/[^\d.-]/g, ""));
  
    if (isNaN(floatValue)) return ""; 
  
    return new Intl.NumberFormat().format(floatValue);
  };

  useEffect(() => {
    const calculateTotalCost = () => {
      let sum = 0;
      budget.forEach((item) => {
        const cost = parseFloat(item.cost.replace(/,/g, "")); 
        if (!isNaN(cost)) {
          sum += cost;
        }
      });
      setTotalCost(sum.toFixed(2));
    };
  
    calculateTotalCost();
    localStorage.setItem("budget", JSON.stringify(budget));
  }, [budget]);
  

  useEffect(() => {
    sendTotal();
  }, [totalCost]);

  const formatNumberWithCommas = (number) => {
    return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
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
        <OverflowContoller>
          <BudgetHeader>
            <p style={{ width: "454px", margin: "0 40px" }}>Item</p>
            <p style={{ width: "454px", margin: "0 30px" }}>Description</p>
            <p style={{ width: "250px", margin: "0 20px" }}>Cost(Naira)</p>
          </BudgetHeader>
          <div>
            {budget?.map((item, index) => {
              return (
                <BudgetBox key={index}>
                  <img src={click} alt="" onClick={() => handleDelete(index)} />
                  <Input
                    placeholder="Item, e.g:Food, Venue, Decoration, etc."
                    value={item?.item}
                    onChange={(e) =>
                      handleChange(index, "item", e.target.value)
                    }
                  />
                  <TextArea
                    placeholder="Add more details about aforementioned Item"
                    value={item?.description}
                    onChange={(e) =>
                      handleChange(index, "description", e.target.value)
                    }
                  />
                  <InputPrice
                    placeholder="Amount"
                    value={item?.cost}
                    onChange={(e) =>
                      handleChange(index, "cost", e.target.value)
                    }
                    onBlur={(e) =>
                      handleChange(index, "cost", formatCost(e.target.value))
                    }
                  />
                </BudgetBox>
              );
            })}
          </div>
          <Button onClick={handleClick}>
            <img src={add} alt="" />
            Add
          </Button>
        </OverflowContoller>
        <Total>
          <p>Total</p>
          <Sum>{formatNumberWithCommas(totalCost)}</Sum>
        </Total>
        <ButtonContainer style={{ margin: "0rem" }}>
          <AlternativeButton2
            onClick={navigateBack}
            style={{
              color: "#FF2957",
              fontWeight: "600",
              marginRight: "2rem",
            }}
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
