import { Routes, Route } from "react-router-dom";
import React, { Suspense, lazy } from "react";
import LoadingScreen from "./LoadingScreen";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Events from "./pages/events/Events";
import Sponsor from "./pages/sponsor/Sponsor";
import Vendor from "./pages/vendor/Vendor";
import NoPage from "./pages/noPage/NoPage";
import About from "./pages/about/About";
import ContactUs from "./pages/contactUs/ContactUs";
import FirstCreateEvent from "./userFlows/createEvent/FirstCreateEvent";
import TimeLineEvent from "./userFlows/createEvent/TimeLineEvent";
import Submitted from "./userFlows/createEvent/Submitted";
import EventPlanPreview from "./userFlows/createEvent/eventPlanPreview/EventPlanPreview";
import SignUp from "./auth/signUp/SignUp";
import VerifyEmail from "./auth/signUp/VerifyEmail";
import SignUpSuccess from "./auth/signUp/SignUpSuccess";
import SignIn from "./auth/signIn/SignIn";
import ForgotPassword from "./auth/forgotPassword/ForgotPassword";
import ResetPassword from "./auth/signIn/ResetPassword";
import Sidebar from "./userFlows/Dashboard/Sidebar";
import DashboardHome from "./userFlows/pages/DashboardHome";
import HelpCenter from "./pages/HelpCenter/HelpCenter";

// const Events = lazy(() => import("./pages/events/Events"));

function App() {
  return (
    <Suspense fallback={<LoadingScreen />}>
      <>
        <ToastContainer />
        <Routes>
          <Route path="/" element={<Events />} />
          <Route path="/signin" element={<SignIn/>} />

          <Route path="/sponsors" element={<Sponsor/> } />
          <Route path="/vendors" element={<Vendor/> } />
          <Route path="/aboutUs" element={<About/> } />
          <Route path="/contactUs" element={<ContactUs/> }/>
          <Route path="*" element={<NoPage/> }/>
          <Route path="/help" element={<HelpCenter/> }/>
          <Route path="/signin" element={<SignIn/>} />
          <Route path="/signup" element={<SignUp/>} />
          <Route path="/verifyEmail" element={<VerifyEmail/>} />
          <Route path="/signupsuccess" element={<SignUpSuccess/>} />
          <Route path="/forgotpassword" element={<ForgotPassword/> } />
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
