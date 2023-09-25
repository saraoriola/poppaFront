import React from "react";
import {
  Box,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Image,
  Text,
} from "@chakra-ui/react";
import "./PrintEvents.scss";
import eventImg from "../../../assets/images/Imagen y badges.png";
import { useSelector } from "react-redux";

const PrintEvents = () => {
  const { events } = useSelector((state) => state.event);

  return (
    <>
      {events.map((event) => (
        <Card className="card-container" key={event.id}>
          {/* NOTE: Aquí iría la url del banner */}
          <CardHeader className="card-header-container">
            <Image className="card-image" src={eventImg} alt="Dan Abramov" />
          </CardHeader>
          <CardBody className="card-body-container">
            <Text>{event.title}</Text>
            {/* <Text>{event.description}</Text> */}
          </CardBody>
          <CardFooter className="card-footer-container">
            <Box>{event.dateTime}</Box>
            {/* Aquí de momento dejo la duración del evento ya que en dateTime supongo que está la hora */}
            <Box>{event.duration_min}</Box>
            <Box>EDEM</Box>
          </CardFooter>
        </Card>
      ))}
    </>
  );
};

export default PrintEvents;
