import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { editCheckbox } from "../../redux/slices/createEventSlice";
import {
  BudgetInventoryContainer,
  BudgetInventoryHeader,
  BudgetTitle1,
  BudgetTitle2,
  BudgetInventorySubtitle,
  BudgetSection,
  ButtonContainer,
  BudgetUpload,
  BudgetSubtitle,
} from "./BudgetStyled";
import {
  AbsolutePrimaryButton,
  AlternativeButton2,
} from "../../components/button/button";
import {
  InventorySection,
  CheckboxWrapper,
  Check,
  CheckInput,
  CheckLabel,
  CheckDetails,
  CheckSummary,
} from "./InventoryStyled";
import "../../App.css";
import "../../modal.css";
import { BsChevronRight, BsChevronDown } from "react-icons/bs";

const Inventory = ({ padding }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const dispatch = useDispatch();
  const state = useSelector((state) => state.createEvent);

  const navigateBack = () => {
    navigate("/createevent/budget&inventory/1");
  };

  const [exclusive, setExclusive] = useState(false);
  const [otherOnline, setOtherOnline] = useState(false);
  const [signage, setSignage] = useState(false);
  const [dbMarketing, setDbMarketing] = useState(false);
  const [otherPromotions, setOtherPromotions] = useState(false);
  const [mediaProfile, setMediaProfile] = useState(false);
  const [research, setResearch] = useState(false);
  const [contra, setContra] = useState(false);
  const [production, setProduction] = useState(false);
  const [causeTieIn, setCauseTieIn] = useState(false);

  const handleCheckboxChange = (e) => {
    const { name, value, checked } = e.target;
    const arr = state[name];
    const updatedArr = checked
      ? [...arr, value]
      : arr.filter((item) => item !== value);
    // console.log(updatedArr);
    dispatch(editCheckbox({ category: name, item: updatedArr }));
  };
  const handleSubmit = async function (e) {
    e.preventDefault();
    // console.log(state);
    navigate("/eventPlanPreview");
  };
  return (
    <>
      <BudgetInventoryContainer style={{ padding: padding }}>
        {location.pathname === "/eventPlanPreview" ? null : (
          <BudgetInventoryHeader>
            <BudgetTitle1>Budget & Take Inventory</BudgetTitle1>
            <BudgetInventorySubtitle>
              In order to capture the range of tangible benefits your
              organization has to offer, you need to prepare an inventory of
              your assets.
            </BudgetInventorySubtitle>
          </BudgetInventoryHeader>
        )}

        <BudgetSection style={{ height: "100%" }}>
          <BudgetTitle2>Take Inventory</BudgetTitle2>
          <BudgetUpload>
            <BudgetSubtitle style={{ fontWeight: "400" }}>
              Add and make a list of every promotional and marketing opportunity
              that could possibly be of value to a potential sponsor(s)
            </BudgetSubtitle>

            <InventorySection>
              <CheckDetails>
                <CheckSummary onClick={() => setExclusive(!exclusive)}>
                  Exclusive Content
                  {exclusive ? <BsChevronDown /> : <BsChevronRight />}
                </CheckSummary>
                <CheckboxWrapper>
                  <Check>
                    <CheckInput
                      type="checkbox"
                      id="content"
                      value="Provision of content for sponsor activities (e.g articles, podcasts etc.)"
                      name="exclusiveContent"
                      checked={
                        state.exclusiveContent?.includes(
                          "Provision of content for sponsor activities (e.g articles, podcasts etc.)"
                        )
                          ? true
                          : false
                      }
                      onChange={handleCheckboxChange}
                    />
                    <CheckLabel htmlFor="content">
                      Provision of content for sponsor activities (e.g articles,
                      podcasts etc.)
                    </CheckLabel>
                  </Check>
                  <Check>
                    <CheckInput
                      type="checkbox"
                      id="events"
                      value="Provision of online ‘events’ (online chat with a star, webcast, webinar, spaces etc.)"
                      name="exclusiveContent"
                      checked={
                        state.exclusiveContent?.includes(
                          "Provision of online ‘events’ (online chat with a star, webcast, webinar, spaces etc.)"
                        )
                          ? true
                          : false
                      }
                      onChange={handleCheckboxChange}
                    />
                    <CheckLabel htmlFor="events">
                      Provision of online ‘events’ (online chat with a star,
                      webcast, webinar, spaces etc.)
                    </CheckLabel>
                  </Check>
                  <Check>
                    <CheckInput
                      type="checkbox"
                      id="ownable"
                      value="Access to venue, athletes, celebrities artistes, curators, etc. for creation of new exclusive “ownable” content"
                      name="exclusiveContent"
                      checked={
                        state.exclusiveContent?.includes(
                          "Access to venue, athletes, celebrities artistes, curators, etc. for creation of new exclusive “ownable” content"
                        )
                          ? true
                          : false
                      }
                      onChange={handleCheckboxChange}
                    />
                    <CheckLabel htmlFor="ownable">
                      Access to venue, athletes, celebrities artistes, curators
                      etc. for creation new exclusive ‘’ownable’’ content
                    </CheckLabel>
                  </Check>
                  <Check>
                    <CheckInput
                      type="checkbox"
                      id="information"
                      value="Access to background information, statistics, photos, video clips, autographs, etc. for creation of new, exclusive, “ownable’’ content"
                      name="exclusiveContent"
                      checked={
                        state.exclusiveContent?.includes(
                          "Access to background information, statistics, photos, video clips, autographs, etc. for creation of new, exclusive, “ownable’’ content"
                        )
                          ? true
                          : false
                      }
                      onChange={handleCheckboxChange}
                    />
                    <CheckLabel htmlFor="information">
                      Access to background information, statistics, photos,
                      video clips, autographs, etc. for creation of new,
                      exclusive, “ownable’’ content
                    </CheckLabel>
                  </Check>
                </CheckboxWrapper>
              </CheckDetails>

              <CheckDetails>
                <CheckSummary onClick={() => setOtherOnline(!otherOnline)}>
                  Other Online
                  {otherOnline ? <BsChevronDown /> : <BsChevronRight />}
                </CheckSummary>
                <CheckboxWrapper>
                  <Check>
                    <CheckInput
                      type="checkbox"
                      id="leverageActivities"
                      value="Promotion of relevant sponsor leverage activities through sponsee’s social media activies, e-newsletter, and/or website."
                      name="otherOnline"
                      checked={
                        state.otherOnline?.includes(
                          "Promotion of relevant sponsor leverage activities through sponsee’s social media activies, e-newsletter, and/or website."
                        )
                          ? true
                          : false
                      }
                      onChange={handleCheckboxChange}
                    />
                    <CheckLabel htmlFor="leverageActivities">
                      Promotion of relevant sponsor leverage activities through
                      sponsee’s social media activies, e-newsletter, and/or
                      website.
                    </CheckLabel>
                  </Check>
                  <Check>
                    <CheckInput
                      type="checkbox"
                      value="Ability for sponsor to add value to sponsee fans/followers via sponsee-controlled social media"
                      id="addValue"
                      name="otherOnline"
                      checked={
                        state.otherOnline?.includes(
                          "Ability for sponsor to add value to sponsee fans/followers via sponsee-controlled social media"
                        )
                          ? true
                          : false
                      }
                      onChange={handleCheckboxChange}
                    />
                    <CheckLabel htmlFor="addValue">
                      Ability for sponsor to add value to sponsee fans/
                      followers via sponsee-controlled social media
                    </CheckLabel>
                  </Check>
                  <Check>
                    <CheckInput
                      type="checkbox"
                      value="Promotion of content on sponsee social media, e-newsletter, and/or website."
                      id="socialMedia"
                      name="otherOnline"
                      checked={
                        state.otherOnline?.includes(
                          "Promotion of content on sponsee social media, e-newsletter, and/or website."
                        )
                          ? true
                          : false
                      }
                      onChange={handleCheckboxChange}
                    />
                    <CheckLabel htmlFor="socialMedia">
                      Promotion of content on sponsee social media,
                      e-newsletter, and/or website.
                    </CheckLabel>
                  </Check>
                  <Check>
                    <CheckInput
                      type="checkbox"
                      value="Sponsor profile on sponsee website, and social media platforms"
                      id="profile"
                      name="otherOnline"
                      checked={
                        state.otherOnline?.includes(
                          "Sponsor profile on sponsee website, and social media platforms"
                        )
                          ? true
                          : false
                      }
                      onChange={handleCheckboxChange}
                    />
                    <CheckLabel htmlFor="profile">
                      Sponsor profile on sponsee website, and social media
                      platforms
                    </CheckLabel>
                  </Check>
                </CheckboxWrapper>
              </CheckDetails>

              <CheckDetails>
                <CheckSummary onClick={() => setSignage(!signage)}>
                  Signage
                  {signage ? <BsChevronDown /> : <BsChevronRight />}
                </CheckSummary>
                <CheckboxWrapper>
                  <Check>
                    <CheckInput
                      type="checkbox"
                      id="venueSignage"
                      value="Venue signage (full, partial, or non-broadcast view)"
                      name="signage"
                      checked={
                        state.signage?.includes(
                          "Venue signage (full, partial, or non-broadcast view)"
                        )
                          ? true
                          : false
                      }
                      onChange={handleCheckboxChange}
                    />
                    <CheckLabel htmlFor="venueSignage">
                      Venue signage (full, partial, or non-broadcast view)
                    </CheckLabel>
                  </Check>
                  <Check>
                    <CheckInput
                      type="checkbox"
                      id="onSite"
                      value="Inclusion in on-site event signage (exclusive or nonexclusive)"
                      name="signage"
                      checked={
                        state.signage?.includes(
                          "Inclusion in on-site event signage (exclusive or nonexclusive)"
                        )
                          ? true
                          : false
                      }
                      onChange={handleCheckboxChange}
                    />
                    <CheckLabel htmlFor="onSite">
                      Inclusion in on-site event signage (exclusive or
                      nonexclusive)
                    </CheckLabel>
                  </Check>
                  <Check>
                    <CheckInput
                      type="checkbox"
                      id="banners"
                      value="Inclusion on pre-event street banners, flags, etc."
                      name="signage"
                      checked={
                        state.signage?.includes(
                          "Inclusion on pre-event street banners, flags, etc."
                        )
                          ? true
                          : false
                      }
                      onChange={handleCheckboxChange}
                    />
                    <CheckLabel htmlFor="banners">
                      Inclusion on pre-event street banners, flags, etc.
                    </CheckLabel>
                  </Check>
                  <Check>
                    <CheckInput
                      type="checkbox"
                      id="pressConference"
                      value="Press conference signage"
                      name="signage"
                      checked={
                        state.signage?.includes("Press conference signage")
                          ? true
                          : false
                      }
                      onChange={handleCheckboxChange}
                    />
                    <CheckLabel htmlFor="pressConference">
                      Press conference signage
                    </CheckLabel>
                  </Check>
                  <Check>
                    <CheckInput
                      type="checkbox"
                      id="vehicleSignage"
                      value="Vehicle signage"
                      name="signage"
                      checked={
                        state.signage?.includes("Vehicle signage")
                          ? true
                          : false
                      }
                      onChange={handleCheckboxChange}
                    />
                    <CheckLabel htmlFor="vehicleSignage">
                      Vehicle signage
                    </CheckLabel>
                  </Check>
                  <Check>
                    <CheckInput
                      type="checkbox"
                      id="uniforms"
                      value="Event staff shirts/caps/uniforms"
                      name="signage"
                      checked={
                        state.signage?.includes(
                          "Event staff shirts/caps/uniforms"
                        )
                          ? true
                          : false
                      }
                      onChange={handleCheckboxChange}
                    />
                    <CheckLabel htmlFor="uniforms">
                      Event staff shirts/caps/uniforms
                    </CheckLabel>
                  </Check>
                </CheckboxWrapper>
              </CheckDetails>

              <CheckDetails>
                <CheckSummary onClick={() => setDbMarketing(!dbMarketing)}>
                  Database Marketing
                  {dbMarketing ? <BsChevronDown /> : <BsChevronRight />}
                </CheckSummary>
                <CheckboxWrapper>
                  <Check>
                    <CheckInput
                      type="checkbox"
                      id="databaseAccess"
                      value="Unlimited access to event-generated datbase(s), such as member lists, for direct marketing follow-up (be careful not to breach privacy laws)"
                      name="databaseMarketing"
                      checked={
                        state.databaseMarketing?.includes(
                          "Unlimited access to event-generated datbase(s), such as member lists, for direct marketing follow-up (be careful not to breach privacy laws)"
                        )
                          ? true
                          : false
                      }
                      onChange={handleCheckboxChange}
                    />
                    <CheckLabel htmlFor="databaseAccess">
                      Unlimited access to event-generated datbase(s), such as
                      member lists, for direct marketing follow-up (be careful
                      not to breach privacy laws)
                    </CheckLabel>
                  </Check>
                  <Check>
                    <CheckInput
                      type="checkbox"
                      id="sponseeMailings"
                      value="Opportunity to provide inserts in sponsee mailings"
                      name="databaseMarketing"
                      checked={
                        state.databaseMarketing?.includes(
                          "Opportunity to provide inserts in sponsee mailings"
                        )
                          ? true
                          : false
                      }
                      onChange={handleCheckboxChange}
                    />
                    <CheckLabel htmlFor="sponseeMailings">
                      Opportunity to provide inserts in sponsee mailings
                    </CheckLabel>
                  </Check>
                  <Check>
                    <CheckInput
                      type="checkbox"
                      id="oneOffCommunication"
                      value="Rental/loan of sponsee database for one-off communication with people who have opted into third-party promotions"
                      name="databaseMarketing"
                      checked={
                        state.databaseMarketing?.includes(
                          "Rental/loan of sponsee database for one-off communication with people who have opted into third-party promotions"
                        )
                          ? true
                          : false
                      }
                      onChange={handleCheckboxChange}
                    />
                    <CheckLabel htmlFor="oneOffCommunication">
                      Rental/loan of sponsee database for one-off communication
                      with people who have opted into third-party promotions
                    </CheckLabel>
                  </Check>
                  <Check>
                    <CheckInput
                      type="checkbox"
                      id="activitiesOnSite"
                      value="Opportunity to run database-generating activities on-site"
                      name="databaseMarketing"
                      checked={
                        state.databaseMarketing?.includes(
                          "Opportunity to run database-generating activities on-site"
                        )
                          ? true
                          : false
                      }
                      onChange={handleCheckboxChange}
                    />
                    <CheckLabel htmlFor="activitiesOnSite">
                      Opportunity to run database-generating activities on-site
                    </CheckLabel>
                  </Check>
                  <Check>
                    <CheckInput
                      type="checkbox"
                      id="attendeeAdmission"
                      value="Opportunity to run databse-genrating activities on-site as a requirement for attendee admission."
                      name="databaseMarketing"
                      checked={
                        state.databaseMarketing?.includes(
                          "Opportunity to run databse-genrating activities on-site as a requirement for attendee admission."
                        )
                          ? true
                          : false
                      }
                      onChange={handleCheckboxChange}
                    />
                    <CheckLabel htmlFor="attendeeAdmission">
                      Opportunity to run databse-genrating activities on-site as
                      a requirement for attendee admission.
                    </CheckLabel>
                  </Check>
                </CheckboxWrapper>
              </CheckDetails>

              <CheckDetails>
                <CheckSummary
                  onClick={() => setOtherPromotions(!otherPromotions)}
                >
                  Other Promotional Opportunities
                  {otherPromotions ? <BsChevronDown /> : <BsChevronRight />}
                </CheckSummary>
                <CheckboxWrapper>
                  <Check>
                    <CheckInput
                      type="checkbox"
                      id="customDesign"
                      value="Custom design of a new event, program, award, or other activity that meets the sponsor’s specific needs."
                      name="otherPromotionalOpportunities"
                      checked={
                        state.otherPromotionalOpportunities?.includes(
                          "Custom design of a new event, program, award, or other activity that meets the sponsor’s specific needs."
                        )
                          ? true
                          : false
                      }
                      onChange={handleCheckboxChange}
                    />
                    <CheckLabel htmlFor="customDesign">
                      Custom design of a new event, program, award, or other
                      activity that meets the sponsor’s specific needs.
                    </CheckLabel>
                  </Check>
                  <Check>
                    <CheckInput
                      type="checkbox"
                      id="sponsorsBehalf"
                      value="Securing and administration of entertainment, celebrity appearances, etc, to appear on sponsor’s behalf"
                      name="otherPromotionalOpportunities"
                      checked={
                        state.otherPromotionalOpportunities?.includes(
                          "Securing and administration of entertainment, celebrity appearances, etc, to appear on sponsor’s behalf"
                        )
                          ? true
                          : false
                      }
                      onChange={handleCheckboxChange}
                    />
                    <CheckLabel htmlFor="sponsorsBehalf">
                      Securing and administration of entertainment, celebrity
                      appearances, etc, to appear on sponsor’s behalf
                    </CheckLabel>
                  </Check>
                  <Check>
                    <CheckInput
                      type="checkbox"
                      id="spokesperson"
                      value="Provision by sponsor of spokespersons/people, celebrity appearances, costumed character, etc. for sponsored event."
                      name="otherPromotionalOpportunities"
                      checked={
                        state.otherPromotionalOpportunities?.includes(
                          "Provision by sponsor of spokespersons/people, celebrity appearances, costumed character, etc. for sponsored event."
                        )
                          ? true
                          : false
                      }
                      onChange={handleCheckboxChange}
                    />
                    <CheckLabel htmlFor="spokesperson">
                      Provision by sponsor of spokespersons/people, celebrity
                      appearances, costumed character, etc. for sponsored event.
                    </CheckLabel>
                  </Check>
                  <Check>
                    <CheckInput
                      type="checkbox"
                      id="mediaPrizes"
                      value="Opportunity to provide prizes for media or event promotions."
                      name="otherPromotionalOpportunities"
                      checked={
                        state.otherPromotionalOpportunities?.includes(
                          "Opportunity to provide prizes for media or event promotions."
                        )
                          ? true
                          : false
                      }
                      onChange={handleCheckboxChange}
                    />
                    <CheckLabel htmlFor="mediaPrizes">
                      Opportunity to provide prizes for media or event
                      promotions.
                    </CheckLabel>
                  </Check>
                  <Check>
                    <CheckInput
                      type="checkbox"
                      id="couponing"
                      value="Couponing/advertising on ticket backs."
                      name="otherPromotionalOpportunities"
                      checked={
                        state.otherPromotionalOpportunities?.includes(
                          "Couponing/advertising on ticket backs."
                        )
                          ? true
                          : false
                      }
                      onChange={handleCheckboxChange}
                    />
                    <CheckLabel htmlFor="couponing">
                      Couponing/advertising on ticket backs.
                    </CheckLabel>
                  </Check>
                </CheckboxWrapper>
              </CheckDetails>

              <CheckDetails>
                <CheckSummary onClick={() => setMediaProfile(!mediaProfile)}>
                  Media Profile
                  {mediaProfile ? <BsChevronDown /> : <BsChevronRight />}
                </CheckSummary>
                <CheckboxWrapper>
                  <Check>
                    <CheckInput
                      type="checkbox"
                      id="adsInclusion"
                      value="Inclusion in all print, outdoor, and/or broadcast advertising (logo or name)"
                      name="mediaProfile"
                      checked={
                        state.mediaProfile?.includes(
                          "Inclusion in all print, outdoor, and/or broadcast advertising (logo or name)"
                        )
                          ? true
                          : false
                      }
                      onChange={handleCheckboxChange}
                    />
                    <CheckLabel htmlFor="adsInclusion">
                      Inclusion in all print, outdoor, and/or broadcast
                      advertising (logo or name)
                    </CheckLabel>
                  </Check>
                  <Check>
                    <CheckInput
                      type="checkbox"
                      id="piecesInclusion"
                      value="Inclusion on event promotional pieces (posters, fliers, brochures, buttons, apparel, etc. - logo or name)"
                      name="mediaProfile"
                      checked={
                        state.mediaProfile?.includes(
                          "Inclusion on event promotional pieces (posters, fliers, brochures, buttons, apparel, etc. - logo or name)"
                        )
                          ? true
                          : false
                      }
                      onChange={handleCheckboxChange}
                    />
                    <CheckLabel htmlFor="piecesInclusion">
                      Inclusion on event promotional pieces (posters, fliers,
                      brochures, buttons, apparel, etc. - logo or name)
                    </CheckLabel>
                  </Check>
                  <Check>
                    <CheckInput
                      type="checkbox"
                      id="adTime"
                      value="Ad time during televised event"
                      name="mediaProfile"
                      checked={
                        state.mediaProfile?.includes(
                          "Ad time during televised event"
                        )
                          ? true
                          : false
                      }
                      onChange={handleCheckboxChange}
                    />
                    <CheckLabel htmlFor="adTime">
                      Ad time during televised event
                    </CheckLabel>
                  </Check>
                  <Check>
                    <CheckInput
                      type="checkbox"
                      id="promotionalSchedule"
                      value="Event-driven promotional radio or television schedule (you provide them with part of your advertising)"
                      name="mediaProfile"
                      checked={
                        state.mediaProfile?.includes(
                          "Event-driven promotional radio or television schedule (you provide them with part of your advertising)"
                        )
                          ? true
                          : false
                      }
                      onChange={handleCheckboxChange}
                    />
                    <CheckLabel htmlFor="promotionalSchedule">
                      Event-driven promotional radio or television schedule (you
                      provide them with part of your advertising)
                    </CheckLabel>
                  </Check>
                  <Check>
                    <CheckInput
                      type="checkbox"
                      id="outdoor"
                      value="Event-driven outdoor (billboards, vehicle, public transport)"
                      name="mediaProfile"
                      checked={
                        state.mediaProfile?.includes(
                          "Event-driven outdoor (billboards, vehicle, public transport)"
                        )
                          ? true
                          : false
                      }
                      onChange={handleCheckboxChange}
                    />
                    <CheckLabel htmlFor="outdoor">
                      Event-driven outdoor (billboards, vehicle, public
                      transport)
                    </CheckLabel>
                  </Check>
                  <Check>
                    <CheckInput
                      type="checkbox"
                      id="shareMedia"
                      value="Sponsor/ retailer share media (themed display ads, 30/30 or 15/15 broadcast)"
                      name="mediaProfile"
                      checked={
                        state.mediaProfile?.includes(
                          "Sponsor/ retailer share media (themed display ads, 30/30 or 15/15 broadcast)"
                        )
                          ? true
                          : false
                      }
                      onChange={handleCheckboxChange}
                    />
                    <CheckLabel htmlFor="shareMedia">
                      Sponsor/ retailer share media (themed display ads, 30/30
                      or 15/15 broadcast)
                    </CheckLabel>
                  </Check>
                  <Check>
                    <CheckInput
                      type="checkbox"
                      id="adSpace"
                      value="Ad space in event program, catalog, etc."
                      name="mediaProfile"
                      checked={
                        state.mediaProfile?.includes(
                          "Ad space in event program, catalog, etc."
                        )
                          ? true
                          : false
                      }
                      onChange={handleCheckboxChange}
                    />
                    <CheckLabel htmlFor="adSpace">
                      Ad space in event program, catalog, etc.
                    </CheckLabel>
                  </Check>
                </CheckboxWrapper>
              </CheckDetails>

              <CheckDetails>
                <CheckSummary onClick={() => setResearch(!research)}>
                  Research
                  {research ? <BsChevronDown /> : <BsChevronRight />}
                </CheckSummary>
                <CheckboxWrapper>
                  <Check>
                    <CheckInput
                      type="checkbox"
                      id="researchAccess"
                      value="Access to pre-and/ or post-event research"
                      name="research"
                      checked={
                        state.research?.includes(
                          "Access to pre-and/ or post-event research"
                        )
                          ? true
                          : false
                      }
                      onChange={handleCheckboxChange}
                    />
                    <CheckLabel htmlFor="researchAccess">
                      Access to pre-and/ or post-event research
                    </CheckLabel>
                  </Check>
                  <Check>
                    <CheckInput
                      type="checkbox"
                      id="questions"
                      value="Opportunity to provide sponsorship or industry-oriented questions on event research."
                      name="research"
                      checked={
                        state.research?.includes(
                          "Opportunity to provide sponsorship or industry-oriented questions on event research."
                        )
                          ? true
                          : false
                      }
                      onChange={handleCheckboxChange}
                    />
                    <CheckLabel htmlFor="questions">
                      Opportunity to provide sponsorship or industry-oriented
                      questions on event research.
                    </CheckLabel>
                  </Check>
                </CheckboxWrapper>
              </CheckDetails>

              <CheckDetails>
                <CheckSummary onClick={() => setContra(!contra)}>
                  Contra
                  {contra ? <BsChevronDown /> : <BsChevronRight />}
                </CheckSummary>
                <CheckboxWrapper>
                  <Check>
                    <CheckInput
                      type="checkbox"
                      id="extraProvision"
                      value="Opportunity for sponsor to provide equipment, services, technology, expertise or personnel useful to the success of the event in trade for part of sponsorship fee."
                      name="contra"
                      checked={
                        state.contra?.includes(
                          "Opportunity for sponsor to provide equipment, services, technology, expertise or personnel useful to the success of the event in trade for part of sponsorship fee."
                        )
                          ? true
                          : false
                      }
                      onChange={handleCheckboxChange}
                    />
                    <CheckLabel htmlFor="extraProvision">
                      Opportunity for sponsor to provide equipment, services,
                      technology, expertise or personnel useful to the success
                      of the event in trade for part of sponsorship fee.
                    </CheckLabel>
                  </Check>
                  <Check>
                    <CheckInput
                      type="checkbox"
                      id="mediaValue"
                      value="Opportunity for sponsor to provide media value, in-store/in-house promotion in trade for part of sponsorship fee"
                      name="contra"
                      checked={
                        state.contra?.includes(
                          "Opportunity for sponsor to provide media value, in-store/in-house promotion in trade for part of sponsorship fee"
                        )
                          ? true
                          : false
                      }
                      onChange={handleCheckboxChange}
                    />
                    <CheckLabel htmlFor="mediaValue">
                      Opportunity for sponsor to provide media value,
                      in-store/in-house promotion in trade for part of
                      sponsorship fee
                    </CheckLabel>
                  </Check>
                  <Check>
                    <CheckInput
                      type="checkbox"
                      id="discounts"
                      value="Opportunity for sponsor to provide access to discounted media, travel, printing, or other products or services in trade for part of sponsorship fee."
                      name="contra"
                      checked={
                        state.contra?.includes(
                          "Opportunity for sponsor to provide access to discounted media, travel, printing, or other products or services in trade for part of sponsorship fee."
                        )
                          ? true
                          : false
                      }
                      onChange={handleCheckboxChange}
                    />
                    <CheckLabel htmlFor="discounts">
                      Opportunity for sponsor to provide access to discounted
                      media, travel, printing, or other products or services in
                      trade for part of sponsorship fee.
                    </CheckLabel>
                  </Check>
                </CheckboxWrapper>
              </CheckDetails>

              <CheckDetails>
                <CheckSummary onClick={() => setProduction(!production)}>
                  Production
                  {production ? <BsChevronDown /> : <BsChevronRight />}
                </CheckSummary>
                <CheckboxWrapper>
                  <Check>
                    <CheckInput
                      type="checkbox"
                      id="keyEvents"
                      value="Design and/or production of key sponsor events (hospitality, awards, etc)"
                      name="production"
                      checked={
                        state.production?.includes(
                          "Design and/or production of key sponsor events (hospitality, awards, etc)"
                        )
                          ? true
                          : false
                      }
                      onChange={handleCheckboxChange}
                    />
                    <CheckLabel htmlFor="keyEvents">
                      Design and/or production of key sponsor events
                      (hospitality, awards, etc)
                    </CheckLabel>
                  </Check>
                  <Check>
                    <CheckInput
                      type="checkbox"
                      id="hiring"
                      value="Hiring and/or administration of temporary or contract personnel, services, and vendors for key sponsor events."
                      name="production"
                      checked={
                        state.production?.includes(
                          "Hiring and/or administration of temporary or contract personnel, services, and vendors for key sponsor events."
                        )
                          ? true
                          : false
                      }
                      onChange={handleCheckboxChange}
                    />
                    <CheckLabel htmlFor="hiring">
                      Hiring and/or administration of temporary or contract
                      personnel, services, and vendors for key sponsor events.
                    </CheckLabel>
                  </Check>
                  <Check>
                    <CheckInput
                      type="checkbox"
                      id="logistics"
                      value="Logistical assistance, including technical or creative expertise."
                      name="production"
                      checked={
                        state.production?.includes(
                          "Logistical assistance, including technical or creative expertise."
                        )
                          ? true
                          : false
                      }
                      onChange={handleCheckboxChange}
                    />
                    <CheckLabel htmlFor="logistics">
                      Logistical assistance, including technical or creative
                      expertise.
                    </CheckLabel>
                  </Check>
                </CheckboxWrapper>
              </CheckDetails>

              <CheckDetails>
                <CheckSummary onClick={() => setCauseTieIn(!causeTieIn)}>
                  Cause Tie-in
                  {causeTieIn ? <BsChevronDown /> : <BsChevronRight />}
                </CheckSummary>
                <CheckboxWrapper>
                  <Check>
                    <CheckInput
                      type="checkbox"
                      id="charitableCause"
                      value="Opportunity to involve sponsor’s preferred charitable organization or cause."
                      name="causeTieIn"
                      checked={
                        state.causeTieIn?.includes(
                          "Opportunity to involve sponsor’s preferred charitable organization or cause."
                        )
                          ? true
                          : false
                      }
                      onChange={handleCheckboxChange}
                    />
                    <CheckLabel htmlFor="charitableCause">
                      Opportunity to involve sponsor’s preferred charitable
                      organization or cause.
                    </CheckLabel>
                  </Check>
                  <Check>
                    <CheckInput
                      type="checkbox"
                      id="donation"
                      value="Donation of a percentage of ticket or product sales to charity."
                      name="causeTieIn"
                      checked={
                        state.causeTieIn?.includes(
                          "Donation of a percentage of ticket or product sales to charity."
                        )
                          ? true
                          : false
                      }
                      onChange={handleCheckboxChange}
                    />
                    <CheckLabel htmlFor="donation">
                      Donation of a percentage of ticket or product sales to
                      charity.
                    </CheckLabel>
                  </Check>
                </CheckboxWrapper>
              </CheckDetails>
            </InventorySection>

            <ButtonContainer>
              <AlternativeButton2
                onClick={navigateBack}
                style={{
                  color: "#FF2957",
                  fontWeight: "600",
                  marginRight: "2rem",
                }}
              >
                Back
              </AlternativeButton2>
              <AbsolutePrimaryButton onClick={handleSubmit}>
                Save & Submit
              </AbsolutePrimaryButton>
            </ButtonContainer>
          </BudgetUpload>
        </BudgetSection>
      </BudgetInventoryContainer>
    </>
  );
};

export default Inventory;
