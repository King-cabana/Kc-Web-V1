import styled from "styled-components";
import { Link } from "react-router-dom";

export const TopBarContainer = styled.div`
  width: 100%;
  height: 62px;
  display: flex;
  padding: 0 2%;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid #ff2957;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1;
  background-color: white;

  @media screen and (max-width: 480px) {
    z-index: 9999999;
    width: 100%;
  }
`;

export const TopBarLogo = styled.div`
  height: inherit;
  width: 12%;
  display: flex;
  justify-content: center;
  align-items: center;

  @media screen and (max-width: 480px) {
    /* width: 20%; */
    img {
      width: 30px;
      height: 30px;
    }
  }
`;

export const TopBarItemHolder = styled.div`
  height: inherit;
  width: 25%;
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media screen and (max-width: 480px) {
    width: 40%;
  }
`;

export const ItemsHolder = styled.div`
  display: flex;
  height: 6vh;
  width: 304px;
  justify-content: center;
  align-items: center;

  @media screen and (max-width: 480px) {
    justify-content: space-between;
  }
`;

export const ItemsHolderInner = styled.div`
  height: inherit;
  width: inherit;
  display: flex;
  justify-content: space-around;
  align-items: center;

  @media screen and (max-width: 480px) {
    /* width: inherit; */
  }

  @media screen and (min-width: 481px) and (max-width: 960px) {
    width: 70%;
  }
`;

export const Inner = styled.div`
  width: max-content;
  display: flex;
  gap: 10px;
  justify-content: center;
  align-items: center;

  p {
    display: flex;
  }

  @media screen and (max-width: 480px) {
    p {
      display: none;
    }
  }

  @media screen and (min-width: 481px) and (max-width: 960px) {
    p {
      display: none;
    }
  }
`;

export const ProfilePicture = styled.div`
  height: 35px;
  width: 35px;
  border-radius: 50%;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 50%;
  }
`;

export const Dropdown = styled.div`
  position: relative;
  display: inline-block;

  @media screen and (max-width: 670px) {
    width: 40px;
  }
  @media screen and (max-width: 375px) {
    width: 35px;
  }
  @media screen and (max-width: 320px) {
    width: 35px;
  }
`;

// export const DropDownBtn = styled.button`
//   padding: 6px;
//   /* font-size: 16px; */
//   border: none;
//   cursor: pointer;
//   display: flex;
//   align-items: center;
//   justify-content: center;
// `;

export const DropDownBtn = styled.div`
  padding: 10px;
  display: flex;
  align-items: center;
  cursor: pointer;
  border-radius: 100px;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #F1F1F1;
  }

  &:active {
    background-color: #bfbfbf;
  }
`;


export const DropdownContent = styled.div`
  display: none;
  position: absolute;
  float: right;
  right: 0;
  background-color: white;
  border: 1px solid #ff2957;
  border-radius: 10px;
  min-width: 250px;
  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
  z-index: 9999999;

  & #myDropdown {
    display: block;
  }

  &.show {
    display: block;
  }
`;
export const DropdownContentLink = styled(Link)`
  color: black;
  padding: 12px 16px;
  text-decoration: none;
  display: block;
`;
