import React, { useState } from "react";
import { useSelector } from "react-redux";
import {
  Box,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Image,
  Input,
  Text,
} from "@chakra-ui/react";

const PrintEvents = ({ results }) => {
  return results.map((event) => (
    <Card key={event.id}>
      <CardHeader>{event.banner}</CardHeader>
      <CardBody>
        {/* NOTE: Aquí iría la url del banner */}
        <Image src="https://bit.ly/dan-abramov" alt="Dan Abramov" />
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
  ));
};

export default PrintEvents;
