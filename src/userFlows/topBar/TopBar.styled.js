import styled from "styled-components";

export const TopBarContainer = styled.div`
  width: 100%;
  height: 62px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.1); ;
`;

export const TopBarLogo = styled.div`
  height: inherit;
  width: 20%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const TopBarItemHolder = styled.div`
  height: inherit;
  width: 80%;
  padding: 0 2%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const ItemsHolder = styled.div`
  display: flex;
  height: 6vh;
  width: 304px;
  justify-content: center;
  align-items: center;
`;

export const ItemsHolderInner = styled.div`
  height: inherit;
  width: 204px;
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

export const ProfilePicture = styled.div`
  height: 40px;
  width: 40px;
  border-radius: 50%;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 50%;
  }
`;
