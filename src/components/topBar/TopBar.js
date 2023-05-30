import React from "react";
import logo from "../../assets/images/kingCabanaLogo.svg";
import { AbsolutePrimaryButton, AlternativeButton2 } from "../buttons/button";
import { Container } from "./TopBarStyled";
import { useNavigate } from "react-router";

const TopBar = ({ marginBottom }) => {
  const navigate = useNavigate();
  return (
    <>
      <Container>
        <div style={{ width: "30%" }}>
          <img
            src={logo}
            alt="kcLogo"
            style={{ cursor: "pointer" }}
            onClick={() => navigate("/")}
          />
        </div>

        <div>
          <AlternativeButton2
            style={{
              color: "#FF2957",
              fontWeight: "600",
              marginRight: "1rem",
            }}
            onClick={() => navigate("/signin")}
          >
            Sign In
          </AlternativeButton2>
          <AbsolutePrimaryButton onClick={() => navigate("/signUp")}>
            Sign Up
          </AbsolutePrimaryButton>
        </div>
      </Container>
      <div style={{ marginBottom: marginBottom }}>
        <hr color="#ff2957" />
      </div>
    </>
  );
};

export default TopBar;
