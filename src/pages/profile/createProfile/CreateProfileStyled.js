import styled from "styled-components";
import shapedBackground from "../../images/shapedBackground.png";

export const ProfileContainer = styled.div`
  background: #f5f5f5;
  width: 100%;
  height: 100vh;
`;
export const ShapedBackground = styled.div`
  background: url(${shapedBackground});
  background-repeat: no-repeat;
  background-size: cover;
  width: 100%;
  height: 100%;
  position: fixed;
  top: -15rem;

  @media screen and (max-width: 768px) {
    /* top: -40rem; */
  }
`;

export const ProfileContent = styled.section`
  background: #fff;
  width: 90%;
  height: 100%;
  border-radius: 50px 50px 0 0;
  padding: 4rem;
  z-index: 99;
  position: fixed;
  left: 50%;
  transform: translate(-50%, -50%);
  top: 60%;
`;

// export const ProfileHeader = styled.header`
//   background: #fff;
// `;

export const LogoDiv = styled.header`
  display: flex;
  justify-content: center;
  margin-bottom: 3rem;
`;

export const KCLogo = styled.img`
  background: #fff;
`;

export const ProfileProgress = styled.p`
  font-weight: 400;
  font-size: 14px;
  line-height: 20px;
  color: #ffbc15;

  @media screen and (max-width: 768px) {
    font-size: 10px;
    line-height: 20px;
  }
`;

export const ProfileSection = styled.section`
  height: 75%;
  width: 85%;
  overflow-y: auto;
  position: fixed;
  transform: translate(-50%, -50%);
  top: 55%;
  left: 50%;
  padding-bottom: 5rem;
  /* hide scrollbar*/
  -ms-overflow-style: none;
  scrollbar-width: none;
  ::-webkit-scrollbar {
    display: none;
  }
`;

export const ProfileTitle = styled.h2`
  font-weight: 700;
  font-size: 24px;
  line-height: 32px;
  color: #484848;

  @media screen and (max-width: 768px) {
    font-size: 18px;
    line-height: 28px;
  }
`;

export const ProfileSubtitle = styled.p`
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  color: #484848;

  @media screen and (max-width: 768px) {
    font-size: 12px;
    line-height: 18px;
  }
`;
export const ProfileOptionsContainer = styled.section`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  margin-top: 2rem;
  gap: 2rem;

  @media screen and (max-width: 930px) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`;
export const ProfileOption = styled.div`
  /* z-index: 99; */
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  height: ${(props) => (props.height ? props.height : "250px")};
  width: ${(props) => (props.height ? props.width : "250px")};
  border: 1.5px solid #f4d5dc;
  border-radius: 10px;
  padding: 1rem;
  transition: all ease 400ms;
  cursor: pointer;

  img {
    display: none;
  }
  .first {
    display: flex;
  }
  .second {
    display: flex;
  }
  .third {
    display: flex;
  }

  &:hover {
    background-color: #fff1f1;
    transform: translate(0, -10px);
    border: 2px solid #fffcfc;
    box-shadow: 0px 1px 4px rgba(255, 188, 21, 0.25);
  }

  @media screen and (max-width: 768px) {
    width: 250px;
    height: 200px;
    &:nth-child(3) {
      margin-bottom: 3rem;
    }
  }
`;

export const ProfileText = styled(ProfileTitle)`
  font-weight: 400;
  margin-top: 1rem;
  text-align: center;

  @media screen and (max-width: 768px) {
    font-size: 16px;
    line-height: 24px;
  }
`;

export const LottieWrapper = styled.div`
  @media screen and (max-width: 768px) {
    height: 5rem;
    width: 5rem;
    margin-bottom: 1rem;
  }
`;
