import {
  Box,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Image,
  Text,
} from "@chakra-ui/react";
import React from "react";
import { useSelector } from "react-redux";

const PrintEvents = () => {
  const { events } = useSelector((state) => state.event);

  const printEvents = events.map((event) => {
    return (
      <Card key={event.id}>
        <CardHeader>{event.banner}</CardHeader>
        <CardBody>
          {/* NOTE: Aquí iría la url del banner */}
          <Image src="https://bit.ly/dan-abramov" alt="Dan Abramov" />
          <Text>{event.description}</Text>
        </CardBody>
        <CardFooter>
          <Box>{event.dateTime}</Box>
          {/* Aquí de momento dejo la duración del evento ya que en dateTime supongo que está la hora */}
          <Box>{event.duration_min}</Box>
          <Box>{event.dateTime}</Box>
        </CardFooter>
      </Card>
    );
  });

  return <Box>{printEvents}</Box>;
};

export default PrintEvents;
