import styled from "styled-components";
import { Link } from "react-router-dom";

export const DisplayMode = styled.div`
  display: flex;
  top: 62px;

  @media screen and (max-width: 480px) {
    /* display: block; */
  }
`;

export const SidebarNav = styled.nav`
  background: white;
  width: 20%;
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.1);
  height: 100vh;
  overflow-y: scroll;
  display: flex !important;
  justify-content: center;
  transition: 350ms;
  z-index: 10;
  /* padding-top: 1%; */
  position: fixed;
  top: 62px;

  @media screen and (max-width: 480px) {
    width: 100%;
    position: fixed;
    z-index: 9999999;
    /* display: block; */
    display: ${({ sidebar }) => (sidebar ? "block" : "none")};
    left: 0;
    top: 15vh;
  }
`;

export const SidebarWrap = styled.div`
  width: 100%;

  @media screen and (max-width: 480px) {
    width: 100%;
  }
`;

export const ContentBody = styled.div`
  background-color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 80%;
  position: relative;
  /* overflow-y: scroll;   */
  margin-left: 20%;
  top: 62px;

  @media screen and (max-width: 960px) {
    width: 100%;
    margin-left: 0;
  }
`;

export const Nav = styled.div`
  height: 40px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  position: absolute;
  top: 0;
  left: 0;
  /* margin-left: 2; */

  @media screen and (max-width: "960px") {
    /* margin-left: 0; */
  }
`;

export const NavIcon = styled(Link)`
  margin-left: 1rem;
  font-size: 2rem;
  height: 20px;
  justify-content: flex-start;
  align-items: center;
  display: none;
  color: black;
  z-index: 10;

  @media screen and (max-width: 960px) {
    font-size: 1rem;
    display: flex;
  }
`;
