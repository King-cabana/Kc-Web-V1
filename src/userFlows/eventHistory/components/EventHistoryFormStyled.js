import { styled } from "styled-components";


export const HeaderDiv = styled.div`
    width: 100%;
    display : flex;
    justify-content: center;
    align-items-center;
`

export const HistoryInner = styled.form`
  width: 100%;
  padding: 1rem 2rem;
`;

export const HistorySection = styled.div`
    width: 100%;
    margin-bottom: 2rem;
`;

export const Description = styled.textarea`
    width: 100%;
    height : 200px;
    padding : 15px;
    resize: none;
    outline : none;
    border : 1px solid rgba(0, 104, 255, 0.1);
    border-radius: 8px;

`

export const HistoryTimeAndDateHolder =  styled.div`
    width : 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 25px;
`
