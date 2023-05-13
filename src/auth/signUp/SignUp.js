import React, { useState } from "react";
import { HiOutlineEye, HiOutlineEyeOff } from "react-icons/hi";
import { ErrorText, KBDisplayXs, KBTextXs } from "../../components/fonts/Fonts";
import {
  AuthBackground,
  Div,
  Form,
  Horizontal,
  InputFieldWrapper,
  LongButton,
  Or,
  SocialIconsHolder,
} from "../../globalStyles";
import google from "../../assets/images/Google.svg";
import Logo from "../../assets/images/Logo.svg";
import { register } from "../../redux/services/authService";
import { LogInLink, SignUpBody, SignUpContent, LabelInputHolder, InputFieldFlex } from "./SignUpStyled";
import {Validation} from "../Validation";
import { useNavigate } from "react-router";
import { toast } from "react-toastify";
import { ImSpinner6 } from "react-icons/im";

const SignUp = () => {
  const [click, setClick] = useState(false);
  const [show, setShow] = useState(false);
  const [visible, setVisibility] = useState(false);
  const [confirm, setConfirm] = useState(false);
  const [loading, setLoading] = useState(false);
  const [disabledButton, setDisabledButton] = useState(true);
  

  const [inputs, setInput] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [formErrors, setFormErrors] = useState({});
  const [allFieldsFilled, setAllFieldsFilled] = useState(false);

  const inputChange = (e) => {
    const newInputs = { ...inputs, [e.target.name]: e.target.value };
    setInput(newInputs);
  
    const errors = Validation(newInputs);
    setFormErrors(errors);
  
    const isFilled = Object.values(newInputs).every(
      (value) => value.trim() !== ""
    );
    setAllFieldsFilled(isFilled);
    setDisabledButton(!isFilled || Object.keys(errors).length > 0);
  };
  
  const handleValidation = () => {
    const errors = Validation(inputs);
    setFormErrors(errors);
    const hasErrors = Object.keys(errors).length > 0;
    setDisabledButton(hasErrors);
    if (!hasErrors) {
      setDisabledButton(!allFieldsFilled);
    }
    const timer = setTimeout(() => {
      setFormErrors({});
    }, 5000);
    return () => clearTimeout(timer);
  };
  
  const handleClick = () => {
    setClick(!click);
    setVisibility(!visible);
  };

  const handleConfirm = () => {
    setShow(!show);
    setConfirm(!confirm);
  };

  const InputType = visible ? "text" : "password";
  const ConfrimType = confirm ? "text" : "password";


  const navigate = useNavigate();

  const handleSignUp = async (e) => {
    e.preventDefault();
    const errors = Validation(inputs);
    if (Object.keys(errors).length === 0) {
      setLoading(true);
    } else {
      setFormErrors(errors);
    }
    try {
      await register(inputs);
      toast.success("Success, An Otp as been sent to your inbox.");
      navigate("/verifyemail");
    } catch (error) {
      setLoading(false);
      error?.response
        ? toast.error(error?.response?.data?.message)
        : toast.error(error.message);
    } finally {
      setInput({
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        confirmPassword: "",
      });
    }
    sessionStorage.setItem("email", inputs.email);
  };

  return (
    <AuthBackground>
      <SignUpBody>
        <SignUpContent>
          <img src={Logo} alt="King Cabana Logo" />
          <KBDisplayXs
            fontWeight="700"
            style={{ textAlign: "left", color: "#484848", marginTop: "2%" }}
          >
            Sign up
          </KBDisplayXs>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              marginTop: "3%",
              marginBottom: "3%",
            }}
          >
            <div style={{ width: "100%" }}>
              <InputFieldWrapper
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  cursor: "pointer",
                }}
              >
                <SocialIconsHolder style={{ border: "transparent" }}>
                  <img src={google} alt="google" />
                </SocialIconsHolder>
                <p
                  style={{
                    marginBottom: "0",
                    fontWeight: "600",
                    fontSize: "12px",
                  }}
                >
                  Sign up with Google
                </p>
              </InputFieldWrapper>
            </div>
            <Div style={{ marginTop: "3%" }}>
              <Horizontal />
              <Or>Or Signup with</Or>
              <Horizontal />
            </Div>
          </div>

          <Form onSubmit={handleSignUp}>
            <InputFieldFlex>
              <LabelInputHolder>
                <label style={{ fontSize:'14px', marginBottom: "2%" }}>First Name</label>
                <InputFieldWrapper>
                  <input
                    placeholder="Enter your first name"
                    name="firstName"
                    onChange={inputChange}
                  />
                </InputFieldWrapper>
                {formErrors.firstName && (
                <ErrorText>{formErrors.firstName}</ErrorText>
               )}
              </LabelInputHolder>

              <LabelInputHolder>
                <label style={{fontSize:'14px', marginBottom: "2%" }}>Last Name</label>
                <InputFieldWrapper>
                  <input
                    placeholder="Enter your last name"
                    name="lastName"
                    onChange={inputChange}
                  />
                </InputFieldWrapper>
                {formErrors.lastName && (
                <ErrorText>{formErrors.lastName}</ErrorText>
               )}
              </LabelInputHolder>
            </InputFieldFlex>
            
                  
            <label style={{ fontSize:'14px', marginBottom: "1%" }}>E-mail</label>
            <InputFieldWrapper>
              <input placeholder="Enter your E-mail" name="email" onChange={inputChange} className={formErrors.email && "error"}
              />
               
            </InputFieldWrapper>
            {formErrors.email && (
                <ErrorText>{formErrors.email}</ErrorText>
               )}

            <InputFieldFlex style={{marginTop:'2%', minHeight:'5rem'}}>
                  <LabelInputHolder >
                  <label style={{fontSize:'14px', marginBottom: "2%" }}>Password</label>
            <InputFieldWrapper>
              <input placeholder="Create a password" type={InputType} name="password" onChange={inputChange} className={formErrors.password && "error"}
              />
              {click ? (
                <HiOutlineEyeOff
                  onClick={handleClick}
                  style={{
                    margin: "auto",
                    top: "auto",
                    marginRight: "3%",
                    color: "#C4C4C4",
                    cursor : "pointer",
                  }}
                />
              ) : (
                <HiOutlineEye
                  onClick={handleClick}
                  style={{
                    margin: "auto",
                    top: "auto",
                    marginRight: "3%",
                    color: "#C4C4C4",
                    cursor : "pointer",
                  }}
                />
              )}
              
            </InputFieldWrapper>
           {formErrors.password && (
            <ErrorText>{formErrors.password}</ErrorText>
            )}
          </LabelInputHolder>

          <LabelInputHolder>
          <label style={{fontSize:'14px', marginBottom: "2%" }}>Confirm Password</label>
            <InputFieldWrapper>
              <input placeholder="Re-enter password" type={ConfrimType} name="confirmPassword" onChange={inputChange} className={formErrors.confirmPassword && "error"}
              />
              {show ? (
                <HiOutlineEyeOff
                  onClick={handleConfirm}
                  style={{
                    margin: "auto",
                    top: "auto",
                    marginRight: "3%",
                    color: "#C4C4C4",
                    cursor : "pointer",
                  }}
                />
              ) : (
                <HiOutlineEye
                  onClick={handleConfirm}
                  style={{
                    margin: "auto",
                    top: "auto",
                    marginRight: "3%",
                    color: "#C4C4C4",
                    cursor : "pointer",
                  }}
                />
              )}
               
            </InputFieldWrapper>  
            {formErrors.confirmPassword && (
              <ErrorText>{formErrors.confirmPassword}</ErrorText>
            )}      
          </LabelInputHolder>
          </InputFieldFlex>

          <div
              style={{ marginTop: "5%", display: "flex", alignItems: "center", gap:"10px" }}
            >
              <input type="checkbox" required></input>
              <KBTextXs
                style={{
                  marginBottom: "0",
                  lineHeight: "1em",
                }}
              >
                I agree to King Cabana’s{" "}
                <span>Terms of service</span> and{" "}
                <span>Privacy Policy</span>
              </KBTextXs>
            </div>
            <LongButton
              style={{ marginTop: "3%", marginBottom: '1%' }}
              type="submit"
              disabled={disabledButton}
              onClick={handleValidation}
            >
              {loading ? <ImSpinner6 size={"1.5rem"} /> : "Sign up"}
            </LongButton>
          </Form>

          <LogInLink to="/logIn">
            Already have an account?
            <span>Login</span>
          </LogInLink>
        </SignUpContent>
      </SignUpBody>
    </AuthBackground>
  );
};

export default SignUp;
