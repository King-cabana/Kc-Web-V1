import { BackgroundPicture, ImagesContainer, LogoPicture } from "../../eventHome/EventHomeStyled";
import backgroundPicture from "../../../assets/images/bgImg.png";
import logo from "../../../assets/images/logoImg.png";
import { useSelector } from "react-redux";

const ProfileImages = ()=>{
    const state = useSelector((state)=>state?.eventOrganizerProfile)
    return(
        <>
            <ImagesContainer>
            <BackgroundPicture
              src={
                state?.backgroundPictureUrl
                  ? state?.backgroundPictureUrl
                  : backgroundPicture
              }
              alt="Background Picture"
            />
            <LogoPicture
              src={state?.logoUrl ? state?.logoUrl : logo}
              alt="Logo Picture"
            />
          </ImagesContainer>
        </>
    )
}

export default ProfileImages;