import React, { useState } from "react";
import OtpInput from "react-otp-input";
import { LongButton, Form, AuthBackground } from "../../globalStyles";
import { VerifyBody } from "./SignUpStyled";
import Logo from "../../images/Logo.svg";
import { verifyEmail } from "../../redux/service/authService";
import { useNavigate } from "react-router";
import { toast } from "react-toastify";
import { ImSpinner6 } from "react-icons/im";

const VerifyEmail = () => {

  const [otp, setOtp] = useState("");
  const [loading, setLoading] = useState(false);
  const [email, setEmail] = useState(null)

  const navigate = useNavigate();

 const handleSubmit = async (e) => {
    
    e.preventDefault();
   try {
    setLoading(true)
    const res = await verifyEmail(otp);
    console.log(res)
    toast.success("Email Successfully verified!")
    navigate("/login");
   } catch (error) {
    setLoading(false)
    toast.error(error.response.data);
   }
   finally {
    setOtp("");
  }
  }

  // const resendCode = () => {

  // }
 

  return (
    <AuthBackground>
      <VerifyBody>
        <img src={Logo} alt="King Cabana Logo" />
        <h5 style={{ marginTop: "5%", fontWeight: "bold", color: "#484848" }}>
          Email Verification
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
          {loading ? <ImSpinner6 size={"1.5rem"} /> : "Verify"}
            </LongButton>
          <p
            style={{
              color: "#ff2957",
              fontWeight: "bold",
              textAlign: "center",
              fontSize: "12px",
              marginTop: "20px",
              cursor:'pointer'
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

export default VerifyEmail;
