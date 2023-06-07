import styled from "styled-components";

export const AlignCenter = styled.p`
  display: flex;
  align-items: center;
`;

export const OptionsContainer = styled.div`
  width: 146px;
  height: 85px;
  padding: 1rem;
  border: 1px solid rgba(0, 104, 255, 0.1);
  background: #ffffff;
  border-radius: 8px;
  position: absolute;
  top: -4.4rem;
  right: 0;
  text-align: start;
  /* display: ${(props) => (props.display ? props.display : "none")}; */

  @media screen and (max-width: 960px) {
    height: 70px;
    width: 80px;
    top: -3.2rem;
    padding: 0.5rem;
  }
`;

export const OptionsText = styled.p`
  padding: 2px;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  color: ${(props) => (props.color ? props.color : "#484848")};
  &:hover {
    background-color: #f6e9ec;
    border-radius: 4px;
  }

  @media screen and (max-width: 960px) {
    font-size: 12px;
    line-height: 18px;
  }
`;
