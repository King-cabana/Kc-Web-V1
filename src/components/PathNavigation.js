import { BsChevronRight } from "react-icons/bs";
import { Txt, WelcomeHeader } from "../userFlows/emptyEvent/EmptyEventStyled";

const PathNavigation = ({
  txt1 = "Event",
  txt2,
  txt3,
  onClickTxt1,
  onClickTxt2,
  onClickTxt3,
}) => {
  return (
    <WelcomeHeader margintop="3rem" style={{ marginBottom: "1.5rem" }}>
      <Txt onClick={onClickTxt1}>{txt1}</Txt>
      <BsChevronRight style={{ marginRight: "0.5rem" }} />
      {txt2 && (
        <>
          <Txt fontWeight="400" onClick={onClickTxt2}>
            {txt2}
          </Txt>
          <BsChevronRight style={{ marginRight: "0.5rem" }} />
        </>
      )}
      {txt3 && (
        <Txt onClick={onClickTxt3} fontWeight="400" color="#FF2957">
          {txt3}
        </Txt>
      )}
    </WelcomeHeader>
  );
};

export default PathNavigation;
