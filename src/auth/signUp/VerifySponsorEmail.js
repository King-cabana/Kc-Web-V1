import React, { useState } from "react";
import OtpInput from "react-otp-input";
import { LongButton, Form, AuthBackground } from "../../globalStyles";
import { VerifyBody } from "./SignUpStyled";
import Logo from "../../assets/images/Logo.svg";
import { verifySponsorEmail } from "../../redux/services/authService";
import { useNavigate } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import { ImSpinner6 } from "react-icons/im";
import { setSponsorToken } from "../../redux/slices/sponsorDetailsSlice";

const VerifySponsorEmail = () => {
  const [otp, setOtp] = useState("");
  const [loading, setLoading] = useState(false);
  const [email, setEmail] = useState(null);
  console.log(email);
  // console.log(sponsorEmail);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      const res = await verifySponsorEmail(otp);
      console.log(res);
      const sponsorUserToken = localStorage.getItem("sponsorUserToken") || "";
      dispatch(setSponsorToken({ name: "sponsorToken", value: sponsorUserToken }));
      // toast.success("Email Successfully verified!")
      navigate("/signupsuccess")

      setTimeout(() => {
        navigate("/setup-sponsors-profile"); 
      }, 2000);
    } catch (error) {
      setLoading(false);
      console.log(error);
      toast.error(error.response.data.message);
    } finally {
      setOtp("");
    }
  };

  const renderInput = (inputProps, index) => {
    return <input className="otp-input" {...inputProps} key={index} />;
  };

  return (
    <AuthBackground>
      <VerifyBody>
        <img src={Logo} alt="King Cabana Logo" />
        <h5 style={{ marginTop: "5%", fontWeight: "bold", color: "#484848" }}>
          Email Verification
        </h5>
        <p style={{ textAlign: "center", fontSize: "12px" }}>
          {"Enter the verification code sent to" + " "}
          {setEmail
            ? localStorage.getItem("sponsorEmail", email)
            : setEmail(localStorage.getItem("sponsorEmail"))}
        </p>

        <Form onSubmit={handleSubmit}>
          <label style={{ fontWeight: "bold", color: "#484848" }}>
            input code
          </label>
          <OtpInput
            onChange={setOtp}
            value={otp}
            numInputs={6}
            containerStyle={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              marginTop: "5%",
            }}
            inputStyle={{
              width: "40px",
              height: "40px",
              outline: "none",
              margin: "5px",
              borderRadius: "5px",
              border: "1px solid #c4c4c4",
            }}
            // isInputSecure
            separator={<span> </span>}
            renderInput={renderInput}
          />
          <LongButton style={{ marginTop: "5%" }} type="submit">
            {loading ? <ImSpinner6 size={"1.5rem"} /> : "Verify"}
          </LongButton>
          <p
            style={{
              color: "#ff2957",
              fontWeight: "bold",
              textAlign: "center",
              fontSize: "12px",
              marginTop: "20px",
              cursor: "pointer",
            }}
            // onClick={resendCode}
          >
            Resend code
          </p>
        </Form>
      </VerifyBody>
    </AuthBackground>
  );
};

export default VerifySponsorEmail;
