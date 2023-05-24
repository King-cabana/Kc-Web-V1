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
import ForgotPasswordOtp from "./auth/forgotPassword/ForgotPasswordOtp"
import ResetPassword from "./auth/signIn/ResetPassword";
import Sidebar from "./userFlows/Dashboard/Sidebar";
import DashboardHome from "./userFlows/pages/DashboardHome";
import EditOrganiserProfile from "./pages/profile/EditOrganiserProfile/EditOrganiserProfile";


const Events = lazy(() => import("./pages/events/Events"));
const Sponsor = lazy(() => import("./pages/sponsor/Sponsor"))
const Vendor = lazy(() => import("./pages/vendor/Vendor"))

const About = lazy (() => import("./pages/about/About"));
const ContactUs = lazy (() => import("./pages/contactUs/ContactUs"));
const HelpCenter = lazy (() => import("./pages/HelpCenter/HelpCenter"));

const SignIn = lazy(() => import("./auth/signIn/SignIn"));
const SignUp = lazy(() => import("./auth/signUp/SignUp"));

const FirstCreateEvent = lazy(() => import("./userFlows/createEvent/FirstCreateEvent"));

function App() {
  return (
    <Suspense fallback={<LoadingScreen />}>
      <>
        <ToastContainer />
        <Routes>
          <Route path="/" element={<Events />} />
          <Route path="/sponsors" element={<Sponsor/> } />
          <Route path="/vendors" element={<Vendor/> } />
          
          <Route path="/signin" element={<SignIn/>} />
          <Route path="/signup" element={<SignUp/>} />

          
          <Route path="/aboutUs" element={<About/> } />
          <Route path="/contactUs" element={<ContactUs/> }/>
          <Route path="/help" element={<HelpCenter/> }/>
          <Route path="*" element={<NoPage/> }/>
       
          <Route path="/verifyEmail" element={<VerifyEmail/>} />
          <Route path="/signupsuccess" element={<SignUpSuccess/>} />
          <Route path="/forgotpassword" element={<ForgotPassword/> } />
          <Route path="/forgotpassword-otp-verification" element={<ForgotPasswordOtp/> }/>
          <Route path="/resetpassword" element={<ResetPassword/> } />
          <Route path="/sponsors" element={<Sponsor />} />
          <Route path="/vendors" element={<Vendor />} />
          <Route path="/aboutUs" element={<About />} />
          <Route path="/contactUs" element={<ContactUs />} />
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
            path="/dashboard/edit-organiser-profile"
            element={<EditOrganiserProfile />}
          />

          <Route
            path="/dashboard"
            element={
              <Sidebar>
                <DashboardHome />
              </Sidebar>
            }
          />
          <Route path="*" element={<NoPage />} />
        </Routes>
      </>
    </Suspense>
  );
}

export default App;
