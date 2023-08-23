import { styled } from "styled-components";

export const CardBody= styled.div`
    border: 1px solid #D2CEDC;
    border-radius: 8px;
    height: ${(props) => (props.height ? props.height : "400px")};
    width: 100%;

    @media screen and (max-width: 768px){
        height: 100%;
    }
    @media screen and (max-width: 480px){
        margin-bottom: 5%;
    }
`;

export const ImageHolder = styled.div`
    height: ${({height})=>height ? height : "130px"};
`;

export const Image = styled.img`
    height: 100%;
    width: 100%;
    object-fit: cover;
    border-top-left-radius: 8px;
    border-top-right-radius: 8px;
`;

export const CardContentHolder = styled.div`
    height: ${({height})=>height ? height : "270px"};
    padding: 3%;

    @media screen and (max-width: 768px) {
        height: 100%;
    }
`;

export const CardInfoHolder = styled.div`
    width: inherit;
    padding : 4% 2%;
    
`;

export const IconInfoHolder = styled.div`
  display: flex;
  gap: 10px;
  align-items: center;
  margin-bottom: 3%;

  p{
    font-size: 14px;
  }

  svg {
    flex-shrink: 0;
    height: 20px;
    width: 20px;
  }
`;

export const IconHolder = styled.div`
    width : 20px;
`;