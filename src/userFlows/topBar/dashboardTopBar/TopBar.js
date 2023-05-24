import React, { useEffect, useState } from "react";
import { LogoLink } from "../../../components/navbar/Navbar.styled";
import {
  TopBarContainer,
  TopBarLogo,
  TopBarItemHolder,
  ItemsHolder,
  ItemsHolderInner,
  ProfilePicture,
  DropDownBtn,
  Dropdown,
  DropdownContent,
  DropdownContentLink,
  Inner,
} from "./TopBar.styled";
import Logo from "../../../assets/images/KCLogo.svg";
import { SlBell } from "react-icons/sl";
import { RiArrowDownSLine } from "react-icons/ri";
import { KBTextM } from "../../../components/fonts/Fonts";
import { useDispatch, useSelector } from "react-redux";
import { clearUserDetails, fetchUserDetails} from "../../../redux/slices/userDetailsSlice";
import { clearEventOrganizerProfile } from "../../../redux/slices/eventOrganizerProfileSlice";
import { toast } from "react-toastify";
import {
  BtnHolderLink,
  ModalButtonContainer,
  ModalText,
  PopUpComponent,
  PopUpOverlay,
} from "../../../userFlows/createEvent/budgetInventory/InventoryStyled";
import {
  AlternativeButton2,
  ModalPrimaryButton,
} from "../../../components/buttons/Buttons";

const TopBar = () => {
  const [modal, setModal] = useState(false);
  const [userInitials, setUserInitials] = useState("");

  // Modal Contitions
  if (modal) {
    document.body.classList.add("active-modal");
  } else {
    document.body.classList.remove("active-modal");
  }
  const showModal = !modal && "notShown";


  const userDetails = useSelector((state) => state.userDetails);

  useEffect(() => {
    if (userDetails && userDetails.details.firstname && userDetails.details.lastname) {
      const firstname = userDetails.details.firstname;
      const lastname = userDetails.details.lastname;
      const initials = `${firstname.charAt(0)}${lastname.charAt(0)}`;
      setUserInitials(initials);
    }
    
  }, [userDetails]);  
  const dispatch = useDispatch();

  function showDropDown() {
    document.getElementById("myDropdown").classList.toggle("show");
  }

 

  const handleLogout = () => {
    dispatch(clearUserDetails());
    dispatch(clearEventOrganizerProfile());
    toast.success("Logout!");
  };

  window.onclick = function (event) {
    if (!event.target.matches(".dropbtn")) {
      const dropdowns = document.getElementsByClassName("dropdown-content");
      for (let i = 0; i < dropdowns.length; i++) {
        const openDropdown = dropdowns[i];
        if (openDropdown.classList.contains("show")) {
          openDropdown.classList.remove("show");
        }
      }
    }
  };

  return (
    <>
      {modal && <PopUpOverlay></PopUpOverlay>}
      <TopBarContainer>
        <TopBarLogo>
          <LogoLink to="/">
            <img src={Logo} alt="King Cabana Logo" />
          </LogoLink>
        </TopBarLogo>
        {/* <SearchBar /> */}
        <TopBarItemHolder>
          <ItemsHolder>
            <ItemsHolderInner>
              <Inner>
                <SlBell style={{ cursor: "pointer" }} />
                <ProfilePicture
                  style={{
                    border: "1px solid #FF2957",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  {userInitials && <span>{userInitials}</span>}
                </ProfilePicture>

                <KBTextM>{userDetails?.details?.firstname} {userDetails?.details?.lastname} </KBTextM>

                <Dropdown>
                  {/* <DropDownBtn onClick={showDropDown} className="dropbtn">
                    <RiArrowDownSLine />
                  </DropDownBtn> */}
                  <DropDownBtn onClick={showDropDown} className="dropbtn">
                        <RiArrowDownSLine />
                  </DropDownBtn>
                  <DropdownContent id="myDropdown" className="dropdown-content">
                    <div
                      style={{
                        display: "flex",
                        gap: "10px",
                        padding: "15px",
                      }}
                    >
                      <div
                        style={{
                          width: "50px",
                          display: "flex",
                          justifyContent: "center",
                          alignItems: "center",
                        }}
                      >
                        <ProfilePicture
                          style={{
                            border: "1px solid #FF2957",
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                          }}
                        >
                           {userInitials && <span>{userInitials}</span>}
                        </ProfilePicture>
                      </div>
                      <div>
                        <p style={{ fontWeight: "500" }}>
                          {userDetails?.details?.firstname}  {userDetails?.details?.lastname}
                        </p>
                        <p
                          style={{
                            fontSize: "12px",
                            wordBreak: "break-all",
                            wordWrap: "break-word",
                            whiteSpace: "pre-wrap",
                          }}
                        >
                          {userDetails?.details?.email}
                        </p>
                      </div>
                    </div>
                    <hr style={{ color: "#0068FF", padding: "auto" }} />
                    <DropdownContentLink>Account settings</DropdownContentLink>
                    <DropdownContentLink onClick={() => setModal(!modal)}>
                      Logout
                    </DropdownContentLink>
                  </DropdownContent>
                </Dropdown>
              </Inner>
            </ItemsHolderInner>
          </ItemsHolder>
        </TopBarItemHolder>
      </TopBarContainer>

      <div className={`${showModal}`}>
        <PopUpComponent>
          <ModalText>Are you sure you want to Logout?</ModalText>

          <ModalButtonContainer>
            <BtnHolderLink>
              <AlternativeButton2
                onClick={() => setModal(!modal)}
                style={{
                  color: "#FF2957",
                }}
              >
                Cancel
              </AlternativeButton2>
            </BtnHolderLink>

            <BtnHolderLink to="/">
              <ModalPrimaryButton onClick={handleLogout}>
                Yes, Logout
              </ModalPrimaryButton>
            </BtnHolderLink>
          </ModalButtonContainer>
        </PopUpComponent>
      </div>
    </>
  );
};

export default TopBar;
