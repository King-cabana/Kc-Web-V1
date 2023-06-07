import styled from "styled-components";
import background from "../../assets/images/pawel-czerwinski-OG44d93iNJk-unsplash.jpg";

export const GuestContactBg = styled.div`
  width: 100%;
  align-items: center;
  justify-content: center;
  display: flex;
  flex-direction: column;
  padding-bottom: 15%;
  color: #484848;
  background: url(${background});
  bacground-repeat : no-repeat;
  background-position: right;
  background-size: cover;

  @media screen and (max-width: 480px) {
    padding-bottom: 20%;
  }
`;

export const GCBody = styled.div`
  height: 95vh;
  width: 32%;
  padding: 3% 1%;
  border-radius: 5px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-item: center;
  margin-top: 5%;
  background: white;

  @media screen and (max-width: 960px) {
    height: fit-content;
    width: 90vw;
    border-radius: 3px;
    box-shadow: none;
  }
`;

export const GCFormPart = styled.div`
  height: 65vh;
  width: 30vw;
  padding: 2% 3%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-item: center;

  img {
    display: block;
    margin-left: auto;
    margin-right: auto;
  }

  @media screen and (max-width: 960px) {
    width: inherit;
  }
`;

// export const GCPicPart = styled.div`
//   width: 30vw;
//   border-radius: 0 5px 5px 0;
//   background: url(${Drums});
//   background-repeat: no-repeat;
//   background-size: cover;
//   background-position: center;
//   object-fit: center;
//   opacity: 40%;

//   @media screen and (max-width: 960px) {
//     display: none;
//   }
// `;

export const TagHolder = styled.div`
  width: 100%;
  height: 30vh;
  display: flex;
  flex-direction: column;
  justify-content: left;
  margin-top: 4%;
  padding: 5%;

  @media screen and (max-width: 480px) {
    padding: 0 6%;
    display: flex;
  }
`;

export const TagDisplay = styled.div`
  width: inherit;
  display: flex;

  @media screen and (max-width: 480px){
    display: flex;
    justify-content: space-between;
  }
`
