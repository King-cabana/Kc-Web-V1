import React from 'react'
import Logo from './images/kingCabanaLogo.svg';
import {
    Nav,
    NavLogo,
    LogoLink
  } from "./TestGeneratedStyles";
import { IconContext } from "react-icons/lib";
import { useState } from 'react';
import { useEffect } from 'react';
import { useCallback } from 'react';
import MainBody  from './MainBody';

const TestGenerated = () => {
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
            </Nav>
        </IconContext.Provider>
        <MainBody />

    </>
  )
}

export default TestGenerated

