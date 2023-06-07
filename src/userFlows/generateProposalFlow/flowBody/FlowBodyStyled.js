import styled from "styled-components";
import Background from "../../../assets/images/budgetBackground.jpg";

export const StepLabel = styled.span`
  color: #0068ff;
`;

export const WavyBackground = styled.div`
  width: 100%;
  heigth: 100%;
  background-repeat: no-repeat;
  background: url(${Background});
  background-size: cover;
  background-repeat: no-repeat;
  height: max-content;
  padding: 1rem 2rem;
  padding-bottom: 10%;

  @media screen and (max-width: 769px) {
    padding: 1rem;
    padding-bottom: 20%;
  }
`;

export const HeaderTextHolder = styled.div`
  width: 100;
  display: flex;
  padding: 0 3%;
`;

export const ProgressBarBody = styled.div`
  width: 100%;
  display: flex;
  padding: 0 3%;
  justify-content: space-evenly;
  align-items: center;
`;

export const EventCaretHolder = styled.div`
  color: #ff2957;
  width: fit-content;
  height: fit-content;
  gap: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;
