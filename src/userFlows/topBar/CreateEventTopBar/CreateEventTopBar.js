import React from "react";
import { LogoLink } from "../../../components/navbar/Navbar.styled";
import { ProfilePicture } from "../dashboardTopBar/TopBar.styled";
import {
  CETopBarContainer,
  CETopBarLogo,
  PPAndArrowHolder,
} from "./CreateEventTopBarStyled";
import { RiArrowDownSLine } from "react-icons/ri";
import Profile from "../../../images/pexels-george-ikwegbu-2379429.jpg";
import Logo from "../../../images/KCLogo.svg";

const CreateEventTopBar = () => {
  return (
    <CETopBarContainer>
      <CETopBarLogo>
        <LogoLink to="/">
          <img src={Logo} alt="King Cabana Logo" />
        </LogoLink>
      </CETopBarLogo>
      <PPAndArrowHolder>
        <ProfilePicture>
          <img src={Profile} alt="pp" />
        </ProfilePicture>
        <RiArrowDownSLine
          style={{
            cursor: "pointer",
          }}
        />
      </PPAndArrowHolder>
    </CETopBarContainer>
  );
};

export default CreateEventTopBar;
