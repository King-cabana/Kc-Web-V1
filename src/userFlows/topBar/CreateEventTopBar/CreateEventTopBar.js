import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchUserDetails } from "../../../redux/slices/userDetailsSlice";
import { LogoLink } from "../../../components/navbar/Navbar.styled";
import { ProfilePicture } from "../dashboardTopBar/TopBar.styled";
import {
  CETopBarContainer,
  CETopBarLogo,
  PPAndArrowHolder,
} from "./CreateEventTopBarStyled";
// import Profile from "../../../assets/images/pexels-george-ikwegbu-2379429.jpg";
import Logo from "../../../assets/images/kingCabanaLogo.svg";

const CreateEventTopBar = () => {
  const [userInitials, setUserInitials] = useState("");

  const email = localStorage.getItem("email");
  const token = localStorage.getItem("userToken");

  const dispatch = useDispatch();

  const data = fetchUserDetails(email, token);

  const userDetails = useSelector((state) => state.userDetails);
  // console.log(userDetails.details)

  useEffect(() => {
    if (userDetails && userDetails.details.firstname && userDetails.details.lastname) {
      const firstname = userDetails.details.firstname;
      const lastname = userDetails.details.lastname;
      const initials = `${firstname.charAt(0)}${lastname.charAt(0)}`;
      setUserInitials(initials);
    }
    
  }, [userDetails]);
  

  return (
    <CETopBarContainer>
      <CETopBarLogo>
        <LogoLink to="/">
          <img src={Logo} alt="King Cabana Logo" />
        </LogoLink>
      </CETopBarLogo>
      <PPAndArrowHolder>
        <ProfilePicture>
          {userInitials && <span>{userInitials}</span>}
        </ProfilePicture>
      </PPAndArrowHolder>
    </CETopBarContainer>
  );
};

export default CreateEventTopBar;
