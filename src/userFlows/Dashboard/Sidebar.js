import React, { useState, useEffect } from "react";
import { SidebarData } from "./SidebarData";
import SubMenu from "./SubMenu";
import TopBar from "../topBar/dashboardTopBar/TopBar";
import {
  ContentBody,
  SidebarNav,
  SidebarWrap,
  DisplayMode,
  Nav,
  NavIcon,
} from "./Sidebar.Styled";
import * as FaIcons from "react-icons/fa";
import { useMediaQuery } from "@mui/material";
import { useNavigate } from "react-router";
import { useSelector } from "react-redux";
import { toast } from "react-toastify";

const Side = ({ sidebar, setSidebar }) => {
  return (
    <SidebarNav sidebar={sidebar}>
      <SidebarWrap>
        {SidebarData.map((item, index) => {
          return (
            <SubMenu
              click={() => {
                setSidebar(false);
              }}
              item={item}
              key={index}
              setSidebar={setSidebar}
            />
          );
        })}
      </SidebarWrap>
    </SidebarNav>
  );
};

const Sidebar = ({ children }) => {
  const [sidebar, setSidebar] = useState(false);
  const matches = useMediaQuery("(min-width:960px)");
  const navigate = useNavigate();
  const user = useSelector((state) => state.userDetails);

  // useEffect(() => {
  //   if (!user?.isSignedIn) {
  //     navigate("/signup");
  //     toast.error("Sign up or Login");
  //     console.log("Sign up or Login");
  //     console.log("Component rendered: ", Date.now());
  //   }
  // }, [user?.isSignedIn, navigate]);

  const showSidebar = () => setSidebar(!sidebar);

  // if (!user?.isSignedIn) {
  //   return null;
  // }

  return (
    <>
      <TopBar />
      <DisplayMode>
        {matches && <Side sidebar={sidebar} setSidebar={setSidebar} />}
        {sidebar && <Side sidebar={sidebar} setSidebar={setSidebar} />}
        <ContentBody onClick={() => sidebar && setSidebar(false)}>
          <Nav>
            <NavIcon to="#" onClick={showSidebar}>
              {<FaIcons.FaBars />}
            </NavIcon>
          </Nav>
          {children}
        </ContentBody>
      </DisplayMode>
    </>
  );
};

export default Sidebar;