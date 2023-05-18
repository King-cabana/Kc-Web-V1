import React, { useState, useEffect} from "react";
import {
  InputFieldWrapper,
  LongButton,
} from "../../globalStyles";
import { SignUpContent } from "../signUp/SignUpStyled";
import Logo from "../../assets/images/Logo.svg";
import { KBDisplayXs } from "../../components/fonts/Fonts";
import { Form } from "../../globalStyles";
import { HiOutlineEyeOff, HiOutlineEye } from "react-icons/hi";
import { resetPassword } from "../../redux/services/authService";
import { useNavigate } from "react-router";
import { toast } from "react-toastify";
import { ImSpinner6 } from "react-icons/im";
import { SignInBg } from "./SignInStyled";
import VerifyEmail from "../signUp/VerifyEmail";

const ResetPassword = () => {
  const [click, setClick] = useState(false);
  const [visible, setVisibility] = useState(false);
  const [loading, setLoading] = useState(false);

  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [otp, setOtp] = useState(null);

  const handleClick = () => {
    setClick(!click);
    setVisibility(!visible);
  };

  // useEffect(()=>{
  //   if(sessionStorage.getItem("otp")){
  //       setOtp(sessionStorage.getItem("otp"))
  //   } else{
  //     toast.error('You do not have access to this page')
  //     window.history.back()
  //   }
  // },[])

  const InputType = visible ? "text" : "password";

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setLoading(true)
      await resetPassword(password, confirmPassword, otp);
      toast.success("Password Reset Successful!")
      navigate("/signin")
    } catch (error) {
      setLoading(false)
      alert(error.response.data);
    } finally{
      setPassword("");
      setConfirmPassword("");
    }
  };

  return (
    <SignInBg>
      <VerifyEmail>
        <SignUpContent>
          <img style={{ marginTop: "5%" }} src={Logo} alt="King Cabana Logo" />
          <KBDisplayXs
            fontWeight="bold"
            style={{ textAlign: "center", color: "#484848", marginTop: "2%" }}
          >
            Reset Password
          </KBDisplayXs>

          <Form onSubmit={handleSubmit}>
            <label style={{ marginBottom: "2%" }}>Password</label>
            <InputFieldWrapper>
              <input
                placeholder="Create a new password"
                type={InputType}
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              ></input>
              {click ? (
                <HiOutlineEyeOff
                  onClick={handleClick}
                  style={{
                    margin: "auto",
                    top: "auto",
                    marginRight: "3%",
                    color: "#C4C4C4",
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
                  }}
                />
              )}
            </InputFieldWrapper>

            <label style={{ marginBottom: "2%" }}>Confirm Password</label>
            <InputFieldWrapper>
              <input
                placeholder="Re-enter password"
                type={"password"}
                required
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
              ></input>
            </InputFieldWrapper>

            <LongButton style={{ marginTop: "5%" }} type='submit'>
            {loading ?<ImSpinner6 size={"1.5rem"} /> : "Submit"}
            </LongButton>

          </Form>
        </SignUpContent>
      </VerifyEmail>
    </SignInBg>
  );
};

export default ResetPassword;
