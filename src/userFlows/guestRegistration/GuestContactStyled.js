import styled from "styled-components";
import Drums from "../../assets/images/brian-erickson-JzZ8MofTlQw-unsplash.jpg";

export const GuestContactBg = styled.div`
  width: 100%;
  background: #f5f5f5;
  align-items: center;
  justify-content: center;
  display: flex;
  flex-direction: column;
  padding-bottom: 15%;

  @media screen and (max-width: 460px) {
    padding-bottom: 50%;
  }
`;

export const GCBody = styled.div`
  height: 90vh;
  width: 60vw;
  background-color: white;
  border-radius: 5px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  display: flex;
  justify-content: center;
  align-item: center;
  margin-top: 5%;

  @media screen and (max-width: 960px) {
    height: 75vh;
    width: 90vw;
    border-radius: 3px;
    box-shadow: none;
  }
`;

export const GCFormPart = styled.div`
  height: inherit;
  width: 30vw;
  padding: 3%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-item: center;

  img {
    display: block;
    margin-left: auto;
    margin-right: auto;
  }

  @media screen and (max-width: 960px) {
    width: inherit;
  }
`;

export const GCPicPart = styled.div`
  width: 30vw;
  border-radius: 0 5px 5px 0;
  background: url(${Drums});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  object-fit: center;
  opacity: 40%;

  @media screen and (max-width: 960px) {
    display: none;
  }
`;

export const TagHolder = styled.div`
  width: 100%;
  justify-content: left;
  align-items: center;
  margin-top: 4%;
  padding: 0 20%;

  @media screen and (max-width: 480px) {
    padding: 0 6%;
  }
`;
