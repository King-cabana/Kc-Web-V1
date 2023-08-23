import React, { useState, useEffect, useCallback } from "react";
import hb from "../../assets/images/hb.svg";
import times from "../../assets/images/times.svg";
import { IconContext } from "react-icons/lib";
import {
  Nav,
  NavLogo,
  LogoLink,
  NavContent,
  NavItems,
  NavMobile,
  NavBarLink,
  NavButtonLink,
} from "./Navbar.styled";
import Logo from "../../assets/images/kingCabanaLogo.svg";
import { NavGroup } from "./Navbar.styled";
import { AltNavBtn, PryNavBtn } from "../buttons/Buttons";
// import SignIn from '../../pages/authentication/signIn/SignIn';

const Navbar = ({pryBtnCTA = "Sign Up"}) => {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const handleClick = useCallback(() => {
    setClick((prevClick) => !prevClick);
  }, []);

  const showButton = useCallback(() => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  }, []);

  useEffect(() => {
    showButton();
    window.addEventListener("resize", showButton);

    return () => {
      window.removeEventListener("resize", showButton);
    };
  }, [showButton]);

  return (
    <>
      <IconContext.Provider value={{ size: "25px" }}>
        <Nav>
          <NavLogo>
            <LogoLink to="/">
              <img src={Logo} alt="King Cabana Logo" />
            </LogoLink>
          </NavLogo>
          <NavContent>
            <NavMobile onClick={handleClick}>
              {click ? <img src={times} alt="" /> : <img src={hb} alt="" />}
            </NavMobile>
            <NavItems onClick={handleClick} click={click}>
              <li>
                <NavBarLink to="/">Events</NavBarLink>
              </li>
              <li>
                <NavBarLink  to="/sponsors">For Sponsors</NavBarLink>
              </li>
              <li>
                <NavBarLink to="/vendors">For Vendors</NavBarLink>
              </li>
              <NavGroup>
                {button ? (
                  <>
                    <NavButtonLink to="/signin">
                      <AltNavBtn fontWeight="500">Sign In</AltNavBtn>
                    </NavButtonLink>
                    <NavButtonLink to="/signup">
                      <PryNavBtn fontWeight="500">{pryBtnCTA}</PryNavBtn>
                    </NavButtonLink>
                  </>
                ) : (
                  <>
                    <NavButtonLink to="/signin">
                      <AltNavBtn fontWeight="500">Sign In</AltNavBtn>
                    </NavButtonLink>
                    <NavButtonLink to="/signup">
                      <PryNavBtn fontWeight="500">{pryBtnCTA}</PryNavBtn>
                    </NavButtonLink>
                  </>
                )}
              </NavGroup>
            </NavItems>
          </NavContent>
        </Nav>
      </IconContext.Provider>
    </>
  );
};

export default Navbar;

