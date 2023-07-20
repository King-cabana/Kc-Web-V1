import React, { useState } from "react";
import CreateEventTopBar from "../../topBar/CreateEventTopBar/CreateEventTopBar";
import TopBar from "../../topBar/dashboardTopBar/TopBar"
import { OverallContainer } from "../../eventHome/EventHomeStyled";
import ProfileImages from "../profilePageComponents/ProfileImages";
import ProfileInfo from "../profilePageComponents/ProfileInfo";
import PreviouslyHeld from "../profilePageComponents/PreviouslyHeld";
import UpcomingEvents from "../profilePageComponents/UpcomingEvents";
import SponsorsReview from "../profilePageComponents/SponsorsReview";
import FooterButtonComponent from "../../../components/FooterButtonComponent";
import { useParams } from "react-router-dom";
import { decryptId } from "../../../utils";
import { useEffect } from "react";
import { setEventOrganizerProfile } from "../../../redux/slices/eventOrganizerProfileSlice";
import LoadingScreen from "../../../LoadingScreen";
import axios from "axios";
import { API_URL_2 } from "../../../redux/services/authService";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";

const OrganizerProfilePage = () => {
  const {id} = useParams();
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(true)
  const decryptedId = decryptId(id)
  console.log(id);
  console.log(decryptedId)
  const goBack=()=>{
    window.history.back();
  };

  useEffect(()=>{
    const fetchProfile = async () => {
      try {
        const { data } = await axios.get(API_URL_2 + `profiles/${decryptedId}`);
        console.log(data);
        dispatch(setEventOrganizerProfile(data));
      } catch (error) {
        console.log(error);
        toast.error(error.message);
      } finally {
        setLoading(false);
      }
    };
    fetchProfile();
  }, [decryptedId])
  return (
    <>
      {loading ? <LoadingScreen/> :
      <>
      <TopBar />
       <OverallContainer margintop="5rem" padding="0% 4%">
        <ProfileImages/>
        <ProfileInfo/>
        <PreviouslyHeld/>
        <UpcomingEvents/>
        <SponsorsReview/>
        <FooterButtonComponent
        whiteBtnText="Back"
        onClickWhiteBtn={goBack}
        marginright="-1rem"
        />
      </OverallContainer>
      </>}
    </>
  );
};

export default OrganizerProfilePage;
