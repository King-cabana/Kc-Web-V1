import { Routes, Route } from "react-router-dom";
import React, { Suspense, lazy } from "react";
import LoadingScreen from "./LoadingScreen";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import NoPage from "./pages/noPage/NoPage";
import TimeLineEvent from "./userFlows/createEvent/TimeLineEvent";
import Submitted from "./userFlows/createEvent/Submitted";
import EventPlanPreview from "./userFlows/createEvent/eventPlanPreview/EventPlanPreview";
import VerifyEmail from "./auth/signUp/VerifyEmail";
import SignUpSuccess from "./auth/signUp/SignUpSuccess";
import ForgotPassword from "./auth/forgotPassword/ForgotPassword";
import ForgotPasswordOtp from "./auth/forgotPassword/ForgotPasswordOtp";
import ResetPassword from "./auth/signIn/ResetPassword";
import Sidebar from "./userFlows/Dashboard/Sidebar";
import DashboardHome from "./userFlows/pages/DashboardHome";
import GuestContact from "./userFlows/guestRegistration/GuestContact";
import Registered from "./userFlows/guestRegistration/Registered";
import Event from "./userFlows/pages/Event";
import Proposal from "./userFlows/createProposal/Proposal";
import EventHistory from "./userFlows/pages/EventHistory";
import Generated from "./userFlows/createProposal/Generated";
import Inventory from "./userFlows/createProposal/budgetInventory/Inventory";
import FlowBody from "./userFlows/generateProposalFlow/flowBody/FlowBody";
import DefineAudience from "./userFlows/defineAudience/DefineAudience";
import ProposalBuildup from "./userFlows/createProposal/proposalBuildup/ProposalBuildup";
import ProposalPreviewCover from "./userFlows/createProposal/proposalPreview/ProposalPreviewCover";
import ProposalPreviewContent from "./userFlows/createProposal/proposalPreview/ProposalPreviewContent";
import ProposalPreviewA from "./userFlows/createProposal/proposalPreview/ProposalPreviewA";
import ProposalPreviewB from "./userFlows/createProposal/proposalPreview/ProposalPreviewB";
import ProposalPreviewC from "./userFlows/createProposal/proposalPreview/ProposalPreviewC";
import Budget from "./pages/Budget/Budget";
import SingleEventHistory from "./userFlows/eventHistory/components/SingleEventHistory";
import ViewHistoryEvent from "./userFlows/eventHistory/ViewHistoryEvent";
import PreviousEvents from "./userFlows/eventOrganizerProfile/previousEvents/PreviousEvents";
import ViewProposal from "./userFlows/createProposal/viewProposal/ViewProposal";
import ShareViewProposal from "./userFlows/createProposal/viewProposal/ShareViewProposal";
import ProposalGenerated from "./userFlows/generateProposalFlow/proposalGenerated/ProposalGenerated";
import EventHistoryForm from "./userFlows/eventHistory/components/EventHistoryForm";
// import BudgetDraft from "./pages/BudgetDraft";

const EditOrganiserProfile = lazy(() =>
  import("./pages/profile/EditOrganiserProfile/EditOrganiserProfile")
);
const GuestView = lazy(() => import("./userFlows/guestRegistration/GuestView"));
const ViewCompletedEvent = lazy(() =>
  import("./userFlows/eventPlanning/ViewCompletedEvent")
);
const Events = lazy(() => import("./pages/events/Events"));
const Sponsor = lazy(() => import("./pages/sponsor/Sponsor"));
const Vendor = lazy(() => import("./pages/vendor/Vendor"));

const About = lazy(() => import("./pages/about/About"));
const ContactUs = lazy(() => import("./pages/contactUs/ContactUs"));
const HelpCenter = lazy(() => import("./pages/HelpCenter/HelpCenter"));

const SignIn = lazy(() => import("./auth/signIn/SignIn"));
const SignUp = lazy(() => import("./auth/signUp/SignUp"));

const FirstCreateEvent = lazy(() =>
  import("./userFlows/createEvent/FirstCreateEvent")
);

const OrganizerProfilePage = lazy(() =>
  import(
    "./userFlows/eventOrganizerProfile/organizerProfilePage/OrganizerProfilePage"
  )
);

