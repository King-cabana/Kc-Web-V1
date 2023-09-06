import { Asterix, InputSeg } from "../../../pages/profile/organiserProfile/OrganiserProfileStyled";
import { Input, InputText, MyTextArea } from "../../createEvent/FirstCreateEventStyled";

const SetupInputs = ({ state, handleChange }) => {
  
  const inputData = [
    {
      label: "Organizer's Name",
      type: "text",
      placeholder: "Enter sponsor's name",
      name: "sponsorName",
      defaultValue: state?.sponsorName
    },
    {
      label: "Phone Number",
      type: "tel",
      placeholder: "Enter phone number",
      name: "sponsorPhoneNumber",
      defaultValue: state?.sponsorPhoneNumber,
      minLength: 5
    },
    {
      label: "Email Address",
      type: "email",
      placeholder: "Format: email@example.com",
      name: "sponsorEmail",
      title: "Email format: email@example.com",
      pattern: "^([a-zA-Z0-9_\-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([a-zA-Z0-9\-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$",
      defaultValue: state?.sponsorEmail,
    },
  ]

  return (
    <>
      {inputData?.map((data, index) => {
        return (
        <InputSeg style={{ margin: "1rem 0rem" }}>
          <InputText>
            {data?.label} <Asterix>*</Asterix>
          </InputText>
          <Input style={{ marginTop: "0.5rem" }}
            type={data?.type}
            placeholder={data?.placeholder}
            name={data?.name}
            minLength={data?.minLength}
            title={data?.title}
            pattern={data?.pattern}
            onChange={handleChange}
            defaultValue={data?.defaultValue}
            required
          />
        </InputSeg>
      )})}
      <InputSeg style={{ margin: "1rem 0rem" }}>
        <InputText>
          Sponsor's Details{" "}
          <Asterix>
            {state?.sponsorDetails?.length ??
              state?.sponsorDetails?.length}
            /250 Characters*
          </Asterix>
        </InputText>
        <MyTextArea style={{ marginTop: "0.5rem" }}
          type="textarea"
          row="4"
          name="organizerDetails"
          placeholder="Write a short bio: 250 characters maximum"
          maxLength={250}
          onChange={handleChange}
          defaultValue={state?.sponsorDetails}
        />
      </InputSeg>
    </>
  )
};

export default SetupInputs;