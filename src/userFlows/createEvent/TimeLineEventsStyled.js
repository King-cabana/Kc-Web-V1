import styled from "styled-components";
import picture from "../../assets/images/picture.png";

export const CreateEventContainer = styled.div`
  width: 100%;
  height: 100%;
  padding: 3rem 5rem;
  background: url(${picture});

  @media screen and (max-width: 960px) {
    padding: 0.5rem;
  }
`;
export const CreateEventHeader = styled.section`
  width: 100%;
  height: 100%;
`;

export const EventText = styled.p`
  width: 100%;
  margin-bottom: 1rem;
  /* height: 100%; */

  @media screen and (max-width: 960px) {
    font-size: 15px;
    margin-bottom: 5px;
  }
`;

export const EventHeader1 = styled.h1`
  width: 100%;
  font-weight: 700;
  font-size: 24px;
  line-height: 32px;
  margin-bottom: 1rem;

  @media screen and (max-width: 768px) {
    font-size: 18px;
  }
`;

export const CreateEventSection = styled.section`
  width: 100%;
  height: 100%;
  margin-top: 1.5rem;
  padding: 0.8rem;
  background: white;
  margin-bottom: 3rem;

  @media screen and (max-width: 960px) {
    padding: 0.5rem;
    margin-top: 0.2rem;
    margin-bottom: 5rem;
  }
`;

export const EventSubSection = styled.section`
  width: 100%;
  height: 100%;
  padding: 1rem;
  gap: 15px;

  @media screen and (max-width: 960px) {
    padding: 0rem;
  }
`;

export const EventTagText = styled.p`
  width: 100%;
  height: 100%;
  font-size: 20px;
  line-height: 30px;
`;

export const InputTagBox = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  gap: 10px;
  justify-content: space-between;
  flex-direction: row;
  align-items: center;

  @media screen and (max-width: 960px) {
    height: 50px;
  }
`;

export const InputTag = styled.input`
  width: 100%;
  height: 70px;
  display: flex;
  align-items: center;
  border: 1px solid rgba(72, 72, 72, 0.1);
  border-radius: 10px;
  outline: none;

  ::placeholder {
    padding: 1rem;
    @media screen and (max-width: 960px) {
      font-size: 15px;
    }
  }
  @media screen and (max-width: 960px) {
    height: 50px;
    font-size: 15px;
  }
`;

export const AddButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 12px 2px;
  color: #ff2957;
  width: 100px;
  height: 50px;
  background: transparent;
  border-radius: 6px;
  border: 1px solid #ff2957;
  margin-right: 3rem;
  cursor: pointer;

  &:hover {
    color: #ff2957;
    border: 1px solid #f4d5dc;
  }

  @media screen and (max-width: 960px) {
    width: auto;
    height: 30px;
    font-size: 12px;
    margin-right: 0rem;
  }
`;

export const ErrorText = styled.p`
  margin-top: 0.5rem;
  margin-bottom: 1rem;
  color: #ff4646;
  font-size: 14px;
  line-height: 20px;

  @media screen and (max-width: 960px) {
    font-size: 12px;
    line-height: 18px;
  }
`;

export const EventButton = styled.button`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1px 24px;
  gap: 10px;
  color: #ff2957;
  width: 119px;
  height: 42px;
  height: 28px;
  border: 1px solid #ff2957;
  border-radius: 20px;
  background: transparent;
  @media screen and (max-width: 960px) {
    width: auto;
    height: 28px;
    font-size: 12px;
    padding: 1px 10px;
  }
`;

export const EventSetText = styled.p`
  font-size: 14px;
  line-height: 20px;
  color: #484848;
`;

export const InputBox = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  padding: 15px;
  gap: 25px;
  border: 1px solid rgba(0, 104, 255, 0.1);
  border-radius: 10px;
  margin-bottom: 1rem;

  input {
    width: 100%;
    outline: none;
    align-items: center;
    border: none;
  }
  @media screen and (max-width: 960px) {
    height: 50px;
  }
`;

export const AddOtherBox = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
`;

export const BlueText = styled.h6`
  padding-top: 6px;
  display: flex;
  font-size: 16px;
  line-height: 24px;
  color: #0068ff;
  align-items: center;
  margin-left: 1rem;
`;

export const Delete = styled.div`
  &:hover {
    background-color: #d3d3d3;
    cursor: pointer;
    border-radius: 70px;
    width: 15px;
  }
`;

export const TagsWrapper = styled.section`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;

  @media screen and (max-width: 960px) {
    /* flex-direction: column; */
    grid-template-columns: 1fr;
  }
`;
