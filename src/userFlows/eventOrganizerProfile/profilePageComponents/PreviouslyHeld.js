import { useEffect, useState } from "react";
import { AlternativeButton2 } from "../../../components/buttons/button";
import Card from "../../../components/cards/Card";
import CardData from "../../../components/cards/CardData";
import {Name } from "../../eventHome/EventHomeStyled";
import { EventCardHolder, EventsDisplaySection } from "../organizerProfilePage/OrganizerProfilePageStyled";
import LoadingScreen from "../../../LoadingScreen";
import axios from "axios";
import { useSelector } from "react-redux";
import { API_URL_2 } from "../../../redux/services/authService";
import { toast } from "react-toastify";
import ReactLoading from "react-loading";
import noImage from "../../../assets/images/bgBanner.jpg"
import { encryptId, truncateText } from "../../../utils";
import { useNavigate } from "react-router-dom";
import { Tooltip } from "react-tooltip";
import kcLogo from "../../../assets/images/KCLogo.svg"
import { IMG } from "../../eventHistory/components/SingleEventHistoryStyled";

const PreviouslyHeld = ()=>{
    const navigate = useNavigate();
    const [loading, setLoading] = useState(true)
    const [history, setHistory] = useState([])
    const profile = useSelector((state)=>state?.eventOrganizerProfile)
    useEffect(()=>{
        const fetchHistory = async () => {
          try {
            const { data } = await axios.get(API_URL_2 + `histories/profile?email=${profile?.profileEmail}`);
            console.log(data);
            const reversedData = data.reverse();
            setHistory(reversedData);
          } catch (error) {
            console.log(error);
            toast.error(error.message);
          } finally {
            setLoading(false);
          }
        };
        fetchHistory();
      }, [profile])
    const viewEvent = (data)=>{
    const encryptedId = encryptId(data?.id);
    navigate(`/profile/previous-event/${encryptedId}`);
    }
    return(
        <EventsDisplaySection >
            <Name style={{fontWeight: "500"}}>Previously Held Events</Name>
            {loading ? <div style={{display: "flex", alignItems: "center", justifyContent: "center"}}>
                            <ReactLoading type="spin" color="#FF2957" height={100} width={50}/>
                        </div> : <>
            <EventCardHolder>
                {history?.slice(0,6)?.map((data, index)=>
                    <Card onClickCard={()=>viewEvent(data)} key={index}
                    image={data?.imageUrls.length > 0 ? data?.imageUrls[0] : noImage}
                    eventName={(
                        <>
                          {data?.eventHistoryType === "INTERNAL" && (
                            <span style={{ marginRight: "0.8rem" }}>
                              <IMG
                                data-tooltip-id="event-type"
                                data-tooltip-content="Powered by KingCabana"
                                src={kcLogo}
                                alt="King Cabana Event"
                              />
                              <Tooltip
                                id="event-type"
                                style={{ zIndex: "999999" }}
                                variant="info"
                              />
                            </span>
                          )}
                          {data?.eventName}
                        </>
                      )}
                    eventDescription={truncateText(data?.eventDescription, 60)}
                    height="250px"
                    holderHeight="150px"
                    // eventTime={data.eventTime}
                    // eventDate={data.eventDate}
                    // eventLocation={data.eventLocation}
                    />)}
            </EventCardHolder>
            <AlternativeButton2 style={{alignSelf: "center", marginBottom: "1.5%"}}>See more</AlternativeButton2>
            </>}
        </EventsDisplaySection>
    )
}

export default PreviouslyHeld;