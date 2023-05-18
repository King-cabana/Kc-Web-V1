import styled from "styled-components";
import { Link } from "react-router-dom";

export const OverallContainer = styled.section`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0 2%;
`;

export const PopUpOverlay = styled.div`
  z-index: 99999;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: fixed;
  background: rgba(49, 49, 49, 0.8);
`;

// export const PopUpOptions = styled(PopUpComponent)`
//   margin-left: -4rem;
//   @media screen and (max-width: 960px) {
//     /* margin-left: -3rem; */
//   }
//   @media screen and (max-width: 769px) {
//     margin-left: -8rem;
//     width: 200px;
//   }
//   /* @media screen and (max-width: 650px) {
//     margin-left: -10rem;
//     /* width: 200px; */
//   }
//   @media screen and (max-width: 620px) {
//     /* margin-left: -15rem; */
//     /* width: 200px; */
//   }
// `;

export const PopUpComponent = styled.div`
  position: absolute;
  margin-top: 0.1rem;
  background-color: #fff;
  width: 200px;
  height: 150px;
  border: 1px solid rgba(0, 104, 255, 0.1);
  border-radius: 8px;
  padding: 0.5rem 0;
  display: flex;
  align-items: center;
  flex-direction: column;

  @media screen and (max-width: 769px) {
    width: 100%;
    height: 130px;
    margin-left: -1rem;
  }
  img {
    width: 15px;
    height: 20px;
    margin-bottom: 1rem;
    &:hover {
      cursor: pointer;
    }
  }

  p {
    font-weight: 400;
    font-size: 12px;
    line-height: 16px;
    color: #000000;
    text-align: center;
    margin-bottom: 1rem;

    @media screen and (max-width: 769px) {
      font-size: 10px;
      line-height: 12px;
    }
  }
`;

export const WelcomeContainer = styled.div`
  padding: 2rem 4rem;
  background-color: #fff;
  width: 100%;
  height: 100%;

  @media screen and (max-width: 769px) {
    padding: 1rem 0.5rem;
  }
`;

export const HeaderContainer = styled(WelcomeContainer)`
  padding: 0;
`;

export const WelcomeCenter = styled.div`
  width: 100%;
  display: flex;

  @media screen and (max-width: 960px) {
    justify-content: space-between;
    align-items: center;
  }
`;

export const HamburgerWrapper = styled.section`
  display: none;

  @media screen and (max-width: 960px) {
    display: block;
  }
`;

export const WelcomeText = styled.p`
  margin-top: 1rem;
  margin-bottom: 1rem;
  font-weight: ${(props) => (props.fontWeight ? props.fontWeight : "700")};
  font-size: 20px;
  line-height: 32px;
  color: #484848;

  @media screen and (max-width: 769px) {
    font-size: 16px;
    line-height: 24px;
    margin-top: 0.5rem;
    margin-bottom: 0.5rem;
  }
`;

export const ButtonLink = styled(Link)``;

export const ButtonsContainer = styled.div`
  width: 100%;
  margin-top: 0.5rem;
  display: flex;
  flex-direction: column;
  background-color: #fff;
  justify-content: flex-end;
  align-items: flex-end;

  @media screen and (max-width: 960px) {
    width: 100%;
    flex-direction: row;
    margin-top: 0;
  }
`;

export const Wrap = styled.section`
  @media screen and (max-width: 960px) {
    order: 2;
  }
`;

export const BioSection = styled.div`
  margin-bottom: 2rem;
  display: flex;
  justify-content: space-between;

  @media screen and (max-width: 960px) {
    flex-direction: column;
    margin-bottom: 0;
  }
`;

export const Bio = styled.section`
  color: #484848;
`;
export const Name = styled.h2`
  margin-bottom: 0.5rem;
  font-weight: 600;
  font-size: 18px;
  line-height: 28px;

  @media screen and (max-width: 960px) {
    margin-bottom: 0;
    font-size: 16px;
    line-height: 20px;
  }
`;

export const Text = styled.p`
  font-weight: 400;
  font-size: 14px;
  line-height: 20px;
  color: #484848;

  @media screen and (max-width: 960px) {
    font-size: 14px;
    width: 100%;
  }
`;

export const Location = styled(Text)`
  font-style: italic;

  @media screen and (max-width: 960px) {
    font-size: 12px;
    line-height: 16px;
  }
`;
export const Description = styled(Location)`
  margin-top: 0.5rem;
  font-size: 15px;
  font-style: normal;
  @media screen and (max-width: 960px) {
    font-size: 12px;
    margin-top: 0.2rem;
  }
`;

export const JointContainer = styled.div`
  z-index: 999999;
  position: relative;

  @media screen and (max-width: 960px) {
    width: 120px;
    /* z-index: -100; */
  }
`;

export const EditPen = styled.div`
  display: flex;
  justify-content: flex-end;
`;

export const AlternativeButton2 = styled.button`
  width: 140px;
  height: 45px;
  border-radius: 8px;
  background-color: transparent;
  color: ${(props) => (props.color ? props.color : "white")};
  border: 1.5px solid #ff2957;
  cursor: pointer;
  font-weight: ${(props) => props.fontWeight};
  font-size: 14px;

  @media screen and (max-width: 960px) {
    font-size: 10px;
    width: 90px;
    height: 30px;
    margin-right: 0;
  }
  &:hover {
    color: #ff2957;
    border: 1.5px solid #f4d5dc;
  }
  &:disabled {
    background-color: white;
    color: white;
    border: 1.5px solid rgba(255, 41, 87, 0.6);
  }
`;

export const CustomAlt = styled(AlternativeButton2)`
  margin-top: 1rem;
  @media screen and (max-width: 960px) {
    width: 100px;
  }
`;

