import React, { useState } from "react";
import { useNavigate } from "react-router";
import { useSelector } from "react-redux";
import {
  AuthBackground,
  Div,
  Horizontal,
  InputFieldWrapper,
  LongButton,
  Or,
  SocialIconsHolder,
} from "../../globalStyles";
import { SignUpContent, LogInLink, SignUpBody } from "../signUp/SignUpStyled";
import Logo from "../../assets/images/Logo.svg";
import { KBDisplayXs, KBTextXs } from "../../components/fonts/Fonts";
import { Form } from "../../globalStyles";
import { HiOutlineEyeOff, HiOutlineEye } from "react-icons/hi";
import google from "../../assets/images/Google.svg";
import linkedin from "../../assets/images/linkedin.svg";
import { login } from "../../redux/services/authService";
import { toast } from "react-toastify";
import { ImSpinner6 } from "react-icons/im";
import { setUserDetails } from "../../redux/slices/userDetailsSlice";
import { useDispatch } from "react-redux";
import { setUserToken } from "../../redux/slices/userDetailsSlice";
import axios from "axios";
import { setEventOrganizerProfile } from "../../redux/slices/eventOrganizerProfileSlice";

const SignIn = () => {
  const [click, setClick] = useState(false);
  const [visible, setVisibility] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const user = useSelector((state) => state.userDetails);

  const handleClick = () => {
    setClick(!click);
    setVisibility(!visible);
  };

  const InputType = visible ? "text" : "password";

  const navigate = useNavigate();

  const navigateToReset = () => {
    navigate("/forgotpassword");
  };

  const dispatch = useDispatch();

  const checkProfile = async (email, token) => {
    try {
      const { data } = await axios(
        `https://api.kingcabana.com/eventuser/email?email=${email}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      console.log(data?.myProfile);
      return { state: Boolean(data?.myProfile?.id), value: data?.myProfile };
    } catch (error) {
      throw error;
    }
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const { data } = await login(email, password);
      dispatch(setUserDetails(data?.data));
      console.log(data?.data);
      console.log(user);
      toast.success("login successfully!");
      const userToken = localStorage.getItem("bearerToken") || "{}";
      dispatch(setUserToken({ name: "token", value: userToken }));
      const hasProfile = await checkProfile(email, userToken);
      console.log(hasProfile);
      if (hasProfile?.state) {
        dispatch(setEventOrganizerProfile(hasProfile?.value));
        navigate("/dashboard");
      } else {
        navigate("/createProfile");
      }
    } catch (error) {
      setLoading(false);
      if (error?.response?.status === 401) {
        toast.error("Invalid email or password");
      } else {
        error?.response
          ? toast.error(error?.response?.data?.message)
          : toast.error(error.message);
      }
    } finally {
      setEmail("");
      setPassword("");
    }
  };

  return (
    <AuthBackground>
      <SignUpBody>
        <SignUpContent>
          <img style={{ marginTop: "5%" }} src={Logo} alt="King Cabana Logo" />
          <KBDisplayXs
            fontWeight="700"
            style={{ textAlign: "left", color: "#484848", marginTop: "2%" }}
          >
            log in
          </KBDisplayXs>

          <Form onSubmit={handleLogin}>
            <label style={{ marginBottom: "2%" }}>E-mail</label>
            <InputFieldWrapper>
              <input
                placeholder="Enter your E-mail"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              ></input>
            </InputFieldWrapper>

            <label style={{ marginBottom: "2%" }}>Password</label>
            <InputFieldWrapper>
              <input
                placeholder="Create a password"
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

            <div
              style={{
                marginTop: "5%",
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <div
                style={{
                  display: "flex",
                  alignitems: "center",
                  justifyContent: "center",
                  gap: "5px",
                }}
              >
                <input type="checkbox"></input>
                <KBTextXs
                  style={{
                    textAlign: "center",
                    marginBottom: "0",
                    lineHeight: "1em",
                  }}
                >
                  Keep me signed in{" "}
                </KBTextXs>
              </div>
              <p
                style={{
                  cursor: "pointer",
                  color: "#ff2957",
                  fontSize: "12px",
                }}
                onClick={navigateToReset}
              >
                Forgot Password?
              </p>
            </div>
            <LongButton style={{ marginTop: "5%" }} type="submit">
              {loading ? <ImSpinner6 size={"1.5rem"} /> : "Log in"}
            </LongButton>
          </Form>

          <Div style={{ marginTop: "5%" }}>
            <Horizontal />
            <Or>Or Login with</Or>
            <Horizontal />
          </Div>

          <div style={{ marginTop: "5%", marginBottom: "5%" }}>
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
            <InputFieldWrapper
              style={{
                marginTop: "3%",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                cursor: "pointer",
              }}
            >
              <SocialIconsHolder style={{ border: "transparent" }}>
                <img src={linkedin} alt="linkedin" />
              </SocialIconsHolder>
              <p
                style={{
                  marginBottom: "0",
                  fontWeight: "600",
                  fontSize: "12px",
                }}
              >
                Sign up with linkedin
              </p>
            </InputFieldWrapper>
          </div>

          <LogInLink to="/signup">
            Don't have an account?{" "}
            <span
              style={{ color: "#ff2957", fontWeight: "500", textAlign: "left" }}
            >
              Signup
            </span>
          </LogInLink>
        </SignUpContent>
      </SignUpBody>
    </AuthBackground>
  );
};

export default SignIn;
