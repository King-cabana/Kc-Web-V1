import React from "react";
import { useNavigate } from "react-router";
import {
  Form,
  LongButton,
  AnimationContainer,
  AuthBackground,
} from "../../globalStyles";
import { SuccessBody } from "../signUp/SignUpSuccessStyled";
import Lottie from "lottie-react";
import animationData from "../../assets/lotties/102001-success-icon.json";
import Logo from "../../assets/images/Logo.svg";

const ResetPasswordSuccess = () => {

  const navigate = useNavigate();

  const navigateClick = () => {
    navigate("/login");
  };


  return (
    <AuthBackground>
      <SuccessBody>
        <img src={Logo} alt="King Cabana Logo" />
        <AnimationContainer>
          <Lottie animationData={animationData} loop={true} />
        </AnimationContainer>
        <p style={{ fontWeight: "bold", fontSize: "20px" }}>Success!</p>
        <p>Reset password done successfully </p>
        <Form>
          <LongButton  style={{ marginTop: "2%" }} onClick={navigateClick}>
            Return to log in page{" "}
          </LongButton>
        </Form>
      </SuccessBody>
    </AuthBackground>
  );
};

export default ResetPasswordSuccess;
