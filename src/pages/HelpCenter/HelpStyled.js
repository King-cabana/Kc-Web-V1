import styled from "styled-components";

export const HelpPage = styled.div`
  padding: 4%;
`;

export const HelpBody = styled.div`
  padding: 1rem 0em;
  h3 {
    color: #484848;
    width: 900px;
    height: 44px;
    /* text-align: center; */
      font-weight: 900%;
    font-size: 30px;
    line-height: 40px;
    margin: 20px 0;
    padding: 20px 0;
  }

  /*     
  @media screen and (max-width: 768px){
    display:block; */

  @media screen and (max-width: 768px) {
    padding: 1rem;
    font-size: 30px;
    font-size: 30px;
    line-height: 40px;
    margin: 20px 0;
    padding: 20px 0;
    line-height: 1.2;
    width: 100%; 
    padding-top: 5%;
    margin-top: 5%; 

  }
`;

export const HelpDetail = styled.div`
  h1 {
    width: 900%;
    height: 180px;
    display: inline;
    font-weight: 700;
    font-size: 48px;
    line-height: 60px;
    overflow-wrap: break-word;
  }
  h3 {
    /* width: 798px;
    height: 28px; */
    color: #484848;
    text-align: left;
    font-style: normal;
    font-weight: 700;
    font-size: 18px;
    line-height: 28px;
    margin: 20px 0;
    /* width: 1400px;
height: 470px; */
  }
`;

export const Help = styled.div`
  h3 {
    font-weight: 900;
    font-size: 20px;
    line-height: 60px;
    width: 100%;
    height: 100%;
    font-weight: bold;
  }
  p {
    font-size: 16px;
  }
  span {
    margin-left: 1rem;
  }
  h3,
  p {
    font-style: normal;
    color: "#484848";
    font-size: 20px;
  }
  ul li {
    /* margin-left: 30px; */
    width: 100%;
    height: 100%;
    /* font-weight: 60; */
    font-size: 20px;
    list-style: none;
    margin-bottom: 50px;
  }
  margin-top: 20px;
  margin-bottom: 30px;
`;
export const SubSection = styled.div`
  h3 {
    display: inline;
    margin-left: 10px;
  }
  display: flex;
  align-items: center;
  gap: 10px;
  font-size: 30px;

  @media screen and (max-width: 768px) {
    display: block;
  }
`;

export const HeaderHolder = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
  width: fit-content;
`;
