import styled, { css } from "styled-components";
import { Link, NavLink } from "react-router-dom";

export const Nav = styled.div`
  height: 4vh;
  width: 100%;
  display: flex;
  padding: 3% 8%;
  align-items: center;
  justify-content: space-between;
  top: 0;
  background-color: white;
  z-index: 1;

  @media (max-width: 960px) {
    position: sticky;
    height: 10vh;
    box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.2);
    z-index: 1;
  }

  /* @media screen and (max-width: 1920px){
    width: 100%;
    padding-left: 10% ;
    padding-right: 10%;
  } */
`;

export const NavLogo = styled.div`
  width: 12vw;
  cursor: pointer;

  // img {
  //   width: 35;
  // }

  @media screen and (max-width: 480px) {
    img {
      max-width: 100px;
    }

    @media screen and (min-width: 481px) and (max-width: 960px) {
    img {
      // min-width: 200px;
      max-width :0 ;
    }
  }
`;

export const NavContent = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-end;

  @media screen and (max-width: 960px) {
    align-items: center;
  }
`;

export const NavMobile = styled.div`
  display: none;

  @media screen and (max-width: 960px) {
    display: block;
    position: absolute;
    margin-top: 2%;
    right: 8%;
    cursor: pointer;
  }
`;

export const NavItems = styled.ul`
  list-style: none;
  display: flex;
  width: 65%;
  justify-content: space-between;
  align-items: center;

  li,
  a {
    text-decoration: none;
    color: black;
    font-weight: 400;
    font-size: 14px;
    cursor: pointer;
    text-align: center;

    &:hover {
      text-decoration: none;
      color: #ff2957;
      font-weight: 600;
      cursor: pointer;
    }

    &.active {
      color: #ff2957;
      font-weight: 600;
    }
  }

  @media screen and (max-width: 960px) {
    display: flex;
    flex-direction: column;
    width: 100vw;
    height: 100vh;
    position: absolute;
    top: 56px;
    left: ${({ click }) => (click ? 0 : "-100%")};
    opacity: 1;
    transition: all 1s ease;
    background-color: white;
    padding-top: 20%;
  }

  @media screen and (min-width: 600px) {
    /* top: 100px; */
  }
`;

export const LogoLink = styled(Link)`
  text-decoration: none;
  width: fit-content;
`;

export const NavBarLink = styled(NavLink)`
  @media screen and (max-width: 960px) {
    text-align: center;
    padding: 2%;
    width: 100vw;
    display: table;

    &:hover {
      color: #ff2957;
    }
  }
`;

export const NavGroup = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 30px;

  @media screen and (max-width: 960px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    height: 50vh;
    width: 100%;
  }
`;

export const NavSearchHolder = styled.div`
  width: 2vw;
  display: flex;
  justify-content: flex-end;
  align-items: center;

  @media screen and (max-width: 960px) {
    visibility: hidden;
  }
`;

export const NavButtonLink = styled(Link)`
  @media screen and (max-width: 960px) {
  }
`;
