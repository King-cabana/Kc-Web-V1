import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router";
import { useSelector } from "react-redux";
import {
  Div,
  Horizontal,
  InputFieldWrapper,
  LongButton,
  Or,
  SocialIconsHolder,
} from "../../globalStyles";
import { SignUpContent, LogInLink } from "../signUp/SignUpStyled";
import Logo from "../../assets/images/Logo.svg";
import { KBDisplayXs } from "../../components/fonts/Fonts";
import { Form } from "../../globalStyles";
import { HiOutlineEyeOff, HiOutlineEye } from "react-icons/hi";
import google from "../../assets/images/Google.svg";
import { googleSignIn, login } from "../../redux/services/authService";
import { toast } from "react-toastify";
import { ImSpinner6 } from "react-icons/im";
import { setUserDetails } from "../../redux/slices/userDetailsSlice";
import { useDispatch } from "react-redux";
import { setUserToken } from "../../redux/slices/userDetailsSlice";
import axios from "axios";
import { setEventOrganizerProfile } from "../../redux/slices/eventOrganizerProfileSlice";
import { SignInBg, SignInBody } from "./SignInStyled";
import { gapi } from "gapi-script";
import GoogleLogin from "react-google-login";

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

  //signin with google

  const [userObject, setUserObject] = useState({});

  const clientId =
    "165428537567-6riht3rvf7u0b3rennij863hfr6g674g.apps.googleusercontent.com";
  const onSuccess = async (res) => {
    console.log("LOGIN SUCCESS! Current user: ", res.profileObj);
    const { email, googleId, familyName, givenName, imageUrl } = res.profileObj;
    const user = {
      email,
      googleId,
      familyName,
      givenName,
      imageUrl,
    };
    setUserObject(user);
    try {
      await googleSignIn(user);
      navigate("/dashboard");
    } catch (error) {
      error?.response
        ? toast.error(error?.response?.data?.message)
        : toast.error(error.message);
    }
  };

  const onFailure = (res) => {
    console.log("LOGIN FAILED! res: ", res);
  };

  useEffect(() => {
    function start() {
      gapi.client.init({
        clientId: clientId,
        scope:
          "email profile openid https://www.googleapis.com/auth/userinfo.email",
      });
    }
    gapi.load("client:auth2", start);
  }, [clientId]);

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
    <SignInBg>
      <SignInBody>
        <SignUpContent>
          <img src={Logo} alt="King Cabana Logo" />
          <KBDisplayXs
            fontWeight="700"
            style={{ textAlign: "left", color: "#484848", marginTop: "2%" }}
          >
            Sign in
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
            <div
              style={{
                width: "100%",
                justifyContent: "center",
                alignItems: "center",
                display: "flex",
              }}
            >
              <GoogleLogin
                clientId={clientId}
                buttonText="Continue with Google"
                onSuccess={onSuccess}
                onFailure={onFailure}
                cookiePolicy={"single_host_origin"}
                isSignedIn={true}
                render={(renderProps) => (
                  <div
                    onClick={renderProps.onClick}
                    disabled={renderProps.disabled}
                    style={{ width: "100%" }}
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
                          Continue with Google
                        </p>
                      </InputFieldWrapper>
                    </div>
                  </div>
                )}
              />
            </div>
            <Div width="80%" style={{ marginTop: "3%" }}>
              <Horizontal />
              <Or>Or Sign in with</Or>
              <Horizontal />
            </Div>
          </div>

          <Form onSubmit={handleLogin}>
            <label style={{ fontSize: "14px", marginBottom: "1%" }}>
              E-mail
            </label>
            <InputFieldWrapper>
              <input
                placeholder="Enter your email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              ></input>
            </InputFieldWrapper>

            <label style={{ fontSize: "14px", marginBottom: "1%" }}>
              Password
            </label>
            <InputFieldWrapper>
              <input
                placeholder="Enter password"
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
            <LongButton
              style={{ marginTop: "3%", marginBottom: "2%" }}
              type="submit"
            >
              {loading ? <ImSpinner6 size={"1.5rem"} /> : "Sign in"}
            </LongButton>
          </Form>

          <LogInLink to="/signup">
            Don't have an account?{" "}
            <span
              style={{ color: "#ff2957", fontWeight: "500", textAlign: "left" }}
            >
              Signup
            </span>
          </LogInLink>
        </SignUpContent>
      </SignInBody>
    </SignInBg>
  );
};

export default SignIn;
