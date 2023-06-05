import React, { useState, useEffect } from "react";
import {
  GCBody,
  GCFormPart,
  TagHolder,
  GuestContactBg,
  TagDisplay,
} from "./GuestContactStyled";
import { Form, InputFieldWrapper } from "../../globalStyles";
import TopBar from "../../components/topBar/TopBar";
import {
  BudgetTitle2,
  ButtonContainer,
} from "../createProposal/budgetInventory/BudgetStyled";
import { AbsolutePrimaryButton } from "../../components/buttons/button";
import { useNavigate, useParams } from "react-router";
import { Tags } from "./GuestRegistrationStyled";
import { API_URL_2 } from "../../redux/services/authService";
import axios from "axios";
import { guestRegister } from "../../redux/services/GuestContactRegister";
import { toast } from "react-toastify";
import { ImSpinner6 } from "react-icons/im";
import { decryptId } from "../../utils";

const GuestContact = () => {
  const [event, setEvent] = useState();
  const [sending, setSending] = useState(false);
  const [isDisabled, setIsDisabled] = useState(false);
  const { id } = useParams();
  // console.log(id);
  const decryptedId = decryptId(id);
  // console.log(decryptedId);

  const [inputs, setInput] = useState({
    eventId: decryptedId,
    firstName: "",
    lastName: "",
    email: "",
    confirmEmail: "",
  });

  function inputChange(e) {
    setInput({ ...inputs, [e.target.name]: e.target.value });
  }

  const navigate = useNavigate();
  const eventTags = event?.tags.map((tag) => <ul key={tag}>{tag}</ul>);

  useEffect(() => {
    const fetchEvent = async () => {
      // const token = localStorage.getItem("userToken");
      try {
        const { data } = await axios.get(API_URL_2 + `events/${decryptedId}`);
        setEvent(data);
      } catch (error) {
        if (error?.response?.status === 400) {
          navigate("*");
        }
        throw error;
      }
    };
    fetchEvent();
    return () => {};
  }, [decryptedId]);

  const handleRegister = async (e) => {
    e.preventDefault();
    setSending(true);
    setIsDisabled(true);
    try {
      await guestRegister(inputs);
      navigate("/guestRegistration/contactInformation/registered");
      // toast.success("You have successfully registered for this event");
    } catch (error) {
      error?.response
        ? toast.error(error?.response?.data?.message)
        : toast.error(error.message);
      setIsDisabled(false);
      setSending(false);
    } finally {
      setInput({
        firstName: "",
        lastName: "",
        email: "",
        confirmEmail: "",
      });
    }
  };

  return (
    <>
      <TopBar />
      <GuestContactBg>
        <GCBody>
          <GCFormPart>
            <p
              style={{
                fontSize: "22px",
                fontWeight: "bold",
                textAlign: "center",
              }}
            >
              Guest Contact Information
            </p>
            <p style={{ fontSize: "13px", textAlign: "center" }}>
              Please provide contact information for a more enjoyable
              experience.
            </p>
            <Form style={{ marginTop: "5%" }} onSubmit={handleRegister}>
              <label
                style={{
                  marginBottom: "2%",
                  fontSize: "14px",
                  fontWeight: "500",
                }}
              >
                First Name
              </label>
              <InputFieldWrapper>
                <input
                  placeholder="Enter your first name"
                  name="firstName"
                  onChange={inputChange}
                />
              </InputFieldWrapper>

              <label
                style={{
                  marginBottom: "2%",
                  fontSize: "14px",
                  fontWeight: "500",
                }}
              >
                Last Name
              </label>
              <InputFieldWrapper>
                <input
                  placeholder="Enter your last name"
                  name="lastName"
                  onChange={inputChange}
                />
              </InputFieldWrapper>

              <label
                style={{
                  marginBottom: "2%",
                  fontSize: "14px",
                  fontWeight: "500",
                }}
              >
                E-mail
              </label>
              <InputFieldWrapper>
                <input
                  placeholder="Enter your Email address"
                  name="email"
                  onChange={inputChange}
                />
              </InputFieldWrapper>

              <label
                style={{
                  marginBottom: "2%",
                  fontSize: "14px",
                  fontWeight: "500",
                }}
              >
                Confirm E-mail
              </label>
              <InputFieldWrapper>
                <input
                  placeholder="Re-enter your Email address"
                  name="confirmEmail"
                  onChange={inputChange}
                />
              </InputFieldWrapper>
            </Form>
          </GCFormPart>

          <TagHolder>
            <BudgetTitle2 style={{ marginBottom: "2%" }}>
              Event Tags
            </BudgetTitle2>
            <TagDisplay>
              <Tags style={{ padding: "1% 0%" }}>
                {event?.tags ? eventTags : "---"}
              </Tags>
            </TagDisplay>
          </TagHolder>
          {/* <GCPicPart /> */}
        </GCBody>
      </GuestContactBg>

      <ButtonContainer style={{ margin: "0rem" }}>
        <AbsolutePrimaryButton onClick={handleRegister} disabled={isDisabled}>
          {sending ? <ImSpinner6 size={"1.5rem"} /> : "Register"}
        </AbsolutePrimaryButton>
      </ButtonContainer>
    </>
  );
};

export default GuestContact;
