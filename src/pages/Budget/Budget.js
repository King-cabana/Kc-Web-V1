// import React, { useEffect, useState } from "react";
// import {
//   BudgetBody,
//   BudgetItem,
//   BudgetDraft,
//   BudgetHeader,
//   TextArea,
//   BudgetBox,
//   Input,
//   InputPrice,
//   Button,
//   Total,
//   Sum,
//   ButtonContainer,
//   OverflowContoller
// } from "./BudgetStyled.js";
// import { useNavigate } from "react-router-dom";
// import add from "./../../assets/images/add.svg";

// import click from "./../../assets/images/Click.svg";
// import {
//   AbsolutePrimaryButton,
//   AlternativeButton2,
// } from "../../components/buttons/Buttons.js";
// import { useDispatch } from "react-redux";
// import { addFields, editBudget} from "../../redux/slices/proposalSlice.js";
// import { useSelector } from "react-redux";

// // const Budget = ({ activeStep, setActiveStep }) => {
// //   const [budget, setBudget] = useState([]);
// //   const [values, setValues] = useState([]);
// //   const [totalCost, setTotalCost] = useState(0);
// //   const dispatch = useDispatch();
// //   const sendTotal =()=> {dispatch(addFields({name: "total", value: totalCost}))}
// //   const state = useSelector(state => state?.proposal?.budget)
// //   const totalState = useSelector(state => state?.proposal)
// //   console.log(state);
// //   console.log(totalState);

// //   const handleChange = (index, field, value) => {
// //     const updatedValues = [...values];
// //     updatedValues[index] = { ...updatedValues[index], [field]: value };
// //     if (updatedValues !== {}){
// //       dispatch(editBudget(updatedValues));
// //     };
// //     setValues(updatedValues);
// //     // dispatch(editBudget({ category: "budgetDetails", item: updatedArr }));
// //   };

// //   const handleDelete = (index) => {
// //     setBudget((prev) => prev.filter((_, i) => i !== index));
// //     setValues((prev) => prev.filter((_, i) => i !== index));
// //   };

// //   const handleClick = () => {
// //     const newBudgetItem = {
// //       item: "",
// //       description: "",
// //       cost: ""
// //     };
// //     if (newBudgetItem !== {}){
// //       setBudget((prev) => [...prev, newBudgetItem]);
// //       setValues((prev) => [...prev, newBudgetItem]);
// //       dispatch(editBudget((prev)=>[...prev, newBudgetItem]));
// //     };

// //     console.log(values); // Log the values to the console
// //   };

// //   const navigate = useNavigate();
// //   const navigateBack = () => {
// //     navigate("/");
// //   };

// //   const handleNext = () => {
// //     setActiveStep(activeStep + 1);
// //   };

// //   useEffect(() => {
// //     // Calculate the total cost whenever the values change
// //     const calculateTotalCost = () => {
// //       let sum = 0;
// //       values.forEach((item) => {
// //         const cost = parseFloat(item.cost);
// //         if (!isNaN(cost)) {
// //           sum += cost;
// //         }
// //       });
// //       setTotalCost(sum.toFixed(2)); // Round the total to 2 decimal places
// //     };

// //     calculateTotalCost();
// //   }, [values]);
// const Budget = ({ activeStep, setActiveStep }) => {
//   const [budget, setBudget] = useState([]);
//   const [totalCost, setTotalCost] = useState(0);
//   const dispatch = useDispatch();

//   const sendTotal =()=> {dispatch(addFields({name: "total", value: totalCost}))}
//   const state = useSelector((state) => state?.proposal?.budget);

//   const navigate = useNavigate();
//   const navigateBack = () => {
//     navigate("/");
//   };

//   const handleNext = () => {
//     setActiveStep(activeStep + 1);
//   };

//   const handleChange = (index, field, value) => {
//     const updatedBudget = [...budget];
//     updatedBudget[index] = { ...updatedBudget[index], [field]: value };
//     setBudget(updatedBudget);
//   };

//   const handleDelete = (index) => {
//     setBudget((prev) => prev.filter((_, i) => i !== index));
//   };

//   const handleClick = () => {
//     const newBudgetItem = {
//       item: "",
//       description: "",
//       cost: "",
//     };
//     setBudget((prev) => [...prev, newBudgetItem]);
//   };

