import styled from "styled-components";
import { Link } from "react-router-dom";




export const SignUpBody = styled.div`
    width: 40%;
    height: 95vh;
    padding: 2%;
    border-radius: 6px;
    box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: white;
    

    @media screen and (max-width: 960px) {
        width: 90%;
        border-radius: 3px;
        padding: 5% 2%;
        box-shadow: none;
        
    }

    @media screen and (orientation: landscape) and (max-width: 960px){
        width : 70%;
        margin-top : 40%;
        height: max-content;
       
      }

`

export const SignUpContent = styled.div` 
    // width: 30vw;
    // padding: 5%;
    
   
    img{
        display: block;
        margin-left: auto;
        margin-right: auto;
    }
    

    
    @media screen and (max-width: 960px){
        width: 90%;
        padding: 0;
  
}

@media screen and (max-width: 480px){
        width: 95%;
        
  
}
`

export const InputFieldFlex = styled.div`
    display: flex;
    justify-content: space-between;
    // align-items: center;
    gap: 15px;

`

export const LabelInputHolder = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
`

export const LogInLink = styled(Link)`
  font-size: 12px;
  color: black;
  text-decoration: none;

  &:hover{
    color: black;
  }
  
  span {
    text-decoration: none;
    color:#ff2957;
    font-weight:500; 
  }
`;


export const VerifyBody = styled.div`
    width: 30%;
    background-color: white;
    border-radius: 6px;
    box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
    padding: 2%;

    h5{
        text-align: center;
        font-weight: 500;
    }

    img{
        margin-top: 3%;
        display: block;
        margin-left: auto;
        margin-right: auto;
    }


    @media screen and (max-width: 960px) {
        width: 90%;
        display: flex;
        flex-direction : column;
        justify-content : center;
        align-items : center;
        border-radius: 3px;
        padding: 6%;
        box-shadow: none;
}

 @media screen and (orientation: landscape) and (max-width: 960px){
        width : 70%;
        margin-top : 40%;
        height: max-content;
      }

`