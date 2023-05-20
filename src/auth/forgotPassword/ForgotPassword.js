import React, { useState } from "react";
import {
  InputFieldWrapper,
  LongButton,
  Form,
} from "../../globalStyles";
import { SignUpContent, LogInLink, VerifyBody } from "../signUp/SignUpStyled";
import Logo from "../../assets/images/Logo.svg";
import { KBDisplayXs, KBTextS } from "../../components/fonts/Fonts";
import { ArrowLongLeftIcon } from "@heroicons/react/24/outline";
import { forgotPassword } from "../../redux/services/authService";
import { useNavigate } from "react-router";
import { toast } from "react-toastify";
import { ImSpinner6 } from "react-icons/im";
import { SignInBg } from "../signIn/SignInStyled";

const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false)

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
     setLoading(true)
     await forgotPassword(email);
     toast.success("An Otp has been sent to " + email)
     navigate("/forgotpassword-otp-verification")
    } catch (error) {
      setLoading(false)
      toast.error(error.response.data);
    } finally{
      setEmail("");
    }
    sessionStorage.setItem("email", email);
  };

  return (
    <SignInBg>
      <VerifyBody>
        <SignUpContent>
          <img style={{ marginTop: "5%" }} src={Logo} alt="King Cabana Logo" />
          <KBDisplayXs
            fontWeight="bold"
            style={{ textAlign: "center", color: "#484848", marginTop: "5%" }}
          >
            Forgot Password?
          </KBDisplayXs>
          <KBTextS
            style={{ marginTop: "3%", marginBottom: "5%", fontSize: "12px" }}
          >
            Enter your registered email to receive your password reset
            instructions{" "}
          </KBTextS>

          <Form onSubmit={handleSubmit}>
            <label style={{ marginBottom: "2%" }}>E-mail</label>
            <InputFieldWrapper>
              <input
                placeholder="Enter your E-mail"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              ></input>
            </InputFieldWrapper>

            <LongButton
              style={{ marginTop: "5%" }}
              type="submit"
            >
              {loading ? <ImSpinner6 size={"1.5rem"} /> : "Submit"}
             
            </LongButton>

            <LogInLink
              style={{
                marginTop: "5%",
                textAlign: "center",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                gap: "5px",
              }}
              to="/signin"
            >
              <ArrowLongLeftIcon
                className="h-6 h-6 text-gray-500"
                style={{ width: "20px", color: "#ff2957" }}
              />
              <span
                style={{
                  color: "#ff2957",
                  fontWeight: "500",
                  textAlign: "left",
                }}
              >
                Back to login page
              </span>
            </LogInLink>
          </Form>
        </SignUpContent>
      </VerifyBody>
    </SignInBg>
  );
};

export default ForgotPassword;
