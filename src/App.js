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
<<<<<<< HEAD
import HelpCenter from "./pages/HelpCenter/HelpCenter";

=======
import SignUp from "./auth/signUp/SignUp";
>>>>>>> 955382d4c5239f3b0e9ce56ea0a149899a64667b


// const Events = lazy(() => import("./pages/events/Events"));


function App() {
  return (
    <Suspense fallback={<LoadingScreen />}>
    <>
      <ToastContainer />
      <>
        <Routes>
          <Route path="/" element={<Events />} />
          <Route path="/sponsors" element={<Sponsor/> } />
          <Route path="/vendors" element={<Vendor/> } />
          <Route path="/aboutUs" element={<About/> } />
          <Route path="/contactUs" element={<ContactUs/> }/>
          <Route path="*" element={<NoPage/> }/>
<<<<<<< HEAD
          <Route path="/help" element={<HelpCenter/> }/>
=======
          <Route path="/signup" element={<SignUp/>} />
          
>>>>>>> 955382d4c5239f3b0e9ce56ea0a149899a64667b
        </Routes>
      </>
    </>
  </Suspense>
  );
}

export default App;
