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
import SignUp from "./auth/signUp/SignUp";
import VerifyEmail from "./auth/signUp/VerifyEmail";
import SignUpSuccess from "./auth/signUp/SignUpSuccess";
import SignIn from "./auth/signIn/SignIn";


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
          <Route path="/login" element={<SignIn/>} />
          <Route path="/signup" element={<SignUp/>} />
          <Route path="/verifyEmail" element={<VerifyEmail/>} />
          <Route path="/signupsuccess" element={<SignUpSuccess/>} />
          
        </Routes>
      </>
    </>
  </Suspense>
  );
}

export default App;
