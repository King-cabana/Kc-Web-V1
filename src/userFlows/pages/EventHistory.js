import {useEffect, useState} from "react";
import {toast} from "react-toastify";
import EmptyEventHistory from "../eventHistory/EmptyEventHistory";
import FilledEventHistory from "../eventHistory/FilledEventHistory";
import axios from "axios";
import { useSelector, useDispatch } from "react-redux";
import { API_URL_2 } from "../../redux/services/authService";
import LoadingScreen from "../../LoadingScreen";
import {setEventsHistory} from "../../redux/slices/eventsHistorySlice"

const EventHistory = () => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state?.userDetails);
  const profile = useSelector((state)=>state?.eventOrganizerProfile);
  const eventsHistory = useSelector((state)=>state?.eventsHistory);
  const [loading, setLoading] = useState(true);
  console.log(profile?.profileEmail)
  console.log(eventsHistory)
  console.log(eventsHistory?.length)
  useEffect(()=>{
    const fetchEventHistory= async()=>{
      try{
        const {data} = await axios.get(
          API_URL_2 + `histories/profile?email=${profile?.profileEmail}`,
          {
            headers:{
              Authorization: `Bearer ${user?.token}`,
            },
          }
        );
          dispatch(setEventsHistory(data));
      }catch(error){
        if(error?.message === "Network Error"){
          toast.error("Error retrieving event history, reload page");
        }
        console.log(error);
      }finally{
        setLoading(false);
      }
    };
    fetchEventHistory();
  },[profile?.profileEmail]);

  if(loading){
    return<LoadingScreen/>;
  }

  return (
    <div>{eventsHistory?.length > 0 ? <FilledEventHistory />  :<EmptyEventHistory />}
    </div>
  );
};

export default EventHistory;
