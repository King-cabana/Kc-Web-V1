import React from "react";
import EmptyEventHistory from "../eventHistory/EmptyEventHistory";
import FilledEventHistory from "../eventHistory/FilledEventHistory";

const EventHistory = () => {
  return (
    <>
      {/* <EmptyEventHistory /> */}
      <FilledEventHistory />
    </>
  );
};

export default EventHistory;
