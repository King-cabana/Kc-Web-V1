import styled from "styled-components";

export const KBDisplay2xl = styled.h1`
  font-size: 72px;
  line-height: 90px;
  font-weight: ${(props) => props.fontWeight};
  color: ${(props) => props.color};
`;

export const KBDisplayXl = styled.p`
  font-size: 60px;
  line-height: 72px;
  font-weight: ${(props) => props.fontWeight};
  color: ${(props) => props.color};
`;

export const KBDisplayL = styled.h1`
  font-size: 48px;
  line-height: 60px;
  font-weight: ${(props) => props.fontWeight};
  color: ${(props) => props.color};

  @media screen and (max-width: 480px) {
    font-size: 36px;
  }
`;

export const KBDisplayM = styled.p`
  font-size: 36px;
  line-height: 44px;
  font-weight: ${(props) => props.fontWeight};
  color: ${(props) => props.color};

  @media screen and (max-width: 480px) {
    font-size: 30px;
  }
`;

export const KBDisplayS = styled.p`
  font-size: 30px;
  line-height: 38px;
  font-weight: ${(props) => props.fontWeight};
  color: ${(props) => props.color};
`;

export const KBDisplayXs = styled.p`
  font-size: 22px;
  line-height: 32px;
  font-weight: ${(props) => props.fontWeight};
  color: ${(props) => props.color};
`;

export const KBTextXl = styled.p`
  font-size: 20px;
  line-height: 30px;
  font-weight: ${(props) => props.fontWeight};
  color: ${(props) => props.color};
`;

export const KBTextL = styled.p`
  font-size: 18px;
  line-height: 28px;
  font-weight: ${(props) => props.fontWeight};
  color: ${(props) => props.color};

  @media screen and (max-width: 480px) {
    font-size: 14px;
  }
`;

export const KBTextM = styled.p`
  font-size: 16px;
  line-height: 24px;
  font-weight: ${(props) => props.fontWeight};
  color: ${(props) => props.color};
`;

export const KBTextS = styled.p`
  font-size: 14px;
  line-height: 20px;
  font-weight: ${(props) => props.fontWeight};
  color: ${(props) => props.color};
`;

export const KBTextXs = styled.p`
  font-size: 12px;
  line-height: 18px;
  font-weight: ${(props) => props.fontWeight};
  color: ${(props) => props.color};

  && span{
    color: #ff2957;
  }
`;

export const ErrorText = styled.p`
  color: red;
  font-size: 10px;
  text-align: left;
  margin-top: 2%;
`
