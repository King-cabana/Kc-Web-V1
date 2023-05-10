import { Routes, Route } from "react-router-dom";
import React, { Suspense, lazy } from "react";
import LoadingScreen from "./LoadingScreen";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Events from "./pages/events/Events"


// const Events = lazy(() => import("./pages/events/Events"));


function App() {
  return (
    <Suspense fallback={<LoadingScreen />}>
    <>
      <ToastContainer />
      <>
        <Routes>
          <Route path="/" element={<Events />} />
        </Routes>
      </>
    </>
  </Suspense>
  );
}

export default App;
