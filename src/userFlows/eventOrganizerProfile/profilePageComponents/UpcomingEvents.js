import { useEffect, useState } from "react";
import { AlternativeButton2 } from "../../../components/buttons/button";
import Card from "../../../components/cards/Card";
import CardData from "../../../components/cards/CardData";
import {Name } from "../../eventHome/EventHomeStyled";
import { EventCardHolder, EventsDisplaySection } from "../organizerProfilePage/OrganizerProfilePageStyled";
import axios from "axios";
import { API_URL_2 } from "../../../redux/services/authService";
import { toast } from "react-toastify";
import ReactLoading from "react-loading"
import { addressString, encryptId, formatDate, formatTime, truncateText } from "../../../utils";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const UpcomingEvents = ()=>{
    const navigate = useNavigate();
    const [loading, setLoading] = useState(true);
    const [upcoming, setUpcoming] = useState([]);
    const profile = useSelector((state)=>state?.eventOrganizerProfile);
    const user = useSelector((state) => state.userDetails);
    useEffect(()=>{
        const fetchUpcoming = async () => {
          try {
            const { data } = await axios.get(API_URL_2 + `events/organizer-profile/${profile?.id}`,
            {
                headers: {
                  Authorization: `Bearer ${user?.token}`,
                },
            }
            );
            console.log(data);
            const reversedData = data.reverse();
            setUpcoming(reversedData.filter((item) => item.valid === true));
          } catch (error) {
            console.log(error);
            toast.error(error.message);
          } finally {
            setLoading(false);
          }
        };
        fetchUpcoming();
      }, [profile])

      const viewEvent = (data)=>{
        const encryptedId = encryptId(data?.id);
        navigate(`/guestRegistration/${encryptedId}`);
        }
    return (
        <EventsDisplaySection >
        <Name style={{fontWeight: "500"}}>Upcoming Events</Name>
        {loading ? <div style={{display: "flex", alignItems: "center", justifyContent: "center"}}>
                            <ReactLoading type="spin" color="#FF2957" height={100} width={50}/>
                        </div> : <>
            <EventCardHolder>
                {upcoming?.slice(0,3)?.map((data, index)=>
                    <Card onClickCard={()=>viewEvent(data)} key={index}
                    image={data?.eventBannerUrl}
                    eventName={truncateText(data?.eventName)}
                    eventDescription={truncateText(data?.eventDescription, 60)}
                    height="120px"
                    holderHeight="280px"
                    eventTime={`${formatTime(data?.eventStartTime)} - ${formatTime(data?.eventEndTime)}`}
                    eventDate={formatDate(data.eventStartDate)}
                    eventLocation={truncateText(addressString(data?.eventAddress), 60)}
                    />)}
            </EventCardHolder>
            <AlternativeButton2 style={{alignSelf: "center", marginBottom: "1.5%"}}>See more</AlternativeButton2>
            </>}
    </EventsDisplaySection>
    )
}

export default UpcomingEvents;