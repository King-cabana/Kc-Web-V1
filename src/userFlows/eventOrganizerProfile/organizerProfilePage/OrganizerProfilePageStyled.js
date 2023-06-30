import styled from "styled-components";

export const Info = styled.section`
width: 100%;
    display: flex;
    justify-content: space-between;
    margin-bottom: 0.5rem;

    @media screen and (max-width: 768px){
        flex-direction: column;
    }
`;

export const  Half1 = styled.div`
    width: 60%;
    margin-bottom: 0.5rem;

    @media screen and (max-width: 768px){
        width: 95%;
    }
`
export const  Half2 = styled.div`
    width: 25%;
    text-align: end;
    margin-bottom: 0.5rem;

    @media screen and (max-width: 768px){
        margin-bottom: 0;
        width: 100%;
        text-align: start;
    }
`