export const PrimaryButton = styled.button`
  width: 140px;
  height: 45px;
  border-radius: 8px;
  background-color: #ff2957;
  color: white;
  border: 1px solid transparent;
  outline: none;
  cursor: pointer;
  font-weight: 600;
  font-size: 14px;

  @media screen and (max-width: 960px) {
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

export const PrimaryButton2 = styled.button`
  border-radius: 8px;
  background-color: #ff2957;
  color: white;
  border: 1px solid transparent;
  outline: none;
  cursor: pointer;
  font-weight: 600;
  height: 30px;
  width: 80px;
  font-size: 10px;
  margin-left: 1.5rem;
  font-weight: 600;
  align-self: center;

  @media screen and (max-width: 769px) {
    width: 90px;
    height: 30px;
  }
  @media screen and (max-width: 577px) {
    margin-left: 0;
    margin-top: 0.8rem;
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

export const EventReportContainer = styled.div`
  width: 100%;
  margin-top: 1.3rem;

  @media screen and (max-width: 960px) {
    display: flex;
    overflow-x: scroll;
    padding: 0.1rem;
    border-radius: 5px;
    gap: 20px;
  }
`;
export const InnerWrapper = styled.section`
  /* display: flex;
  justify-content: space-between; */
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 1rem;
  /* justify-content: center;
  align-items: center; */

  &:nth-child(1) {
    margin-bottom: 2rem;

    @media screen and (max-width: 960px) {
      margin-bottom: 0;
    }
  }

  @media screen and (max-width: 960px) {
    /* flex-direction: column; */
    grid-template-columns: 1fr 1fr;
  }
`;
export const InnerContainer = styled.div`
  /* width: 30%; */
  cursor: pointer;
  width: 100%;
  height: 110px;
  border-radius: 6px;
  padding: 10px 10px 0px 10px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-color: #fffdfd;
  border-bottom: 3px solid transparent;
  border-image: linear-gradient(to right, red, rgba(0, 0, 0, 0)) 1;

  @media screen and (max-width: 960px) {
    width: 380px;
    height: 150px;
    margin-bottom: 2rem;
  }
  @media screen and (max-width: 520px) {
    width: 250px;
  }
`;

export const Row1 = styled.section`
  display: flex;
  justify-content: space-between;
`;

export const Counter = styled.p`
  font-weight: 700;
  font-size: 20px;
  line-height: 30px;
`;

export const Select = styled.select`
  border: none;
  background-color: #fffdfd;
  font-weight: 400;
  font-size: 12px;
  line-height: 18px;
  color: #ff2957;
  height: 1.2rem;

  &:hover {
    cursor: pointer;
  }
`;

export const Option = styled.option`
  border: 2px solid yellow;
  font-weight: 400;
  font-size: 12px;
  line-height: 18px;
  color: #484848;
`;

export const ChecklistContainer = styled.div`
  width: 100%;
  margin-top: 2rem;
  margin-bottom: 3.5rem;
  border: 1px solid rgba(0, 104, 255, 0.1);
  border-radius: 8px;
  padding: 10px 25px 25px;
  color: #484848;

  @media screen and (max-width: 960px) {
    width: 100%;
  }
  @media screen and (max-width: 577px) {
    margin-bottom: 1rem;
  }
  @media screen and (max-width: 577px) {
    padding: 10px 10px 25px;
  }
`;

export const ChecklistHeading = styled.h2`
  font-size: 16px;
  font-weight: 500;
  line-height: 28px;

  @media screen and (max-width: 577px) {
    font-size: 14px;
    line-height: 24px;
  }
`;
export const ChecklistHeading2 = styled.h2`
  margin-bottom: 0.2rem;
  font-size: 15px;
  font-weight: 600;
  line-height: 26px;
  color: #ffbc15;

  @media screen and (max-width: 577px) {
    font-size: 13px;
    line-height: 22px;
  }
`;

export const ChecklistSubHeading = styled.div`
  font-size: 12px;
  font-weight: 400;
  line-height: 18px;

  @media screen and (max-width: 577px) {
    font-size: 11px;
  }
`;

export const ItemsContainer = styled.div`
  width: 100%;
  border-bottom: 1px solid rgba(0, 104, 255, 0.1);
  border-radius: 8px;
  padding: 10px 15px;
  color: #484848;
  display: flex;

  @media screen and (max-width: 577px) {
    flex-direction: column;
  }
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;

  @media screen and (max-width: 577px) {
    width: 100%;
  }
`;

export const ImagesContainer = styled.section`
  /* border: 2px solid green; */
  /* background-color: #ff2957; */
  width: 100%;
  /* height: 240px; */
  position: relative;
  top: 0;
  left: 0;
  border-radius: 10px;
`;

export const BackgroundPicture = styled.img`
  position: relative;
  top: 0;
  left: 0;
  border-radius: 10px;
  width: 100%;
  height: 240px;
  object-fit: cover;

  @media screen and (max-width: 960px) {
    height: 200px;
  }
  @media screen and (max-width: 769px) {
    height: 150px;
  }
  @media screen and (max-width: 577px) {
    height: 100px;
  }
`;

export const LogoPicture = styled.img`
  border: 7px solid #fff;
  width: 152px;
  height: 152px;
  border-radius: 50px;
  position: absolute;
  top: 150px;
  left: 60px;
  object-fit: cover;
  background-color: #f5f5f5;

  @media screen and (max-width: 960px) {
    top: 120px;
    height: 140px;
    width: 140px;
  }
  @media screen and (max-width: 769px) {
    border-radius: 30px;
    top: 90px;
    left: 20px;
    height: 110px;
    width: 110px;
  }
  @media screen and (max-width: 577px) {
    height: 80px;
    width: 80px;
    top: 60px;
    left: 15px;
  }
`;
