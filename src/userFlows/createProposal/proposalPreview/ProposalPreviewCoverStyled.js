import styled from "styled-components";
import background from "../../../assets/images/faintLogoBg.png";

export const CoverImageHolder = styled.div`
  width: 100%;
  height: 80vh;
  padding: 0 5rem;

  img {
    object-fit: cover;
    width: 100%;
    height: 100%;
    border-radius: 5px;
  }

  @media screen and (max-width:480px){
    width:100%;
    padding : 0 1rem;
    height: 30vh;
  }
`;

export const CoverDetailsHolder = styled.div`
  width: 100%;
  padding: 2rem 5rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: fit-content;

  @media screen and (max-width:480px){
    width: 100%;
    padding: 2rem;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items : flex-start;
  }
`;

export const PreviewLogoBg = styled.div`
  width: 100%;
  height: 100vh;
  background: url(${background});
  background-repeat: no-repeat;
  background-position: center;
  background-size: 40%;

  @media screen and (orientation: landscape) and (max-width: 960px) {
    width: 100%;
    overflow-y: scroll;
  }
`;

export const PreparedByDiv = styled.div`
  height: 30vh;

  @media scren and (max-width:480px){
    height:fit-content;
  }
`

export const PreparedForDiv= styled.div`
height:30vh; 
text-align: right;

@media screen and (max-width:480px){
    text-align: left;
    height: fit-content;
    // margin-top:2%;
}
`

export const ProposalInner = styled.div`
  width: 100%;
  // height: 100%;
  padding: 3rem 5rem;


  @media screen and (max-width: 480px) {
    width: 100%;
    padding: 1rem 2rem;
  }
`;

export const UlInner = styled.ul`
  margin-left: 1.5%;


  @media screen and (max-width:480px){
    margin-left:5%;
  }
`

export const TableAndContentContainer = styled.div`
margin-top: 3%;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;

`

export const OrganizerAsk = styled.div`
  width : 100%;
  margin-top : 5%;

  p{
    margin-top : 2%;
  }

  @media screen and (max-width:480px){
    p{
        font-size: 14px;
    }
  }
`

export const Confidential = styled.div`
width: 100%;
margin-top:5%;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;

p{
    text-align : center;
    margin-top : 2%;
}

@media screen and (max-width: 480px){
    p{
        font-size: 14px;
        margin-top : 5%;
    }
}
`

export const TableContainer = styled.div`
  display: table;
  width: 100%;
`;

export const TableRow = styled.div`
  display: table-row;
`;

export const TableHeaderCell = styled.div`
  display: table-cell;
  width: 100px;
  height: 40px;
  padding: 10px;
  //   font-weight: bold;
  text-align: left;
  border-bottom: 1px solid #d3d3d3;
`;

export const TableDataCell = styled.div`
  display: table-cell;
  width: 100px;
  height: 40px;
  padding: 10px;
  text-align: left;
  border-bottom: 1px solid #d3d3d3;
`;
