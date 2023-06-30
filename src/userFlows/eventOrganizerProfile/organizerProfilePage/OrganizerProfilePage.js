import React from "react";
import CreateEventTopBar from "../../topBar/CreateEventTopBar/CreateEventTopBar";
import TopBar from "../../topBar/dashboardTopBar/TopBar"
import { OverallContainer } from "../../eventHome/EventHomeStyled";
import ProfileImages from "../profilePageComponents/ProfileImages";
import ProfileInfo from "../profilePageComponents/ProfileInfo";

const OrganizerProfilePage = () => {
  return (
    <>
      <TopBar />
      <OverallContainer margintop="5rem" padding="0% 4%">
        <ProfileImages/>
        <ProfileInfo/>
      </OverallContainer>
    </>
  );
};

export default OrganizerProfilePage;