function App() {
  return (
    <Suspense fallback={<LoadingScreen />}>
      <>
        <ToastContainer />
        <Routes>
          <Route path="/" element={<Events />} />
          <Route path="/sponsors" element={<Sponsor />} />
          <Route path="/vendors" element={<Vendor />} />

          <Route path="/signin" element={<SignIn />} />
          <Route path="/signup" element={<SignUp />} />

          <Route path="/aboutUs" element={<About />} />
          <Route path="/contactUs" element={<ContactUs />} />
          <Route path="/help" element={<HelpCenter />} />
          <Route path="*" element={<NoPage />} />

          <Route path="/verifyEmail" element={<VerifyEmail />} />
          <Route path="/signupsuccess" element={<SignUpSuccess />} />
          <Route path="/forgotpassword" element={<ForgotPassword />} />
          <Route
            path="/forgotpassword-otp-verification"
            element={<ForgotPasswordOtp />}
          />
          <Route path="/resetpassword" element={<ResetPassword />} />
          <Route path="/sponsors" element={<Sponsor />} />
          <Route path="/vendors" element={<Vendor />} />
          <Route path="/aboutUs" element={<About />} />
          <Route path="/contactUs" element={<ContactUs />} />
          <Route path="/guestRegistration/:id" element={<GuestView />} />
          <Route
            path="/event/planning/view-completed-event/:id"
            element={<ViewCompletedEvent />}
          />
          <Route
            path="/guestRegistration/contactInformation/:id"
            element={<GuestContact />}
          />
          <Route
            path="/guestRegistration/contactInformation/registered"
            element={<Registered />}
          />
          <Route
            path="/createEvent/eventDetails"
            element={<FirstCreateEvent />}
          />
          <Route
            path="/createEvent/tagsTimelines"
            element={<TimeLineEvent />}
          />
          <Route
            path="/createEvent/eventPlanPreview"
            element={<EventPlanPreview />}
          />
          <Route path="/createEvent/submitted" element={<Submitted />} />
          <Route
            path="/create-proposal/take-inventory"
            element={<Inventory />}
          />
          <Route path="/create-proposal/generated" element={<Generated />} />
          <Route
            path="/dashboard/edit-organiser-profile"
            element={<EditOrganiserProfile />}
          />
          {/* SIDEBAR */}
          <Route
            path="/dashboard"
            element={
              <Sidebar>
                <DashboardHome />
              </Sidebar>
            }
          />
          <Route
            path="/event/planning"
            element={
              <Sidebar>
                <Event />
              </Sidebar>
            }
          />
          <Route
            path="/event/proposal"
            element={
              <Sidebar>
                <Proposal />
              </Sidebar>
            }
          />
          <Route
            path="/event/history"
            element={
              <Sidebar>
                <EventHistory />
              </Sidebar>
            }
          />
          <Route
            path="/organizer-profile/profileName"
            element={<OrganizerProfilePage />}
          />
          <Route
            path="/event/proposal/view-proposal/proposalId"
            element={<ViewProposal />}
          />
          <Route
            path="/view-proposal/proposalId"
            element={<ShareViewProposal />}
          />
          <Route
            path="/profile/previous-event/:id"
            element={<PreviousEvents />}
          />
          <Route
            path="/event/history-component/view-event/eventId"
            element={<SingleEventHistory />}
          />
          <Route
            path="/event/history/view-event/:id"
            element={<ViewHistoryEvent />}
          />
          <Route path="/generateproposal/:id" element={<FlowBody />} />
          <Route path="/defineaudience" element={<DefineAudience />} />
          <Route
            path="/event/proposal/proposalbuildup"
            element={<ProposalBuildup />}
          />
          <Route
            path="/event/proposal/proposalpreview-page1"
            element={<ProposalPreviewCover />}
          />
          <Route
            path="/event/proposal/proposalpreview-page2"
            element={<ProposalPreviewContent />}
          />
          <Route
            path="/event/proposal/proposalpreview-page3"
            element={<ProposalPreviewA />}
          />
          <Route
            path="/event/proposal/proposalpreview-page4"
            element={<ProposalPreviewB />}
          />
          <Route
            path="/event/proposal/proposalpreview-page5"
            element={<ProposalPreviewC />}
          />

          <Route
            path="/createEvent/eventDetails"
            element={<FirstCreateEvent />}
          />
          <Route
            path="/createEvent/tagsTimelines"
            element={<TimeLineEvent />}
          />
          <Route
            path="/createEvent/eventPlanPreview"
            element={<EventPlanPreview />}
          />
          <Route path="/createEvent/submitted" element={<Submitted />} />
          <Route
            path="/dashboard"
            element={
              <Sidebar>
                <DashboardHome />
              </Sidebar>
            }
          />
          <Route path="*" element={<NoPage />} />
          <Route path="/generated-proposal" element={<ProposalGenerated />} />
          <Route path="/event-history" element={<EventHistoryForm />} />

        </Routes>
      </>
    </Suspense>
  );
}

export default App;
