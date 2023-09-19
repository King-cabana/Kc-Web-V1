import { useEffect, useState } from "react"
import { KCLogo, WrapLogo } from "../../../pages/profile/EditOrganiserProfile/EditOrganiserProfileStyled";
import { TheContainer } from "./SetupSponsorsProfileStyled";
import kingCabanaLogo from "../../../assets/images/kingCabanaLogo.svg";
import { KBDisplayXs } from "../../../components/fonts/Fonts";
import SetupInputs from "./SetupInputs";
import ListHandler from "./ListHandler";
import SponsorBudgetRange from "./SponsorBudgetRange";
import SponsorImages from "./SponsorImages";
import { useSelector, useDispatch } from "react-redux";
import { API_URL_2 } from "../../../redux/services/authService";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import axios from "axios";
import FooterButtonComponent from "../../../components/FooterButtonComponent";
import { ImSpinner6 } from "react-icons/im";
import { setSponsorProfile } from "../../../redux/slices/sponsorProfileSlice";

const SetupSponsorsProfile = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [sending, setSending] = useState(false);
  const [state, setState] = useState({productOffering: [], uniqueSellingPoint: [], csrInterest: []});
  console.log(state);
  const user = useSelector((state) => state?.sponsorDetails)
  console.log(user);

  const otherFields = (e) => {
    setState((prevState)=>({...prevState, [e.target.name]: e.target.value }));
    console.log(state);
  };

  useEffect(() => {
    setState((prevState) => ({
      ...prevState,
      "userEmail": user?.details?.email
    }))
  }, [ user ])

  useEffect(() => {
    if (state?.sponsorName && state?.phoneNumber && state?.profileEmail
      && state?.sponsorOfficeAddress&& state?.description) {
      setSending(false);
    } else { setSending(true) }
  }, [state?.sponsorName, state?.phoneNumber,
    state?.profileEmail, state?.description, state?.sponsorOfficeAddress
  ]);

  const handleSetup = async (e) => {
    e.preventDefault();
    try {
      setSending(true);
      const { data } = await axios.post(API_URL_2 + "sponsor-profile", state, {
        headers: {Authorization: `Bearer ${user?.sponsorToken}`},
      });
      console.log(data);
      dispatch(setSponsorProfile(data));
      toast.success("Sponsor profile created successfully");
      // navigate("/sponsor-dashboard");
      navigate("/vendors");
    } catch (error) {
      console.log(error);
      toast.error("Error setting up sponsor profile");
    } finally { setSending(false) }; 
  };

  return (
    <>
      <TheContainer>
        <section style={{marginBottom: "5rem"}}>
          <WrapLogo>
            <KCLogo src={kingCabanaLogo} alt="king cabana" />
          </WrapLogo>
          <article>
            <KBDisplayXs fontWeight="700" style={{marginBottom: "0.5rem"}}>
              Set up your profile as a Sponsor
            </KBDisplayXs>
            <SetupInputs state={state} setState={setState} handleChange={otherFields} />
            <ListHandler label="Product Offering"
            items={state?.productOffering} maxItems={5}
            setItems={(newItems) => setState((prevState) => ({
                ...prevState,
                productOffering: newItems,
              }))}
            description="List of products or services you are offering"
          />
            <ListHandler label="Unique Selling Point"
            items={state?.uniqueSellingPoint} maxItems={5}
            setItems={(newItems) => setState((prevState) => ({
                ...prevState,
                uniqueSellingPoint: newItems,
              }))}
            description="List unique attributes of your product that distinguishes it from others"
          />
            {/* <ListHandler label="Project Executed"
            items={state?.projectExecuted} maxItems={5}
            setItems={(newItems) => setState((prevState) => ({
                ...prevState,
                projectExecuted: newItems,
              }))}
            description="List projects you have sponsors in the past"
          /> */}
            <ListHandler label="CSR Interests"
            items={state?.csrInterest} maxItems={5}
            setItems={(newItems) => setState((prevState) => ({
                ...prevState,
                csrInterest: newItems,
              }))}
              description="List Corporate Social Responsibility initiatives"
          />
          {/* <SponsorBudgetRange state={state} handleChange={otherFields}/> */}
          <SponsorImages state={state} setState={setState} />
          </article>
        </section>

        <FooterButtonComponent redBtnText={sending ? 
        <ImSpinner6 size="1.5rem"/> : "Done"}
        disabledRedBtn={sending}
        onClickRedBtn={handleSetup}/>
      </TheContainer>
    </>
  )
};

export default SetupSponsorsProfile;
