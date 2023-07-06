import React from "react";
import {
  CardBody,
  Image,
  ImageHolder,
  CardContentHolder,
  CardInfoHolder,
  IconInfoHolder,
} from "./CardStyled";
import { CiClock2 } from "react-icons/ci";
import { CiCalendar } from "react-icons/ci";
import { CiLocationOn } from "react-icons/ci";
import { KBTextS, KBTextXl } from "../fonts/Fonts";

const Card = (props) => {
  return (
    <CardBody onClick={props.onClickCard}>
      <ImageHolder height={props.height}>
        <Image src={props.image} alt={props.eventName} />
      </ImageHolder>

      <CardContentHolder height={props.holderHeight}>
        <KBTextXl fontWeight="600" color="#484848" style={{marginBottom:'2%'}}>{props.eventName}</KBTextXl>
        <KBTextS>{props.eventDescription}</KBTextS>
        <CardInfoHolder>
          {props.eventTime && <IconInfoHolder>
            <CiClock2 /> 
            <p>{props.eventTime}</p>
          </IconInfoHolder>}
          
          {props.eventDate &&  <IconInfoHolder>
            <CiCalendar /> 
            <p>{props.eventDate}</p>
          </IconInfoHolder>}

{props.eventLocation && <IconInfoHolder>
            <CiLocationOn /> 
            <p>{props.eventLocation}</p>
          </IconInfoHolder>}
          
        </CardInfoHolder>
      </CardContentHolder>
    </CardBody>
  );
};

export default Card;
