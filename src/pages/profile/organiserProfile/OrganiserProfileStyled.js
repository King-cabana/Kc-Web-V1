import styled from "styled-components";

export const InputSeg = styled.section`
  width: 100%;
  /* height: 100%; */
  margin-bottom: 2rem;
`;

export const TransparentButton = styled.button`
  border: none;
  width: 150px;
  height: 50px;
  align-items: center;
  border-radius: 8px;
  background-color: transparent;
  cursor: pointer;
  padding: 8px 2px;
  color: #ff2957;
  font-weight: 600;
  margin-top: 5px;

  &:hover {
    color: #f4d5dc;
  }
`;

export const SaveBox = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
  width: 100%;
  height: 12vh;
  background-color: #ffff;
  box-sizing: border-box;
  z-index: 999;
  position: fixed;
  bottom: 0;

  @media screen and (max-width: 768px) {
    padding: 0;
    height: 8vh;
  }
`;

export const ButtonSave = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: flex-start;
  padding: 0px 20px;
  gap: 25px;
  width: 416px;
  height: 50px;
`;
export const OrganiserSection = styled.div`
  height: 75%;
  width: 85%;
  overflow-y: auto;
  position: fixed;
  transform: translate(-50%, -50%);
  top: 55%;
  left: 50%;
  /* hide scrollbar*/
  -ms-overflow-style: none;
  scrollbar-width: none;
  ::-webkit-scrollbar {
    display: none;
  }
`;

export const Asterix = styled.span`
  color: #ff2957;
  font-size: 16px;
`;

export const Wrapper = styled.section`
  display: flex;
  flex-direction: row;
  gap: 2rem;

  @media screen and (max-width: 768px) {
    flex-direction: column;
    gap: 0;
  }
`;
