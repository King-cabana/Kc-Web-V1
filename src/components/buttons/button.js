import styled from "styled-components";

//medium buttons (for the regular webpage)

export const PrimaryButton = styled.button`
  width: 150px;
  height: 50px;
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
    font-size: 10px;
    line-height: 12px;
    padding: 0.2rem 0.5rem;
  }
  /* height: 35px;
    width: auto;
  } */

  @media screen and (orientation: landscape) and (max-width: 960px) {
    height: 35px;
    width: 120px;
  }
`;

export const AbsolutePrimaryButton = styled(PrimaryButton)`
  /* display: flex;
  justify-content: center;
  align-items: center; */
  @media screen and (max-width: 960px) {
    font-size: 10px;
    line-height: 12px;
    padding: 0.2rem 0.5rem;
    height: 35px;
    width: auto;
  }
`;

export const ModalPrimaryButton = styled(PrimaryButton)`
  margin-left: 1.5rem;

  @media screen and (max-width: 960px) {
    width: auto;
    height: 35px;
  }
`;

export const PrimaryButton3 = styled.button`
  position: absolute;
  top: 0;
  left: 0;
  z-index: 1;
  width: 100%;
  height: 40px;
  border-radius: 8px;
  background-color: #ff2957;
  color: white;
  border: 1px solid transparent;
  outline: none;
  cursor: pointer;
  font-weight: 600;
  margin-top: -0.35rem;
  /* font-size: 16px;
  line-height: 24px; */

  &:hover {
    background-color: rgba(255, 41, 87, 0.8);
    color: white;
  }

  &:disabled {
    background-color: rgba(255, 41, 87, 0.3);
    color: rgba(255, 255, 255, 0.3);
  }

  @media screen and (max-width: 960px) {
    font-size: 10px;
    line-height: 18px;
  }
`;

export const AlternativeButton = styled.button`
  width: 150px;
  height: 50px;
  border-radius: 8px;
  background-color: transparent;
  color: ${(props) => (props.color ? props.color : "#ff2957")};
  border: 2px solid #ff2957;
  cursor: pointer;
  font-weight: ${(props) => props.fontWeight};

  &:hover {
    color: #ff2957;
  }

  &:disabled {
    background-color: white;
    color: white;
    border: 1.5px solid rgba(255, 41, 87, 0.6);
  }

  @media screen and (orientation: landscape) and (max-width: 960px) {
    height: 50px;
    width: 120px;
    font-size: 10px;
  }
`;

export const AlternativeButton2 = styled.button`
  width: 150px;
  height: 50px;
  border-radius: 8px;
  background-color: transparent;
  color: ${(props) => (props.color ? props.color : "#ff2957")};
  border: 1px solid #ff2957;
  cursor: pointer;
  font-weight: ${(props) => (props.fontWeight ? props.fontWeight : "600")};

  &:hover {
    color: #ff2957;
    border: 1px solid #f4d5dc;
  }

  &:disabled {
    background-color: white;
    color: white;
    border: 1px solid rgba(255, 41, 87, 0.6);
  }

  @media screen and (max-width: 960px) {
    font-size: 10px;
    line-height: 12px;
    padding: 0.2rem 0.5rem;
    height: 35px;
    width: auto;
  }
`;

export const TextButton = styled.button`
  color: #ff2957;
  font-size: 16px;
  font-weight: 600;
  border: transparent;
  outline: transparent;
  background-color: transparent;
  cursor: pointer;

  &:hover {
    color: white;
    text-shadow: 2px 2px 2px rgba(0, 0, 0, 0.2);
  }

  &:disabled {
    color: rgba(255, 41, 87, 0.6);
  }
`;

export const PryNavBtn = styled.button`
  padding: 10px 20px;
  border-radius: 5px;
  background-color: #ff2957;
  color: ${(props) => (props.color ? props.color : "white")};
  border: 1.5px solid #ff2957;
  cursor: pointer;
  font-weight: ${(props) => props.fontWeight};

  /* &:hover {
    color: #ff2957;
  } */

  /* &:disabled {
    background-color: white;
    color: white;
    border: 1.5px solid rgba(255, 41, 87, 0.6);
  } */
`;

export const AltNavBtn = styled.button`
  padding: 10px 20px;
  border-radius: 5px;
  background-color: transparent;
  color: ${(props) => (props.color ? props.color : "#ff2957")};
  border: 1.5px solid #ff2957;
  cursor: pointer;
  font-weight: ${(props) => props.fontWeight};

  /* &:hover {
    color: #ff2957;
  } */

  /* &:disabled {
    background-color: white;
    color: white;
    border: 1.5px solid rgba(255, 41, 87, 0.6);
  } */
`;
