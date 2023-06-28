import { useState } from "react";
import SingleEventHistory from "./components/SingleEventHistory";
import TopBar from "../topBar/dashboardTopBar/TopBar";
import PathNavigation from "../../components/PathNavigation";
import { useNavigate } from "react-router-dom";
import FooterButtonComponent from "../../components/FooterButtonComponent";

const ViewHistoryEvent = () => {
  // I first set loading to false because it will load till infinity until we get data integrated from backend
  const navigate = useNavigate();
  const handleOnClickTxt2 = () => navigate("/event/history");
  return (
    <>
      <SingleEventHistory
        topBar={<TopBar />}
        pathNavigation={
          <PathNavigation
            txt2="History"
            onClickTxt2={handleOnClickTxt2}
            txt3="View History"
          />
        }
        footerButtonComponent={
          <FooterButtonComponent whiteBtnText="Back" onClickWhiteBtn={handleOnClickTxt2}/>
        }
      />
      <p>GIRL</p>
    </>
  );
};

export default ViewHistoryEvent;
