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
    <CardBody>
      <ImageHolder>
        <Image src={props.image} alt={props.eventName} />
      </ImageHolder>

      <CardContentHolder>
        <KBTextXl fontWeight="bold" color="#484848" style={{marginBottom:'2%'}}>{props.eventName}</KBTextXl>
        <KBTextS>{props.eventDescription}</KBTextS>
        <CardInfoHolder>
          <IconInfoHolder>
            <CiClock2 /> 
            <p>{props.eventTime}</p>
          </IconInfoHolder>
          <IconInfoHolder>
            <CiCalendar /> 
            <p>{props.eventDate}</p>
          </IconInfoHolder>
          <IconInfoHolder>
            <CiLocationOn /> 
            <p>{props.eventLocation}</p>
          </IconInfoHolder>
        </CardInfoHolder>
      </CardContentHolder>
    </CardBody>
  );
};

export default Card;
