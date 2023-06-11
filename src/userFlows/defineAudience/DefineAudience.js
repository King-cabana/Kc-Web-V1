import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  ChechkBox,
  Form,
  RadioButtonWrapper,
  InputOthers,
  Valueholder,
} from "../../globalStyles";
import {
  ButtonContainer,
  Label,
  RadioInput,
  BudgetInventoryContainer,
  BudgetInventoryHeader,
  BudgetInventorySubtitle,
  BudgetSection,
  BudgetTitle1,
  InputText,
} from "./DefineAudienceStyled";
import {
  AlternativeButton2,
  AbsolutePrimaryButton,
} from "../../components/buttons/Buttons";
import { useNavigate, useLocation } from "react-router-dom";
import {
  editAudienceCheckbox,
  addToList,
} from "../../redux/slices/proposalSlice";

const DefineAudience = ({ padding }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const state = useSelector((state) => state?.proposal?.demographyDto);
  // console.log(state);
  const location = useLocation();
  const [otherGender, setOtherGender] = useState(
    Boolean(state?.genderListNew?.length)
  );
  const [otherReligion, setOtherReligion] = useState(
    Boolean(state?.religionListNew?.length)
  );
  const [otherSkillLevel, setOtherSkillLevel] = useState(
    Boolean(state?.skillLevelListNew?.length)
  );
  const [otherEmployment, setOtherEmployment] = useState(
    Boolean(state?.employmentStatusListNew?.length)
  );
  const [otherEducation, setOtherEducation] = useState(
    Boolean(state?.educationLevelListNew?.length)
  );
  const [gender, setGender] = useState("");
  const [religion, setReligion] = useState("");
  const [skill, setSkill] = useState("");
  const [employment, setEmployment] = useState("");
  const [education, setEducation] = useState("");

  const handleCheckboxChange = (e) => {
    const { name, value, checked } = e.target;
    const arr = Array.isArray(state[name]) ? state[name] : [];
    const updatedArr = checked
      ? [...arr, value]
      : arr.filter((item) => item !== value);
    dispatch(editAudienceCheckbox({ category: name, item: updatedArr }));
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
    skill
      ? dispatch(addToList({ listType: "skillLevelList", newItem: skill }))
      : dispatch(addToList({ listType: "skillLevelList", newItem: "" }));
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
    // navigate("/createevent/budget&inventory/1");
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
                  <ChechkBox
                    name="ageRange"
                    id="15"
                    value="15 and younger"
                    checked={
                      state.ageRange?.includes("15 and younger") ? true : false
                    }
                    onChange={handleCheckboxChange}
                  />
                  <Label htmlFor="15">15 and younger</Label>
                </Valueholder>
              </RadioButtonWrapper>
              <RadioButtonWrapper>
                <Valueholder>
                  <ChechkBox
                    name="ageRange"
                    id="16"
                    value="16-29"
                    checked={state.ageRange?.includes("16-29") ? true : false}
                    onChange={handleCheckboxChange}
                  />
                  <Label htmlFor="16">16-29</Label>
                </Valueholder>
              </RadioButtonWrapper>
              <RadioButtonWrapper>
                <Valueholder>
                  <ChechkBox
                    name="ageRange"
                    id="30"
                    value="30-45"
                    checked={state.ageRange?.includes("30-45") ? true : false}
                    onChange={handleCheckboxChange}
                  />
                  <Label htmlFor="30">30-45</Label>
                </Valueholder>
              </RadioButtonWrapper>
              <RadioButtonWrapper>
                <Valueholder>
                  <ChechkBox
                    name="ageRange"
                    id="46"
                    value="46-59"
                    checked={state.ageRange?.includes("46-59") ? true : false}
                    onChange={handleCheckboxChange}
                  />
                  <Label htmlFor="46">46-59</Label>
                </Valueholder>
              </RadioButtonWrapper>
              <RadioButtonWrapper>
                <Valueholder>
                  <ChechkBox
                    name="ageRange"
                    id="60"
                    value="60 and above"
                    checked={
                      state.ageRange?.includes("60 and above") ? true : false
                    }
                    onChange={handleCheckboxChange}
                  />
                  <Label htmlFor="60">60 and above</Label>
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
                  <ChechkBox
                    name="income"
                    id="0"
                    onChange={handleCheckboxChange}
                    value="Below #50,000"
                    checked={
                      state.income?.includes("Below #50,000") ? true : false
                    }
                  />
                  <Label htmlFor="0">Below #50,000</Label>
                </Valueholder>
              </RadioButtonWrapper>
              <RadioButtonWrapper>
                <Valueholder>
                  <ChechkBox
                    name="income"
                    id="50,000"
                    onChange={handleCheckboxChange}
                    value="#50,000 - #99,999"
                    checked={
                      state.income?.includes("#50,000 - #99,999") ? true : false
                    }
                  />
                  <Label htmlFor="50,000">#50,000 - #99,999</Label>
                </Valueholder>
              </RadioButtonWrapper>
              <RadioButtonWrapper>
                <Valueholder>
                  <ChechkBox
                    name="income"
                    id="100,000"
                    onChange={handleCheckboxChange}
                    value="#100,000 - #499,999"
                    checked={
                      state.income?.includes("#100,000 - #499,999")
                        ? true
                        : false
                    }
                  />
                  <Label htmlFor="100,000">#100,000 - #499,999</Label>
                </Valueholder>
              </RadioButtonWrapper>
              <RadioButtonWrapper>
                <Valueholder>
                  <ChechkBox
                    onChange={handleCheckboxChange}
                    value="#500,000 - #999,999"
                    name="income"
                    id="500,000"
                    checked={
                      state.income?.includes("#500,000 - #999,999")
                        ? true
                        : false
                    }
                  />
                  <Label htmlFor="500,000">#500,000 - 999,999</Label>
                </Valueholder>
              </RadioButtonWrapper>
              <RadioButtonWrapper>
                <Valueholder>
                  <ChechkBox
                    name="income"
                    id="1,000,000"
                    onChange={handleCheckboxChange}
                    value="#1,000,000 and above"
                    checked={
                      state.income?.includes("#1,000,000 and above")
                        ? true
                        : false
                    }
                  />
                  <Label htmlFor="1,000,000">#1,000,000 and above</Label>
                </Valueholder>
              </RadioButtonWrapper>
            </div>
          </Form>
        </div>

        <div style={{ marginTop: "2%" }}>
          <InputText fontWeight={500}>Gender</InputText>
          <BudgetInventorySubtitle>
            Select one or more of the most predominant of your audience or
            specify for “others”
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
                  <ChechkBox
                    name="employmentStatusList"
                    id="disabled"
                    value="Disabled"
                    checked={
                      state.employmentStatusList?.includes("Disabled")
                        ? true
                        : false
                    }
                    onChange={handleCheckboxChange}
                  />
                  <Label htmlFor="disabled">Disabled</Label>
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
                    id="college"
                    value="College/Polytechnic/University/Post Graduate"
                    checked={
                      state.educationLevelList?.includes(
                        "College/Polytechnic/University/Post Graduate"
                      )
                        ? true
                        : false
                    }
                    onChange={handleCheckboxChange}
                  />
                  <Label htmlFor="college">
                    College/Polytechnic/University/Post Graduate
                  </Label>
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

          <div style={{ marginTop: "2%" }}>
            <InputText fontWeight={500}>Skill Level</InputText>
            <BudgetInventorySubtitle>
              Select area of set skills common to your event audience or specify
              for “others”.
            </BudgetInventorySubtitle>
            <Form>
              <div style={{ marginTop: "2%" }}>
                <RadioButtonWrapper>
                  <Valueholder>
                    <ChechkBox
                      name="skillLevelList"
                      id="unskilled"
                      value="Unskilled"
                      checked={
                        state.skillLevelList?.includes("Unskilled")
                          ? true
                          : false
                      }
                      onChange={handleCheckboxChange}
                    />
                    <Label htmlFor="unskilled">Unskilled</Label>
                  </Valueholder>
                </RadioButtonWrapper>
                <RadioButtonWrapper>
                  <Valueholder>
                    <ChechkBox
                      name="skillLevelList"
                      id="semiSkilled"
                      value="Semi-skilled"
                      checked={
                        state.skillLevelList?.includes("Semi-skilled")
                          ? true
                          : false
                      }
                      onChange={handleCheckboxChange}
                    />
                    <Label htmlFor="semiSkilled">Semi-skilled</Label>
                  </Valueholder>
                </RadioButtonWrapper>
                <RadioButtonWrapper>
                  <Valueholder>
                    <ChechkBox
                      name="skillLevelList"
                      id="skilled"
                      value="Skilled"
                      checked={
                        state.skillLevelList?.includes("Skilled") ? true : false
                      }
                      onChange={handleCheckboxChange}
                    />
                    <Label htmlFor="skilled">Skilled</Label>
                  </Valueholder>
                </RadioButtonWrapper>
                <RadioButtonWrapper>
                  <Valueholder>
                    <RadioInput
                      type="checkbox"
                      id="otherSkillLevel"
                      name="skillLevelList"
                      onClick={() => setOtherSkillLevel(!otherSkillLevel)}
                    />
                    <Label htmlFor="otherSkillLevel">Others</Label>
                  </Valueholder>
                </RadioButtonWrapper>
                <InputOthers
                  type="text"
                  name="skillLevelList"
                  placeholder="Specify for others(separating each with comma[,])"
                  display={otherSkillLevel ? "flex" : "none"}
                  defaultValue={state.skillLevelListNew?.join(", ")}
                  onChange={(e) => setSkill(e.target.value)}
                ></InputOthers>
              </div>
            </Form>
          </div>

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
