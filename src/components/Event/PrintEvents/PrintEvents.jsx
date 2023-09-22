// En PrintEvents.js

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

const PrintEvents = ({ results }) => {
  return (
    <div>
      {results.map((event) => (
        <Card key={event.id}>
          {/* NOTE: Aquí iría la url del banner */}
          <Image src="https://bit.ly/dan-abramov" alt="Dan Abramov" />
          <CardBody>
            <Text>{event.title}</Text>
            <Text>{event.description}</Text>
          </CardBody>
          <CardFooter>
            <Box>{event.dateTime}</Box>
            {/* Aquí de momento dejo la duración del evento ya que en dateTime supongo que está la hora */}
            <Box>{event.duration_min}</Box>
            <Box>{event.dateTime}</Box>
          </CardFooter>
        </Card>
      ))}
    </div>
  );
};

export default PrintEvents;
