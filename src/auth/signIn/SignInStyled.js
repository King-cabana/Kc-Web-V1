import { styled } from "styled-components";
import background from "../../assets/images/evie-s-uuCjYxJVf4o-unsplash.jpg"

export const SignInBg = styled.div`
    width: 100%;
    height: 100vh;
    align-items: center;
    justify-content: center;
    display: flex;
    background: url(${background});
    bacground-repeat : no-repeat;
    background-position: right;
    background-size: cover;


@media screen and (orientation: landscape) and (max-width: 960px){
    width : 100%;
    overflow-y : scroll;
  }
`

export const SignInBody = styled.div`
    width: 33%;
    height: 90vh;
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

