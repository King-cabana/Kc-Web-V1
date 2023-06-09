import styled from "styled-components"
import background from "../../../assets/images/faintLogoBg.png"

export const CoverImageHolder = styled.div`
width:100%;
height:80vh;
padding:0 5rem;

img{
    object-fit:cover;
    width:100%;
    height:100%;
    border-radius: 5px;
}
`

export const CoverDetailsHolder= styled.div`
    width: 100%;
    padding: 2rem 5rem;
    display:flex;
    align-items: center;
    justify-content: space-between;
    height: fit-content;
`


export const PreviewLogoBg = styled.div`
width: 100%;
height: 100vh;
background: url(${background});
background-repeat: no-repeat;
background-position: center;
background-size: 40%;


@media screen and (orientation: landscape) and (max-width: 960px){
    width : 100%;
    overflow-y : scroll;
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
border-bottom: 1px solid #D3D3D3;
`;

export const TableDataCell = styled.div`
display: table-cell;
width: 100px;
height: 40px;
padding: 10px;
text-align: left;
border-bottom: 1px solid #D3D3D3;
`;
