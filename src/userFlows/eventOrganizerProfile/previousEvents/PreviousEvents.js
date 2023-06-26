import TopBar from "../../../components/topBar/TopBar";
import SingleEventHistory from "../../eventHistory/SingleEventHistory";

const PreviousEvents = () => {
  return (
    <>
      <TopBar marginBottom="-1rem" />
      <SingleEventHistory />
    </>
  );
};

export default PreviousEvents;
