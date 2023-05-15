import styled from "styled-components";
import { Link } from "react-router-dom";

export const OverallContainer = styled.section`
  width: 100%;
  height: 100vh;
  min-height: 100%;
  padding: 0.5rem 2rem;
  margin-top: 1rem;

  @media screen and (max-width: 960px) {
    padding: 0rem;
  }
`;

export const NoEventContainer = styled.div`
  /* padding: 2rem; */
  background-color: #fff;
  width: 100%;
  height: 100%;

  @media screen and (max-width: 960px) {
    padding: 2rem 1rem;
  }
`;

export const WelcomeHeader = styled.section`
  display: flex;
  align-items: center;
  margin-bottom: 2rem;
  cursor: pointer;
`;

export const Txt = styled.span`
  font-size: 20px;
  line-height: 32px;
  color: #484848;
  font-weight: ${(props) => (props.fontWeight ? props.fontWeight : "700")};
  color: ${(props) => (props.color ? props.color : "#484848")};
  margin-right: 0.5rem;

  @media screen and (max-width: 769px) {
    font-size: 16px;
    line-height: 18px;
  }
  @media screen and (max-width: 360px) {
    font-size: 12px;
    line-height: 13px;
  }
`;

export const NoEventCenter = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 57%;

  @media screen and (max-width: 960px) {
    width: 100%;
  }
`;

export const NoContentText = styled.p`
  font-weight: 400;
  font-size: 16px;
  line-height: 28px;
  color: #484848;
  margin-top: 2rem;
  margin-bottom: 3.2rem;
  text-align: center;

  @media screen and (max-width: 769px) {
    font-size: 12px;
    line-height: 18px;
  }
`;

export const LottieWrapper = styled.section`
  @media screen and (max-width: 769px) {
    width: 60px;
    height: 60px;
  }
`;

export const ButtonLink = styled(Link)`
  text-decoration: none;
  /* @media screen and (max-width: 769px) {
    display: flex;
    align-items: center;
    justify-content: center;
  } */
`;

export const PrimaryButton = styled.button`
  width: 150px;
  height: 50px;
  border-radius: 8px;
  background-color: #ff2957;
  color: white;
  border: 1px solid transparent;
  outline: none;
  cursor: pointer;
  font-weight: 600;

  @media screen and (max-width: 769px) {
    font-size: 10px;
    width: 90px;
    height: 30px;
  }

  &:hover {
    background-color: rgba(255, 41, 87, 0.8);
    color: white;
  }

  &:disabled {
    background-color: rgba(255, 41, 87, 0.3);
    color: rgba(255, 255, 255, 0.3);
  }
`;
