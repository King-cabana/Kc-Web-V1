import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router";
import { useDispatch } from "react-redux";
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
import { fetchUserDetails, setUserDetails } from "../../redux/slices/userDetailsSlice";
import { setUserToken } from "../../redux/slices/userDetailsSlice";
import { SignInBg, SignInBody } from "./SignInStyled";
import { gapi } from "gapi-script";
import GoogleLogin from "react-google-login";

const SignIn = () => {
  const [click, setClick] = useState(false);
  const [visible, setVisibility] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);


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

//signin with google
  const [userObject, setUserObject] = useState({});
  const clientId =
    "165428537567-6riht3rvf7u0b3rennij863hfr6g674g.apps.googleusercontent.com";
  const onSuccess = async (res) => {
    // console.log("LOGIN SUCCESS! Current user: ", res.profileObj);
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
      const res = await googleSignIn(user);
      dispatch(setUserDetails(email));
      setEmail(email);
      localStorage.setItem("email", email);
      const headers = res.headers;
      const token = headers.get("authorization");
      const tokenWithoutBearer = token ? token.replace("Bearer ", "") : "";
      const userToken = tokenWithoutBearer || "";
      dispatch(setUserToken({ name: "token", value: userToken }));
      localStorage.setItem("userToken", userToken);
      localStorage.setItem("email", email);
      dispatch(fetchUserDetails(user.email, userToken));
      dispatch(setUserDetails(user.email, userToken));
      console.log(user.email, userToken)
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


  //normal signin
  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const { data } = await login(email, password);
      dispatch(setUserDetails(data?.data));
      console.log(data?.data);
      toast.success("login successfully!");
      sessionStorage.setItem("email", email);
      const userToken = localStorage.getItem("userToken") || "{}";
      dispatch(setUserToken({ name: "token", value: userToken }));
      navigate("/dashboard");
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
                isSignedIn={false}
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
