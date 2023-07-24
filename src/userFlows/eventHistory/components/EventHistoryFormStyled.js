import { styled } from "styled-components";


export const HeaderDiv = styled.div`
    width: 100%;
    display : flex;
    justify-content: center;
    align-items: center;
`;

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
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 25px;

    @media screen and (max-width: 768px) {
        flex-direction: column;
        gap: 0px;
    }
`

export const MultipleImagesHolder = styled(HistoryTimeAndDateHolder)`
    padding: 1%;
    gap: 15px;

    @media screen and (max-width: 800px) {
        flex-direction: column;
        padding: 1rem 7rem;
    }
    @media screen and (max-width: 560px) {
        padding: 1rem 4rem;
    }
    @media screen and (max-width: 480px) {
        padding: 1rem 2rem;
    }
    @media screen and (max-width: 360px) {
        padding: 2%;
    }
`;

export const Wrap1 = styled.label`
  position: absolute;
  top: 170px;
  left: 82px;
  width: 24px;
  height: 24px;
  display: flex;
  border-radius: 10px;
  justify-content: center;
  align-items: center;
  background-color: #fff;
  cursor: pointer;
`