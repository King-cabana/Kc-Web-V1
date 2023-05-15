import styled from "styled-components";

export const FormContainer = styled.div`
  align-items: center;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  height: 100%;
  border: 1px dashed rgba(0, 104, 255, 0.1);
`;

export const Input = styled.input`
  ::placeholder {
    font-weight: 400;
    font-size: 14px;
    line-height: 20px;
    display: flex;
    align-items: center;
    color: #484848;
    opacity: 0.5;
  }
  &:invalid {
    border-left: 2px solid red;
    border-right: 2px solid red;
  }
  &:valid {
    border: 1px solid rgba(0, 104, 255, 0.1);
  }

  display: flex;
  padding: 15px;
  flex-direction: row;
  gap: 10px;
  align-items: center;
  width: 100%;
  height: 64px;
  border-radius: 10px;
  border: 1px solid rgba(0, 104, 255, 0.1);
  outline: none;
  -moz-appearance: textfield;

  @media screen and (max-width: 960px) {
    height: 40px;
    ::placeholder {
      font-size: 12px;
      line-height: 18px;
    }
  }

  ::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
  ::-webkit-outer-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
`;

export const InputBoxOther = styled.div`
  display: ${(props) => (props.display ? props.display : "none")};
  flex-direction: column;
  align-items: flex-start;
  gap: 15px;
  width: 100%;

  @media screen and (max-width: 768px) {
    padding: 5px;
    margin-left: 0;
  }
`;

export const CheckBoxContainer = styled.div`
  display: ${(props) => (props.display ? props.display : "none")};
  flex-direction: column;
  align-items: flex-start;
  gap: 5px;
  width: 100%;
  height: 100%;
  border-radius: 10px;
`;

export const InputSection = styled.section`
  border: 1px solid rgba(0, 104, 255, 0.1);
  display: flex;
  justify-content: space-between;
  width: 100%;
  padding: 1rem;
  color: #484848;
  opacity: 0.5;
  font-weight: 400;
  font-size: 20px;
  line-height: 30px;
  display: flex;
  align-items: center;

  @media screen and (max-width: 960px) {
    height: 50px;
    font-size: 15px;
  }
`;

export const CheckHeader = styled.div`
  /* box-sizing: border-box; */
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 15px;
  gap: 25px;
  width: 100%;
  height: 100%;
  background: #ffffff;
  opacity: 0.7;
  border: 1px solid rgba(0, 104, 255, 0.1);
  border-radius: 10px;

  h1 {
    font-weight: 400;
    font-size: 20px;
    line-height: 30px;
    display: flex;
    align-items: center;

    @media screen and (max-width: 960px) {
      font-size: 15px;
    }
  }
  @media screen and (max-width: 960px) {
    font-size: 15px;
    height: 50px;
  }
`;

export const CheckBoxInput = styled.div`
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 15px;
  gap: 25px;
  width: 100%;
  height: 100%;
  background: #ffffff;
  opacity: 0.7;
  border: 1px solid rgba(0, 104, 255, 0.1);
  border-radius: 10px;
  font-weight: 400;
  font-size: 20px;
  line-height: 30px;
  display: flex;
  align-items: center;

  label {
    font-weight: 400;
    font-size: 20px;
    line-height: 30px;
    display: flex;
    align-items: center;
    color: #484848;

    @media screen and (max-width: 960px) {
      font-size: 15px;
    }
  }
  @media screen and (max-width: 960px) {
    height: 50px;
  }
`;

export const InputText = styled.label`
  font-weight: 500;
  font-size: ${(props) => (props.fontSize ? props.fontSize : "18px")};
  line-height: 26px;
  align-items: center;
  color: #484848;
  margin-bottom: 1rem;

  @media screen and (max-width: 960px) {
    font-size: 12px;
    line-height: 18px;
  }
`;

export const SmallerInputText = styled(InputText)`
  display: flex;
  align-items: center;
  /* justify-content: center; */
  font-size: 16px;
  line-height: 18px;
  width: 40%;
  margin-left: 1rem;
  margin-top: 1rem;

  @media screen and (max-width: 960px) {
    font-size: 11px;
    line-height: 14px;
    width: auto;
  }
  @media screen and (max-width: 320px) {
    margin-left: 0.3rem;
  }
`;

export const SmallText = styled.p`
  font-weight: 400;
  font-size: 14px;
  line-height: 20px;
  display: flex;
  align-items: center;
  color: #484848;
  margin-top: 10px;
`;

export const MyTextArea = styled.textarea`
  &:invalid {
    border-left: 2px solid red;
    border-right: 2px solid red;
  }
  &:valid {
    border: 1px solid rgba(0, 104, 255, 0.1);
  }
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  padding: 15px;
  gap: 10px;
  width: 100%;
  height: 181px;
  background: #ffffff;
  border: 1px solid rgba(0, 104, 255, 0.1);
  border-radius: 10px;
  outline: none;
`;

export const Number = styled.p`
  font-weight: 400;
  font-size: 14px;
  line-height: 20px;
  display: flex;
  align-items: center;
  color: #484848;
`;
export const FormImage = styled.div`
  width: 100%;
  height: 100%;
  align-items: center;
  flex-direction: column;
`;

export const UploadBtn = styled.label`
  display: flex;
  width: 150px;
  height: 50px;
  align-items: center;
  justify-content: center;
  border-radius: 8px;
  background-color: #ff2957;
  color: white;
  border: 1px solid transparent;
  outline: none;
  cursor: pointer;
  font-weight: 600;

  &:hover {
    background-color: rgba(255, 41, 87, 0.8);
    color: white;
  }

  &:disabled {
    background-color: rgba(255, 41, 87, 0.3);
    color: rgba(255, 255, 255, 0.3);
  }
  @media screen and (max-width: 960px) {
    width: 80px;
    height: 46px;
    font-size: 15px;
  }
`;

export const FileWrapper = styled.section`
  margin-top: 3rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  position: relative;

  @media screen and (max-width: 960px) {
    margin-bottom: 1rem;
  }
`;

export const CustomWrapper = styled.div`
  position: relative;
  max-width: 90px;
  height: 46px;
  z-index: 2;
  cursor: pointer;
  opacity: 0;
`;

export const Supported = styled.div`
  font-weight: 400;
  font-size: 12px;
  line-height: 18px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #484848;

  @media screen and (max-width: 960px) {
    font-size: 8px;
    line-height: 18px;
    margin-bottom: -0.3rem;
  }
`;
