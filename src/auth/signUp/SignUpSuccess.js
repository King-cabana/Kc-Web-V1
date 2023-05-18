import React from "react";
import {
  Form,
  LongButton,
  AnimationContainer,
  AuthBackground,
} from "../../globalStyles";
import { SuccessBody } from "./SignUpSuccessStyled";
import Lottie from "lottie-react";
import animationData from "../../lotties/102001-success-icon.json";
import Logo from "../../images/Logo.svg";

const SignUpSuccess = () => {
  return (
    <AuthBackground>
      <SuccessBody>
        <img src={Logo} alt="King Cabana Logo" />
        <AnimationContainer>
          <Lottie animationData={animationData} loop={true} />
        </AnimationContainer>
        <p style={{ fontWeight: "bold", fontSize: "20px" }}>Success!</p>
        <p>Your Email has been verified</p>
        <Form>
          <LongButton style={{ marginTop: "2%" }}>Proceed</LongButton>
        </Form>
      </SuccessBody>
    </AuthBackground>
  );
};

export default SignUpSuccess;
