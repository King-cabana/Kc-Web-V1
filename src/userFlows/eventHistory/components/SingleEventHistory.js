import { useEffect, useState } from "react";
import { Page, Wrapper } from "../../guestRegistration/GuestRegistrationStyled";
import { AiTwotoneCalendar } from "react-icons/ai";
import {
  BudgetSection,
  BudgetTitle2,
} from "../../createProposal/budgetInventory/BudgetStyled";
import { ImLocation } from "react-icons/im";
import {
  Partition,
  Partition1,
  Partition2,
  Display,
} from "../../eventPlanning/EventPlanningStyled";
import {
  HistoryImage,
  HistoryImageContainer,
  LI,
  UL,
} from "./SingleEventHistoryStyled";
import ViewProfileComponent from "./ViewProfileComponent";
import IconName from "../../../components/IconName";
import LoadingScreen from "../../../LoadingScreen";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";
import axios from "axios";
import { API_URL_2 } from "../../../redux/services/authService";
import { setPastEvent } from "../../../redux/slices/pastEventSlice";
import { useDispatch, useSelector } from "react-redux";
import { addressString, decryptId, encryptId, formatDate, formatTime } from "../../../utils";
import { AnimationContainer } from "../../../globalStyles";
import Lottie from "lottie-react";
import { Description } from "../../eventHome/EventHomeStyled";
import animationData from "../../../assets/lotties/no-data-preview.json"

const ViewHistoryEvent = ({
  topBar,
  pathNavigation,
  footerButtonComponent,
}) => {
  const { id } = useParams();
  const decryptedId = decryptId(id);
  console.log(id);
  console.log(decryptedId);
  const dispatch = useDispatch();
  // I first set loading to false because it will load till infinity until we get data integrated from backend
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();
  const state = useSelector((state) => state?.pastEvent);
  // console.log(state)
  const profile = useSelector((state)=>state?.eventOrganizerProfile);
  // console.log(profile);
  const handleViewProfile = () => navigate(`/organizer-profile/${encryptId(profile?.id)}`);

  useEffect(() => {
    const fetchEvent = async () => {
      try {
        const { data } = await axios.get(API_URL_2 + `histories/${decryptedId}`);
        console.log(data);
        dispatch(setPastEvent(data));
      } catch (error) {
        console.log(error);
        toast.error(error.message);
      } finally {
        setLoading(false);
      }
    };
    fetchEvent();
  }, [decryptedId]);

  return (
    <>
      {topBar}
      {loading ? (
        <LoadingScreen />
      ) : (
        <Page style={{ marginTop: "2rem", padding: "0 2%" }}>
          {pathNavigation}
          <Display style={{ marginRight: "1.5rem" }}>
            <ViewProfileComponent
              onClick={handleViewProfile}
              gap="0.3rem"
              justifyContent="end"
            />
          </Display>

          <BudgetSection style={{ padding: "0rem" }}>
            <Partition style={{ gap: "0rem 1rem", marginBottom: "0.4rem" }}>
              <Partition1>
                <IconName
                  titleLg="Event Name"
                  details={state?.eventName}
                  marginbottom="0.6rem"
                />
                <IconName
                  title="Description"
                  details={state?.eventDescription}
                  marginbottom="0.6rem"
                />

                <BudgetTitle2>Sponsors</BudgetTitle2>
                <UL>
                  {state?.sponsorList?.length > 0 ? state?.sponsorList?.map((sponsor, index) => {
                    return <LI key={index}>{sponsor}</LI>;
                  }) : "-"}
                </UL>
                <BudgetTitle2>Benefits our sponsors received</BudgetTitle2>
                <UL>
                  {state?.sponsorsBenefits?.length > 0 ? state?.sponsorsBenefits?.map((benefit, index) => {
                    return <LI key={index}>{benefit}</LI>;
                  }) : "-"}
                </UL>

                <Display>
                  <IconName
                    gap="0.5rem"
                    icon={<AiTwotoneCalendar color="#FF2957" size="1em" />}
                    title="Date and Time"
                    details={`${formatDate(state?.eventDate)} at ${formatTime(
                      state?.eventTime
                    )}`}
                    marginbottom="0.5rem"
                  />
                  <IconName
                    gap="0.5rem"
                    icon={<ImLocation color="#FF2957" size="1em" />}
                    title="Location"
                    details={addressString(state?.eventAddress)}
                    marginbottom="0.5rem"
                  />
                </Display>
              </Partition1>

              <Partition2>
                <IconName
                  icon={<AiTwotoneCalendar color="#FF2957" size="1em" />}
                  title="Date and Time"
                  details={`${formatDate(state?.eventDate)} at ${formatTime(
                    state?.eventTime
                  )}`}
                  marginbottom="0.6rem"
                />
                <IconName
                  icon={<ImLocation color="#FF2957" size="1em" />}
                  title="Location"
                  details={addressString(state?.eventAddress)}
                  marginbottom="0.6rem"
                />
                <ViewProfileComponent
                  onClick={handleViewProfile}
                  marginTop="0px"
                  gap="0.5rem"
                />
              </Partition2>
            </Partition>

            <BudgetTitle2>Gallery</BudgetTitle2>
            <HistoryImageContainer>
              {state?.imageUrls?.length > 0 ? state?.imageUrls?.map((image, index) => {
                return (
                  <HistoryImage key={index} src={image} alt="gallery" />
                )}) : 
                <Wrapper  justifycontent="center" style={{flexDirection: "column", justifySelf: "center"}}>
              <AnimationContainer>
              <Lottie animationData={animationData} loop={true} />
            </AnimationContainer>
                <div style={{alignSelf: "center"}}>
                <Description>Upload images when updating event</Description></div>
                </Wrapper>
              }
            </HistoryImageContainer>
          </BudgetSection>

          {footerButtonComponent}
        </Page>
      )}
    </>
  );
};

export default ViewHistoryEvent;