//   useEffect(() => {
//     // Calculate the total cost whenever the budget changes
//     const calculateTotalCost = () => {
//       let sum = 0;
//       budget.forEach((item) => {
//         const cost = parseFloat(item.cost);
//         if (!isNaN(cost)) {
//           sum += cost;
//         }
//       });
//       setTotalCost(sum.toFixed(2)); // Round the total to 2 decimal places
//     };
//     console.log(budget);

//     calculateTotalCost();
//   }, [budget]);

//   return (
//     <>
//       <BudgetBody>
//         <BudgetDraft>
//           <h1>Budget Draft</h1>
//           <p>
//             Lorem ipsum dolor sit amet consectetur. Lorem quam congue mi tempus
//             diam aliquet ac odio tempus. Aliquam gravida pellentesque eu
//             integer.
//           </p>
//         </BudgetDraft>
//         <OverflowContoller>
//           <BudgetHeader>
//             <p style={{ width: "454px", margin: "0 40px" }}>Item</p>
//             <p style={{ width: "454px", margin: "0 30px" }}>Description</p>
//             <p style={{ width: "250px", margin: "0 20px" }}>Cost(Naira)</p>
//           </BudgetHeader>
//           <div>
//             {budget.map((item, index) => {
//               return (
//                 <BudgetBox key={index}>
//                   <img
//                     src={click}
//                     alt=""
//                     onClick={() => handleDelete(index)}
//                   />
//                   <Input
//                     placeholder="Food"
//                     value={state?.budgetDetails[index]?.item}
//                     onChange={(e) =>
//                       handleChange(index, "item", e.target.value)
//                     }
//                   />
//                   <TextArea
//                     placeholder="Finger Foods for 1000 students African dishes for VIP Guests"
//                     value={state?.budgetDetails[index]?.description}
//                     onChange={(e) =>
//                       handleChange(index, "description", e.target.value)
//                     }
//                   />
//                   <InputPrice
//                     placeholder="250.00"
//                     value={state?.budgetDetails[index]?.cost}
//                     onChange={(e) =>
//                       handleChange(index, "cost", e.target.value)
//                     }
//                   />
//                 </BudgetBox>
//               );
//             })}
//           </div>
//           <Button onClick={handleClick}>
//             <img src={add} alt="" />
//             Add
//           </Button>
//         </OverflowContoller>
//         <Total>
//           <p>Total</p>
//           <Sum onChange={sendTotal}>{totalCost}</Sum>
//         </Total>
//         <ButtonContainer style={{ margin: "0rem" }}>
//           <AlternativeButton2
//             onClick={navigateBack}
//             style={{
//               color: "#FF2957",
//               fontWeight: "600",
//               marginRight: "2rem",
//             }}
//           >
//             Back
//           </AlternativeButton2>
//           <AbsolutePrimaryButton onClick={handleNext}>
//             Save & Continue
//           </AbsolutePrimaryButton>
//         </ButtonContainer>
//       </BudgetBody>
//     </>
//   );
// };

// export default Budget;

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
    dispatch(addTotal({ value: totalCost }));
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

  useEffect(() => {
    const calculateTotalCost = () => {
      let sum = 0;
      budget.forEach((item) => {
        const cost = parseFloat(item.cost);
        if (!isNaN(cost)) {
          sum += cost;
        }
      });
      setTotalCost(sum.toFixed(2));
    };

    calculateTotalCost();
    localStorage.setItem("budget", JSON.stringify(budget));
  }, [budget]);
  console.log(budget);

  useEffect(() => {
    sendTotal();
  }, [totalCost]);

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
                    placeholder="Food"
                    value={item?.item}
                    onChange={(e) =>
                      handleChange(index, "item", e.target.value)
                    }
                  />
                  <TextArea
                    placeholder="Finger Foods for 1000 students African dishes for VIP Guests"
                    value={item?.description}
                    onChange={(e) =>
                      handleChange(index, "description", e.target.value)
                    }
                  />
                  <InputPrice
                    placeholder="250.00"
                    value={item?.cost}
                    onChange={(e) =>
                      handleChange(index, "cost", e.target.value)
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
          <Sum>{totalCost}</Sum>
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
