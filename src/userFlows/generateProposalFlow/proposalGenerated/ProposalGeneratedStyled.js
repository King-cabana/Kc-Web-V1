import { styled } from "styled-components";

export const TableOfContentInner = styled.div`
  margin-top: 5%;
  line-height: 2.5rem;
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media screen and (max-width: 480px){
    display: block;
  }
`;

export const TOCInnerDiv = styled.div`
  width : 40%;

  @media screen and (max-width: 480px){
    width: 100%;
    // text-align: left;
  }
`
