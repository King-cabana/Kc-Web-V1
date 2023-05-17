import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  ChechkBox,
  Form,
  RadioButton,
  RadioButtonWrapper,
  InputOthers,
  Valueholder,
} from "../../globalStyles";
import { ButtonContainer, Label } from "./DefineAudienceStyled";
import {
  AlternativeButton2,
  AbsolutePrimaryButton,
} from "../../components/button/button";
import { RadioInput } from "../createEvent/ContactInfoStyled";
import { useNavigate, useLocation } from "react-router-dom";
import {
  BudgetInventoryContainer,
  BudgetInventoryHeader,
  BudgetInventorySubtitle,
  BudgetSection,
  BudgetTitle1,
} from "../budgetInventory/BudgetStyled";
import {
  editGenerally,
  editCheckbox,
  addToList,
} from "../../redux/slices/createEventSlice";
import { InputText } from "../createEvent/FirstCreateEventStyled";

const DefineAudience = ({ padding }) => {
  const dispatch = useDispatch();
  const state = useSelector((state) => state.createEvent);
  const location = useLocation();
  const [otherGender, setOtherGender] = useState(
    Boolean(state.genderListNew?.length)
  );
  const [otherReligion, setOtherReligion] = useState(
    Boolean(state.religionListNew?.length)
  );
  const [otherStatus, setOtherStatus] = useState(
    Boolean(state.maritalStatusListNew?.length)
  );
  const [otherEmployment, setOtherEmployment] = useState(
    Boolean(state.employmentStatusListNew?.length)
  );
  const [otherEducation, setOtherEducation] = useState(
    Boolean(state.educationLevelListNew?.length)
  );
  const [progress, setProgress] = useState(0);
  const [gender, setGender] = useState("");
  const [religion, setReligion] = useState("");
  const [status, setStatus] = useState("");
  const [employment, setEmployment] = useState("");
  const [education, setEducation] = useState("");

  const navigate = useNavigate();

  const change = (e) => {
    dispatch(editGenerally({ name: e.target.name, value: e.target.value }));
  };

  const handleCheckboxChange = (e) => {
    const { name, value, checked } = e.target;
    const arr = state[name];
    const updatedArr = checked
      ? [...arr, value]
      : arr.filter((item) => item !== value);
    dispatch(editCheckbox({ category: name, item: updatedArr }));
  };

  const navigateBack = (e) => {
    e.preventDefault();
    navigate("/createevent/eventdetails/3");
  };

  const navigateNext = (e) => {
    e.preventDefault();
    gender
      ? dispatch(addToList({ listType: "genderList", newItem: gender }))
      : dispatch(addToList({ listType: "genderList", newItem: "" }));
    religion
      ? dispatch(addToList({ listType: "religionList", newItem: religion }))
      : dispatch(addToList({ listType: "religionList", newItem: "" }));
    status
      ? dispatch(addToList({ listType: "maritalStatusList", newItem: status }))
      : dispatch(addToList({ listType: "maritalStatusList", newItem: "" }));
    employment
      ? dispatch(
          addToList({ listType: "employmentStatusList", newItem: employment })
        )
      : dispatch(addToList({ listType: "employmentStatusList", newItem: "" }));
    education
      ? dispatch(
          addToList({ listType: "educationLevelList", newItem: education })
        )
      : dispatch(addToList({ listType: "educationLevelList", newItem: "" }));
    navigate("/createevent/budget&inventory/1");
  };

  return (
    <BudgetInventoryContainer
      style={{
        padding: "2% 8%",
        padding: padding,
      }}
    >
      {location.pathname === "/eventPlanPreview" ? null : (
        <BudgetInventoryHeader>
          <BudgetTitle1>Define Audience</BudgetTitle1>
          <BudgetInventorySubtitle>
            Define your audience in terms of everyone who cares about what you
            do and the larger theme, not just the people who will attend.
          </BudgetInventorySubtitle>
        </BudgetInventoryHeader>
      )}
      <BudgetSection>
        <div>
          {location.pathname === "/eventPlanPreview" ? (
            <BudgetInventoryHeader style={{ marginBottom: "1rem" }}>
              <BudgetTitle1>Define Audience</BudgetTitle1>
              <BudgetInventorySubtitle>
                Define your audience in terms of everyone who cares about what
                you do and the larger theme, not just the people who will
                attend.
              </BudgetInventorySubtitle>
            </BudgetInventoryHeader>
          ) : null}

          <InputText>Age</InputText>
          <BudgetInventorySubtitle>
            What age range best describes your community?
          </BudgetInventorySubtitle>
          <Form>
            <div style={{ marginTop: "0.5%" }}>
              <RadioButtonWrapper>
                <Valueholder>
                  <RadioButton
                    name="ageRange"
                    id="17"
                    onChange={change}
                    value="17 and younger"
                    checked={
                      state.ageRange?.includes("17 and younger") ? true : false
                    }
                  />
                  <Label htmlFor="17">17 and younger</Label>
                </Valueholder>
              </RadioButtonWrapper>
              <RadioButtonWrapper>
                <Valueholder>
                  <RadioButton
                    name="ageRange"
                    id="18"
                    onChange={change}
                    value="18-20"
                    checked={state.ageRange?.includes("18-20") ? true : false}
                  />
                  <Label htmlFor="18">18-20</Label>
                </Valueholder>
              </RadioButtonWrapper>
              <RadioButtonWrapper>
                <Valueholder>
                  <RadioButton
                    name="ageRange"
                    id="21"
                    onChange={change}
                    value="21-29"
                    checked={state.ageRange?.includes("21-29") ? true : false}
                  />
                  <Label htmlFor="21">21-29</Label>
                </Valueholder>
              </RadioButtonWrapper>
              <RadioButtonWrapper>
                <Valueholder>
                  <RadioButton
                    name="ageRange"
                    id="30"
                    onChange={change}
                    value="30-39"
                    checked={state.ageRange?.includes("30-39") ? true : false}
                  />
                  <Label htmlFor="30">30-39</Label>
                </Valueholder>
              </RadioButtonWrapper>
              <RadioButtonWrapper>
                <Valueholder>
                  <RadioButton
                    name="ageRange"
                    id="40"
                    onChange={change}
                    value="40-49"
                    checked={state.ageRange?.includes("40-49") ? true : false}
                  />
                  <Label htmlFor="40">40-49</Label>
                </Valueholder>
              </RadioButtonWrapper>
              <RadioButtonWrapper>
                <Valueholder>
                  <RadioButton
                    name="ageRange"
                    id="50"
                    onChange={change}
                    value="50-59"
                    checked={state.ageRange?.includes("50-59") ? true : false}
                  />
                  <Label htmlFor="50">50-59</Label>
                </Valueholder>
              </RadioButtonWrapper>
              <RadioButtonWrapper>
                <Valueholder>
                  <RadioButton
                    name="ageRange"
                    id="60"
                    onChange={change}
                    value="60 and older"
                    checked={
                      state.ageRange?.includes("60 and older") ? true : false
                    }
                  />
                  <Label htmlFor="60">60 and older</Label>
                </Valueholder>
              </RadioButtonWrapper>
            </div>
          </Form>
        </div>

        <div style={{ marginTop: "2%" }}>
          <InputText fontWeight={500}>Income range</InputText>
          <BudgetInventorySubtitle>
            What income range (in Naira) best describes the people connected to
            your event?
          </BudgetInventorySubtitle>
          <Form>
            <div style={{ marginTop: "2%" }}>
              <RadioButtonWrapper>
                <Valueholder>
                  <RadioButton
                    name="income"
                    id="0"
                    onChange={change}
                    value="0 - 49,999"
                    checked={
                      state.income?.includes("0 - 49,999") ? true : false
                    }
                  />
                  <Label htmlFor="0">0 - 49,999</Label>
                </Valueholder>
              </RadioButtonWrapper>
              <RadioButtonWrapper>
                <Valueholder>
                  <RadioButton
                    onChange={change}
                    value="50,000 - 99,999"
                    name="income"
                    id="50,000"
                    checked={
                      state.income?.includes("50,000 - 99,999") ? true : false
                    }
                  />
                  <Label htmlFor="50,000">50,000 - 99,999</Label>
                </Valueholder>
              </RadioButtonWrapper>
              <RadioButtonWrapper>
                <Valueholder>
                  <RadioButton
                    name="income"
                    id="100,000"
                    onChange={change}
                    value="100,000 and above"
                    checked={
                      state.income?.includes("100,000 and above") ? true : false
                    }
                  />
                  <Label htmlFor="100,000">100,000 and above</Label>
                </Valueholder>
              </RadioButtonWrapper>
            </div>
          </Form>
        </div>

        <div style={{ marginTop: "2%" }}>
          <InputText fontWeight={500}>Gender</InputText>
          <BudgetInventorySubtitle>
            Select one or more of the most predominant of your audience or
            specify for others
          </BudgetInventorySubtitle>
          <Form>
            <div style={{ marginTop: "2%" }}>
              <RadioButtonWrapper>
                <Valueholder>
                  <ChechkBox
                    name="genderList"
                    id="male"
                    value="Male"
                    checked={state.genderList?.includes("Male") ? true : false}
                    onChange={handleCheckboxChange}
                  />
                  <Label htmlFor="male">Male</Label>
                </Valueholder>
              </RadioButtonWrapper>
              <RadioButtonWrapper>
                <Valueholder>
                  <ChechkBox
                    name="genderList"
                    id="female"
                    value="Female"
                    checked={
                      state.genderList?.includes("Female") ? true : false
                    }
                    onChange={handleCheckboxChange}
                  />
                  <Label htmlFor="female">Female</Label>
                </Valueholder>
              </RadioButtonWrapper>

              <RadioButtonWrapper>
                <Valueholder>
                  <RadioInput
                    type="checkbox"
                    id="otherGender"
                    name="genderList"
                    onClick={() => setOtherGender(!otherGender)}
                  />
                  <Label htmlFor="otherGender">Others</Label>
                </Valueholder>
              </RadioButtonWrapper>
              <InputOthers
                name="genderList"
                type="text"
                placeholder="Specify for others(separating each with comma[,])"
                display={otherGender ? "flex" : "none"}
                defaultValue={state.genderListNew?.join(", ")}
                onChange={(e) => setGender(e.target.value)}
              ></InputOthers>
            </div>
          </Form>
        </div>

        <div style={{ marginTop: "2%" }}>
          <InputText fontWeight={500}>Religion</InputText>
          <BudgetInventorySubtitle>
            Select one or more of the most predominant of your audience or
            specify for “others”
          </BudgetInventorySubtitle>
          <Form>
            <div style={{ marginTop: "2%" }}>
              <RadioButtonWrapper>
                <Valueholder>
                  <ChechkBox
                    name="religionList"
                    id="christianity"
                    value="Christianity"
                    checked={
                      state.religionList?.includes("Christianity")
                        ? true
                        : false
                    }
                    onChange={handleCheckboxChange}
                  />
                  <Label htmlFor="christianity">Christianity</Label>
                </Valueholder>
              </RadioButtonWrapper>
              <RadioButtonWrapper>
                <Valueholder>
                  <ChechkBox
                    name="religionList"
                    id="islam"
                    value="Islam"
                    checked={
                      state.religionList?.includes("Islam") ? true : false
                    }
                    onChange={handleCheckboxChange}
                  />
                  <Label htmlFor="islam">Islam</Label>
                </Valueholder>
              </RadioButtonWrapper>
              <RadioButtonWrapper>
                <Valueholder>
                  <RadioInput
                    type="checkbox"
                    id="otherReligion"
                    name="religionList"
                    onClick={() => setOtherReligion(!otherReligion)}
                  />
                  <Label htmlFor="otherReligion">Others</Label>
                </Valueholder>
              </RadioButtonWrapper>
              <InputOthers
                name="religionList"
                type="text"
                placeholder="Specify for others(separating each with comma[,])"
                display={otherReligion ? "flex" : "none"}
                defaultValue={state.religionListNew?.join(", ")}
                onChange={(e) => setReligion(e.target.value)}
              ></InputOthers>
            </div>
          </Form>
        </div>

        <div style={{ marginTop: "2%" }}>
          <InputText fontWeight={500}>Marital Status</InputText>
          <BudgetInventorySubtitle>
            Select one or more of the most predominant of your audience or
            specify for “others”
          </BudgetInventorySubtitle>
          <Form>
            <div style={{ marginTop: "2%" }}>
              <RadioButtonWrapper>
                <Valueholder>
                  <ChechkBox
                    name="maritalStatusList"
                    id="single"
                    value="Single"
                    checked={
                      state.maritalStatusList?.includes("Single") ? true : false
                    }
                    onChange={handleCheckboxChange}
                  />
                  <Label htmlFor="single">Single</Label>
                </Valueholder>
              </RadioButtonWrapper>
              <RadioButtonWrapper>
                <Valueholder>
                  <ChechkBox
                    name="maritalStatusList"
                    id="married"
                    value="Married"
                    checked={
                      state.maritalStatusList?.includes("Married")
                        ? true
                        : false
                    }
                    onChange={handleCheckboxChange}
                  />
                  <Label htmlFor="married">Married</Label>
                </Valueholder>
              </RadioButtonWrapper>
              <RadioButtonWrapper>
                <Valueholder>
                  <ChechkBox
                    name="maritalStatusList"
                    id="divorced"
                    value="Divorced"
                    checked={
                      state.maritalStatusList?.includes("Divorced")
                        ? true
                        : false
                    }
                    onChange={handleCheckboxChange}
                  />
                  <Label htmlFor="divorced">Divorced</Label>
                </Valueholder>
              </RadioButtonWrapper>
              <RadioButtonWrapper>
                <Valueholder>
                  <ChechkBox
                    name="maritalStatusList"
                    id="widowed"
                    value="Widowed"
                    checked={
                      state.maritalStatusList?.includes("Widowed")
                        ? true
                        : false
                    }
                    onChange={handleCheckboxChange}
                  />
                  <Label htmlFor="widowed">Widowed</Label>
                </Valueholder>
              </RadioButtonWrapper>
              <RadioButtonWrapper>
                <Valueholder>
                  <RadioInput
                    type="checkbox"
                    id="otherStatus"
                    name="maritalStatusList"
                    onClick={() => setOtherStatus(!otherStatus)}
                  />
                  <Label htmlFor="otherStatus">Others</Label>
                </Valueholder>
              </RadioButtonWrapper>
              <InputOthers
                type="text"
                name="maritalStatusList"
                placeholder="Specify for others(separating each with comma[,])"
                display={otherStatus ? "flex" : "none"}
                defaultValue={state.maritalStatusListNew?.join(", ")}
                onChange={(e) => setStatus(e.target.value)}
              ></InputOthers>
            </div>
          </Form>
        </div>

        <div style={{ marginTop: "2%" }}>
          <InputText fontWeight={500}>Employment status</InputText>
          <BudgetInventorySubtitle>
            Select one or more of the most predominant of your audience or
            specify for “others”
          </BudgetInventorySubtitle>
          <Form>
            <div style={{ marginTop: "2%" }}>
              <RadioButtonWrapper>
                <Valueholder>
                  <ChechkBox
                    name="employmentStatusList"
                    id="employed"
                    value="Employed"
                    checked={
                      state.employmentStatusList?.includes("Employed")
                        ? true
                        : false
                    }
                    onChange={handleCheckboxChange}
                  />
                  <Label htmlFor="employed">Employed</Label>
                </Valueholder>
              </RadioButtonWrapper>
              <RadioButtonWrapper>
                <Valueholder>
                  <ChechkBox
                    name="employmentStatusList"
                    id="selfEmployed"
                    value="Self Employed"
                    checked={
                      state.employmentStatusList?.includes("Self Employed")
                        ? true
                        : false
                    }
                    onChange={handleCheckboxChange}
                  />
                  <Label htmlFor="selfEmployed">Self Employed</Label>
                </Valueholder>
              </RadioButtonWrapper>
              <RadioButtonWrapper>
                <Valueholder>
                  <ChechkBox
                    name="employmentStatusList"
                    id="unemployed"
                    value="Unemployed"
                    checked={
                      state.employmentStatusList?.includes("Unemployed")
                        ? true
                        : false
                    }
                    onChange={handleCheckboxChange}
                  />
                  <Label htmlFor="unemployed">Unemployed</Label>
                </Valueholder>
              </RadioButtonWrapper>
              <RadioButtonWrapper>
                <Valueholder>
                  <ChechkBox
                    name="employmentStatusList"
                    id="retired"
                    value="Retired"
                    checked={
                      state.employmentStatusList?.includes("Retired")
                        ? true
                        : false
                    }
                    onChange={handleCheckboxChange}
                  />
                  <Label htmlFor="retired">Retired</Label>
                </Valueholder>
              </RadioButtonWrapper>
              <RadioButtonWrapper>
                <Valueholder>
                  <RadioInput
                    type="checkbox"
                    id="otherEmployment"
                    name="employmentStatusList"
                    onClick={() => setOtherEmployment(!otherEmployment)}
                  />
                  <Label htmlFor="otherEmployment">Others</Label>
                </Valueholder>
              </RadioButtonWrapper>
              <InputOthers
                type="text"
                name="employmentStatusList"
                placeholder="Specify for others(separating each with comma[,])"
                display={otherEmployment ? "flex" : "none"}
                defaultValue={state.employmentStatusListNew?.join(", ")}
                onChange={(e) => setEmployment(e.target.value)}
              ></InputOthers>
            </div>
          </Form>
        </div>

        <div style={{ marginTop: "2%" }}>
          <InputText fontWeight={500}>Educational level</InputText>
          <BudgetInventorySubtitle>
            Select one or more of the most predominant of your audience or
            specify for “others”
          </BudgetInventorySubtitle>
          <Form>
            <div style={{ marginTop: "2%" }}>
              <RadioButtonWrapper>
                <Valueholder>
                  <ChechkBox
                    name="educationLevelList"
                    id="highSchool"
                    value="High School"
                    checked={
                      state.educationLevelList?.includes("High School")
                        ? true
                        : false
                    }
                    onChange={handleCheckboxChange}
                  />
                  <Label htmlFor="highSchool">High School</Label>
                </Valueholder>
              </RadioButtonWrapper>
              <RadioButtonWrapper>
                <Valueholder>
                  <ChechkBox
                    name="educationLevelList"
                    id="college/poly"
                    value="College/Polytechnic"
                    checked={
                      state.educationLevelList?.includes("College/Polytechnic")
                        ? true
                        : false
                    }
                    onChange={handleCheckboxChange}
                  />
                  <Label htmlFor="college/poly">College/Polytechnic</Label>
                </Valueholder>
              </RadioButtonWrapper>
              <RadioButtonWrapper>
                <Valueholder>
                  <ChechkBox
                    name="educationLevelList"
                    id="bachelor"
                    value="Bachelor's"
                    checked={
                      state.educationLevelList?.includes("Bachelor's")
                        ? true
                        : false
                    }
                    onChange={handleCheckboxChange}
                  />
                  <Label htmlFor="bachelor">Bachelor’s</Label>
                </Valueholder>
              </RadioButtonWrapper>
              <RadioButtonWrapper>
                <Valueholder>
                  <ChechkBox
                    name="educationLevelList"
                    id="masters"
                    value="Master's"
                    checked={
                      state.educationLevelList?.includes("Master's")
                        ? true
                        : false
                    }
                    onChange={handleCheckboxChange}
                  />
                  <Label htmlFor="masters">Master’s</Label>
                </Valueholder>
              </RadioButtonWrapper>
              <RadioButtonWrapper>
                <Valueholder>
                  <RadioInput
                    type="checkbox"
                    name="educationLevelList"
                    id="otherEducation"
                    onClick={() => setOtherEducation(!otherEducation)}
                  />
                  <Label htmlFor="otherEducation">Others</Label>
                </Valueholder>
              </RadioButtonWrapper>
              <InputOthers
                type="text"
                name="educationLevelList"
                placeholder="Specify for others(separating each with comma[,])"
                display={otherEducation ? "flex" : "none"}
                defaultValue={state.educationLevelListNew?.join(", ")}
                onChange={(e) => setEducation(e.target.value)}
              ></InputOthers>
            </div>
          </Form>

          {location.pathname === "/eventPlanPreview" ? null : (
            <ButtonContainer style={{ margin: "0rem" }}>
              <AlternativeButton2
                onClick={navigateBack}
                style={{
                  color: "#FF2957",
                  fontWeight: "600",
                  marginRight: "2rem",
                }}
              >
                Back
              </AlternativeButton2>
              <AbsolutePrimaryButton onClick={navigateNext}>
                Save & Continue
              </AbsolutePrimaryButton>
            </ButtonContainer>
          )}
        </div>
      </BudgetSection>
    </BudgetInventoryContainer>
  );
};

export default DefineAudience;
