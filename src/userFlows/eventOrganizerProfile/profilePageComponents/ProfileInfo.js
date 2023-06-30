import { MdOutlineCall } from "react-icons/md";
import { AbsolutePrimaryButton } from "../../../components/buttons/button";
import { Description, Location, Name } from "../../eventHome/EventHomeStyled";
import { Wrapper } from "../../guestRegistration/GuestRegistrationStyled";
import { useSelector } from "react-redux";
import { Half1, Half2, Info } from "../organizerProfilePage/OrganizerProfilePageStyled";
import { RxEnvelopeClosed } from "react-icons/rx";
import { HiOutlineLocationMarker } from "react-icons/hi";

const ProfileInfo = ()=>{
    const state = useSelector((state)=>state?.eventOrganizerProfile)

    return(
        <>
        <Wrapper style={{alignSelf: "end", margin: "0.5rem 0rem"}} ><AbsolutePrimaryButton>Message Organizer</AbsolutePrimaryButton></Wrapper>

        <Info>
            <Half1>
                <Name> {state?.organizerName ? state?.organizerName : "Organizer Name"} </Name>

                <Description style={{marginBottom: "0.5rem"}}>{state?.organizerDetails ? state?.organizerDetails : "Description"}</Description>

               {/* {state?.phoneNumber && <Description><IoCallOutline/> {state?.phoneNumber}</Description>}  */}

               <Description>  <MdOutlineCall color="#FF2957"/><span style={{marginLeft: "0.6rem"}}>
               +123456789 </span></Description>

               {/* {state?.email && <Description><IoCallOutline/> {state?.email}</Description>}  */}

               <Description>  <RxEnvelopeClosed color="#FF2957"/> <span style={{marginLeft: "0.6rem"}}>josiahdeyworry@gmail.com</span>
               </Description>

               {/* {state?.address && <Description><IoCallOutline/> {state?.address}</Description>}  */}

               <Description>  <HiOutlineLocationMarker color="#FF2957"/><span style={{marginLeft: "0.6rem"}}>
               312, Herbert Macaulay Road, Sabo Yaba </span></Description>
            </Half1>

            <Half2>
                <Name style={{fontWeight: "500"}}>Secondary Contact</Name>
                <Location>Available upon request</Location>
            </Half2>
        </Info>
        
        <div>OrganizerProfilePage OrganizerProfilePage OrganizerProfilePage OrganizerProfilePage OrganizerProfilePage OrganizerProfilePage OrganizerProfilePage OrganizerProfilePage OrganizerProfilePage OrganizerProfilePage OrganizerProfilePage OrganizerProfilePage OrganizerProfilePage OrganizerProfilePage OrganizerProfilePage OrganizerProfilePage OrganizerProfilePage OrganizerProfilePage </div>
        </>
    )
}

export default ProfileInfo;