import React, { useEffect, useState } from "react";
import { ImSpinner6 } from "react-icons/im";
import { toast } from "react-toastify";
import { contactUs } from "../../redux/services/contactUsService";
import {
  Container,
  Form,
  ContactInfo,
  ContactText,
  InputInfo,
  InputBoxLabel,
  InputBox,
  ContactLabel,
} from "./ContactUsStyled";

const ContactInput = () => {
  const [loading, setLoading] = useState(false);
  const [isDisabled, setIsDisabled] = useState(true);
  const [inputs, setInput] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    message: "",
  });

  function inputChange(e) {
    setInput({ ...inputs, [e.target.name]: e.target.value });
  }

  const sendMessage = async (e) => {
    e.preventDefault();
    setLoading(true);
    setIsDisabled(true);
    try {
      await contactUs(inputs);
      toast.success(
        "Message sent successfully! One of our team will be in contact with you soon."
      );
    } catch (error) {
      console.log(error);
      toast.error("Unable to send message");
    } finally {
      setLoading(false);
      document.getElementById("contact-form").reset();
    }
  };

  useEffect(() => {
    const hasValues = Object.values(inputs).every((val) => val.trim() !== "");
    setIsDisabled(!hasValues);
  }, [inputs]);

  return (
    <>
      <Container>
        <Form id="contact-form">
          <ContactInfo>Contact us</ContactInfo>
          <ContactText style={{ marginTop: "-1.5rem" }}>
            Fill the form, our team is waiting to attend to you as soon as
            possible.
          </ContactText>

          <InputInfo>
            <InputBoxLabel>
              <ContactLabel>First Name</ContactLabel>
              <InputBox>
                <input
                  defaultValue={inputs.firstName}
                  type="text"
                  placeholder="Enter Your First Name"
                  name="firstName"
                  onChange={inputChange}
                />
              </InputBox>
            </InputBoxLabel>
            <InputBoxLabel>
              <ContactLabel>Last Name</ContactLabel>
              <InputBox>
                <input
                  type="text"
                  placeholder="Enter Your Last Name"
                  name="lastName"
                  onChange={inputChange}
                />
              </InputBox>
            </InputBoxLabel>
            <InputBoxLabel>
              <ContactLabel>E - Mail</ContactLabel>
              <InputBox>
                <input
                  type="email"
                  title="Email format: xxx@xxxx.xxx)"
                  pattern="^([a-zA-Z0-9_\-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([a-zA-Z0-9\-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$"
                  placeholder="Enter Your Email"
                  name="email"
                  onChange={inputChange}
                />
              </InputBox>
            </InputBoxLabel>
            <InputBoxLabel>
              <ContactLabel>Phone Number</ContactLabel>
              <InputBox>
                <input
                  type="tel"
                  placeholder="Enter Your Phone Number"
                  name="phoneNumber"
                  onChange={inputChange}
                  minLength={5}
                />
              </InputBox>
            </InputBoxLabel>
            <InputBoxLabel>
              <ContactLabel>Drop Messages</ContactLabel>
              <InputBox>
                <textarea
                  placeholder="What will you like us to provide you?"
                  name="message"
                  onChange={inputChange}
                />
              </InputBox>
            </InputBoxLabel>

            <button onClick={sendMessage} width="250px" disabled={isDisabled}>
              {loading ? <ImSpinner6 size="1.5rem" /> : "Send Message"}
            </button>
          </InputInfo>
        </Form>
      </Container>
    </>
  );
};

export default ContactInput;
