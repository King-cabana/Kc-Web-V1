import styled from "styled-components";
import { Link } from "react-router-dom";

export const PopUpOverlay = styled.div`
  z-index: 9999;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: fixed;
  background: rgba(49, 49, 49, 0.8);
`;

export const PopUpComponent = styled.div`
  z-index: 99999;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: #fff;
  width: 25%;
  height: 30%;
  border: 1px solid rgba(0, 104, 255, 0.1);
  border-radius: 8px;
  padding: 1rem;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  flex-direction: column;

  @media screen and (max-width: 1400px) {
    width: 50%;
    height: 40%;
  }
  @media screen and (max-width: 960px) {
    width: 40%;
    /*height: 30%; */
  }
  @media screen and (max-width: 769px) {
    /* width: 40%;
    padding: none;*/
    height: 25%;
  }
  @media screen and (max-width: 670px) {
    width: 70%;
  }
  @media screen and (max-width: 375px) {
    width: 80%;
  }
  @media screen and (max-width: 320px) {
    width: 100%;
  }
`;

export const ModalText = styled.p`
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  color: #000000;
  text-align: center;

  @media screen and (max-width: 769px) {
    font-size: 12px;
    line-height: 16px;
  }
`;

export const InventorySection = styled.section`
  margin-top: 0.5rem;
`;

export const CheckboxWrapper = styled.div`
  margin-bottom: 1.5rem;
`;

export const Check = styled.div`
  margin-bottom: 5px;
  border: 1px solid rgba(0, 104, 255, 0.1);
  border-radius: 10px;
  padding: 8px 20px;
  display: flex;
  align-items: center;
  cursor: pointer;

  @media screen and (max-width: 960px) {
    padding: 5px 10px;
  }
`;

export const CheckDetails = styled.details`
  margin-bottom: 0.5rem;

  @media screen and (max-width: 960px) {
    margin-bottom: 0;
  }
`;

export const CheckSummary = styled.summary`
  border: 1px solid rgba(0, 104, 255, 0.1);
  background-color: rgba(0, 104, 255, 0.1);
  margin-bottom: 0.1rem;
  border-radius: 10px;
  padding: 8px;
  padding-right: 40px;
  font-weight: 400;
  font-size: 18px;
  line-height: 25px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  cursor: pointer;
  color: black;

  @media screen and (max-width: 960px) {
    font-size: 14px;
    line-height: 20px;
    padding: 5px 10px;
    padding-right: 20px;
  }
`;

export const CheckInput = styled.input`
  -ms-transform: scale(1.2); /* IE */
  -moz-transform: scale(1.2); /* FF */
  -webkit-transform: scale(1.2); /* Safari and Chrome */
  -o-transform: scale(1.2); /* Opera */
  transform: scale(1.2);
  padding: 10px;

  @media screen and (max-width: 960px) {
    -ms-transform: scale(1); /* IE */
    -moz-transform: scale(1); /* FF */
    -webkit-transform: scale(1); /* Safari and Chrome */
    -o-transform: scale(1); /* Opera */
    transform: scale(1);
  }
`;

export const CheckLabel = styled.label`
  font-weight: 400;
  font-size: 18px;
  line-height: 25px;
  margin-left: 1.2rem;

  @media screen and (max-width: 960px) {
    font-size: 12px;
    line-height: 18px;
    margin-left: 0.5rem;
  }
`;

export const BtnHolderLink = styled(Link)`
  text-decoration: none;
  outline: none;
`;

export const ModalButtonContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
`;
