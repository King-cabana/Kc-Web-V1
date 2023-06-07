import styled, {css} from "styled-components";
import {Link, NavLink } from "react-router-dom";
import { IconContext } from "react-icons/lib";

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
  border: 1px solid rgba(0, 104, 255, 0.1);

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

export const LogoLink = styled(Link)`
  text-decoration: none;
  width: fit-content;
`;