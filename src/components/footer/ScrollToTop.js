import React, { useState } from "react";
import { FaArrowCircleUp } from "react-icons/fa";
import styled from "styled-components";

const ScrollButton = () => {
  const [visible, setVisible] = useState(false);

  const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop;
    if (scrolled > 300) {
      setVisible(true);
    } else if (scrolled <= 300) {
      setVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  window.addEventListener("scroll", toggleVisible);

  return (
    <TopButton>
      <FaArrowCircleUp
        onClick={scrollToTop}
        style={{ display: visible ? "inline" : "none", width: "5vw" }}/>
    </TopButton>
  );
};

const TopButton = styled.div`
  width: 4vw;
  height: 20px;
  font-size: 3rem;
  cursor: pointer;
  color: white;
  margin-top: 5%;

  img {
    max-width: 40px;
    height: 40px;
  }

  @media screen and (max-width: 480px) {
    position: absolute;
    margin-left: 130%;
    margin-bottom: 350%;
  }
`;

export default ScrollButton;
