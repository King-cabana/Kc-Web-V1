import React from "react";
import ReactLoading from "react-loading";

const LoadingScreen = (bgTransparent = false) => {
  return (
    <div
      style={{
        width: "100%",
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: bgTransparent ? "rgba(0,0,0,.1)" : null,
      }}
    >
      <ReactLoading
        type="spin"
        color="#FF2957"
        height={100}
        width={50}
      ></ReactLoading>
    </div>
  );
};

export default LoadingScreen;
