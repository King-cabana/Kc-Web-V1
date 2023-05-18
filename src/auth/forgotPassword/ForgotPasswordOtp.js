import React, { useState } from "react";
import OtpInput from "react-otp-input";
import { LongButton, Form, AuthBackground } from "../../globalStyles";
import { VerifyBody } from "./../signup/SignUpStyled";
import Logo from "../../images/Logo.svg";
import { forgotPasswordOtp } from "../../redux/service/authService";
import { useNavigate } from "react-router";
import { toast } from "react-toastify";
import { ImSpinner6 } from "react-icons/im";

const ForgotPasswordOtp = () => {
  const [otp, setOtp] = useState("");
  const [email, setEmail] = useState(null);
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();
  

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setLoading(true)
      await forgotPasswordOtp(otp);
      sessionStorage.setItem("otp", otp);
      toast.success("Otp Successfully Verified!");
      navigate("/resetpassword");
    } catch (error) {
      setLoading(false)
      toast.error(error.response.data);
    } finally {
      setOtp("");
    }
  };

  return (
    <AuthBackground>
      <VerifyBody>
        <img src={Logo} alt="King Cabana Logo" />
        <h5 style={{ marginTop: "5%", fontWeight: "bold", color: "#484848" }}>
          Otp Verification
        </h5>
        <p style={{ textAlign: "center", fontSize: "12px" }}>
         {"Enter the verification code sent to" + " "}
         {setEmail ? (sessionStorage.getItem("email",email))
          : setEmail(sessionStorage.getItem("email"))}
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
          />
          <LongButton style={{ marginTop: "5%" }} type="submit">
           {loading ?<ImSpinner6 size={"1.5rem"} /> : "Verify"}
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
          >
            Resend code
          </p>
        </Form>
      </VerifyBody>
    </AuthBackground>
  );
};

export default ForgotPasswordOtp;
